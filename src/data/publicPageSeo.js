/**
 * Single source of truth for SEO on public static Relay website routes.
 * Used by both the production prerender script and the live React application.
 * Blog article metadata stays in BlogArticlePage/useArticleMetadata.
 */
export const PUBLIC_PAGE_SEO = {
  "/": {
    title: "Relay | LinkedIn Prospecting and Email Outreach",
    description:
      "Use Relay's Chrome extension to discover professional contacts, check emails, and manage personalized outreach.",
  },
  "/about": {
    title: "About Relay | Email Outreach Tools",
    description:
      "Learn about Relay and its tools for finding professional contacts and managing personalized email outreach.",
  },
  "/pricing": {
    title: "Relay Pricing | Choose Your Outreach Plan",
    description:
      "Explore Relay plans for email discovery, verification, contact management, and outreach tools.",
  },
  "/contact": {
    title: "Contact Relay | Questions and Support",
    description:
      "Contact the Relay team with questions about the Chrome extension, email outreach tools, or your account.",
  },
  "/blog": {
    title: "Relay Blog | LinkedIn Prospecting and Email Outreach Guides",
    description:
      "Practical tutorials on LinkedIn prospecting, professional email discovery, verification, and personalized outreach.",
  },
};
