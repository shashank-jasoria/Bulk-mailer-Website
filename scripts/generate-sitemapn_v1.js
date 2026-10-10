/**
 * Optional: generate a blog sitemap from src/data/blogArticles.js.
 * Run from your website root after copying the files:
 *   PowerShell: $env:SITE_URL="https://www.yourdomain.com"; node scripts/generate-sitemap.mjs
 *   bash:       SITE_URL=https://www.yourdomain.com node scripts/generate-sitemap.mjs
 * Do NOT upload an example-domain sitemap to production.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { blogPosts } from "../src/data/blogArticles_v1.js";

const SITE_URL = process.env.SITE_URL?.trim().replace(/\/+$/, "");
if (!SITE_URL || !/^https:\/\//i.test(SITE_URL)) {
  console.error(
    "Set SITE_URL to the full production HTTPS origin, e.g. https://relay.example",
  );
  process.exit(1);
}

const escapeXml = (input) =>
  String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const sitePages = [{ path: "/blog", lastmod: blogPosts[0]?.publishedAt }];
const articlePages = blogPosts.map((post) => ({
  path: `/blog/${post.slug}`,
  lastmod: post.updatedAt ?? post.publishedAt,
}));

const urls = [...sitePages, ...articlePages];
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, lastmod }) => `  <url>
    <loc>${escapeXml(`${SITE_URL}${path}`)}</loc>
    <lastmod>${escapeXml(lastmod)}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(projectRoot, "public", "sitemap.xml");
await mkdir(dirname(output), { recursive: true });
await writeFile(output, xml, "utf8");
console.log(`Created ${output} with ${urls.length} blog URLs.`);
