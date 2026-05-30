const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const blogDataPath = path.join(root, "blog-data.json");
const recommendedBytes = 3 * 1024 * 1024;
const maxBytes = Math.floor(4.5 * 1024 * 1024);

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

function collectAssetPaths(value, paths = []) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectAssetPaths(item, paths));
    return paths;
  }
  if (!value || typeof value !== "object") {
    return paths;
  }

  Object.entries(value).forEach(([key, entry]) => {
    if (typeof entry === "string" && /^(image|videoThumbnail|thumbnail|coverImage|logo)$/i.test(key)) {
      if (entry.startsWith("./assets/") || entry.startsWith("/assets/")) {
        paths.push(entry);
      }
    } else {
      collectAssetPaths(entry, paths);
    }
  });

  return paths;
}

function toLocalAssetPath(assetPath) {
  const cleanPath = assetPath.split(/[?#]/, 1)[0];
  return path.join(root, cleanPath.replace(/^\.?\//, "").replace(/\//g, path.sep));
}

const content = fs.readFileSync(blogDataPath, "utf8");
const sizeBytes = Buffer.byteLength(content, "utf8");
const dataImageMatches = content.match(/data:image\//g) || [];
let parsed;

try {
  parsed = JSON.parse(content);
} catch (error) {
  console.error(`blog-data.json is not valid JSON: ${error.message}`);
  process.exit(1);
}

const missingAssets = [...new Set(collectAssetPaths(parsed))]
  .filter((assetPath) => !fs.existsSync(toLocalAssetPath(assetPath)));

console.log(`blog-data.json size: ${formatBytes(sizeBytes)} (${sizeBytes} bytes)`);
console.log(`data:image entries: ${dataImageMatches.length}`);
console.log(`missing local asset paths: ${missingAssets.length}`);

if (missingAssets.length) {
  missingAssets.slice(0, 20).forEach((assetPath) => console.error(`Missing asset: ${assetPath}`));
  if (missingAssets.length > 20) {
    console.error(`...and ${missingAssets.length - 20} more missing assets`);
  }
}

if (dataImageMatches.length) {
  console.error("Move embedded images into assets/ and keep only ./assets/... paths in blog-data.json.");
}

if (sizeBytes > maxBytes) {
  console.error(`blog-data.json exceeds the ${formatBytes(maxBytes)} hard limit.`);
}

if (sizeBytes > recommendedBytes && sizeBytes <= maxBytes) {
  console.warn(`Warning: blog-data.json is above the ${formatBytes(recommendedBytes)} recommended size.`);
}

if (dataImageMatches.length || missingAssets.length || sizeBytes > maxBytes) {
  process.exit(1);
}
