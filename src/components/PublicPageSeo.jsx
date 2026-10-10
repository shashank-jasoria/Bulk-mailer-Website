import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getBlogArticle } from "../data/blogArticles_v1";
import { PUBLIC_PAGE_SEO } from "../data/publicPageSeo";

function setMeta(key, value, property = false) {
  const attribute = property ? "property" : "name";
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = value;
}

/**
 * Updates SEO when users navigate client-side between non-article pages.
 * Article pages manage their own metadata through BlogArticlePage.
 * This does not replace build-time prerendering for crawler HTML.
 */
export default function PublicPageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const articleMatch = path.match(/^\/blog\/([^/]+)$/);
    const article = articleMatch ? getBlogArticle(articleMatch[1]) : null;

    // Let BlogArticlePage's effect own metadata for published articles.
    if (article && article.publishedAt && article.draft !== true) {
      return;
    }

    const seo = PUBLIC_PAGE_SEO[path];
    const siteUrl = (
      import.meta.env.VITE_SITE_URL || window.location.origin
    ).replace(/\/+$/, "");
    const canonical = siteUrl + path;

    if (!seo) {
      document.title = path === "/login" ? "Sign In | Relay" : "Relay";
      setMeta("robots", "noindex, nofollow");
      document.head.querySelector('link[rel="canonical"]')?.remove();
      return;
    }

    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("og:type", "website", true);
    setMeta("og:site_name", "Relay", true);
    setMeta("og:title", seo.title, true);
    setMeta("og:description", seo.description, true);
    setMeta("og:url", canonical, true);
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);

    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }, [pathname]);

  return null;
}
