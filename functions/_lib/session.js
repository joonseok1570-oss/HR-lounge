export const SITE_COOKIE_NAME = "hr_lounge_access";
export const SITE_TOKEN_KIND = "hr-lounge-site-access";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export function getEnv(env, names, fallback = "") {
  const keys = Array.isArray(names) ? names : [names];
  for (const key of keys) {
    const value = env?.[key];
    if (value !== undefined && value !== null && String(value).length) {
      return String(value);
    }
  }
  return fallback;
}

export function getSessionSecret(env) {
  return getEnv(env, ["HR_LOUNGE_SESSION_SECRET", "ADMIN_SESSION_SECRET"]);
}

export function getAllowedDomain(env) {
  return getEnv(env, "HR_LOUNGE_ALLOWED_DOMAIN", "solmedix.com")
    .trim()
    .replace(/^@+/, "")
    .toLowerCase();
}

export function jsonResponse(payload, status = 200, headers = {}) {
  const responseHeaders = new Headers(headers);
  responseHeaders.set("Content-Type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(payload), {
    status,
    headers: responseHeaders,
  });
}

export async function readJsonBody(request, maxBytes = 1024 * 1024) {
  const text = await request.text();
  if (encoder.encode(text).byteLength > maxBytes) {
    const error = new Error("Request body is too large.");
    error.statusCode = 413;
    throw error;
  }
  if (!text.trim()) {
    return {};
  }
  try {
    return JSON.parse(text);
  } catch (error) {
    const invalidJson = new Error("Request body must be valid JSON.");
    invalidJson.statusCode = 400;
    throw invalidJson;
  }
}

export function bytesToBase64(bytes) {
  let binary = "";
  const chunkSize = 0x8000;
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.slice(index, index + chunkSize));
  }
  return btoa(binary);
}

export function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

export function bytesToBase64Url(bytes) {
  return bytesToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function base64UrlToBytes(value) {
  const padded = String(value || "")
    .replace(/-/g, "+")
    .replace(/_/g, "/")
    .padEnd(Math.ceil(String(value || "").length / 4) * 4, "=");
  return base64ToBytes(padded);
}

export function stringToBase64Url(value) {
  return bytesToBase64Url(encoder.encode(value));
}

export function base64UrlToString(value) {
  return decoder.decode(base64UrlToBytes(value));
}

export function parseCookies(header) {
  return String(header || "")
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

export function safeEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

export async function signPayload(payload, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return bytesToBase64Url(new Uint8Array(signature));
}

export async function createSignedToken(session, secret) {
  if (!secret) {
    throw new Error("HR_LOUNGE_SESSION_SECRET is required.");
  }
  const payload = stringToBase64Url(JSON.stringify(session));
  return `${payload}.${await signPayload(payload, secret)}`;
}

export async function verifySignedToken(token, secret) {
  if (!secret || typeof token !== "string") {
    return null;
  }

  const [payload, signature] = token.split(".");
  if (!payload || !signature) {
    return null;
  }

  const expected = await signPayload(payload, secret);
  if (!safeEqual(signature, expected)) {
    return null;
  }

  try {
    const session = JSON.parse(base64UrlToString(payload));
    if (!session.exp || session.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return session;
  } catch (error) {
    return null;
  }
}

export function buildCookie(request, name, value, maxAge) {
  const isHttps = new URL(request.url).protocol === "https:";
  const secure = isHttps ? "; Secure" : "";
  return `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; HttpOnly; SameSite=Lax${secure}`;
}

export function clearCookie(request, name) {
  return buildCookie(request, name, "", 0);
}
