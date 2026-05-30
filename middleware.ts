// @ts-nocheck
import { next } from "@vercel/functions";

const COOKIE_NAME = "hr_lounge_access";
const TOKEN_KIND = "hr-lounge-site-access";
const LOGIN_PATH = "/login.html";
const PUBLIC_PATHS = new Set([
  LOGIN_PATH,
  "/logout.html",
  "/api/auth",
  "/assets/auth-access-bg.jpg",
  "/assets/hr-office-bg.jpg",
  "/assets/solmedix-logo.png",
  "/favicon.ico",
]);

function getAllowedDomain() {
  return String(process.env.HR_LOUNGE_ALLOWED_DOMAIN || "solmedix.com")
    .trim()
    .replace(/^@+/, "")
    .toLowerCase();
}

function normalizeEmail(value) {
  return String(value || "").trim().toLowerCase();
}

function getAllowedEmails() {
  return String(process.env.HR_LOUNGE_ALLOWED_EMAILS || process.env.HR_LOUNGE_APPROVED_EMAILS || "")
    .split(/[\s,;]+/)
    .map(normalizeEmail)
    .filter((email, index, emails) => email.includes("@") && emails.indexOf(email) === index);
}

function isAllowedUserEmail(email, hostedDomain) {
  const allowedDomain = getAllowedDomain();
  const normalizedEmail = normalizeEmail(email);
  const normalizedHostedDomain = String(hostedDomain || "")
    .trim()
    .replace(/^@+/, "")
    .toLowerCase();
  const isWorkspaceUser =
    normalizedEmail.endsWith(`@${allowedDomain}`) && normalizedHostedDomain === allowedDomain;
  return Boolean(normalizedEmail && (isWorkspaceUser || getAllowedEmails().includes(normalizedEmail)));
}

function getSessionSecret() {
  return process.env.HR_LOUNGE_SESSION_SECRET || process.env.ADMIN_SESSION_SECRET || "";
}

function parseCookies(header) {
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

function base64UrlToBytes(value) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
  const binary = atob(base64);
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}

function bytesToBase64Url(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function safeEqual(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

async function signPayload(payload, secret) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return bytesToBase64Url(new Uint8Array(signature));
}

async function verifyAccessToken(token) {
  const secret = getSessionSecret();
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
    const session = JSON.parse(new TextDecoder().decode(base64UrlToBytes(payload)));
    const email = String(session?.user?.email || "").toLowerCase();
    const hostedDomain = String(session?.user?.hd || "").toLowerCase();
    if (
      session.kind !== TOKEN_KIND ||
      !session.exp ||
      session.exp < Math.floor(Date.now() / 1000) ||
      !isAllowedUserEmail(email, hostedDomain)
    ) {
      return null;
    }
    return session;
  } catch (error) {
    return null;
  }
}

function isPublicPath(pathname) {
  return PUBLIC_PATHS.has(pathname) || pathname.startsWith("/api/auth/");
}

function redirectToLogin(request) {
  const requestUrl = new URL(request.url);
  const loginUrl = new URL(LOGIN_PATH, request.url);
  loginUrl.searchParams.set("next", `${requestUrl.pathname}${requestUrl.search}`);
  return Response.redirect(loginUrl, 302);
}

export default async function middleware(request) {
  const url = new URL(request.url);
  if (isPublicPath(url.pathname)) {
    return next();
  }

  const token = parseCookies(request.headers.get("cookie"))[COOKIE_NAME];
  const session = await verifyAccessToken(token || "");
  if (session?.user) {
    return next();
  }

  return redirectToLogin(request);
}

export const config = {
  runtime: "edge",
};
