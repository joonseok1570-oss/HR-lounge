import {
  SITE_COOKIE_NAME,
  SITE_TOKEN_KIND,
  buildCookie,
  clearCookie,
  createSignedToken,
  getAllowedEmails,
  getAllowedDomain,
  getEnv,
  getSessionSecret,
  isAllowedUserEmail,
  jsonResponse,
  parseCookies,
  readJsonBody,
  verifySignedToken,
} from "../_lib/session.js";

const SESSION_TTL_SECONDS = 7 * 24 * 60 * 60;

function getGoogleClientId(env) {
  return getEnv(env, ["HR_LOUNGE_GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_ID"]);
}

function getCurrentSession(request, env) {
  const token = parseCookies(request.headers.get("Cookie"))[SITE_COOKIE_NAME];
  return verifySignedToken(token || "", getSessionSecret(env));
}

function isValidCurrentSession(session, env) {
  return session?.kind === SITE_TOKEN_KIND && isAllowedUserEmail(session?.user?.email, session?.user?.hd, env);
}

async function verifyGoogleCredential(credential, env) {
  const clientId = getGoogleClientId(env);
  const allowedDomain = getAllowedDomain(env);

  if (!clientId) {
    const error = new Error("HR_LOUNGE_GOOGLE_CLIENT_ID is required.");
    error.statusCode = 503;
    throw error;
  }

  const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`, {
    headers: { Accept: "application/json" },
  });
  const tokenInfo = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error("Google sign-in token could not be verified.");
    error.statusCode = 401;
    throw error;
  }

  const issuer = String(tokenInfo.iss || "");
  const email = String(tokenInfo.email || "").trim().toLowerCase();
  const hostedDomain = String(tokenInfo.hd || "").trim().toLowerCase();
  const emailVerified = tokenInfo.email_verified === true || tokenInfo.email_verified === "true";

  if (!["accounts.google.com", "https://accounts.google.com"].includes(issuer)) {
    const error = new Error("Unsupported Google token issuer.");
    error.statusCode = 401;
    throw error;
  }
  if (tokenInfo.aud !== clientId) {
    const error = new Error("This Google token was not issued for HR Lounge.");
    error.statusCode = 401;
    throw error;
  }
  if (!emailVerified || !isAllowedUserEmail(email, hostedDomain, env)) {
    const error = new Error(`Only @${allowedDomain} Google Workspace accounts or approved emails can access HR Lounge.`);
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

async function handleConfig(request, env) {
  const session = await getCurrentSession(request, env);
  const validSession = isValidCurrentSession(session, env);
  return jsonResponse(
    {
      ok: true,
      configured: Boolean(getGoogleClientId(env) && getSessionSecret(env)),
      authenticated: validSession,
      clientId: getGoogleClientId(env),
      allowedDomain: getAllowedDomain(env),
      approvedEmailAccess: getAllowedEmails(env).length > 0,
      approvedEmailCount: getAllowedEmails(env).length,
      user: validSession ? session.user : null,
    },
    200,
    { "Cache-Control": "no-store" }
  );
}

async function handleLogin(request, env, body) {
  const credential = String(body.credential || "");
  if (!credential) {
    return jsonResponse({ error: "Google sign-in response is missing." }, 400, {
      "Cache-Control": "no-store",
    });
  }

  const user = await verifyGoogleCredential(credential, env);
  const token = await createSignedToken(
    {
      kind: SITE_TOKEN_KIND,
      exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
      user,
    },
    getSessionSecret(env)
  );

  return jsonResponse(
    {
      ok: true,
      user,
      expiresIn: SESSION_TTL_SECONDS,
    },
    200,
    {
      "Set-Cookie": buildCookie(request, SITE_COOKIE_NAME, token, SESSION_TTL_SECONDS),
      "Cache-Control": "no-store",
    }
  );
}

function handleLogout(request) {
  return jsonResponse(
    { ok: true },
    200,
    {
      "Set-Cookie": clearCookie(request, SITE_COOKIE_NAME),
      "Cache-Control": "no-store",
    }
  );
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === "GET") {
    return handleConfig(request, env);
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405, {
      Allow: "GET, POST",
      "Cache-Control": "no-store",
    });
  }

  try {
    const body = await readJsonBody(request);
    if (body.action === "login") {
      return await handleLogin(request, env, body);
    }
    if (body.action === "logout") {
      return handleLogout(request);
    }
    return jsonResponse({ error: "Unsupported action." }, 400, {
      "Cache-Control": "no-store",
    });
  } catch (error) {
    const status = error.statusCode && error.statusCode < 500 ? error.statusCode : 500;
    return jsonResponse(
      { error: error.message || "Authentication request failed." },
      status,
      { "Cache-Control": "no-store" }
    );
  }
}
