/**
 * Relay blog content — editorial rewrite for the actual product workflow.
 *
 * Compatible with BlogPage.jsx, BlogArticlePage.jsx, sitemap generation,
 * and the Hostinger static prerenderer.
 *
 * Before deployment:
 * - Verify dates and authors; publish dates should reflect real publication.
 * - Update updatedAt to the day the revised articles are actually published.
 * - Confirm every product capability against the current released UI.
 * - Review applicable communication, privacy, and platform rules.
 *
 * Only existing renderer-supported block types are used:
 * paragraph, list, steps, tip, code, template, internalLink.
 */
export const blogPosts = [
  {
    "id": 1,
    "slug": "find-verify-linkedin-emails",
    "category": "LinkedIn",
    "title": "How to Find and Verify Emails from LinkedIn",
    "description": "Learn how to find LinkedIn prospects, reveal available work emails, generate possible addresses, and verify them before outreach with Relay.",
    "date": "Sep 28, 2026",
    "publishedAt": "2026-09-28",
    "updatedAt": "2026-10-10",
    "readTime": "7 min read",
    "author": "Shashank J",
    "image": "/blog/find-verify-linkedin-emails.svg",
    "imageAlt": "Professional contact directory, magnifying glass, and email envelope",
    "intro": "A LinkedIn profile can tell you whom you want to contact, but it does not always tell you which email address is appropriate. This practical guide separates finding an existing email from generating a possible one, then shows how Relay can help you verify, save, and contact a prospect thoughtfully.",
    "sections": [
      {
        "id": "start-with-profile",
        "title": "Start With the Person, Not an Email Guess",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Before searching for an address, open the relevant LinkedIn profile and check the name, current role, company, and the reason your message would matter. A correct address sent to the wrong person is still poor outreach. For example, a partnership proposal belongs with someone who handles partnerships, not necessarily the most senior employee."
          },
          {
            "type": "paragraph",
            "text": "Relay works as a Chrome extension alongside your LinkedIn workflow. It can bring available profile details into your contact workflow, reducing repeated copying between browser tabs. Check extracted fields before saving, especially company names and job titles, because public profiles and page layouts can be incomplete or out of date."
          },
          {
            "type": "list",
            "items": [
              "Confirm that the profile represents the person you intend to reach.",
              "Check the current employer and its official website.",
              "Write down one specific reason for contacting this person.",
              "Prefer a business contact channel that is appropriate for your purpose."
            ]
          },
          {
            "type": "tip",
            "title": "Better prospecting starts with relevance",
            "text": "A list of ten well-matched prospects with a genuine reason to talk is often more useful than a list of hundreds of poorly qualified names."
          }
        ]
      },
      {
        "id": "reveal-vs-generate",
        "title": "Understand the Difference: Reveal an Email or Generate One",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Relay supports two distinct paths. When an existing email match is available in its email data, the availability check can show a masked address, such as ****@example.com, with a verification status. Choosing Reveal returns the actual available address, subject to your account's daily reveal allowance. The availability check itself does not reveal the full address."
          },
          {
            "type": "paragraph",
            "text": "If an appropriate existing match is not available, you may be able to generate a possible work address from a person's name, an organization's domain, and its email-naming convention. Generation is an inference: a plausible-looking address is not proof that a mailbox exists or belongs to that person."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Look for an existing match",
                "text": "Check the masked availability information, including the domain and any verification status, before deciding to reveal."
              },
              {
                "title": "Reveal only a relevant result",
                "text": "Use a reveal when the match fits the person and your legitimate outreach purpose; reveals use a separate daily plan quota."
              },
              {
                "title": "Use format-based generation when appropriate",
                "text": "If you have reliable company and domain details, a naming pattern can produce a candidate address to evaluate—not a verified contact."
              },
              {
                "title": "Verify and review",
                "text": "Check the address and the recipient context before sending a message."
              }
            ]
          },
          {
            "type": "tip",
            "title": "Two quotas, two purposes",
            "text": "Relay tracks daily email reveals separately from daily email sending. Their allowances can be configured independently by plan, so do not assume a reveal automatically consumes a sending credit."
          }
        ]
      },
      {
        "id": "company-email-patterns",
        "title": "Recognize Common Company Email Patterns",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Organizations often use a consistent naming convention for work addresses, although exceptions are common. For a fictional contact named Jordan Lee at example.com, these patterns illustrate how an address might be constructed."
          },
          {
            "type": "code",
            "label": "Illustrative formats — not confirmed inboxes",
            "lines": [
              "jordan.lee@example.com",
              "jlee@example.com",
              "jordanl@example.com",
              "jordan@example.com"
            ]
          },
          {
            "type": "paragraph",
            "text": "Start by confirming the real company domain from its official website. A company can have several domains, subsidiaries, acquired brands, or role-specific aliases. Relay's company-format and company-override tools can help you work more consistently when profiles show ambiguous company details, but the underlying information still needs human review."
          },
          {
            "type": "internalLink",
            "slug": "company-email-formats",
            "text": "See a complete guide to work email formats and company overrides"
          }
        ]
      },
      {
        "id": "verify-before-send",
        "title": "Verify the Address Before You Send",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Email verification helps distinguish obviously malformed or risky addresses from addresses that appear more likely to accept mail. It is not a promise of delivery, and it is never proof that someone wants a marketing message."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Check syntax",
                "text": "Catch missing @ signs, misspelled domains, spaces, and other formatting errors."
              },
              {
                "title": "Check domain information",
                "text": "Confirm the organization's actual domain and, when relevant, that it has a mail-routing configuration."
              },
              {
                "title": "Use verification where your plan supports it",
                "text": "Relay's Verify & Send workflow can check an address before sending. Treat valid, invalid, and unknown results differently; unknown is not the same as verified."
              },
              {
                "title": "Review the context",
                "text": "Even a technically valid mailbox may not belong to the intended person or be appropriate for your outreach."
              }
            ]
          },
          {
            "type": "tip",
            "title": "Verified does not mean guaranteed",
            "text": "Mail providers can reject messages for policy, authentication, reputation, mailbox, or other reasons after a verification check. Follow bounce and opt-out signals, not just a status badge."
          }
        ]
      },
      {
        "id": "save-and-personalize",
        "title": "Save the Contact and Write a Relevant Message",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Once you have reviewed the prospect, save the contact in Relay instead of rebuilding the same record later. Your contact workflow can keep the person, company, LinkedIn URL, email details, and sending history together. Review auto-saved contacts just as carefully as those saved manually."
          },
          {
            "type": "paragraph",
            "text": "Next, select an email template for the purpose of your message. Relay supports reusable templates and fields such as {{firstName}} and {{company}}; additional custom variables can be configured where your plan allows them. Replace or configure any placeholder that is not available in your account before sending."
          },
          {
            "type": "code",
            "label": "Example of a short, relevant introduction",
            "lines": [
              "Subject: Question about {{company}} partnerships",
              "",
              "Hi {{firstName}},",
              "I noticed your team is working on [specific, verified initiative].",
              "I have one idea that may be relevant to [clear goal].",
              "Would it be useful if I shared a short outline?",
              "",
              "Best,",
              "[Your name]"
            ]
          },
          {
            "type": "paragraph",
            "text": "The bracketed details above are meant to be researched and edited manually, not presented as facts Relay discovered. Double-check every merged field in your preview before sending."
          },
          {
            "type": "internalLink",
            "slug": "cold-email-templates",
            "text": "Explore ten adaptable outreach email templates"
          }
        ]
      },
      {
        "id": "send-and-review",
        "title": "Send at a Controlled Pace and Review Results",
        "blocks": [
          {
            "type": "paragraph",
            "text": "With a connected Gmail or Microsoft email account, Relay can place outgoing work into its sending queue. Its sending-speed controls help you manage the pace of outbound messages, while account limits constrain how many messages you can send. A slower pace is not a guarantee against spam filtering; message quality, permission, and provider policies still matter."
          },
          {
            "type": "paragraph",
            "text": "After sending, use the contact history and dashboard to review what happened. Available analytics depend on your plan. Email-open tracking, where enabled, is only a directional signal: some privacy features block or automatically load tracking images."
          },
          {
            "type": "list",
            "items": [
              "Track which contact was messaged and when.",
              "Watch failed sends and bounces rather than repeatedly retrying bad addresses.",
              "Measure useful responses and conversations, not only opens.",
              "Stop contacting people who ask not to receive further messages."
            ]
          },
          {
            "type": "tip",
            "title": "A responsible first batch",
            "text": "Start small, inspect each result, and improve your research and message before increasing volume."
          }
        ]
      },
      {
        "id": "next-steps",
        "title": "A Practical Checklist Before Your Next Reveal",
        "blocks": [
          {
            "type": "list",
            "items": [
              "The LinkedIn profile and employer are current.",
              "The company domain is correct.",
              "You understand whether the address is a revealed match or a generated possibility.",
              "You reviewed the verification status and its limitations.",
              "The message has a real reason to reach this person.",
              "The account and sending pace are appropriate for the email.",
              "You can record and respect a reply or opt-out."
            ]
          },
          {
            "type": "paragraph",
            "text": "Relay brings these steps into one workflow, but careful judgment is still the difference between useful prospecting and unwanted outreach. Build a routine you can repeat accurately rather than relying on the number of contacts collected."
          },
          {
            "type": "internalLink",
            "slug": "simple-outreach-workflow",
            "text": "Continue with a complete LinkedIn-to-email outreach workflow"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "slug": "cold-email-templates",
    "category": "Email Templates",
    "title": "10 Cold Email Templates for Personalized Outreach",
    "description": "Ten outreach email templates for recruiters, partnerships, and networking, plus practical personalization tips using Relay templates and variables.",
    "date": "Sep 24, 2026",
    "publishedAt": "2026-09-24",
    "updatedAt": "2026-10-10",
    "readTime": "6 min read",
    "author": "Shashank J",
    "image": "/blog/cold-email-templates.svg",
    "imageAlt": "Reusable outreach templates and an email envelope",
    "intro": "A good cold email template saves typing without making every recipient feel interchangeable. These ten examples are designed for real professional introductions and can be adapted in Relay using contact fields, reusable templates, and—where available—custom variables.",
    "sections": [
      {
        "id": "what-good-template-does",
        "title": "What a Useful Cold Email Template Actually Does",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Most outreach fails before the call to action: the reader cannot tell why they were contacted. A useful template has four parts: a truthful reason to reach out, one piece of relevant context, a clear offer or question, and a low-pressure next step. Keep the subject line accurate and the body easy to read on a phone."
          },
          {
            "type": "paragraph",
            "text": "Relay helps keep reusable email copy in one place, but it cannot replace genuine research. Read the person's public professional information and replace generic lines with a specific observation you can verify. Do not fabricate a referral, past meeting, customer result, or familiarity."
          },
          {
            "type": "tip",
            "title": "Template placeholders need setup",
            "text": "Common fields such as {{firstName}} and {{company}} can be resolved by your configured Relay workflow. Placeholders such as {{specificProject}} or {{yourName}} below are examples: create suitable custom variables where supported, or replace them manually. Never send unresolved {{placeholders}}."
          }
        ]
      },
      {
        "id": "ten-templates",
        "title": "Ten Ready-to-Adapt Outreach Templates",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Choose the example closest to your reason for contacting someone. Each is a starting draft, not a promise of replies. Square-bracketed text indicates a detail you should research or fill in before sending."
          },
          {
            "type": "template",
            "title": "1. Simple professional introduction",
            "lines": [
              "Subject: Quick question, {{firstName}}",
              "",
              "Hi {{firstName}},",
              "I came across your work at {{company}} while looking into [specific area].",
              "I work on [what you do] and thought there might be a useful overlap.",
              "Would a short introduction be welcome?",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "template",
            "title": "2. Partnership opportunity",
            "lines": [
              "Subject: Potential fit with {{company}}",
              "",
              "Hi {{firstName}},",
              "I noticed {{company}} is focused on [public initiative].",
              "Our team works on [complementary area], and I have one idea for a small collaboration.",
              "Would it make sense to send you a two-paragraph outline?",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "template",
            "title": "3. Recruiter reaching out to a candidate",
            "lines": [
              "Subject: A role that may fit your background",
              "",
              "Hi {{firstName}},",
              "Your experience in [specific skill or project] caught my attention.",
              "I am recruiting for a [role] at [organization] with [one concrete, verified detail].",
              "May I share the role summary and compensation range?",
              "",
              "[Recruiter name]"
            ]
          },
          {
            "type": "template",
            "title": "4. Candidate reaching out to a hiring manager",
            "lines": [
              "Subject: Interest in [team or role] at {{company}}",
              "",
              "Hi {{firstName}},",
              "I am interested in [role/team] at {{company}} because [specific reason].",
              "My recent work on [relevant project] may be useful for your team.",
              "Is there an appropriate person or process for sharing a short introduction?",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "template",
            "title": "5. Business development introduction",
            "lines": [
              "Subject: Idea for [specific workflow] at {{company}}",
              "",
              "Hi {{firstName}},",
              "I noticed [verifiable observation about the business].",
              "We help teams with [precise problem], and I wondered whether this is on your roadmap.",
              "Would you be open to one relevant example?",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "template",
            "title": "6. Feedback or customer research request",
            "lines": [
              "Subject: One question about [workflow]",
              "",
              "Hi {{firstName}},",
              "I am researching how [specific role] teams handle [workflow].",
              "Your experience at {{company}} appears relevant to that question.",
              "Would you be willing to answer one short question? There is no sales pitch.",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "template",
            "title": "7. Thoughtful response to published content",
            "lines": [
              "Subject: Your post about [topic]",
              "",
              "Hi {{firstName}},",
              "I read your [post/article] about [topic], especially the point on [specific detail].",
              "It made me think about [relevant question or example].",
              "Would you be interested in a brief exchange?",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "template",
            "title": "8. Professional networking introduction",
            "lines": [
              "Subject: Connecting around [shared professional interest]",
              "",
              "Hi {{firstName}},",
              "I am working on [specific area] and found your work on [publicly described topic] useful.",
              "I would appreciate hearing how you approach [focused question].",
              "Would you be open to a short conversation?",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "template",
            "title": "9. One considerate follow-up",
            "lines": [
              "Subject: Re: [original subject]",
              "",
              "Hi {{firstName}},",
              "Following up once on my earlier note about [topic].",
              "If it is not relevant right now, no reply is necessary.",
              "If it is useful, I am happy to send more context.",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "template",
            "title": "10. Close the loop politely",
            "lines": [
              "Subject: Closing the loop",
              "",
              "Hi {{firstName}},",
              "I have not heard back, so I will close the loop here rather than keep following up.",
              "Thank you for your time, and best wishes with [relevant work].",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "paragraph",
            "text": "Avoid using the same follow-up for everyone. Some recipients may have already declined, opted out, or moved roles. Your contact history should determine whether a follow-up is appropriate."
          }
        ]
      },
      {
        "id": "relay-template-setup",
        "title": "Turn an Example Into a Relay Template",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "Choose a purpose",
                "text": "Create a template for a specific situation, such as recruiting or partnership introductions, rather than one all-purpose sales email."
              },
              {
                "title": "Add a clear subject and body",
                "text": "Paste the example into a Relay template and remove any lines that are not true for your outreach."
              },
              {
                "title": "Check contact fields",
                "text": "Use supported contact variables such as {{firstName}} and {{company}}. Configure additional custom variables in your account if your plan allows them."
              },
              {
                "title": "Preview the final message",
                "text": "Confirm that every placeholder resolves correctly and that the recipient, company, and offer match the contact."
              },
              {
                "title": "Verify and send where available",
                "text": "Use Relay's verification options and choose an appropriate connected account and sending pace."
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "Relay applies plan-based limits to templates, custom variables, and attachments. Review your account allowances before creating a large library or adding supporting documents."
          },
          {
            "type": "tip",
            "title": "Attachments are not always necessary",
            "text": "A concise first email often works better without a large file. If you need an attachment, only upload it when your plan permits and when the recipient would reasonably expect it."
          }
        ]
      },
      {
        "id": "make-personalization-real",
        "title": "Make Personalization Specific, Not Artificial",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Personalization is not merely inserting a first name. It is explaining the real relevance of your message. Compare these openings:"
          },
          {
            "type": "code",
            "label": "Generic versus specific (fictional example)",
            "lines": [
              "GENERIC: I saw your profile and wanted to connect.",
              "",
              "SPECIFIC: I read your post about improving onboarding for",
              "distributed teams. Your point about reducing handoffs",
              "was relevant to a workflow I am researching."
            ]
          },
          {
            "type": "paragraph",
            "text": "The specific version is only better if you actually read that post. A message with invented detail is worse than an honest, simple introduction. Personalize for real fit, keep it brief, and make declining easy."
          },
          {
            "type": "list",
            "items": [
              "Mention one accurate reason this person is relevant.",
              "Use plain language instead of unsupported performance promises.",
              "Ask one question, not several unrelated questions.",
              "Respect replies, opt-outs, and company communication policies."
            ]
          }
        ]
      },
      {
        "id": "send-and-measure",
        "title": "Send Thoughtfully and Measure the Right Outcomes",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Relay can help send messages through connected Gmail or Microsoft accounts and manage queued sending and sending speed. These controls organize the workflow; they do not guarantee inbox placement. Use small, relevant batches rather than treating every available contact as an automatic send target."
          },
          {
            "type": "paragraph",
            "text": "Review useful replies, bounced messages, and conversations that move forward. Relay offers email-open tracking on supported plans, but privacy tools and image loading can make opens an unreliable measure of actual interest."
          },
          {
            "type": "internalLink",
            "slug": "simple-outreach-workflow",
            "text": "Build a step-by-step outreach workflow in Relay"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "slug": "simple-outreach-workflow",
    "category": "Productivity",
    "title": "LinkedIn Outreach Workflow: From Prospect to Email",
    "description": "A LinkedIn outreach workflow with Relay: research prospects, find or generate emails, verify, save contacts, personalize, send, and track results.",
    "date": "Sep 20, 2026",
    "publishedAt": "2026-09-20",
    "updatedAt": "2026-10-10",
    "readTime": "6 min read",
    "author": "Shashank J",
    "image": "/blog/simple-outreach-workflow.svg",
    "imageAlt": "Connected stages from LinkedIn research through email sending and review",
    "intro": "An outreach workflow becomes easier to improve when each action has a purpose. This walkthrough shows how to go from one LinkedIn profile to a researched contact, a checked email address, an appropriate personalized message, and a measurable next step—using Relay where it fits.",
    "sections": [
      {
        "id": "choose-outcome",
        "title": "Step 1: Define the Outcome and Target Audience",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Decide what a successful conversation would look like before saving any leads. Are you recruiting for a particular role, exploring a partnership, asking for customer research, or making a business development introduction? These goals require different contact criteria and different messages."
          },
          {
            "type": "paragraph",
            "text": "A usable audience definition might be: operations leads at small software companies working on a specific onboarding problem. That is more actionable than \"anyone with a manager title.\" Write down the role, relevant company characteristics, location if necessary, and one reason for contacting them."
          },
          {
            "type": "tip",
            "title": "Set a realistic first target",
            "text": "Start with a small set of well-matched contacts and measure conversation quality. Do not make the number of profiles collected your only definition of progress."
          }
        ]
      },
      {
        "id": "capture-linkedin-context",
        "title": "Step 2: Review LinkedIn Profiles and Capture Context",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Open each relevant LinkedIn profile and read the visible role, organization, experience, and publicly shared professional information. Relay's Chrome extension can help bring profile details into the contact workflow so you spend less time copying fields by hand."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Verify the person",
                "text": "Check whether their role is current and whether they are plausibly involved in your outreach topic."
              },
              {
                "title": "Confirm the company",
                "text": "Review the employer and official domain; use a company override only when the actual company context is known."
              },
              {
                "title": "Save the contact",
                "text": "Store the profile and relevant details in Relay so you can review, filter, and track the conversation later."
              },
              {
                "title": "Review automatically captured fields",
                "text": "Auto-save can reduce clicks, but incorrect contact information should still be corrected before use."
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "Relay's contact dashboard supports searching, filtering, and sorting contacts. It is helpful for preventing the same person from being treated as a completely new prospect every time you encounter their profile."
          }
        ]
      },
      {
        "id": "choose-email-route",
        "title": "Step 3: Decide Between Email Reveal and Email Generation",
        "blocks": [
          {
            "type": "paragraph",
            "text": "If an existing email match is available, Relay can show a masked result before you choose whether to reveal it. Review the domain and validation status first. The full address is only returned after a reveal action, and your plan may limit daily reveals."
          },
          {
            "type": "paragraph",
            "text": "If no suitable match is available, a company naming format can help infer a possible work address. The organization's domain and format must be checked carefully; generation is not evidence that the resulting mailbox exists."
          },
          {
            "type": "list",
            "items": [
              "Existing match: consider its relevance, domain, and verification status.",
              "Generated possibility: treat the result as unconfirmed until checked.",
              "Either way: choose an appropriate professional contact channel and respect privacy preferences."
            ]
          },
          {
            "type": "internalLink",
            "slug": "find-verify-linkedin-emails",
            "text": "Learn the full process for finding and verifying LinkedIn emails"
          }
        ]
      },
      {
        "id": "verify-and-organize",
        "title": "Step 4: Verify, Organize, and Segment Contacts",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Before preparing a send, clean up the contact details. Use Relay's verification workflow where supported by your plan, and pay attention to invalid or unknown statuses. A verification status is a technical signal, not consent to receive unsolicited messages."
          },
          {
            "type": "paragraph",
            "text": "Group contacts by reason for outreach rather than trying to send every contact the same text. You might keep separate workflows for prospective partners, job candidates, and people who explicitly requested information. That makes templates more relevant and follow-ups easier to review."
          },
          {
            "type": "tip",
            "title": "Treat unknown as unknown",
            "text": "A server may prevent definitive checks. Do not interpret an inconclusive verification result as a guarantee that an email address works."
          }
        ]
      },
      {
        "id": "write-with-templates",
        "title": "Step 5: Build and Preview a Reusable Message",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Create a concise Relay email template with a truthful subject line, an opening relevant to the person, and one useful next step. Contact variables such as {{firstName}} and {{company}} can reduce repetitive editing. For specific outreach details, use configured custom variables where supported or edit the text manually."
          },
          {
            "type": "code",
            "label": "Example outreach structure",
            "lines": [
              "Subject: Question about [specific initiative]",
              "",
              "Hi {{firstName}},",
              "I noticed [one accurate reason for reaching out].",
              "I am working on [short, relevant context].",
              "Would [simple next step] be useful?",
              "",
              "[Your name]"
            ]
          },
          {
            "type": "paragraph",
            "text": "Preview the final rendered message. Check company names, pronouns, signatures, links, and any attachments before sending. Relay limits available templates and custom variables by plan, so reuse a few high-quality templates instead of collecting dozens of nearly identical ones."
          },
          {
            "type": "internalLink",
            "slug": "cold-email-templates",
            "text": "Browse ten practical outreach templates"
          }
        ]
      },
      {
        "id": "queue-and-pace",
        "title": "Step 6: Choose a Connected Account and Sending Pace",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Relay supports sending through connected Gmail and Microsoft email accounts. Messages can be processed using its background sending queue, rather than relying on one long browser request. Choose the account that fits your communication purpose and check its current sending allowance."
          },
          {
            "type": "paragraph",
            "text": "Relay also includes sending-speed controls. Use them to select a pace appropriate for your account and workflow. Your daily sending quota is independent of your daily email reveal quota; revealing an address does not automatically mean you can send more messages."
          },
          {
            "type": "list",
            "items": [
              "Check the recipient list for duplicates and opt-outs.",
              "Confirm the sender account and authorization are correct.",
              "Review the daily quota and send only what is appropriate.",
              "Avoid interpreting a slower setting as a guarantee of deliverability."
            ]
          },
          {
            "type": "tip",
            "title": "Queues are about execution, not consent",
            "text": "A queue can reliably manage pending work, but it does not decide whether a person should be contacted. That remains your responsibility."
          }
        ]
      },
      {
        "id": "analyze-and-improve",
        "title": "Step 7: Review Results and Improve the Next Batch",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Use Relay's dashboard and contact history to see what was sent and identify records that need attention. Depending on the plan, additional email activity and open-tracking information may be available. A heatmap can show patterns, but small samples and tracking privacy limitations make simplistic conclusions risky."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Review technical outcomes",
                "text": "Look for sending failures, invalid addresses, or repeated bounces."
              },
              {
                "title": "Read meaningful replies",
                "text": "Record useful questions, objections, and invitations to continue—not just open counts."
              },
              {
                "title": "Improve one variable at a time",
                "text": "Adjust targeting, subject lines, or message relevance before dramatically increasing volume."
              },
              {
                "title": "Close the loop",
                "text": "Honor unsubscribe and opt-out requests, and avoid unnecessary follow-ups."
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "The goal is a repeatable system that saves manual effort while keeping each contact relevant. Start with the steps that matter most to your use case, then refine them as you learn."
          },
          {
            "type": "internalLink",
            "slug": "company-email-formats",
            "text": "Need better company-domain and email-format checks? Start here"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "slug": "company-email-formats",
    "category": "Outreach Tips",
    "title": "Company Email Formats: Examples and Verification Tips",
    "description": "Understand common work email patterns, how to confirm company domains, when to use Relay company overrides, and why generated addresses need verification.",
    "date": "Sep 16, 2026",
    "publishedAt": "2026-09-16",
    "updatedAt": "2026-10-10",
    "readTime": "4 min read",
    "author": "Shashank J",
    "image": "/blog/company-email-formats.svg",
    "imageAlt": "Email address examples and company naming patterns",
    "intro": "A company email format is a naming rule—not a directory of confirmed inboxes. Learn how to identify likely patterns, when a company override helps, and how to check a possible address before using it in professional outreach.",
    "sections": [
      {
        "id": "formats-explained",
        "title": "What Is a Company Email Format?",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Many organizations create employee email addresses using a repeatable pattern based on a person's name and a company domain. A pattern such as firstname.lastname@company.com describes how an address might be formed, but it does not establish that any particular mailbox exists."
          },
          {
            "type": "paragraph",
            "text": "Companies may maintain several patterns at once. Legacy employees, regional subsidiaries, contractors, role-based inboxes, acquired businesses, and employees with similar names can all be exceptions. Treat each format as a working hypothesis that needs confirmation."
          }
        ]
      },
      {
        "id": "pattern-examples",
        "title": "Six Common Work Email Patterns",
        "blocks": [
          {
            "type": "paragraph",
            "text": "For an entirely fictional employee named Alex Rivera at example.com, the following patterns are possible. The example.com domain is used for illustration, not as a real company email source."
          },
          {
            "type": "code",
            "label": "Illustrative work email patterns",
            "lines": [
              "First.Last       alex.rivera@example.com",
              "FirstLast       alexrivera@example.com",
              "FirstInitialLast arivera@example.com",
              "First          alex@example.com",
              "Last.First      rivera.alex@example.com",
              "FirstInitial.Last a.rivera@example.com"
            ]
          },
          {
            "type": "paragraph",
            "text": "The same company may use aliases that forward to a different mailbox. For people with shared names, a middle initial or number may appear. Do not invent additional variations until you have checked the organization and the intended contact."
          }
        ]
      },
      {
        "id": "check-domain",
        "title": "Confirm the Correct Domain First",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "Use the company website",
                "text": "Find the official website or another authoritative property rather than guessing the domain from the brand name."
              },
              {
                "title": "Account for brand differences",
                "text": "A LinkedIn company label may differ from the domain used for email after a rebrand, acquisition, or parent-company change."
              },
              {
                "title": "Look for intentionally public examples",
                "text": "Check appropriate company contact, press, careers, or partnership pages for published business addresses."
              },
              {
                "title": "Compare more than one example",
                "text": "One address may be an exception or alias. A pattern supported by several relevant examples is more informative, though still not proof for everyone."
              }
            ]
          },
          {
            "type": "tip",
            "title": "Domain accuracy comes first",
            "text": "A perfectly constructed address at the wrong domain is still wrong. Recheck the company context whenever a LinkedIn profile shows an unexpected employer name."
          }
        ]
      },
      {
        "id": "relay-company-override",
        "title": "When a Company Override Helps in Relay",
        "blocks": [
          {
            "type": "paragraph",
            "text": "A LinkedIn profile does not always expose company data in the same location or format. Relay includes company override support for situations where you know which organization a set of contacts belongs to and want the generation workflow to use that consistent context."
          },
          {
            "type": "paragraph",
            "text": "For example, while researching several employees at a fictional business called Northstar Labs, you can apply the verified company context rather than repeatedly relying on an ambiguous profile field. Review the override before using it for another person: an employee may have changed companies or work for a subsidiary."
          },
          {
            "type": "list",
            "items": [
              "Use an override when you have verified the correct employer.",
              "Confirm the organization's real email domain independently.",
              "Check the generated name format for punctuation, hyphens, and multi-part surnames.",
              "Remove or change the override when switching to a different company."
            ]
          }
        ]
      },
      {
        "id": "generation-vs-reveal",
        "title": "Generated Address Versus Revealed Address",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Relay can help generate a probable work email from a naming pattern. Separately, its email-availability workflow can show masked matches from available email records. Selecting a reveal returns the matching full address, subject to your daily reveal limit."
          },
          {
            "type": "paragraph",
            "text": "These are different types of evidence. Generation creates a hypothesis from a format; reveal provides an existing record, which may still be outdated, mismatched, or unverified. Always inspect the available verification status and ensure the address is relevant to your purpose."
          },
          {
            "type": "tip",
            "title": "A reveal is not a delivery guarantee",
            "text": "An existing email record can become stale. A valid or verified status is not a guarantee of delivery or permission to contact the recipient."
          },
          {
            "type": "internalLink",
            "slug": "find-verify-linkedin-emails",
            "text": "Read how Relay supports reveals, generation, and verification"
          }
        ]
      },
      {
        "id": "verification-checklist",
        "title": "How to Check a Possible Address",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Verify the person's current company and exact spelling.",
              "Verify the domain using an authoritative company source.",
              "Check whether the inferred address is syntactically valid.",
              "Use an email verification method where supported and review invalid or unknown outcomes.",
              "Avoid sending to personal addresses when a suitable professional channel is available.",
              "Respect applicable marketing, privacy, and opt-out rules."
            ]
          },
          {
            "type": "paragraph",
            "text": "Relay can store company formats and help apply them consistently during contact research. The most useful habit is still to record how an address was obtained—revealed match, published contact detail, or generated possibility—and review it before sending."
          },
          {
            "type": "internalLink",
            "slug": "simple-outreach-workflow",
            "text": "See where company email formats fit in a complete outreach workflow"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "slug": "introducing-relay",
    "category": "Product Updates",
    "title": "Introducing Relay: LinkedIn to Email Outreach",
    "description": "Meet Relay, a Chrome extension and SaaS workflow for LinkedIn prospecting, email discovery, verification, templates, sending, and analytics.",
    "date": "Sep 12, 2026",
    "publishedAt": "2026-09-12",
    "updatedAt": "2026-10-10",
    "readTime": "5 min read",
    "author": "Shashank J",
    "image": "/blog/introducing-relay.svg",
    "imageAlt": "Relay outreach workflow with connected profile, email, and contact cards",
    "intro": "Relay brings the steps between finding a professional contact on LinkedIn and sending a thoughtful email into one connected workflow. Here is what it does, whom it is for, and how the extension and the web service work together.",
    "sections": [
      {
        "id": "why-we-built-relay",
        "title": "Why We Built Relay",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Professional outreach can be unexpectedly fragmented. You find an interesting LinkedIn profile, copy a name into another tool, determine the company domain, guess an address, verify it somewhere else, open Gmail, rewrite the same message, and then try to remember whether you have already contacted that person."
          },
          {
            "type": "paragraph",
            "text": "Relay was built to reduce this repeated manual work. Rather than being only an email extractor, it combines a Chrome extension for the LinkedIn workflow with a SaaS backend for contacts, templates, sending, usage limits, and analytics. The goal is to make relevant one-to-one communication easier to organize—not to turn every profile into an automatic sales pitch."
          }
        ]
      },
      {
        "id": "linkedin-to-contact",
        "title": "From a LinkedIn Profile to a Useful Contact",
        "blocks": [
          {
            "type": "paragraph",
            "text": "The browser extension brings Relay into the moment you are researching someone. It can capture available profile context such as a person's name, organization, LinkedIn URL, and other visible professional details. You can then review and save that information to your contact list."
          },
          {
            "type": "paragraph",
            "text": "Contact records can support searching, filtering, and reviewing email activity so you have context when you return to a person later. Features such as auto-save and company overrides reduce repetitive steps, but you should still correct stale or incomplete information."
          },
          {
            "type": "tip",
            "title": "The extension is the workflow layer",
            "text": "Relay's Chrome extension helps you work beside LinkedIn. Its backend handles business rules and data, while the website handles product information, accounts, and subscription management."
          }
        ]
      },
      {
        "id": "email-discovery",
        "title": "Find Existing Emails or Generate Possible Addresses",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Relay supports email availability checks that can show masked existing email matches and their available verification statuses. If a match is relevant, the user can choose to reveal the actual email, subject to a plan-based daily reveal allowance."
          },
          {
            "type": "paragraph",
            "text": "It also supports generating a possible work email using a name, company domain, and email format. A generated address is a prediction rather than a confirmed inbox. The company-format and override workflow is useful when prospect data is incomplete, but it does not eliminate the need to verify what you plan to use."
          },
          {
            "type": "internalLink",
            "slug": "find-verify-linkedin-emails",
            "text": "Learn the difference between revealing and generating work emails"
          }
        ]
      },
      {
        "id": "verification-and-writing",
        "title": "Verify, Save, and Personalize Before Sending",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Relay provides email verification and a Verify & Send workflow for eligible plans. Results should be interpreted carefully: an invalid result calls for correction, and unknown does not mean verified. Validation reduces avoidable mistakes; it cannot promise delivery or replace appropriate permission."
          },
          {
            "type": "paragraph",
            "text": "Reusable email templates and contact variables help you prepare consistent messages without retyping everything. Custom variables let eligible accounts supply additional details, and template attachments are supported where a plan permits them. Previewing the final message remains essential so no placeholder, outdated company, or incorrect attachment reaches the recipient."
          },
          {
            "type": "internalLink",
            "slug": "cold-email-templates",
            "text": "Explore ten professional email templates you can adapt"
          }
        ]
      },
      {
        "id": "sending-speed-and-history",
        "title": "Connected Email Accounts, Sending Speed, and Activity",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Relay supports connected Gmail and Microsoft email accounts for sending. Instead of requiring a long-running browser request for every message, it uses a background queue to process email work. Sending-speed controls help you manage outbound pacing alongside each plan's daily sending allowance."
          },
          {
            "type": "paragraph",
            "text": "The dashboard collects relevant contact and sending history, with additional tracking and analytics depending on the account tier. Where email-open tracking is enabled, it shows a possible engagement signal, not definitive proof that a person read a message. Privacy protections and automatic image loading affect these measurements."
          },
          {
            "type": "tip",
            "title": "Daily sending and reveals are separate",
            "text": "An email reveal and an email send are different actions with independently configurable daily limits. Available allowances and advanced features depend on your plan."
          }
        ]
      },
      {
        "id": "who-relay-is-for",
        "title": "Who Can Use Relay?",
        "blocks": [
          {
            "type": "list",
            "items": [
              "Recruiters who want to research candidates and keep outreach context organized.",
              "Business development professionals exploring relevant partnerships or conversations.",
              "Founders and small teams introducing a product or asking for focused customer research.",
              "Job seekers and professionals reaching out with specific, relevant questions.",
              "Anyone who wants a repeatable process instead of copying details between disconnected tools."
            ]
          },
          {
            "type": "paragraph",
            "text": "Relay is not a guarantee of replies or inbox placement. It is a set of workflow tools that can save time when used with accurate data, thoughtful messaging, and respect for the person being contacted."
          }
        ]
      },
      {
        "id": "getting-started",
        "title": "How to Get Started With Relay",
        "blocks": [
          {
            "type": "steps",
            "items": [
              {
                "title": "Choose your outreach purpose",
                "text": "Define who would genuinely benefit from the conversation and why."
              },
              {
                "title": "Review a LinkedIn profile",
                "text": "Open the profile in your browser and inspect the details Relay identifies."
              },
              {
                "title": "Check an email route",
                "text": "Use an appropriate existing match or a carefully researched company format; verify before sending."
              },
              {
                "title": "Save and personalize",
                "text": "Create or select a template and confirm all fields in the final message."
              },
              {
                "title": "Send and learn",
                "text": "Use a connected account within your sending allowances, then review responses and contact history."
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "Relay has Free, Core, and Pro account tiers, with different features and limits. Check the current pricing page for the latest allowances instead of relying on numbers in an older blog post."
          },
          {
            "type": "internalLink",
            "slug": "simple-outreach-workflow",
            "text": "Follow our complete practical outreach workflow"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "slug": "recruiter-outreach-guide",
    "category": "LinkedIn",
    "title": "Recruiter Outreach on LinkedIn: A Practical Guide",
    "description": "A guide to researching candidates on LinkedIn and using Relay email verification, templates, sending controls, and contact history responsibly.",
    "date": "Sep 8, 2026",
    "publishedAt": "2026-09-08",
    "updatedAt": "2026-10-10",
    "readTime": "5 min read",
    "author": "Shashank J",
    "image": "/blog/recruiter-outreach-guide.svg",
    "imageAlt": "Recruiter candidate profiles connected to a professional email",
    "intro": "Candidate outreach works best when the opportunity is specific and the message respects the person receiving it. This guide shows a realistic recruiting workflow using LinkedIn research and Relay for contact organization, email verification, reusable messages, and follow-up history.",
    "sections": [
      {
        "id": "define-opportunity",
        "title": "Clarify the Role Before Building a Candidate List",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Start with a real role brief: required skills, the work the person will do, location or remote expectations, seniority, and information you can accurately share about compensation. A vague \"exciting opportunity\" is less useful than a clear explanation of why the work may suit someone."
          },
          {
            "type": "paragraph",
            "text": "Translate the brief into a focused candidate profile. For example, a team hiring a backend engineer might look for experience with relevant systems, evidence of ownership, and a realistic interest in the work—not just a matching headline."
          },
          {
            "type": "tip",
            "title": "Make the first message useful",
            "text": "If the candidate would need to ask what the role actually is, you have probably left out an important detail."
          }
        ]
      },
      {
        "id": "research-on-linkedin",
        "title": "Research Candidates on LinkedIn Without Rushing",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Use LinkedIn to understand a candidate's professional background, including current company, publicly described projects, skills, and likely role fit. Relay's extension can help move available profile details into a contact record while you are already viewing the profile."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Check relevance",
                "text": "Identify a specific experience or project related to the real opening."
              },
              {
                "title": "Confirm current information",
                "text": "Review current employer, title, location, and any publicly stated preferences rather than relying on an old saved record."
              },
              {
                "title": "Save an accurate contact",
                "text": "Use Relay's contact management to preserve relevant context and prevent duplicate or contradictory outreach."
              },
              {
                "title": "Choose an appropriate channel",
                "text": "Consider LinkedIn messaging or intentionally published professional contact information, and respect platform policies and preferences."
              }
            ]
          }
        ]
      },
      {
        "id": "find-check-email",
        "title": "Find an Appropriate Address and Check It",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Relay can show masked availability results for certain existing email matches. If the match is relevant, you can choose to reveal it using the applicable daily reveal quota. If no suitable match is available, you may have a company-email-format path for generating a possible work address, but a generated address is not verified."
          },
          {
            "type": "paragraph",
            "text": "When you have a candidate address, review its domain and available verification status. Relay's Verify & Send option is available on eligible plans. An unknown verification result should not be presented as confirmed delivery, and a technical check does not grant permission to message someone."
          },
          {
            "type": "list",
            "items": [
              "Prefer the correct professional context over the first address you can obtain.",
              "Do not use work email formats to infer private personal email accounts.",
              "Avoid contacting people who have previously opted out or declined.",
              "Keep candidate information only as long as needed and appropriate for your recruitment purpose."
            ]
          },
          {
            "type": "internalLink",
            "slug": "find-verify-linkedin-emails",
            "text": "Read the guide to existing email reveals and generated addresses"
          }
        ]
      },
      {
        "id": "write-specific-message",
        "title": "Write a Recruiter Email That Respects the Candidate",
        "blocks": [
          {
            "type": "paragraph",
            "text": "A strong recruiting message identifies the role, briefly explains the fit, and offers a simple next step. Use Relay templates to avoid repetitive editing, while adding one genuine observation about the person. Fields such as {{firstName}} and {{company}} can be populated using supported contact data; role-specific placeholders below need manual editing or configured custom variables."
          },
          {
            "type": "template",
            "title": "Recruiter introduction (edit bracketed details)",
            "lines": [
              "Subject: [Role title] at [organization] — quick introduction",
              "",
              "Hi {{firstName}},",
              "I am recruiting for a [role title] working on [specific, accurate work].",
              "Your experience with [publicly documented project or skill]",
              "stood out as potentially relevant.",
              "Would you like a short role summary, including [available key details]?",
              "",
              "[Recruiter name]"
            ]
          },
          {
            "type": "paragraph",
            "text": "For candidates who show interest, send the promised details. If they decline, record that preference and stop the sequence. Do not imply a mutual connection or promise compensation, flexibility, or scope that has not been approved."
          },
          {
            "type": "internalLink",
            "slug": "cold-email-templates",
            "text": "See more short professional outreach email templates"
          }
        ]
      },
      {
        "id": "send-carefully",
        "title": "Use Sending Pace and Plan Limits Responsibly",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Relay can send through connected Gmail and Microsoft email accounts and process queued sending tasks. Its sending-speed controls help you manage when messages are sent. Use them with the sending limits of your account and the applicable rules of your email provider."
          },
          {
            "type": "paragraph",
            "text": "The objective is not the largest possible candidate blast. Keep your initial group focused, review the recipients, and confirm names and variable substitutions in each message. Sending more slowly does not make irrelevant outreach acceptable or guarantee deliverability."
          },
          {
            "type": "tip",
            "title": "A queue cannot judge candidate fit",
            "text": "Automation can coordinate sending, but it cannot decide if a candidate is right for a position or whether reaching out is appropriate."
          }
        ]
      },
      {
        "id": "track-and-improve",
        "title": "Track the Conversation, Not Just the Open",
        "blocks": [
          {
            "type": "paragraph",
            "text": "Use Relay's contact history and dashboard to review the messages associated with each candidate and avoid repeated approaches from different searches. Some tiers also provide email-open tracking and email activity analytics. Open tracking is imperfect because mail clients may block or preload images."
          },
          {
            "type": "steps",
            "items": [
              {
                "title": "Monitor replies",
                "text": "Track interest, requests for details, referrals, and explicit declines."
              },
              {
                "title": "Record the next action",
                "text": "Note whether you need to send a role brief, arrange an introduction, or close the conversation."
              },
              {
                "title": "Review targeting quality",
                "text": "Look for patterns in who engages thoughtfully, not only how many emails you sent."
              },
              {
                "title": "Respect privacy",
                "text": "Limit access to candidate information, avoid retaining irrelevant personal details, and honor opt-outs."
              }
            ]
          },
          {
            "type": "paragraph",
            "text": "A reliable recruiting workflow should make candidates feel informed and respected. Relay helps maintain the research-to-outreach steps so you can spend more time having useful conversations."
          },
          {
            "type": "internalLink",
            "slug": "simple-outreach-workflow",
            "text": "Build a repeatable LinkedIn-to-email workflow"
          }
        ]
      }
    ]
  }
];

export function getBlogArticle(slug) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}

export const trendingPosts = [blogPosts[0], blogPosts[1], blogPosts[3]];
