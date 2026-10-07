import React from "react";
import ProductSection from "./ProductSection";
import {
  UserPlus,
  Save,
  Users,
  Copy,
  WandSparkles,
  Paperclip,
  Timer,
  Send,
  MailCheck,
  Search,
  SlidersHorizontal,
  Sparkles,
  BarChart3,
  TrendingUp,
  Eye,
} from "lucide-react";

// const productSections = [
//   {
//     eyebrow: "Prospect capture",
//     title: "Save the person while you are already doing the research.",
//     description:
//       "Capture key prospect details directly from your browsing workflow, or add a contact manually when LinkedIn is not part of the process.",
//     features: [
//       {
//         title: "Browser-first capture",
//         description:
//           "Collect the prospect context without bouncing between tabs and spreadsheets.",
//       },
//       {
//         title: "LinkedIn when it helps",
//         description:
//           "Use profile information as part of the workflow when you are prospecting on LinkedIn.",
//       },
//       {
//         title: "Manual save when it does not",
//         description:
//           "Create a contact directly when you already know the name, company, role, or email.",
//       },
//     ],
//   },
//   {
//     eyebrow: "Email discovery + validation",
//     title: "Go from a name and company to an outreach-ready contact.",
//     description:
//       "Generate a likely professional address from company patterns, use overrides when needed, and validate before sending on supported plans.",
//     badge: "Core + Pro validation",
//     reverse: true,
//     features: [
//       {
//         title: "Reusable company formats",
//         description:
//           "Remember patterns such as first.last@company.com instead of rebuilding them each time.",
//       },
//       {
//         title: "Company overrides",
//         description:
//           "Keep prospecting the same company even when page data is incomplete or inconsistent.",
//       },
//       {
//         title: "Verify before send",
//         description:
//           "Check the address first so the send decision is based on a clearer signal.",
//       },
//     ],
//   },
//   {
//     eyebrow: "Personalized outreach",
//     title: "Write once, personalize where it matters.",
//     description:
//       "Create reusable templates, insert prospect and company variables, attach relevant files, and keep outreach consistent without making it generic.",
//     features: [
//       {
//         title: "Reusable templates",
//         description: "Keep your best outreach structures ready for repeat use.",
//       },
//       {
//         title: "Dynamic variables",
//         description:
//           "Personalize with contact fields plus custom variables for campaign-specific context.",
//       },
//       {
//         title: "Attachments by plan",
//         description:
//           "Add files to supported templates while backend limits keep usage predictable.",
//       },
//     ],
//   },
//   {
//     eyebrow: "Sending + account workflow",
//     title: "Send through the inbox you already use.",
//     description:
//       "Connect supported mail providers, queue sending reliably, and keep daily plan limits enforced by the backend instead of the browser UI.",
//     reverse: true,
//     features: [
//       {
//         title: "Gmail and Microsoft ready",
//         description:
//           "Authorize supported accounts and send from the identity your recipients recognize.",
//       },
//       {
//         title: "Queue-backed sending",
//         description:
//           "Move email work out of the request path so bulk actions are more reliable and retryable.",
//       },
//       {
//         title: "Usage-aware limits",
//         description:
//           "Reserve available daily quota before work is queued to avoid accidental overuse.",
//       },
//     ],
//   },
//   {
//     eyebrow: "Contacts + analytics",
//     title: "See the full outreach history after the browser tab is gone.",
//     description:
//       "Use the dashboard to search contacts, review send activity, understand what has been opened on supported plans, and spot useful timing patterns.",
//     features: [
//       {
//         title: "Searchable contact workspace",
//         description:
//           "Filter by company, role, email status, sent status, and other useful contact fields.",
//       },
//       {
//         title: "Open tracking on Pro",
//         description:
//           "Distinguish tracked mail from untracked mail and review open activity where enabled.",
//       },
//       {
//         title: "Activity heatmap",
//         description:
//           "Turn send and open history into a practical view of when outreach performs best.",
//       },
//     ],
//   },
// ];

const productSections = [
  {
    eyebrow: "Prospect capture",
    title: "Save & Manage Contacts.",
    description:
      "Save prospects as you find them, automate contact capture, and keep everything organized in one place.",
    features: [
      {
        icon: UserPlus,
        title: "Save a contact",
        description: "Save contacs instantly while you're researching.",
      },
      {
        icon: Save,
        title: "Auto-save while you work",
        description: "Let Relay save contacts automatically as you browse.",
      },
      {
        icon: Users,
        title: "Manage Contacs",
        description:
          "Find, review, edit and manage your saved contacts in one place.",
      },
    ],
  },
  {
    eyebrow: "Templates",
    title: "Write once. Personalize every time.",
    description:
      "Create reusable email templates, personalize them with dynamic variables, and keep your attachments ready to send.",
    badge: "Core + Pro validation",
    reverse: true,
    features: [
      {
        icon: Copy,
        title: "Reusable Templates",
        description:
          "Save the emails you send most often and reuse them whenever you need.",
      },
      {
        icon: WandSparkles,
        title: "Personalize with Variables",
        description:
          "Add names, companies, and custom details to make every email feel personal.",
      },
      {
        icon: Paperclip,
        title: "Attach Files",
        description:
          "Add your resume, portfolio, or other documents ready to include with your email.",
      },
    ],
  },
  {
    eyebrow: "Email sending",
    title: "Send emails through the inbox you already use.",
    description:
      "Control your sending speed, use your personal email account, and verify recipients before sending.",
    features: [
      {
        icon: Timer,
        title: "Queue at your pace",
        description:
          "Choose your sending speed, from 60 to 240+ emails per hour.",
      },
      {
        icon: Send,
        title: "Send from your account",
        description:
          "Send emails directly from your connected personal email account.",
      },
      {
        icon: MailCheck,
        title: "Verify & send",
        description:
          "Verify recipients first, then send only to the contacts you choose.",
      },
    ],
  },
  {
    eyebrow: "Email discovery",
    title: "Find the right email, your way.",
    description:
      "Use Relay's email tools to find an address, discover a company's pattern, or generate one automatically.",
    features: [
      {
        icon: Search,
        title: "Use email finding tools",
        description:
          "Already have an email finder? Use the address directly in Relay.",
      },
      {
        icon: SlidersHorizontal,
        title: "Find the company pattern",
        description:
          "Check a few company emails to identify their common email format.",
      },
      {
        icon: Sparkles,
        title: "Generate emails automatically",
        description:
          "Set the format once and let Relay generate emails for new contacts.",
      },
    ],
  },
  {
    eyebrow: "Outreach insights",
    title: "Know what works best.",
    description:
      "Track your outreach, discover what gets the best results, and understand how people engage with your emails.",
    features: [
      {
        icon: BarChart3,
        title: "Track your outreach",
        description:
          "See your contacts, emails sent, and overall activity at a glance.",
      },
      {
        icon: TrendingUp,
        title: "Find what works best",
        description:
          "Discover the best times and templates for getting more responses.",
      },
      {
        icon: Eye,
        title: "See email activity",
        description: "Know who opened your emails and when they opened them.",
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
