import {
  base64ToBytes,
  bytesToBase64,
  createSignedToken,
  getEnv,
  getSessionSecret,
  jsonResponse,
  readJsonBody,
  verifySignedToken,
} from "../_lib/session.js";

const DEFAULT_DATA_PATH = "blog-data.json";
const DEFAULT_BRANCH = "main";
const DEFAULT_UPLOAD_DIR = "assets/uploads";
const SESSION_TTL_SECONDS = 6 * 60 * 60;
const BLOG_DATA_RECOMMENDED_BYTES = 3 * 1024 * 1024;
const BLOG_DATA_MAX_BYTES = Math.floor(4.5 * 1024 * 1024);
const ADMIN_TOKEN_KIND = "hr-lounge-admin";

const encoder = new TextEncoder();

function getAdminPassword(env) {
  return getEnv(env, ["HR_LOUNGE_ADMIN_PASSWORD", "ADMIN_PASSWORD"]);
}

function getGitHubConfig(env) {
  return {
    token: getEnv(env, ["GITHUB_TOKEN", "GH_TOKEN"]),
    owner: getEnv(env, ["GITHUB_OWNER", "VERCEL_GIT_REPO_OWNER"]),
    repo: getEnv(env, ["GITHUB_REPO", "VERCEL_GIT_REPO_SLUG"]),
    branch: getEnv(env, ["GITHUB_BRANCH", "CF_PAGES_BRANCH", "VERCEL_GIT_COMMIT_REF"], DEFAULT_BRANCH),
    path: getEnv(env, "GITHUB_DATA_PATH", DEFAULT_DATA_PATH),
    uploadDir: getEnv(env, "GITHUB_UPLOAD_DIR", DEFAULT_UPLOAD_DIR),
    committerName: getEnv(env, "GITHUB_COMMITTER_NAME", "HR Lounge Bot"),
    committerEmail: getEnv(env, "GITHUB_COMMITTER_EMAIL", "hr-lounge-bot@example.com"),
  };
}

function assertGitHubConfig(config) {
  const missing = [];
  if (!config.token) missing.push("GITHUB_TOKEN");
  if (!config.owner) missing.push("GITHUB_OWNER");
  if (!config.repo) missing.push("GITHUB_REPO");
  if (missing.length) {
    throw new Error(`${missing.join(", ")} is required.`);
  }
}

function encodeGitHubPath(path) {
  return String(path || "")
    .split("/")
    .map(encodeURIComponent)
    .join("/");
}

function buildContentUrl(config, path) {
  return `https://api.github.com/repos/${encodeURIComponent(config.owner)}/${encodeURIComponent(
    config.repo
  )}/contents/${encodeGitHubPath(path)}`;
}

async function requestGitHub(url, options, config) {
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
      "User-Agent": "hr-lounge-cloudflare-pages",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {}),
    },
  });
  const text = await response.text();
  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch (error) {
      data = { message: text };
    }
  }
  if (!response.ok) {
    const message = data?.message || `GitHub API error (${response.status})`;
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

async function getCurrentFile(config, path = config.path) {
  const url = `${buildContentUrl(config, path)}?ref=${encodeURIComponent(config.branch)}`;
  return requestGitHubOptional(url, { method: "GET" }, config);
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

async function getStorageUsage(env) {
  const config = getGitHubConfig(env);
  assertGitHubConfig(config);

  const [dataFile, uploads] = await Promise.all([getCurrentFile(config), getUploadDirectoryUsage(config)]);
  const dataFileSize = Number(dataFile?.size || 0);
  const totalBytes = dataFileSize + uploads.sizeBytes;
  const maxPercent = BLOG_DATA_MAX_BYTES ? Math.round((dataFileSize / BLOG_DATA_MAX_BYTES) * 100) : 0;
  const recommendedPercent = BLOG_DATA_RECOMMENDED_BYTES
    ? Math.round((dataFileSize / BLOG_DATA_RECOMMENDED_BYTES) * 100)
    : 0;

  let status = "safe";
  let statusLabel = "Safe";
  if (dataFileSize >= BLOG_DATA_MAX_BYTES * 0.9) {
    status = "danger";
    statusLabel = "Near hard limit";
  } else if (dataFileSize >= BLOG_DATA_RECOMMENDED_BYTES) {
    status = "warning";
    statusLabel = "Above recommended size";
  } else if (dataFileSize >= BLOG_DATA_RECOMMENDED_BYTES * 0.7) {
    status = "watch";
    statusLabel = "Watch";
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
    throw new Error("Image data URL is invalid.");
  }

  const mimeType = match[1].toLowerCase();
  const isBase64 = Boolean(match[2]);
  const payload = match[3] || "";
  const bytes = isBase64 ? base64ToBytes(payload) : encoder.encode(decodeURIComponent(payload));
  if (!bytes.length) {
    throw new Error("Image data is empty.");
  }
  return {
    bytes,
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

async function sha256Hex(bytes) {
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(hash))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function getUploadPath(config, dataUrl, options = {}) {
  const parsed = parseDataImage(dataUrl);
  const hash = (await sha256Hex(parsed.bytes)).slice(0, 16);
  const date = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const baseName = getSafeImageBaseName(options.fileName || options.kind || "image");
  const uploadDir = String(config.uploadDir || DEFAULT_UPLOAD_DIR).replace(/^\/+|\/+$/g, "");
  return {
    ...parsed,
    hash,
    path: `${uploadDir}/${date}/${baseName}-${hash}.${parsed.extension}`,
  };
}

async function putGitHubFile(config, path, bytes, message, currentFile = undefined) {
  const existingFile = currentFile === undefined ? await getCurrentFile(config, path) : currentFile;
  const payload = {
    message,
    content: bytesToBase64(bytes),
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
  const image = await getUploadPath(config, dataUrl, options);
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

  const result = await putGitHubFile(config, image.path, image.bytes, `Upload HR Lounge image (${image.hash})`, null);
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

  return {
    html: count ? result + source.slice(lastIndex) : source,
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
    throw new Error("Blog data state is invalid.");
  }
  return {
    ...state,
    updatedAt: new Date().toISOString(),
  };
}

async function saveBlogData(env, state) {
  const config = getGitHubConfig(env);
  assertGitHubConfig(config);

  const normalizedState = normalizeStateForFile(state);
  const migration = await migrateStateImages(normalizedState, config);
  const currentFile = await getCurrentFile(config);
  const content = encoder.encode(`${JSON.stringify(migration.state, null, 2)}\n`);
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

async function createAdminToken(env) {
  return createSignedToken(
    {
      kind: ADMIN_TOKEN_KIND,
      exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
      user: {
        email: "admin@hr-lounge.local",
        name: "Admin",
        role: "admin",
      },
    },
    getSessionSecret(env)
  );
}

async function verifyAdminToken(env, token) {
  const session = await verifySignedToken(token || "", getSessionSecret(env));
  if (!session?.user || session.user.role !== "admin") {
    return null;
  }
  if (session.kind && session.kind !== ADMIN_TOKEN_KIND) {
    return null;
  }
  return session;
}

async function handleLogin(env, body) {
  const adminPassword = getAdminPassword(env);
  if (!adminPassword) {
    return jsonResponse({ error: "HR_LOUNGE_ADMIN_PASSWORD is required." }, 503);
  }
  if (!getSessionSecret(env)) {
    return jsonResponse({ error: "HR_LOUNGE_SESSION_SECRET is required." }, 503);
  }
  if (body.password !== adminPassword) {
    return jsonResponse({ error: "Admin password is incorrect." }, 401);
  }

  return jsonResponse({
    token: await createAdminToken(env),
    expiresIn: SESSION_TTL_SECONDS,
    user: {
      email: "admin@hr-lounge.local",
      name: "Admin",
      role: "admin",
    },
  });
}

async function requireAdmin(env, body) {
  const session = await verifyAdminToken(env, body.token);
  if (!session?.user) {
    const error = new Error("Admin session is expired or invalid.");
    error.statusCode = 401;
    throw error;
  }
  return session;
}

async function handleSave(env, body) {
  await requireAdmin(env, body);
  return jsonResponse(await saveBlogData(env, body.state));
}

async function handleUploadImage(env, body) {
  await requireAdmin(env, body);
  const config = getGitHubConfig(env);
  assertGitHubConfig(config);
  const result = await uploadImageData(config, body.image, {
    fileName: body.fileName || body.name || body.kind || "image",
    kind: body.kind || "image",
  });
  return jsonResponse(result);
}

async function handleUsage(env, body) {
  await requireAdmin(env, body);
  return jsonResponse(await getStorageUsage(env));
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === "GET") {
    const config = getGitHubConfig(env);
    return jsonResponse(
      {
        ok: true,
        configured: Boolean(getAdminPassword(env) && getSessionSecret(env)),
        githubConfigured: Boolean(config.token && config.owner && config.repo),
      },
      200,
      { "Cache-Control": "no-store" }
    );
  }

  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405, {
      Allow: "GET, POST",
      "Cache-Control": "no-store",
    });
  }

  try {
    const body = await readJsonBody(request, 8 * 1024 * 1024);
    if (body.action === "login") {
      return await handleLogin(env, body);
    }
    if (body.action === "save") {
      return await handleSave(env, body);
    }
    if (body.action === "uploadImage") {
      return await handleUploadImage(env, body);
    }
    if (body.action === "usage") {
      return await handleUsage(env, body);
    }
    return jsonResponse({ error: "Unsupported action." }, 400);
  } catch (error) {
    const status = error.statusCode && error.statusCode < 500 ? error.statusCode : 500;
    return jsonResponse({ error: error.message || "Request failed." }, status, {
      "Cache-Control": "no-store",
    });
  }
}
