const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dataPath = path.join(root, "blog-data.json");
const uploadRoot = path.join(root, "assets", "uploads", "migrated");

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
    throw new Error("Invalid data image");
  }
  const mimeType = match[1].toLowerCase();
  const isBase64 = Boolean(match[2]);
  const payload = match[3] || "";
  return {
    buffer: isBase64 ? Buffer.from(payload, "base64") : Buffer.from(decodeURIComponent(payload), "utf8"),
    extension: getImageExtension(mimeType),
  };
}

function safeBaseName(value, fallback) {
  const cleaned = String(value || "")
    .normalize("NFKD")
    .replace(/[^\w-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return (cleaned || fallback || "image").slice(0, 48);
}

function writeDataImage(dataUrl, baseName) {
  const image = parseDataImage(dataUrl);
  const hash = crypto.createHash("sha256").update(image.buffer).digest("hex").slice(0, 16);
  const fileName = `${safeBaseName(baseName, "image")}-${hash}.${image.extension}`;
  const filePath = path.join(uploadRoot, fileName);
  fs.mkdirSync(uploadRoot, { recursive: true });
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, image.buffer);
  }
  return `./assets/uploads/migrated/${fileName}`;
}

function migrateHtml(html, baseName) {
  let count = 0;
  const migrated = String(html || "").replace(/(<img\b[^>]*?\bsrc=["'])(data:image\/[^"']+)(["'])/gi, (match, prefix, dataUrl, suffix) => {
    count += 1;
    return `${prefix}${writeDataImage(dataUrl, `${baseName}-content-${count}`)}${suffix}`;
  });
  return { html: migrated, count };
}

const state = JSON.parse(fs.readFileSync(dataPath, "utf8"));
let migratedCount = 0;

for (const post of state.posts || []) {
  const baseName = safeBaseName(post.id || post.title, "post");
  if (typeof post.image === "string" && post.image.startsWith("data:image/")) {
    post.image = writeDataImage(post.image, `${baseName}-cover`);
    migratedCount += 1;
  }
  if (typeof post.content === "string" && post.content.includes("data:image/")) {
    const migrated = migrateHtml(post.content, baseName);
    post.content = migrated.html;
    migratedCount += migrated.count;
  }
}

state.updatedAt = new Date().toISOString();
fs.writeFileSync(dataPath, `${JSON.stringify(state, null, 2)}\n`, "utf8");

console.log(JSON.stringify({ migratedCount, dataPath, uploadRoot }, null, 2));
