/**
 * Local preview that mimics the extensionless HTML rewrites on Hostinger.
 * Run after `npm run build`: node scripts/preview-static.js
 * Navigate to http://127.0.0.1:4174/blog/find-verify-linkedin-emails
 * (Unlike `vite preview`, this actually serves the prerendered .html file.)
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("../dist/", import.meta.url)));
const port = Number(process.env.PORT || 4174);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

async function regularFile(file) {
  try {
    return (await stat(file)).isFile();
  } catch {
    return false;
  }
}

createServer(async (req, res) => {
  try {
    if (req.method !== "GET" && req.method !== "HEAD") {
      res.writeHead(405).end();
      return;
    }
    const rawPath = decodeURIComponent(new URL(req.url, "http://127.0.0.1").pathname);
    const pathname = rawPath === "/" ? "/" : rawPath.replace(/\/+$/, "");
    const rel = pathname.replace(/^\/+/, "");
    if (rel.split("/").some((part) => part === ".." || part === ".")) {
      res.writeHead(400).end();
      return;
    }
    const candidates = pathname === "/"
      ? ["index.html"]
      : [`${rel}.html`, rel, "spa-fallback.html"];

    let matched = null;
    for (const candidate of candidates) {
      const absolute = resolve(root, candidate);
      if (!absolute.startsWith(root + sep)) continue;
      if (await regularFile(absolute)) {
        matched = absolute;
        break;
      }
    }
    const unknownArticle = /^\/blog\/[^/]+$/.test(pathname) &&
      matched === join(root, "spa-fallback.html");
    if (!matched || unknownArticle) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
      return;
    }
    const bytes = await readFile(matched);
    res.writeHead(200, {
      "Content-Type": mime[extname(matched)] || "application/octet-stream",
      "Content-Length": bytes.length,
    });
    if (req.method === "HEAD") res.end();
    else res.end(bytes);
  } catch (err) {
    console.error(err);
    res.writeHead(500).end("Server error");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Hostinger-style preview: http://127.0.0.1:${port}`);
});
