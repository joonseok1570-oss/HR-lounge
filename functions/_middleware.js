import {
  SITE_COOKIE_NAME,
  SITE_TOKEN_KIND,
  getSessionSecret,
  isAllowedUserEmail,
  jsonResponse,
  parseCookies,
  verifySignedToken,
} from "./_lib/session.js";

const LOGIN_PATH = "/login";
const PUBLIC_PATHS = new Set([
  LOGIN_PATH,
  "/login.html",
  "/logout",
  "/logout.html",
  "/api/auth",
  "/assets/auth-access-bg.jpg",
  "/assets/hr-office-bg.jpg",
  "/assets/solmedix-logo.png",
  "/favicon.ico",
]);

function isPublicPath(pathname) {
  return PUBLIC_PATHS.has(pathname) || pathname.startsWith("/api/auth/") || pathname.startsWith("/cdn-cgi/");
}

function redirectToLogin(request) {
  const requestUrl = new URL(request.url);
  const loginUrl = new URL(LOGIN_PATH, request.url);
  loginUrl.searchParams.set("next", `${requestUrl.pathname}${requestUrl.search}`);
  return Response.redirect(loginUrl, 302);
}

function isValidSiteSession(session, env) {
  return session?.kind === SITE_TOKEN_KIND && isAllowedUserEmail(session?.user?.email, session?.user?.hd, env);
}

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (request.method === "OPTIONS" || isPublicPath(url.pathname)) {
    return context.next();
  }

  const token = parseCookies(request.headers.get("Cookie"))[SITE_COOKIE_NAME];
  const session = await verifySignedToken(token || "", getSessionSecret(env));
  if (isValidSiteSession(session, env)) {
    return context.next();
  }

  if (url.pathname.startsWith("/api/")) {
    return jsonResponse({ error: "Company Google sign-in or approved account is required." }, 401, {
      "Cache-Control": "no-store",
    });
  }

  return redirectToLogin(request);
}
