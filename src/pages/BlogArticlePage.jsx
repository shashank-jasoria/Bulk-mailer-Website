import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Copy,
  ExternalLink,
  Lightbulb,
  Link2,
  // Linkedin,
  Mail,
  MirrorRectangular,
  ShieldCheck,
} from "lucide-react";
import { blogPosts, getBlogArticle } from "../data/blogArticles";
import "../styles/BlogArticlePage.css";

/**
 * This sets SPA document metadata. For strong production SEO and social previews,
 * also prerender /blog/:slug into real HTML (see README-Integration.md).
 */
function useArticleMetadata(article) {
  useEffect(() => {
    if (!article) return undefined;

    const oldTitle = document.title;
    const cleanups = [];
    const siteUrl = (
      import.meta.env.VITE_SITE_URL || window.location.origin
    ).replace(/\/+$/, "");
    const articleUrl = `${siteUrl}/blog/${article.slug}`;
    const imageUrl = `${siteUrl}/blog/og/${article.slug}.png`;

    document.title = `${article.title} | Relay Blog`;

    function setMeta(key, value, property = false) {
      const attr = property ? "property" : "name";
      const selector = `meta[${attr}="${key}"]`;
      let element = document.head.querySelector(selector);

      if (element) {
        const previous = element.getAttribute("content");
        element.setAttribute("content", value);
        cleanups.push(() => {
          if (previous === null) element.removeAttribute("content");
          else element.setAttribute("content", previous);
        });
      } else {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        element.setAttribute("content", value);
        document.head.appendChild(element);
        cleanups.push(() => element.remove());
      }
    }

    setMeta("description", article.description);
    setMeta("robots", "index, follow, max-image-preview:large");
    setMeta("og:type", "article", true);
    setMeta("og:title", article.title, true);
    setMeta("og:description", article.description, true);
    setMeta("og:url", articleUrl, true);
    setMeta("og:image", imageUrl, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:site_name", "Relay", true);
    setMeta("article:published_time", article.publishedAt, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", article.title);
    setMeta("twitter:description", article.description);
    setMeta("twitter:image", imageUrl);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) {
      const oldHref = canonical.getAttribute("href");
      canonical.setAttribute("href", articleUrl);
      cleanups.push(() => {
        if (oldHref === null) canonical.removeAttribute("href");
        else canonical.setAttribute("href", oldHref);
      });
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = articleUrl;
      document.head.appendChild(canonical);
      cleanups.push(() => canonical.remove());
    }

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.description,
        image: [imageUrl],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt ?? article.publishedAt,
        author: { "@type": "Person", name: article.author },
        publisher: { "@type": "Organization", name: "Relay", url: siteUrl },
        mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
        inLanguage: "en",
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Blog",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ];

    schemas.forEach((schema) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.relayBlogSchema = "true";
      script.textContent = JSON.stringify(schema).replace(/</g, "\\u003c");
      document.head.appendChild(script);
      cleanups.push(() => script.remove());
    });

    return () => {
      document.title = oldTitle;
      cleanups.reverse().forEach((cleanup) => cleanup());
    };
  }, [article]);
}

function useActiveSection(sections) {
  const [activeSection, setActiveSection] = useState(sections?.[0]?.id || "");

  useEffect(() => {
    if (!sections?.length) return undefined;

    setActiveSection(sections[0].id);
    if (typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-110px 0px -65% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return [activeSection, setActiveSection];
}

function TableOfContents({ sections, activeSection, onSelect }) {
  return (
    <nav aria-label="Table of contents" className="relay-article-toc__links">
      {sections.map((section, index) => (
        <a
          href={`#${section.id}`}
          key={section.id}
          className={activeSection === section.id ? "is-active" : ""}
          aria-current={activeSection === section.id ? "location" : undefined}
          onClick={() => onSelect(section.id)}
        >
          <span className="relay-article-toc__number">{index + 1}.</span>
          <span>{section.title}</span>
        </a>
      ))}
    </nav>
  );
}

function CopyableCode({ block }) {
  const [copied, setCopied] = useState(false);
  const codeText = block.lines.join("\n");

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy text:", error);
    }
  }

  return (
    <div className="relay-article-code">
      <div className="relay-article-code__topbar">
        <div className="relay-article-code__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <span className="relay-article-code__label">
          {block.label ?? block.title}
        </span>
        <button
          type="button"
          onClick={copyCode}
          aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
          title={copied ? "Copied" : "Copy"}
          className="relay-article-code__copy"
        >
          {copied ? <Check size={17} /> : <Copy size={17} />}
        </button>
      </div>
      <pre>
        <code>{codeText}</code>
      </pre>
    </div>
  );
}

function ArticleBlock({ block }) {
  switch (block.type) {
    case "paragraph":
      return <p className="relay-article-paragraph">{block.text}</p>;
    case "list":
      return (
        <ul className="relay-article-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol className="relay-article-steps">
          {block.items.map((step, index) => (
            <li key={`${index}-${step.title}`}>
              <span className="relay-article-steps__index">{index + 1}</span>
              <div>
                <strong>{step.title}</strong>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "tip":
      return (
        <aside className="relay-article-tip" aria-label={block.title ?? "Tip"}>
          <span className="relay-article-tip__icon" aria-hidden="true">
            <Lightbulb size={21} />
          </span>
          <div>
            <strong>{block.title || "Tip"}</strong>
            <p>{block.text}</p>
          </div>
        </aside>
      );
    case "code":
    case "template":
      return <CopyableCode block={block} />;
    case "internalLink":
      return (
        <p className="relay-article-inline-link">
          <Link to={`/blog/${block.slug}`}>
            <BookOpen size={17} aria-hidden="true" />
            {block.text}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </p>
      );
    default:
      return null;
  }
}

function SocialSharing({ article }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
    } catch (error) {
      console.error("Unable to copy link:", error);
    }
  }

  function shareOn(platform) {
    const url = encodeURIComponent(shareUrl);
    const title = encodeURIComponent(article.title);
    const urls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      x: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };
    window.open(urls[platform], "_blank", "noopener,noreferrer");
  }

  return (
    <div className="relay-article-share" aria-label="Share this article">
      <span className="relay-article-share__label">Share:</span>
      <button
        type="button"
        onClick={copyLink}
        title={copied ? "Link copied" : "Copy link"}
        aria-label={copied ? "Link copied" : "Copy link"}
      >
        {copied ? <Check size={17} /> : <Link2 size={17} />}
      </button>
      <button
        type="button"
        onClick={() => shareOn("linkedin")}
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        {/* <Linkedin size={17} /> */}
        <ExternalLink size={17} />
      </button>
      <button
        type="button"
        onClick={() => shareOn("x")}
        title="Share on X"
        aria-label="Share on X"
        className="relay-article-share__x"
      >
        X
      </button>
      <button
        type="button"
        onClick={() => shareOn("facebook")}
        title="Share on Facebook"
        aria-label="Share on Facebook"
      >
        <MirrorRectangular size={17} />
      </button>
    </div>
  );
}

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = useMemo(() => getBlogArticle(slug), [slug]);
  const sections = article?.sections;
  const [activeSection, setActiveSection] = useActiveSection(sections);
  useArticleMetadata(article);

  const relatedPosts = useMemo(() => {
    if (!article) return [];
    return blogPosts
      .filter((post) => post.slug !== article.slug)
      .sort(
        (a, b) =>
          Number(b.category === article.category) -
          Number(a.category === article.category),
      )
      .slice(0, 3);
  }, [article]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [slug]);

  if (!article) {
    return (
      <div className="relay-article-page">
        <div className="relay-article-not-found">
          <BookOpen size={40} aria-hidden="true" />
          <h1>Article not found</h1>
          <p>This article may have moved, or the link may be incorrect.</p>
          <Link to="/blog">
            <ArrowLeft size={18} /> Back to all articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relay-article-page" id="top">
      <div className="relay-article-container">
        <nav className="relay-article-breadcrumb" aria-label="Breadcrumb">
          <Link to="/blog">Blog</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <Link to="/blog">{article.category}</Link>
          <ChevronRight size={15} aria-hidden="true" />
          <span aria-current="page">{article.title}</span>
        </nav>

        <div className="relay-article-layout">
          <article className="relay-article-main">
            <header className="relay-article-header">
              <span className="relay-article-category">{article.category}</span>
              <h1>{article.title}</h1>
              <p className="relay-article-description">{article.description}</p>

              <div className="relay-article-meta-row">
                <div className="relay-article-author">
                  <span className="relay-article-avatar" aria-hidden="true">
                    {article.author
                      .split(/\s+/)
                      .map((part) => part[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </span>
                  <div>
                    <span className="relay-article-author__name">
                      By {article.author}
                    </span>
                    <span className="relay-article-author__date">
                      <time dateTime={article.publishedAt}>{article.date}</time>
                      <span aria-hidden="true">•</span>
                      {article.readTime}
                    </span>
                  </div>
                </div>
                <SocialSharing article={article} />
              </div>
            </header>

            <figure className="relay-article-hero">
              <img
                src={article.image}
                alt={article.imageAlt}
                width="1200"
                height="470"
                fetchPriority="high"
              />
            </figure>

            <details className="relay-article-mobile-toc">
              <summary>
                <BookOpen size={19} /> On this page <ChevronRight size={17} />
              </summary>
              <TableOfContents
                sections={sections}
                activeSection={activeSection}
                onSelect={setActiveSection}
              />
            </details>

            <div className="relay-article-body">
              {/* <p className="relay-article-intro">
                {article.slug === "find-verify-linkedin-emails"
                  ? "Finding the right contact information can make your outreach more effective. In this guide, we'll cover ways to research professional contacts, understand common email formats, verify addresses, and reach out responsibly."
                  : article.description}
              </p> */}

              <p className="relay-article-intro">
                {article.intro ?? article.description}
              </p>

              {sections.map((section, sectionIndex) => (
                <section
                  className="relay-article-section"
                  id={section.id}
                  key={section.id}
                  aria-labelledby={`${section.id}-heading`}
                >
                  <h2 id={`${section.id}-heading`}>
                    <span
                      className="relay-article-section__number"
                      aria-hidden="true"
                    >
                      {sectionIndex + 1}
                    </span>
                    <span>{section.title}</span>
                  </h2>
                  {section.blocks.map((block, blockIndex) => (
                    <ArticleBlock
                      block={block}
                      key={`${section.id}-${blockIndex}`}
                    />
                  ))}
                </section>
              ))}
            </div>

            <footer className="relay-article-footer">
              <div className="relay-article-footer__note">
                <ShieldCheck size={19} aria-hidden="true" />
                <span>
                  Use professional contact information responsibly and respect
                  opt-out requests.
                </span>
              </div>
              <div className="relay-article-footer__share">
                <span>Found this helpful?</span>
                <SocialSharing article={article} />
              </div>
              <Link className="relay-article-back" to="/blog">
                <ArrowLeft size={18} /> Back to all articles
              </Link>
            </footer>
          </article>

          <aside className="relay-article-sidebar" aria-label="Article sidebar">
            <div className="relay-article-toc">
              <h2>Table of Contents</h2>
              <TableOfContents
                sections={sections}
                activeSection={activeSection}
                onSelect={setActiveSection}
              />
            </div>
            {/* <div className="relay-article-sidebar-cta">
              <span className="relay-article-sidebar-cta__icon">
                <Mail size={22} aria-hidden="true" />
              </span>
              <h3>Make outreach simpler</h3>
              <p>
                Explore Relay's tools for more organized, thoughtful email
                outreach.
              </p>
              <Link to="/pricing">
                Explore Relay <ArrowRight size={16} />
              </Link>
            </div> */}
          </aside>
        </div>

        {relatedPosts.length > 0 && (
          <section
            className="relay-article-related"
            aria-labelledby="related-heading"
          >
            <div className="relay-article-related__heading">
              <div>
                <span className="relay-article-related__eyebrow">
                  KEEP READING
                </span>
                <h2 id="related-heading">Related articles</h2>
              </div>
              <Link to="/blog">
                View all articles <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relay-article-related__grid">
              {relatedPosts.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  className="relay-article-related__card"
                  key={post.id}
                >
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    width="1200"
                    height="470"
                  />
                  <div>
                    <span>{post.category}</span>
                    <h3>{post.title}</h3>
                    <p>
                      {post.readTime} <span aria-hidden="true">•</span>{" "}
                      {post.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
