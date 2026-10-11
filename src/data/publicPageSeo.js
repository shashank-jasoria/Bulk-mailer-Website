/**
 * Single source of truth for SEO on public static Pacemailer website routes.
 * Used by both the production prerender script and the live React application.
 * Blog article metadata stays in BlogArticlePage/useArticleMetadata.
 *
 */
export const PUBLIC_PAGE_SEO = {
  "/": {
    title: "Pacemailer | LinkedIn Prospecting and Email Outreach",
    description:
      "Use Pacemailer's Chrome extension to discover professional contacts, check emails, and manage personalized outreach.",
  },
  "/about": {
    title: "About Pacemailer | Email Outreach Tools",
    description:
      "Learn about Pacemailer and its tools for finding professional contacts and managing personalized email outreach.",
  },
  "/pricing": {
    title: "Pacemailer Pricing | Choose Your Outreach Plan",
    description:
      "Explore Pacemailer plans for email discovery, verification, contact management, and outreach tools.",
  },
  "/contact": {
    title: "Contact Pacemailer | Questions and Support",
    description:
      "Contact the Pacemailer team with questions about the Chrome extension, email outreach tools, or your account.",
  },
  "/blog": {
    title: "Pacemailer Blog | LinkedIn Prospecting and Email Outreach Guides",
    description:
      "Practical tutorials on LinkedIn prospecting, professional email discovery, verification, and personalized outreach.",
  },
};
