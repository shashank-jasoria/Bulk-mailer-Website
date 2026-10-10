import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import { loadEnv, preview } from "vite";

import { blogPosts } from "../src/data/blogArticles.js";
import { PUBLIC_PAGE_SEO } from "../src/data/publicPageSeo.js";

// ==========================================
// CONFIGURATION
// ==========================================

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

const env = loadEnv("production", root, "VITE_");

const siteUrl = (env.VITE_SITE_URL || "").replace(/\/+$/, "");

if (!/^https:\/\/[^/]+$/i.test(siteUrl)) {
  throw new Error(
    "Set VITE_SITE_URL=https://your-domain.com in .env.production",
  );
}

// ==========================================
// PUBLIC ROUTES
// ==========================================

const staticPages = Object.entries(PUBLIC_PAGE_SEO)
  .filter(([path]) => path !== "/")
  .map(([path, metadata]) => ({
    path,
    ...metadata,
  }));

const articles = blogPosts.filter(
  (post) => post?.slug && post?.publishedAt && post.draft !== true,
);

for (const article of articles) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)) {
    throw new Error(`Invalid article slug: ${JSON.stringify(article.slug)}`);
  }
}

const articleRoutes = articles.map((article) => ({
  path: `/blog/${article.slug}`,
  article,
}));

// Keep homepage last so the original SPA shell
// remains available while prerendering other pages.

const pages = [
  ...staticPages,
  ...articleRoutes,
  {
    path: "/",
    ...PUBLIC_PAGE_SEO["/"],
  },
];

// ==========================================
// SPA FALLBACK
// ==========================================

function withRobotsNoindex(html) {
  if (/<meta\s+name=["']robots["']/i.test(html)) {
    return html.replace(
      /<meta\s+name=["']robots["'][^>]*>/i,
      '<meta name="robots" content="noindex, nofollow">',
    );
  }

  return html.replace(
    /<\/head>/i,
    '  <meta name="robots" content="noindex, nofollow">\n</head>',
  );
}

async function prepareSpaFallback() {
  const appShell = await readFile(join(dist, "index.html"), "utf8");

  await writeFile(
    join(dist, "spa-fallback.html"),
    withRobotsNoindex(appShell),
    "utf8",
  );
}

function outputFile(pathname) {
  if (pathname === "/") {
    return join(dist, "index.html");
  }

  return join(dist, pathname.slice(1) + ".html");
}

// ==========================================
// STATIC PAGE SEO
// ==========================================

async function setStaticMetadata(page, details) {
  const canonical = siteUrl + (details.path === "/" ? "/" : details.path);

  await page.evaluate(
    ({ title, description, canonical }) => {
      document.title = title;

      function setMeta(type, key, value) {
        const selector = `meta[${type}="${key}"]`;

        let element = document.head.querySelector(selector);

        if (!element) {
          element = document.createElement("meta");
          element.setAttribute(type, key);
          document.head.appendChild(element);
        }

        element.content = value;
      }

      setMeta("name", "description", description);
      setMeta("name", "robots", "index, follow, max-image-preview:large");

      setMeta("property", "og:type", "website");
      setMeta("property", "og:site_name", "Relay");
      setMeta("property", "og:title", title);
      setMeta("property", "og:description", description);
      setMeta("property", "og:url", canonical);

      setMeta("name", "twitter:card", "summary");
      setMeta("name", "twitter:title", title);
      setMeta("name", "twitter:description", description);

      let link = document.head.querySelector('link[rel="canonical"]');

      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }

      link.href = canonical;
    },
    {
      title: details.title,
      description: details.description,
      canonical,
    },
  );
}

// ==========================================
// BLOG ARTICLE SEO
// ==========================================

async function setArticleMetadata(page, article) {
  await page.evaluate(
    ({ post, baseUrl }) => {
      const articleUrl = `${baseUrl}/blog/${post.slug}`;

      const imageUrl = `${baseUrl}/blog/og/${post.slug}.png`;

      function setMeta(attribute, key, value) {
        const selector = `meta[${attribute}="${key}"]`;

        let element = document.head.querySelector(selector);

        if (!element) {
          element = document.createElement("meta");

          element.setAttribute(attribute, key);

          document.head.appendChild(element);
        }

        element.setAttribute("content", value);
      }

      // Page title
      document.title = `${post.title} | Relay Blog`;

      // Standard SEO metadata
      setMeta("name", "description", post.description);

      setMeta("name", "robots", "index, follow, max-image-preview:large");

      // Open Graph
      setMeta("property", "og:type", "article");
      setMeta("property", "og:site_name", "Relay");
      setMeta("property", "og:title", post.title);

      setMeta("property", "og:description", post.description);

      setMeta("property", "og:url", articleUrl);
      setMeta("property", "og:image", imageUrl);
      setMeta("property", "og:image:width", "1200");
      setMeta("property", "og:image:height", "630");

      setMeta("property", "article:published_time", post.publishedAt);

      // Twitter / X
      setMeta("name", "twitter:card", "summary_large_image");

      setMeta("name", "twitter:title", post.title);

      setMeta("name", "twitter:description", post.description);

      setMeta("name", "twitter:image", imageUrl);

      // Canonical URL
      let canonical = document.head.querySelector('link[rel="canonical"]');

      if (!canonical) {
        canonical = document.createElement("link");
        canonical.rel = "canonical";
        document.head.appendChild(canonical);
      }

      canonical.href = articleUrl;

      // Remove existing Relay article JSON-LD.
      document
        .querySelectorAll('script[data-relay-blog-schema="true"]')
        .forEach((element) => element.remove());

      // BlogPosting structured data
      const blogSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",

        headline: post.title,
        description: post.description,

        image: [imageUrl],

        datePublished: post.publishedAt,

        dateModified: post.updatedAt ?? post.publishedAt,

        author: {
          "@type": "Person",
          name: post.author,
        },

        publisher: {
          "@type": "Organization",
          name: "Relay",
          url: baseUrl,
        },

        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },

        inLanguage: "en",
      };

      // Breadcrumb structured data
      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Blog",
            item: `${baseUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: post.title,
            item: articleUrl,
          },
        ],
      };

      const schemas = [blogSchema, breadcrumbSchema];

      for (const schema of schemas) {
        const script = document.createElement("script");

        script.type = "application/ld+json";

        script.dataset.relayBlogSchema = "true";

        script.textContent = JSON.stringify(schema).replace(/</g, "\\u003c");

        document.head.appendChild(script);
      }
    },
    {
      post: article,
      baseUrl: siteUrl,
    },
  );
}

// ==========================================
// VALIDATE SEO METADATA
// ==========================================

async function assertMetadata(page, entry) {
  const expectedUrl = siteUrl + (entry.path === "/" ? "/" : entry.path);

  const details = await page.evaluate(() => ({
    title: document.title,

    description: document.querySelector('meta[name="description"]')?.content,

    canonical: document.querySelector('link[rel="canonical"]')?.href,

    heading: document.querySelector("#root h1")?.textContent?.trim(),

    articleSchemas: [
      ...document.querySelectorAll('script[type="application/ld+json"]'),
    ].filter((element) => element.textContent?.includes('"BlogPosting"'))
      .length,

    robots: document.querySelector('meta[name="robots"]')?.content,
  }));

  if (details.canonical !== expectedUrl) {
    throw new Error(
      `${entry.path}: Expected canonical ${expectedUrl}, got ${details.canonical}`,
    );
  }

  if (!details.heading || !details.description || !details.title) {
    throw new Error(
      `${entry.path}: Missing SEO data: ${JSON.stringify(details)}`,
    );
  }

  if (entry.article && !details.heading.includes(entry.article.title)) {
    throw new Error(
      `${entry.path}: Incorrect article heading.\n` +
        `Expected: ${entry.article.title}\n` +
        `Actual: ${details.heading}`,
    );
  }

  if (entry.article && details.articleSchemas < 1) {
    throw new Error(`${entry.path}: BlogPosting JSON-LD was not generated`);
  }

  if (details.robots?.toLowerCase().includes("noindex")) {
    throw new Error(`${entry.path}: Public page unexpectedly has noindex`);
  }
}

// ==========================================
// MAIN PRERENDER PROCESS
// ==========================================

let server;
let browser;

try {
  // Save original React shell for auth pages.
  await prepareSpaFallback();

  // Start local Vite preview server.
  server = await preview({
    configFile: join(root, "vite.config.js"),
    root,

    preview: {
      host: "127.0.0.1",
      port: 0,
      strictPort: false,
    },
  });

  const address = server.httpServer.address();

  if (!address || typeof address === "string") {
    throw new Error("Cannot determine Vite preview address");
  }

  const localOrigin = `http://127.0.0.1:${address.port}`;

  // Start headless Chromium.
  browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: {
      width: 1440,
      height: 900,
    },

    colorScheme: "light",
    serviceWorkers: "block",
  });

  // Prerender each public route.
  for (const entry of pages) {
    const page = await context.newPage();

    const browserErrors = [];

    page.on("pageerror", (error) => {
      browserErrors.push(error.message);
    });

    page.on("console", (message) => {
      if (message.type() === "error") {
        browserErrors.push(message.text());
      }
    });

    try {
      console.log(`Prerendering ${entry.path}...`);

      const response = await page.goto(localOrigin + entry.path, {
        waitUntil: "domcontentloaded",
        timeout: 45000,
      });

      if (!response?.ok()) {
        throw new Error(`${entry.path}: HTTP ${response?.status()}`);
      }

      // Wait for React to render the page.
      // Do not wait for networkidle because
      // authentication/API requests may remain active.
      await page.locator("#root h1").first().waitFor({
        state: "visible",
        timeout: 30000,
      });

      if (entry.article) {
        // Verify the new article title is rendered.
        const heading = await page.locator("#root h1").first().textContent();

        if (!heading?.includes(entry.article.title)) {
          throw new Error(
            `${entry.path}: Wrong article title.\n` +
              `Expected: ${entry.article.title}\n` +
              `Actual: ${heading ?? "(missing)"}\n` +
              `Browser errors: ${JSON.stringify(browserErrors.slice(0, 5))}`,
          );
        }

        // Generate article metadata directly
        // from blogArticles.js.
        await setArticleMetadata(page, entry.article);
      } else {
        // Generate standard page metadata.
        await setStaticMetadata(page, entry);
      }

      // Validate before saving.
      await assertMetadata(page, entry);

      // Get complete rendered HTML.
      const html = await page.content();

      const target = outputFile(entry.path);

      await mkdir(dirname(target), {
        recursive: true,
      });

      await writeFile(target, html, "utf8");

      console.log(`Prerendered ${entry.path} -> ${target}`);
    } catch (error) {
      console.error(`Failed to prerender ${entry.path}:`, error.message);

      console.error("Browser errors:", browserErrors.slice(0, 10));

      throw error;
    } finally {
      await page.close();
    }
  }

  await context.close();

  console.log(`\nCompleted ${pages.length} public URLs.`);

  console.log("Hostinger: upload the contents of dist/.");
} finally {
  if (browser) {
    await browser.close();
  }

  if (server) {
    await new Promise((resolveClose, rejectClose) => {
      server.httpServer.close((error) => {
        if (error) {
          rejectClose(error);
        } else {
          resolveClose();
        }
      });
    });
  }
}
