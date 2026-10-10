import React, { useMemo, useState } from "react";
import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  Search,
  TrendingUp,
  Send,
  Sparkles,
} from "lucide-react";
import "../styles/BlogPage.css";

const categories = [
  "All Posts",
  "Outreach Tips",
  "Email Templates",
  "LinkedIn",
  "Product Updates",
  "Productivity",
];

const posts = [
  {
    id: 1,
    category: "LinkedIn",
    title: "How to Find and Verify Emails from LinkedIn",
    description:
      "A step-by-step guide to finding professional emails, common email formats, and how to verify them before outreach.",
    date: "Sep 28, 2026",
    readTime: "5 min read",
    slug: "find-verify-linkedin-emails",
  },
  {
    id: 2,
    category: "Email Templates",
    title: "10 Cold Email Templates That Actually Get Replies",
    description:
      "Ready-to-use templates for different use cases with tips on how to personalize them effectively.",
    date: "Sep 24, 2026",
    readTime: "7 min read",
    slug: "cold-email-templates",
  },
  {
    id: 3,
    category: "Productivity",
    title: "How to Build a Simple Outreach Workflow",
    description:
      "A practical workflow to find contacts, generate emails, personalize messages and follow up — all in one place.",
    date: "Sep 20, 2026",
    readTime: "6 min read",
    slug: "simple-outreach-workflow",
  },
  {
    id: 4,
    category: "Outreach Tips",
    title: "Common Company Email Formats (with Examples)",
    description:
      "A list of the most common email patterns used by companies and how to identify the right format quickly.",
    date: "Sep 16, 2026",
    readTime: "4 min read",
    slug: "company-email-formats",
  },
  {
    id: 5,
    category: "Product Updates",
    title: "Introducing Relay: A New Way to Simplify Outreach",
    description:
      "Why we built Relay, what problem it solves, and what's coming next.",
    date: "Sep 12, 2026",
    readTime: "3 min read",
    slug: "introducing-relay",
  },
  {
    id: 6,
    category: "LinkedIn",
    title: "A Recruiter’s Guide to Effective Outreach",
    description:
      "Actionable tips for recruiters to find the right talent and start meaningful conversations.",
    date: "Sep 8, 2026",
    readTime: "6 min read",
    slug: "recruiter-outreach-guide",
  },
];

const trendingPosts = [posts[0], posts[1], posts[3]];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [search, setSearch] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        activeCategory === "All Posts" || post.category === activeCategory;

      const matchesSearch =
        !query ||
        `${post.title} ${post.description} ${post.category}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const openPost = (slug) => {
    // Replace with your React Router navigation if needed.
    window.location.href = `/blog/${slug}`;
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect your newsletter API here.
    // Only mark subscribed after a successful API response.
    console.log("Newsletter subscription:", email);
  };

  return (
    <main className="relay-blog">
      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-hero-orb blog-hero-orb-left" />
        <div className="blog-hero-orb blog-hero-orb-right" />

        <div className="blog-hero-inner">
          <div className="blog-hero-content">
            <span className="blog-eyebrow">BLOG</span>

            <h1>
              Tips, guides and insights
              <br className="desktop-break" /> for <span>better outreach</span>
            </h1>

            <p>
              Practical guides, templates and strategies to help you find the
              right people and start meaningful conversations.
            </p>
          </div>

          <div className="blog-hero-art" aria-hidden="true">
            <div className="hero-art-glow" />
            <div className="hero-art-document">
              <div className="art-doc-header">
                <span />
                <span />
              </div>
              <div className="art-doc-line long" />
              <div className="art-doc-line" />
              <div className="art-doc-profile">
                <div className="art-doc-avatar" />
                <div>
                  <span />
                  <span />
                </div>
              </div>
              <div className="art-doc-line" />
            </div>
            <Send className="hero-plane" strokeWidth={1.2} />
            <Sparkles className="hero-sparkle" />
            <div className="hero-dashed-orbit" />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="blog-main">
        <div className="blog-container">
          <div className="blog-layout">
            <div className="blog-content">
              {/* FILTER BAR */}
              <div className="blog-toolbar">
                <div className="blog-categories">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      className={`blog-category-btn ${
                        activeCategory === category ? "active" : ""
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="blog-search">
                  <Search size={19} strokeWidth={1.8} />
                  <input
                    type="search"
                    placeholder="Search articles..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search articles"
                  />
                </div>
              </div>

              {/* BLOG CARDS */}
              {filteredPosts.length > 0 ? (
                <div className="blog-post-grid">
                  {filteredPosts.map((post) => (
                    <article className="blog-card" key={post.id}>
                      {/* Empty image placeholder */}
                      <div className="blog-card-image" />

                      <div className="blog-card-body">
                        <span className="blog-card-category">
                          {post.category}
                        </span>

                        <h2>{post.title}</h2>

                        <p className="blog-card-description">
                          {post.description}
                        </p>

                        <div className="blog-card-footer">
                          <div className="blog-card-meta">
                            <span>{post.date}</span>
                            <span className="meta-dot">•</span>
                            <span>{post.readTime}</span>
                          </div>

                          <button
                            type="button"
                            className="blog-card-arrow"
                            aria-label={`Read ${post.title}`}
                            onClick={() => openPost(post.slug)}
                          >
                            <ChevronRight size={19} />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="blog-empty-state">
                  <Search size={30} />
                  <h3>No articles found</h3>
                  <p>Try another search or category.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveCategory("All Posts");
                    }}
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>

            {/* SIDEBAR */}
            {/* <aside className="blog-sidebar">
             
              <div className="blog-sidebar-card trending-card">
                <div className="sidebar-heading">
                  <TrendingUp size={23} strokeWidth={2.5} />
                  <h3>Trending Posts</h3>
                </div>

                <div className="trending-list">
                  {trendingPosts.map((post) => (
                    <button
                      key={post.id}
                      type="button"
                      className="trending-item"
                      onClick={() => openPost(post.slug)}
                    >
                      <div className="trending-image" />

                      <div className="trending-info">
                        <h4>{post.title}</h4>
                        <div className="trending-meta">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            
              <div className="blog-sidebar-card newsletter-card">
                <div className="newsletter-icon">
                  <Mail size={23} />
                </div>

                <h3>Get new posts in your inbox</h3>

                <p>
                  Join our newsletter for the latest guides, templates and
                  product updates.
                </p>

                <form className="newsletter-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email address"
                  />

                  <button type="submit">Subscribe</button>
                </form>

                <span className="newsletter-note">
                  {subscribed
                    ? "Thanks for subscribing!"
                    : "No spam. Unsubscribe anytime."}
                </span>
              </div>
            </aside> */}
          </div>
        </div>
      </section>
    </main>
  );
}
