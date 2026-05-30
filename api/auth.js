const crypto = require("crypto");

const COOKIE_NAME = "hr_lounge_access";
const SESSION_TTL_SECONDS = 7 * 24 * 60 * 60;
const TOKEN_KIND = "hr-lounge-site-access";

function sendJson(response, statusCode, payload, headers = {}) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  Object.entries(headers).forEach(([key, value]) => response.setHeader(key, value));
  response.end(JSON.stringify(payload));
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error("요청 데이터가 너무 큽니다."));
        request.destroy();
      }
    });
    request.on("end", () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(new Error("JSON 요청 형식이 올바르지 않습니다."));
      }
    });
    request.on("error", reject);
  });
}

function base64UrlEncode(value) {
  return Buffer.from(value)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function base64UrlDecode(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  return Buffer.from(padded, "base64").toString("utf8");
}

function getSessionSecret() {
  return process.env.HR_LOUNGE_SESSION_SECRET || process.env.ADMIN_SESSION_SECRET || "";
}

function getGoogleClientId() {
  return process.env.HR_LOUNGE_GOOGLE_CLIENT_ID || process.env.GOOGLE_CLIENT_ID || "";
}

function getAllowedDomain() {
  return String(process.env.HR_LOUNGE_ALLOWED_DOMAIN || "solmedix.com")
    .trim()
    .replace(/^@+/, "")
    .toLowerCase();
}

function signPayload(payload, secret) {
  return crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function createAccessToken(user) {
  const secret = getSessionSecret();
  if (!secret) {
    throw new Error("HR_LOUNGE_SESSION_SECRET 환경변수가 필요합니다.");
  }

  const payload = base64UrlEncode(
    JSON.stringify({
      kind: TOKEN_KIND,
      exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
      user,
    })
  );
  return `${payload}.${signPayload(payload, secret)}`;
}

function verifyAccessToken(token) {
  const secret = getSessionSecret();
  if (!secret || typeof token !== "string") {
    return null;
  }

  const [payload, signature] = token.split(".");
  if (!payload || !signature) {
    return null;
  }

  const expected = signPayload(payload, secret);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);
  if (actualBuffer.length !== expectedBuffer.length || !crypto.timingSafeEqual(actualBuffer, expectedBuffer)) {
    return null;
  }

  try {
    const session = JSON.parse(base64UrlDecode(payload));
    if (session.kind !== TOKEN_KIND || !session.exp || session.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return session;
  } catch (error) {
    return null;
  }
}

function parseCookies(request) {
  return String(request.headers.cookie || "")
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((cookies, part) => {
      const separatorIndex = part.indexOf("=");
      if (separatorIndex === -1) {
        return cookies;
      }
      const key = decodeURIComponent(part.slice(0, separatorIndex).trim());
      const value = decodeURIComponent(part.slice(separatorIndex + 1).trim());
      cookies[key] = value;
      return cookies;
    }, {});
}

function buildCookie(token, maxAge = SESSION_TTL_SECONDS) {
  const secure = process.env.VERCEL ? "; Secure" : "";
  return `${COOKIE_NAME}=${encodeURIComponent(token)}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${secure}`;
}

function clearCookie() {
  const secure = process.env.VERCEL ? "; Secure" : "";
  return `${COOKIE_NAME}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure}`;
}

async function verifyGoogleCredential(credential) {
  const clientId = getGoogleClientId();
  const allowedDomain = getAllowedDomain();

  if (!clientId) {
    const error = new Error("HR_LOUNGE_GOOGLE_CLIENT_ID 환경변수가 필요합니다.");
    error.statusCode = 503;
    throw error;
  }

  const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`, {
    headers: { Accept: "application/json" },
  });
  const tokenInfo = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error("Google 로그인 토큰을 확인할 수 없습니다.");
    error.statusCode = 401;
    throw error;
  }

  const issuer = String(tokenInfo.iss || "");
  const email = String(tokenInfo.email || "").trim().toLowerCase();
  const hostedDomain = String(tokenInfo.hd || "").trim().toLowerCase();
  const emailVerified = tokenInfo.email_verified === true || tokenInfo.email_verified === "true";

  if (!["accounts.google.com", "https://accounts.google.com"].includes(issuer)) {
    const error = new Error("허용되지 않은 Google 토큰 발급자입니다.");
    error.statusCode = 401;
    throw error;
  }
  if (tokenInfo.aud !== clientId) {
    const error = new Error("이 HR Lounge에 발급된 로그인 토큰이 아닙니다.");
    error.statusCode = 401;
    throw error;
  }
  if (!emailVerified || !email.endsWith(`@${allowedDomain}`) || hostedDomain !== allowedDomain) {
    const error = new Error(`@${allowedDomain} Google Workspace 계정만 접속할 수 있습니다.`);
    error.statusCode = 403;
    throw error;
  }

  return {
    email,
    name: tokenInfo.name || email.split("@")[0],
    picture: tokenInfo.picture || "",
    hd: hostedDomain,
    role: "employee",
  };
}

function getCurrentSession(request) {
  const token = parseCookies(request)[COOKIE_NAME];
  return verifyAccessToken(token || "");
}

async function handleConfig(request, response) {
  const session = getCurrentSession(request);
  sendJson(response, 200, {
    ok: true,
    configured: Boolean(getGoogleClientId() && getSessionSecret()),
    authenticated: Boolean(session?.user),
    clientId: getGoogleClientId(),
    allowedDomain: getAllowedDomain(),
    user: session?.user || null,
  });
}

async function handleLogin(body, response) {
  const credential = String(body.credential || "");
  if (!credential) {
    sendJson(response, 400, { error: "Google 로그인 응답이 없습니다." });
    return;
  }

  const user = await verifyGoogleCredential(credential);
  const token = createAccessToken(user);
  sendJson(
    response,
    200,
    {
      ok: true,
      user,
      expiresIn: SESSION_TTL_SECONDS,
    },
    {
      "Set-Cookie": buildCookie(token),
      "Cache-Control": "no-store",
    }
  );
}

async function handleLogout(response) {
  sendJson(
    response,
    200,
    { ok: true },
    {
      "Set-Cookie": clearCookie(),
      "Cache-Control": "no-store",
    }
  );
}

module.exports = async function handler(request, response) {
  if (request.method === "GET") {
    await handleConfig(request, response);
    return;
  }

  if (request.method !== "POST") {
    response.setHeader("Allow", "GET, POST");
    sendJson(response, 405, { error: "지원하지 않는 요청 방식입니다." });
    return;
  }

  try {
    const body = await readJsonBody(request);
    if (body.action === "login") {
      await handleLogin(body, response);
      return;
    }
    if (body.action === "logout") {
      await handleLogout(response);
      return;
    }
    sendJson(response, 400, { error: "지원하지 않는 작업입니다." });
  } catch (error) {
    sendJson(response, error.statusCode && error.statusCode < 500 ? error.statusCode : 500, {
      error: error.message || "인증 처리 중 오류가 발생했습니다.",
    });
  }
};
