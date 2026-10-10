/**
 * Generate public/sitemap.xml from src/data/blogArticles.js.
 *
 * Set VITE_SITE_URL=https://your-actual-domain.com in .env.production
 * OR set SITE_URL as an environment variable before running.
 *
 * Run: node scripts/generate-sitemap.js
 * Vite copies public/sitemap.xml to dist/sitemap.xml during npm run build.
 *
 * For a .js filename, the same code requires "type": "module" in package.json.
 */
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../src/data/blogArticles.js";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function readProductionSiteUrl() {
  const envFile = resolve(projectRoot, ".env.production");
  const content = await readFile(envFile, "utf8").catch(() => "");
  const match = content.match(/^\s*VITE_SITE_URL\s*=\s*(.*?)\s*$/m);
  if (!match) return "";

  // Support VITE_SITE_URL=https://... and quoted .env values.
  let value = match[1].trim();
  if (/^(['"]).*\1$/.test(value)) value = value.slice(1, -1);
  else value = value.replace(/\s+#.*$/, "").trim();
  return value;
}

const configuredSiteUrl =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  (await readProductionSiteUrl());

let siteUrl;
try {
  const parsed = new URL(configuredSiteUrl);
  if (
    parsed.protocol !== "https:" ||
    parsed.pathname !== "/" ||
    parsed.search ||
    parsed.hash ||
    parsed.username ||
    parsed.password
  ) throw new Error("Invalid site origin");
  siteUrl = parsed.origin;
} catch {
  console.error(
    "Set VITE_SITE_URL=https://your-real-domain.com in .env.production " +
    "(or set SITE_URL in your environment). Use a valid HTTPS origin."
  );
  process.exit(1);
}

const escapeXml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const articles = blogPosts.filter(
  (post) => post?.slug && post?.publishedAt && post.draft !== true
);
const dates = articles
  .map((post) => post.updatedAt || post.publishedAt)
  .filter((date) => /^\d{4}-\d{2}-\d{2}$/.test(date));
const mostRecentArticleDate = dates.sort().at(-1);

// Add your other *real* routes here, e.g. /pricing or /about, if they exist.
const pages = [
  { path: "/" },
  { path: "/about" },
  { path: "/pricing" },
  { path: "/contact" },
  { path: "/blog", lastmod: mostRecentArticleDate },
  ...articles.map((post) => ({
    path: `/blog/${encodeURIComponent(post.slug)}`,
    lastmod: post.updatedAt || post.publishedAt,
  })),
];

const xmlEntries = pages.map(({ path, lastmod }) => {
  const lastmodTag = /^\d{4}-\d{2}-\d{2}$/.test(lastmod || "")
    ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>`
    : "";
  return `  <url>\n    <loc>${escapeXml(siteUrl + path)}</loc>${lastmodTag}\n  </url>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  xmlEntries.join("\n") +
  `\n</urlset>\n`;

const output = resolve(projectRoot, "public", "sitemap.xml");
await mkdir(dirname(output), { recursive: true });
await writeFile(output, xml, "utf8");
console.log(`Created ${output} (${pages.length} URLs) for ${siteUrl}`);

const robotsPath = resolve(projectRoot, "public", "robots.txt");
const robotsText = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
await writeFile(robotsPath, robotsText, "utf8");
console.log(`Created ${robotsPath}`);
