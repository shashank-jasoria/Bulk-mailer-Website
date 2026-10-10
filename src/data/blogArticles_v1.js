/**
 * Content for the blog listing AND individual article pages.
 * Add a new object to publish another article using the same layout.
 * All dates are ISO strings for valid <time> elements and SEO metadata.
 * Review article copy, author, and dates before publishing.
 */
export const blogPosts = [
  {
    id: 1,
    slug: "find-verify-linkedin-emails",
    category: "LinkedIn",
    title: "How to Find and Verify Professional Emails on LinkedIn",
    description:
      "A step-by-step guide to finding professional emails, common email formats, and how to verify them before reaching out.",
    date: "Sep 28, 2026",
    publishedAt: "2026-09-28",
    readTime: "5 min read",
    author: "Shashank J",
    image: "/blog/find-verify-linkedin-emails.svg",
    imageAlt:
      "Illustration of a professional contact directory, magnifying glass, and email envelope",
    sections: [
      {
        id: "why-linkedin",
        title: "Why LinkedIn is a Great Source for Outreach",
        blocks: [
          {
            type: "paragraph",
            text: "LinkedIn helps you identify the right people at organizations: their job titles, employers, professional backgrounds, and sometimes their public contact details. This context is valuable because it lets you tailor a message to a real person instead of sending generic outreach.",
          },
          {
            type: "paragraph",
            text: "LinkedIn profiles do not always display email addresses, and a visible address may not be intended for unsolicited outreach. A better approach is to verify the person's professional details, look for contact information they have chosen to publish, and respect their communication preferences.",
          },
          {
            type: "tip",
            title: "Tip",
            text: "Personalize your outreach around a genuine reason to connect. A relevant, respectful message is more useful than sending the same pitch to hundreds of people.",
          },
        ],
      },
      {
        id: "email-formats",
        title: "Common Email Formats Used by Companies",
        blocks: [
          {
            type: "paragraph",
            text: "Organizations often use predictable formats for work email addresses. Knowing the company domain and a contact's name can help you understand which format might apply, but a guessed address is not a confirmed address.",
          },
          {
            type: "code",
            label: "Common email patterns",
            lines: [
              "firstname.lastname@company.com",
              "firstinitiallastname@company.com",
              "firstnamelastname@company.com",
              "firstname@company.com",
            ],
          },
          {
            type: "paragraph",
            text: "For a fictional employee named Jordan Lee at example.com, possible formats could include jordan.lee@example.com or jlee@example.com. These are examples of patterns, not real verified addresses.",
          },
          {
            type: "list",
            items: [
              "Check the organization's official website for a publicly stated email format.",
              "Confirm the company domain before generating a possible address.",
              "Do not assume an address is valid merely because the format looks familiar.",
            ],
          },
          {
            type: "internalLink",
            slug: "company-email-formats",
            text: "Explore more company email format examples",
          },
        ],
      },
      {
        id: "verify-addresses",
        title: "How to Verify Email Addresses",
        blocks: [
          {
            type: "paragraph",
            text: "Before sending a message, check whether an address is correctly formatted and appears capable of receiving mail. Verification can reduce obvious errors, but no technique can guarantee delivery or a response.",
          },
          {
            type: "steps",
            items: [
              {
                title: "Check the syntax",
                text: "Look for typos, missing characters, spaces, and malformed domains. A valid-looking address is only the starting point.",
              },
              {
                title: "Check the domain",
                text: "Confirm that the domain belongs to the intended organization and has mail exchange (MX) records or another valid mail-routing configuration.",
              },
              {
                title: "Consider a reputable verification service",
                text: "Some services can identify risky or undeliverable addresses. Results may be inconclusive for catch-all domains or servers that restrict checks.",
              },
              {
                title: "Watch your bounce and complaint rates",
                text: "Remove consistently failing addresses and honor opt-outs to help protect your sending reputation.",
              },
            ],
          },
          {
            type: "tip",
            title: "Verification is not permission",
            text: "Even a technically deliverable address may not be appropriate to contact. Follow applicable privacy, marketing, and anti-spam rules.",
          },
        ],
      },
      {
        id: "helpful-tools",
        title: "Tools That Can Help",
        blocks: [
          {
            type: "paragraph",
            text: "A practical workflow may involve LinkedIn for professional context, an organization's own website for authoritative contact details, an email verification service for deliverability checks, and a place to track your outreach history.",
          },
          {
            type: "list",
            items: [
              "Professional profiles: check role, organization, and whether contact information is intentionally public.",
              "Company websites: find press, partnerships, careers, or contact pages relevant to your purpose.",
              "Email verification tools: flag obvious formatting and deliverability risks.",
              "Outreach tools: organize templates, personalize messages, and track follow-ups responsibly.",
            ],
          },
          {
            type: "paragraph",
            text: "Relay is designed to help make email outreach workflows more manageable. Use its available email lookup and validation features in accordance with your plan and the rules that apply to your outreach.",
          },
        ],
      },
      {
        id: "outreach-practices",
        title: "Best Practices for Outreach",
        blocks: [
          {
            type: "paragraph",
            text: "Finding an address is only a small part of good outreach. The message itself should be short, specific, accurate, and easy to decline.",
          },
          {
            type: "list",
            items: [
              "Explain why you are contacting this particular person.",
              "Use a clear subject line that reflects the actual message.",
              "Mention a relevant piece of context without pretending to know someone personally.",
              "Make one reasonable request rather than several competing asks.",
              "Respect opt-outs and stop following up when asked.",
              "Avoid sharing or retaining personal information longer than necessary.",
            ],
          },
          {
            type: "tip",
            title: "Keep it human",
            text: "Before sending, ask whether the recipient can understand the purpose of your email in under 20 seconds.",
          },
        ],
      },
      {
        id: "final-thoughts",
        title: "Final Thoughts",
        blocks: [
          {
            type: "paragraph",
            text: "The most effective process combines relevant professional research, careful address verification, and thoughtful communication. LinkedIn can help identify the right contact; a company's public information and verification checks can help reduce mistakes.",
          },
          {
            type: "paragraph",
            text: "Start with a small, relevant group of contacts and improve your outreach based on genuine replies rather than sending volume alone.",
          },
          {
            type: "internalLink",
            slug: "simple-outreach-workflow",
            text: "Next: build a simple outreach workflow",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "cold-email-templates",
    category: "Email Templates",
    title: "10 Cold Email Templates That Actually Get Replies",
    description:
      "Ready-to-use templates for different use cases, with tips on how to personalize them effectively.",
    date: "Sep 24, 2026",
    publishedAt: "2026-09-24",
    readTime: "7 min read",
    author: "Shashank J",
    image: "/blog/cold-email-templates.svg",
    imageAlt: "Illustration of colorful email templates and an envelope",
    sections: [
      {
        id: "good-templates",
        title: "What Makes a Cold Email Worth Reading?",
        blocks: [
          {
            type: "paragraph",
            text: "A template can save time, but the strongest email is still specific to the person receiving it. Effective messages usually explain why you are reaching out, offer something relevant, and end with a clear, low-pressure question.",
          },
          {
            type: "tip",
            title: "Before you copy",
            text: "Replace every placeholder with accurate information. Never imply a relationship, referral, or past conversation that did not happen.",
          },
        ],
      },
      {
        id: "ten-templates",
        title: "10 Adaptable Cold Email Templates",
        blocks: [
          {
            type: "paragraph",
            text: "These are starting points for legitimate business introductions, partnerships, and professional networking. None can guarantee a reply.",
          },
          {
            type: "template",
            title: "1. Quick introduction",
            lines: [
              "Subject: Quick introduction, {{firstName}}",
              "",
              "Hi {{firstName}},",
              "I came across your work on {{relevantProject}}. I help teams with {{specificOutcome}} and thought there might be a useful connection.",
              "Would you be open to a brief conversation next week?",
              "Best, {{yourName}}",
            ],
          },
          {
            type: "template",
            title: "2. Relevant idea",
            lines: [
              "Subject: An idea for {{company}}",
              "",
              "Hi {{firstName}},",
              "I noticed {{specificObservation}}. One approach worth considering could be {{shortSuggestion}}.",
              "Would it be helpful if I sent a two-minute overview?",
              "{{yourName}}",
            ],
          },
          {
            type: "template",
            title: "3. Partnership introduction",
            lines: [
              "Subject: Possible partnership with {{company}}",
              "",
              "Hi {{firstName}},",
              "Our team focuses on {{yourFocus}}, which seems complementary to {{theirFocus}} at {{company}}.",
              "Is exploring a small collaboration on your roadmap?",
              "{{yourName}}",
            ],
          },
          {
            type: "template",
            title: "4. Recruiter to candidate",
            lines: [
              "Subject: Opportunity related to {{skill}}",
              "",
              "Hi {{firstName}},",
              "Your background in {{specificSkill}} caught my attention. I'm working on a {{roleTitle}} opening at {{company}} that may align with your experience.",
              "Would you like me to share the role details?",
              "{{yourName}}",
            ],
          },
          {
            type: "template",
            title: "5. Request for feedback",
            lines: [
              "Subject: Could I ask for your perspective?",
              "",
              "Hi {{firstName}},",
              "I'm researching {{topic}} and appreciated your perspective on {{specificWork}}.",
              "If you have time, could I ask one short question about {{focusedQuestion}}?",
              "Thanks, {{yourName}}",
            ],
          },
          {
            type: "template",
            title: "6. Content follow-up",
            lines: [
              "Subject: Your post about {{topic}}",
              "",
              "Hi {{firstName}},",
              "I read your post on {{topic}}, particularly the point about {{specificDetail}}.",
              "I thought you might find {{relevantResource}} useful. Happy to send it if that's of interest.",
              "{{yourName}}",
            ],
          },
          {
            type: "template",
            title: "7. Event connection",
            lines: [
              "Subject: Following up on {{event}}",
              "",
              "Hi {{firstName}},",
              "I enjoyed your comments on {{topic}} at {{event}}. Your point about {{specificInsight}} stood out.",
              "Would you be interested in comparing notes?",
              "{{yourName}}",
            ],
          },
          {
            type: "template",
            title: "8. Customer research",
            lines: [
              "Subject: Question about {{workflow}}",
              "",
              "Hi {{firstName}},",
              "I'm speaking with people who manage {{workflow}} to better understand common challenges.",
              "Would you be willing to share a quick insight? No pitch involved.",
              "{{yourName}}",
            ],
          },
          {
            type: "template",
            title: "9. A considerate follow-up",
            lines: [
              "Subject: Re: {{previousSubject}}",
              "",
              "Hi {{firstName}},",
              "Just following up on my earlier note about {{topic}}. If it's not relevant, no worries at all.",
              "Would you prefer I close the loop?",
              "{{yourName}}",
            ],
          },
          {
            type: "template",
            title: "10. Friendly close-the-loop",
            lines: [
              "Subject: Closing the loop",
              "",
              "Hi {{firstName}},",
              "I haven't heard back, so I'll assume now isn't the right time and won't keep following up.",
              "Thanks for considering it, and all the best.",
              "{{yourName}}",
            ],
          },
        ],
      },
      {
        id: "personalize",
        title: "How to Personalize Without Sounding Automated",
        blocks: [
          {
            type: "list",
            items: [
              "Use a genuine, recent reason to contact the person.",
              "Replace broad claims with specific facts you can support.",
              "Keep the first email easy to scan on a phone.",
              "Ask for one small next step, not a full commitment.",
              "Make opting out easy and respect a declined invitation.",
            ],
          },
          {
            type: "paragraph",
            text: "Templates are useful when they create consistency. Personalization is what makes each message relevant.",
          },
        ],
      },
      {
        id: "measure-results",
        title: "Measure Outcomes Thoughtfully",
        blocks: [
          {
            type: "paragraph",
            text: "Focus on meaningful replies and conversations rather than open rates alone. Opens may be affected by privacy protections or automated image loading, so they are an imperfect signal.",
          },
          {
            type: "internalLink",
            slug: "simple-outreach-workflow",
            text: "Build a repeatable outreach workflow",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "simple-outreach-workflow",
    category: "Productivity",
    title: "How to Build a Simple Outreach Workflow",
    description:
      "A practical workflow to find contacts, prepare emails, personalize messages, and follow up in one place.",
    date: "Sep 20, 2026",
    publishedAt: "2026-09-20",
    readTime: "6 min read",
    author: "Shashank J",
    image: "/blog/simple-outreach-workflow.svg",
    imageAlt: "Illustration of connected workflow steps and an email",
    sections: [
      {
        id: "set-goal",
        title: "Start With One Clear Goal",
        blocks: [
          {
            type: "paragraph",
            text: "Before collecting contacts, define the outcome you want: an introduction, a candidate conversation, user research, or a partnership discussion. A specific goal makes it easier to decide whom to contact and what to say.",
          },
          {
            type: "tip",
            title: "Try this",
            text: "Write the outcome as one sentence, such as: 'Start five thoughtful conversations with people responsible for partnerships at small software companies.'",
          },
        ],
      },
      {
        id: "qualify-contacts",
        title: "Research and Qualify Contacts",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Choose a narrow audience",
                text: "Identify the role, organization type, geography, and reason your message would be relevant.",
              },
              {
                title: "Verify professional details",
                text: "Use information people have made public to check their current responsibilities and company.",
              },
              {
                title: "Use appropriate contact channels",
                text: "Prefer intentionally published business contact details and honor privacy preferences.",
              },
            ],
          },
        ],
      },
      {
        id: "prepare-messages",
        title: "Prepare a Few Helpful Messages",
        blocks: [
          {
            type: "paragraph",
            text: "Create one concise message for each outreach purpose instead of a huge library of barely different emails. Your template should have space for a relevant observation, a useful reason to connect, and one next step.",
          },
          {
            type: "internalLink",
            slug: "cold-email-templates",
            text: "Browse 10 email templates you can adapt",
          },
        ],
      },
      {
        id: "send-followup",
        title: "Send Carefully and Follow Up Respectfully",
        blocks: [
          {
            type: "list",
            items: [
              "Verify addresses where appropriate before you send.",
              "Double-check recipient names, job titles, and personalization fields.",
              "Avoid repetitive follow-ups; leave adequate time for replies.",
              "Stop contacting anyone who opts out.",
              "Keep a clear record of the last message and next action.",
            ],
          },
        ],
      },
      {
        id: "improve-process",
        title: "Review, Learn, and Improve",
        blocks: [
          {
            type: "paragraph",
            text: "Review the quality of conversations, not just how many emails were sent. Track useful replies, common questions, and reasons people were not interested. Improve the targeting or offer before increasing volume.",
          },
          {
            type: "tip",
            title: "Keep it simple",
            text: "A small repeatable workflow that you can maintain is better than a complicated process you abandon after a week.",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "company-email-formats",
    category: "Outreach Tips",
    title: "Common Company Email Formats (with Examples)",
    description:
      "The most common corporate email address patterns and how to identify the format carefully.",
    date: "Sep 16, 2026",
    publishedAt: "2026-09-16",
    readTime: "4 min read",
    author: "Shashank J",
    image: "/blog/company-email-formats.svg",
    imageAlt: "Illustration of an at symbol and formatted email addresses",
    sections: [
      {
        id: "what-is-format",
        title: "What Is a Company Email Format?",
        blocks: [
          {
            type: "paragraph",
            text: "A company email format is a naming pattern used to create work addresses, such as firstname.lastname@company.com. Some organizations use one standard format; others use multiple formats or role-based inboxes.",
          },
        ],
      },
      {
        id: "common-patterns",
        title: "The Most Common Email Patterns",
        blocks: [
          {
            type: "code",
            label: "Illustrative patterns",
            lines: [
              "firstname.lastname@example.com",
              "firstnamelastname@example.com",
              "firstinitiallastname@example.com",
              "firstname@example.com",
              "lastname.firstname@example.com",
              "firstinitial.lastname@example.com",
            ],
          },
          {
            type: "paragraph",
            text: "For a fictional employee called Alex Rivera, an address might follow the pattern alex.rivera@example.com or arivera@example.com. This does not establish that either address is real.",
          },
        ],
      },
      {
        id: "identify-format",
        title: "How to Identify an Organization's Format",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Confirm the domain",
                text: "Use the company's official website rather than assuming the domain matches its display name.",
              },
              {
                title: "Look for intentionally published addresses",
                text: "Public press, support, partnership, or team pages may show the naming convention.",
              },
              {
                title: "Cross-check carefully",
                text: "One address alone may be an exception; organizations sometimes use aliases or different rules by team.",
              },
              {
                title: "Verify before sending",
                text: "Treat inferred addresses as unconfirmed until an appropriate verification step supports them.",
              },
            ],
          },
        ],
      },
      {
        id: "common-mistakes",
        title: "Mistakes to Avoid",
        blocks: [
          {
            type: "list",
            items: [
              "Assuming every employee shares the same pattern.",
              "Mistaking a guessed address for a verified one.",
              "Ignoring domain changes after mergers or rebranding.",
              "Sending to a personal address when a professional channel is more appropriate.",
            ],
          },
          {
            type: "internalLink",
            slug: "find-verify-linkedin-emails",
            text: "Learn how to find and verify professional email addresses",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: "introducing-relay",
    category: "Product Updates",
    title: "Introducing Relay: A New Way to Simplify Outreach",
    description:
      "Why we built Relay, what problem it aims to solve, and what we're working toward.",
    date: "Sep 12, 2026",
    publishedAt: "2026-09-12",
    readTime: "3 min read",
    author: "Shashank J",
    image: "/blog/introducing-relay.svg",
    imageAlt: "Illustration of a purple envelope and connected outreach cards",
    sections: [
      {
        id: "problem",
        title: "Why Outreach Feels More Complicated Than It Should",
        blocks: [
          {
            type: "paragraph",
            text: "Professional outreach often involves several disconnected steps: researching a contact, finding an appropriate channel, preparing a message, checking an address, choosing an email account, and tracking what happened next.",
          },
          {
            type: "paragraph",
            text: "We built Relay around a simpler idea: make these everyday steps easier to manage while keeping the person receiving the message at the center of the process.",
          },
        ],
      },
      {
        id: "relay-approach",
        title: "Our Approach",
        blocks: [
          {
            type: "list",
            items: [
              "Make contact research more useful when you are working with professional profiles.",
              "Offer reusable templates to reduce repetitive writing.",
              "Provide email validation and engagement insights where supported by your plan.",
              "Help manage outreach from connected email accounts.",
              "Make plan limits clear so usage is predictable.",
            ],
          },
          {
            type: "tip",
            title: "Built for intentional communication",
            text: "The goal is not to send the greatest number of emails. It is to help you prepare relevant messages and keep your workflow organized.",
          },
        ],
      },
      {
        id: "getting-started",
        title: "Getting Started",
        blocks: [
          {
            type: "paragraph",
            text: "Start with a real outreach goal, prepare a short message, and choose a group of people for whom it is genuinely relevant. Explore the features available on your Relay account and review your usage limits before scaling a workflow.",
          },
          {
            type: "internalLink",
            slug: "simple-outreach-workflow",
            text: "Read our guide to a simple outreach workflow",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: "recruiter-outreach-guide",
    category: "LinkedIn",
    title: "A Recruiter's Guide to Effective Outreach",
    description:
      "Actionable tips for recruiters to find the right talent and start meaningful professional conversations.",
    date: "Sep 8, 2026",
    publishedAt: "2026-09-08",
    readTime: "6 min read",
    author: "Shashank J",
    image: "/blog/recruiter-outreach-guide.svg",
    imageAlt:
      "Illustration of candidate profiles connected to an email envelope",
    sections: [
      {
        id: "define-role",
        title: "Define the Role Before Reaching Out",
        blocks: [
          {
            type: "paragraph",
            text: "A thoughtful recruiter message begins with a clear understanding of the role, including must-have skills, team priorities, work arrangements, and compensation information you are allowed to share.",
          },
          {
            type: "tip",
            title: "Specific beats generic",
            text: "Candidates are more likely to understand your message when you explain the actual opportunity rather than calling it simply 'exciting.'",
          },
        ],
      },
      {
        id: "research-candidates",
        title: "Find and Research Relevant Candidates",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "Start with skills and scope",
                text: "Look beyond job titles to the work someone has actually done and the direction they want to grow.",
              },
              {
                title: "Read professional context",
                text: "Use public information about experience, projects, and interests to decide whether the role may be relevant.",
              },
              {
                title: "Choose an appropriate channel",
                text: "Use professional contact details or platform messaging with respect for privacy and preferences.",
              },
            ],
          },
        ],
      },
      {
        id: "write-introduction",
        title: "Write a Message Worth Answering",
        blocks: [
          {
            type: "paragraph",
            text: "Mention the role, one concrete reason you thought of the candidate, and a straightforward next step. Be transparent about who you represent and avoid inflated promises.",
          },
          {
            type: "template",
            title: "Sample recruiter introduction",
            lines: [
              "Subject: {{roleTitle}} opportunity at {{company}}",
              "",
              "Hi {{firstName}},",
              "I came across your work on {{specificProject}} and thought your experience in {{relevantSkill}} could align with a {{roleTitle}} role at {{company}}.",
              "Would you be interested in seeing a short role summary?",
              "Best, {{recruiterName}}",
            ],
          },
        ],
      },
      {
        id: "follow-up",
        title: "Follow Up With Respect",
        blocks: [
          {
            type: "list",
            items: [
              "Give candidates enough time to consider an opportunity.",
              "Make it easy for them to say no or request more information.",
              "Avoid repeat messages through multiple channels after an opt-out.",
              "Keep candidate information accurate, secure, and limited to recruiting needs.",
            ],
          },
        ],
      },
      {
        id: "improve-recruiting",
        title: "Build a Better Recruiting Process",
        blocks: [
          {
            type: "paragraph",
            text: "The quality of candidate conversations matters more than raw message volume. Review which roles and messages lead to useful exchanges, communicate clearly, and adjust your targeting when feedback suggests a mismatch.",
          },
          {
            type: "internalLink",
            slug: "cold-email-templates",
            text: "See additional outreach email templates",
          },
        ],
      },
    ],
  },
];

export function getBlogArticle(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export const trendingPosts = [blogPosts[0], blogPosts[1], blogPosts[3]];
