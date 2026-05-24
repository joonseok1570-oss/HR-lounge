const crypto = require("crypto");

const DEFAULT_DATA_PATH = "blog-data.json";
const DEFAULT_BRANCH = "main";
const SESSION_TTL_SECONDS = 6 * 60 * 60;

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 8 * 1024 * 1024) {
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

function getAdminPassword() {
  return process.env.HR_LOUNGE_ADMIN_PASSWORD || process.env.ADMIN_PASSWORD || "";
}

function getSessionSecret() {
  return process.env.HR_LOUNGE_SESSION_SECRET || process.env.ADMIN_SESSION_SECRET || "";
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

function createSessionToken() {
  const secret = getSessionSecret();
  if (!secret) {
    throw new Error("HR_LOUNGE_SESSION_SECRET 환경변수가 필요합니다.");
  }

  const payload = base64UrlEncode(
    JSON.stringify({
      exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
      user: {
        email: "admin@hr-lounge.local",
        name: "관리자",
        role: "admin",
      },
    })
  );
  return `${payload}.${signPayload(payload, secret)}`;
}

function verifySessionToken(token) {
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
    if (!session.exp || session.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return session;
  } catch (error) {
    return null;
  }
}

function getGitHubConfig() {
  return {
    token: process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "",
    owner: process.env.GITHUB_OWNER || process.env.VERCEL_GIT_REPO_OWNER || "",
    repo: process.env.GITHUB_REPO || process.env.VERCEL_GIT_REPO_SLUG || "",
    branch: process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || DEFAULT_BRANCH,
    path: process.env.GITHUB_DATA_PATH || DEFAULT_DATA_PATH,
    committerName: process.env.GITHUB_COMMITTER_NAME || "HR Lounge Bot",
    committerEmail: process.env.GITHUB_COMMITTER_EMAIL || "hr-lounge-bot@example.com",
  };
}

function assertGitHubConfig(config) {
  const missing = [];
  if (!config.token) missing.push("GITHUB_TOKEN");
  if (!config.owner) missing.push("GITHUB_OWNER");
  if (!config.repo) missing.push("GITHUB_REPO");
  if (missing.length) {
    throw new Error(`${missing.join(", ")} 환경변수가 필요합니다.`);
  }
}

async function requestGitHub(url, options, config) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
      "User-Agent": "hr-lounge-vercel-api",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const message = data?.message || `GitHub API 오류 (${response.status})`;
    const error = new Error(message);
    error.statusCode = response.status;
    throw error;
  }
  return data;
}

async function getCurrentFile(config) {
  const encodedPath = config.path.split("/").map(encodeURIComponent).join("/");
  const url = `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(
    config.repo
  )}/contents/${encodedPath}?ref=${encodeURIComponent(config.branch)}`;

  try {
    return await requestGitHub(url, { method: "GET" }, config);
  } catch (error) {
    if (error.statusCode === 404) {
      return null;
    }
    throw error;
  }
}

function normalizeStateForFile(state) {
  if (!state || typeof state !== "object" || !Array.isArray(state.posts)) {
    throw new Error("저장할 블로그 데이터 형식이 올바르지 않습니다.");
  }
  return {
    ...state,
    updatedAt: new Date().toISOString(),
  };
}

async function saveBlogData(state) {
  const config = getGitHubConfig();
  assertGitHubConfig(config);

  const normalizedState = normalizeStateForFile(state);
  const currentFile = await getCurrentFile(config);
  const encodedPath = config.path.split("/").map(encodeURIComponent).join("/");
  const url = `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(
    config.repo
  )}/contents/${encodedPath}`;
  const content = Buffer.from(`${JSON.stringify(normalizedState, null, 2)}\n`, "utf8").toString("base64");
  const now = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");

  const payload = {
    message: `Update HR Lounge blog data (${now})`,
    content,
    branch: config.branch,
    committer: {
      name: config.committerName,
      email: config.committerEmail,
    },
  };

  if (currentFile?.sha) {
    payload.sha = currentFile.sha;
  }

  const result = await requestGitHub(url, { method: "PUT", body: JSON.stringify(payload) }, config);
  return {
    ok: true,
    savedAt: normalizedState.updatedAt,
    commitSha: result?.commit?.sha || "",
    commitUrl: result?.commit?.html_url || "",
    fileSha: result?.content?.sha || "",
  };
}

async function handleLogin(body, response) {
  const adminPassword = getAdminPassword();
  if (!adminPassword) {
    sendJson(response, 503, { error: "HR_LOUNGE_ADMIN_PASSWORD 환경변수가 필요합니다." });
    return;
  }
  if (!getSessionSecret()) {
    sendJson(response, 503, { error: "HR_LOUNGE_SESSION_SECRET 환경변수가 필요합니다." });
    return;
  }
  if (body.password !== adminPassword) {
    sendJson(response, 401, { error: "비밀번호가 올바르지 않습니다." });
    return;
  }

  sendJson(response, 200, {
    token: createSessionToken(),
    expiresIn: SESSION_TTL_SECONDS,
    user: {
      email: "admin@hr-lounge.local",
      name: "관리자",
      role: "admin",
    },
  });
}

async function handleSave(body, response) {
  const session = verifySessionToken(body.token || "");
  if (!session?.user) {
    sendJson(response, 401, { error: "관리자 세션이 만료되었거나 올바르지 않습니다." });
    return;
  }

  const result = await saveBlogData(body.state);
  sendJson(response, 200, result);
}

module.exports = async function handler(request, response) {
  if (request.method === "GET") {
    sendJson(response, 200, {
      ok: true,
      configured: Boolean(getAdminPassword() && getSessionSecret()),
      githubConfigured: Boolean(getGitHubConfig().token && getGitHubConfig().owner && getGitHubConfig().repo),
    });
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
    if (body.action === "save") {
      await handleSave(body, response);
      return;
    }
    sendJson(response, 400, { error: "지원하지 않는 작업입니다." });
  } catch (error) {
    sendJson(response, error.statusCode && error.statusCode < 500 ? error.statusCode : 500, {
      error: error.message || "요청 처리 중 오류가 발생했습니다.",
    });
  }
};
