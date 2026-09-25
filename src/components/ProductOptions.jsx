import React from "react";
import ProductSection from "./ProductSection";

const productSections = [
  {
    eyebrow: "Prospect capture",
    title: "Save the person while you are already doing the research.",
    description:
      "Capture key prospect details directly from your browsing workflow, or add a contact manually when LinkedIn is not part of the process.",
    features: [
      {
        title: "Browser-first capture",
        description:
          "Collect the prospect context without bouncing between tabs and spreadsheets.",
      },
      {
        title: "LinkedIn when it helps",
        description:
          "Use profile information as part of the workflow when you are prospecting on LinkedIn.",
      },
      {
        title: "Manual save when it does not",
        description:
          "Create a contact directly when you already know the name, company, role, or email.",
      },
    ],
  },
  {
    eyebrow: "Email discovery + validation",
    title: "Go from a name and company to an outreach-ready contact.",
    description:
      "Generate a likely professional address from company patterns, use overrides when needed, and validate before sending on supported plans.",
    badge: "Core + Pro validation",
    reverse: true,
    features: [
      {
        title: "Reusable company formats",
        description:
          "Remember patterns such as first.last@company.com instead of rebuilding them each time.",
      },
      {
        title: "Company overrides",
        description:
          "Keep prospecting the same company even when page data is incomplete or inconsistent.",
      },
      {
        title: "Verify before send",
        description:
          "Check the address first so the send decision is based on a clearer signal.",
      },
    ],
  },
  {
    eyebrow: "Personalized outreach",
    title: "Write once, personalize where it matters.",
    description:
      "Create reusable templates, insert prospect and company variables, attach relevant files, and keep outreach consistent without making it generic.",
    features: [
      {
        title: "Reusable templates",
        description: "Keep your best outreach structures ready for repeat use.",
      },
      {
        title: "Dynamic variables",
        description:
          "Personalize with contact fields plus custom variables for campaign-specific context.",
      },
      {
        title: "Attachments by plan",
        description:
          "Add files to supported templates while backend limits keep usage predictable.",
      },
    ],
  },
  {
    eyebrow: "Sending + account workflow",
    title: "Send through the inbox you already use.",
    description:
      "Connect supported mail providers, queue sending reliably, and keep daily plan limits enforced by the backend instead of the browser UI.",
    reverse: true,
    features: [
      {
        title: "Gmail and Microsoft ready",
        description:
          "Authorize supported accounts and send from the identity your recipients recognize.",
      },
      {
        title: "Queue-backed sending",
        description:
          "Move email work out of the request path so bulk actions are more reliable and retryable.",
      },
      {
        title: "Usage-aware limits",
        description:
          "Reserve available daily quota before work is queued to avoid accidental overuse.",
      },
    ],
  },
  {
    eyebrow: "Contacts + analytics",
    title: "See the full outreach history after the browser tab is gone.",
    description:
      "Use the dashboard to search contacts, review send activity, understand what has been opened on supported plans, and spot useful timing patterns.",
    features: [
      {
        title: "Searchable contact workspace",
        description:
          "Filter by company, role, email status, sent status, and other useful contact fields.",
      },
      {
        title: "Open tracking on Pro",
        description:
          "Distinguish tracked mail from untracked mail and review open activity where enabled.",
      },
      {
        title: "Activity heatmap",
        description:
          "Turn send and open history into a practical view of when outreach performs best.",
      },
    ],
  },
];

export default function ProductOptions() {
  return (
    <section className="section" id="product">
      <div className="container">
        <div className="section-heading section-heading--center reveal">
          <p className="section-kicker">From research to follow-up</p>
          <h2>One workspace around the full prospecting loop.</h2>
          <p>
            The extension handles the fast moment-by-moment workflow. Your SaaS
            backend and web app handle contacts, templates, sending, account
            access, billing, and analytics.
          </p>
        </div>

        <div className="product-stack">
          {productSections.map((section) => (
            <ProductSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </section>
  );
}
