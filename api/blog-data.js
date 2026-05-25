const crypto = require("crypto");

const DEFAULT_DATA_PATH = "blog-data.json";
const DEFAULT_BRANCH = "main";
const DEFAULT_UPLOAD_DIR = "assets/uploads";
const SESSION_TTL_SECONDS = 6 * 60 * 60;
const BLOG_DATA_RECOMMENDED_BYTES = 3 * 1024 * 1024;
const BLOG_DATA_MAX_BYTES = Math.floor(4.5 * 1024 * 1024);

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
    uploadDir: process.env.GITHUB_UPLOAD_DIR || DEFAULT_UPLOAD_DIR,
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

async function requestGitHubOptional(url, options, config) {
  try {
    return await requestGitHub(url, options, config);
  } catch (error) {
    if (error.statusCode === 404) {
      return null;
    }
    throw error;
  }
}

function encodeGitHubPath(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function buildContentUrl(config, path) {
  const encodedPath = encodeGitHubPath(path);
  return `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(
    config.repo
  )}/contents/${encodedPath}`;
}

async function getCurrentFile(config, path = config.path) {
  const encodedPath = encodeGitHubPath(path);
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

async function getDirectoryContents(config, directoryPath) {
  const url = `${buildContentUrl(config, directoryPath)}?ref=${encodeURIComponent(config.branch)}`;
  const contents = await requestGitHubOptional(url, { method: "GET" }, config);
  return Array.isArray(contents) ? contents : [];
}

async function getUploadDirectoryUsage(config) {
  const uploadDir = String(config.uploadDir || DEFAULT_UPLOAD_DIR).replace(/^\/+|\/+$/g, "");
  const pendingDirectories = [uploadDir];
  const files = [];

  while (pendingDirectories.length) {
    const directoryPath = pendingDirectories.shift();
    const contents = await getDirectoryContents(config, directoryPath);
    contents.forEach((item) => {
      if (item.type === "dir") {
        pendingDirectories.push(item.path);
        return;
      }
      if (item.type === "file") {
        files.push({
          path: item.path,
          sizeBytes: Number(item.size || 0),
          htmlUrl: item.html_url || "",
        });
      }
    });
  }

  const totalBytes = files.reduce((sum, file) => sum + file.sizeBytes, 0);
  const largestFile = files.reduce((largest, file) => (file.sizeBytes > (largest?.sizeBytes || 0) ? file : largest), null);
  return {
    path: uploadDir,
    count: files.length,
    sizeBytes: totalBytes,
    largestFile,
  };
}

async function getStorageUsage() {
  const config = getGitHubConfig();
  assertGitHubConfig(config);

  const [dataFile, uploads] = await Promise.all([getCurrentFile(config), getUploadDirectoryUsage(config)]);
  const dataFileSize = Number(dataFile?.size || 0);
  const totalBytes = dataFileSize + uploads.sizeBytes;
  const maxPercent = BLOG_DATA_MAX_BYTES ? Math.round((dataFileSize / BLOG_DATA_MAX_BYTES) * 100) : 0;
  const recommendedPercent = BLOG_DATA_RECOMMENDED_BYTES
    ? Math.round((dataFileSize / BLOG_DATA_RECOMMENDED_BYTES) * 100)
    : 0;

  let status = "safe";
  let statusLabel = "여유 있음";
  if (dataFileSize >= BLOG_DATA_MAX_BYTES * 0.9) {
    status = "danger";
    statusLabel = "최대치 근접";
  } else if (dataFileSize >= BLOG_DATA_RECOMMENDED_BYTES) {
    status = "warning";
    statusLabel = "권장 초과";
  } else if (dataFileSize >= BLOG_DATA_RECOMMENDED_BYTES * 0.7) {
    status = "watch";
    statusLabel = "주의 구간";
  }

  return {
    ok: true,
    updatedAt: new Date().toISOString(),
    dataFile: {
      path: config.path,
      sizeBytes: dataFileSize,
      recommendedBytes: BLOG_DATA_RECOMMENDED_BYTES,
      maxBytes: BLOG_DATA_MAX_BYTES,
      recommendedPercent,
      maxPercent,
    },
    uploads,
    total: {
      sizeBytes: totalBytes,
    },
    status,
    statusLabel,
  };
}

function getImageExtension(mimeType) {
  const normalized = String(mimeType || "").toLowerCase();
  if (normalized === "image/jpeg" || normalized === "image/jpg") return "jpg";
  if (normalized === "image/png") return "png";
  if (normalized === "image/webp") return "webp";
  if (normalized === "image/gif") return "gif";
  if (normalized === "image/svg+xml") return "svg";
  return "bin";
}

function parseDataImage(dataUrl) {
  const match = /^data:(image\/[a-z0-9.+-]+)(?:;charset=[^;,]+)?(;base64)?,(.*)$/i.exec(String(dataUrl || ""));
  if (!match) {
    throw new Error("이미지 데이터 형식이 올바르지 않습니다.");
  }

  const mimeType = match[1].toLowerCase();
  const isBase64 = Boolean(match[2]);
  const payload = match[3] || "";
  const buffer = isBase64 ? Buffer.from(payload, "base64") : Buffer.from(decodeURIComponent(payload), "utf8");
  if (!buffer.length) {
    throw new Error("이미지 데이터가 비어 있습니다.");
  }
  return {
    buffer,
    mimeType,
    extension: getImageExtension(mimeType),
  };
}

function getSafeImageBaseName(name, fallback = "image") {
  const withoutExtension = String(name || "")
    .replace(/\.[a-z0-9]+$/i, "")
    .normalize("NFKD")
    .replace(/[^\w-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return (withoutExtension || fallback).slice(0, 48);
}

function getUploadPath(config, dataUrl, options = {}) {
  const parsed = parseDataImage(dataUrl);
  const hash = crypto.createHash("sha256").update(parsed.buffer).digest("hex").slice(0, 16);
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const baseName = getSafeImageBaseName(options.fileName || options.kind || "image");
  const uploadDir = String(config.uploadDir || DEFAULT_UPLOAD_DIR).replace(/^\/+|\/+$/g, "");
  return {
    ...parsed,
    hash,
    path: `${uploadDir}/${date}/${baseName}-${hash}.${parsed.extension}`,
  };
}

async function putGitHubFile(config, path, buffer, message, currentFile = undefined) {
  const existingFile = currentFile === undefined ? await getCurrentFile(config, path) : currentFile;
  const payload = {
    message,
    content: buffer.toString("base64"),
    branch: config.branch,
    committer: {
      name: config.committerName,
      email: config.committerEmail,
    },
  };

  if (existingFile?.sha) {
    payload.sha = existingFile.sha;
  }

  return requestGitHub(buildContentUrl(config, path), { method: "PUT", body: JSON.stringify(payload) }, config);
}

async function uploadImageData(config, dataUrl, options = {}) {
  const image = getUploadPath(config, dataUrl, options);
  const existingFile = await getCurrentFile(config, image.path);
  if (existingFile?.sha) {
    return {
      ok: true,
      skipped: true,
      path: image.path,
      url: `./${image.path}`,
      fileSha: existingFile.sha,
    };
  }

  const result = await putGitHubFile(
    config,
    image.path,
    image.buffer,
    `Upload HR Lounge image (${image.hash})`,
    null
  );

  return {
    ok: true,
    path: image.path,
    url: `./${image.path}`,
    commitSha: result?.commit?.sha || "",
    commitUrl: result?.commit?.html_url || "",
    fileSha: result?.content?.sha || "",
  };
}

async function migrateHtmlDataImages(html, config, options = {}) {
  const source = String(html || "");
  const pattern = /(<img\b[^>]*?\bsrc=["'])(data:image\/[^"']+)(["'])/gi;
  let result = "";
  let lastIndex = 0;
  let count = 0;

  for (const match of source.matchAll(pattern)) {
    const uploaded = await uploadImageData(config, match[2], {
      fileName: `${options.fileName || "content"}-${count + 1}`,
      kind: "content",
    });
    result += source.slice(lastIndex, match.index);
    result += `${match[1]}${uploaded.url}${match[3]}`;
    lastIndex = match.index + match[0].length;
    count += 1;
  }

  if (!count) {
    return { html: source, count };
  }

  return {
    html: result + source.slice(lastIndex),
    count,
  };
}

async function migrateStateImages(state, config) {
  const migratedState = JSON.parse(JSON.stringify(state));
  let migratedImageCount = 0;

  for (const post of migratedState.posts || []) {
    const postName = getSafeImageBaseName(post.title || post.id || "post");
    if (typeof post.image === "string" && post.image.startsWith("data:image/")) {
      const uploaded = await uploadImageData(config, post.image, {
        fileName: `${postName}-cover`,
        kind: "cover",
      });
      post.image = uploaded.url;
      migratedImageCount += 1;
    }

    if (typeof post.content === "string" && post.content.includes("data:image/")) {
      const migrated = await migrateHtmlDataImages(post.content, config, { fileName: postName });
      post.content = migrated.html;
      migratedImageCount += migrated.count;
    }
  }

  return {
    state: migratedState,
    migratedImageCount,
  };
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
  const migration = await migrateStateImages(normalizedState, config);
  const currentFile = await getCurrentFile(config);
  const content = Buffer.from(`${JSON.stringify(migration.state, null, 2)}\n`, "utf8");
  const now = new Date().toISOString().replace(/\.\d{3}Z$/, "Z");
  const result = await putGitHubFile(config, config.path, content, `Update HR Lounge blog data (${now})`, currentFile);
  return {
    ok: true,
    savedAt: migration.state.updatedAt,
    migratedImageCount: migration.migratedImageCount,
    state: migration.state,
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

async function handleUploadImage(body, response) {
  const session = verifySessionToken(body.token || "");
  if (!session?.user) {
    sendJson(response, 401, { error: "관리자 세션이 만료되었거나 올바르지 않습니다." });
    return;
  }

  const config = getGitHubConfig();
  assertGitHubConfig(config);
  const result = await uploadImageData(config, body.image, {
    fileName: body.fileName || body.name || body.kind || "image",
    kind: body.kind || "image",
  });
  sendJson(response, 200, result);
}

async function handleUsage(body, response) {
  const session = verifySessionToken(body.token || "");
  if (!session?.user) {
    sendJson(response, 401, { error: "관리자 세션이 만료되었거나 올바르지 않습니다." });
    return;
  }

  const result = await getStorageUsage();
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
    if (body.action === "uploadImage") {
      await handleUploadImage(body, response);
      return;
    }
    if (body.action === "usage") {
      await handleUsage(body, response);
      return;
    }
    sendJson(response, 400, { error: "지원하지 않는 작업입니다." });
  } catch (error) {
    sendJson(response, error.statusCode && error.statusCode < 500 ? error.statusCode : 500, {
      error: error.message || "요청 처리 중 오류가 발생했습니다.",
    });
  }
};
