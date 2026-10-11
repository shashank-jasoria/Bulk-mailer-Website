import { useEffect, useState } from "react";
import {
  Home,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  UserRound,
  Mail,
  BarChart3,
} from "lucide-react";
import "../styles/PacemailerPrivacyPolicy.css";

// This page intentionally reuses the exact `pm-privacy` CSS classes from
// PrivacyPolicy.jsx to match its layout, typography, responsive sidebar,
// callouts, cards, spacing, and navigation. If the Privacy Policy stylesheet
// is not loaded globally, import that same stylesheet here using its actual path.
// Example (adjust path/name to match your project):
// import "./PrivacyPolicy.css";

const TERMS_DETAILS = {
  effectiveDate: "October 12, 2026",
  lastUpdated: "October 12, 2026",
  legalName: "Shashank",
  businessAddress: "Rajsthan, India",
  contactEmail: "support@pacemailer.com",
  website: "https://pacemailer.com",
  // Complete these two fields before publishing this legal document.
  governingLaw: "[Rajsthan/India]",
  disputeJurisdiction: "[Jaipur, Rajsthan/India]",
};

const SECTIONS = [
  { id: "eligibility", title: "Eligibility & Acceptance" },
  { id: "description-of-services", title: "Description of Services" },
  { id: "accounts-and-security", title: "Accounts & Security" },
  { id: "extension-and-platforms", title: "Chrome Extension & Platforms" },
  { id: "professional-contact-data", title: "Professional Contact Data" },
  { id: "connected-email-accounts", title: "Connected Email Accounts" },
  { id: "email-sending", title: "Email Sending & Responsibilities" },
  { id: "email-tracking", title: "Email Tracking & Analytics" },
  { id: "acceptable-use", title: "Acceptable Use Policy" },
  { id: "subscription-plans", title: "Plans & Usage Limits" },
  { id: "payments-and-billing", title: "Payments & Subscriptions" },
  { id: "user-content", title: "User Content & Data" },
  { id: "privacy", title: "Privacy & Data Protection" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "service-availability", title: "Service Availability" },
  { id: "termination", title: "Suspension & Termination" },
  { id: "warranties", title: "Disclaimer of Warranties" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "changes-to-terms", title: "Changes to These Terms" },
  { id: "governing-law", title: "Governing Law & Disputes" },
  { id: "general-provisions", title: "General Provisions" },
  { id: "contact-us", title: "Contact Us" },
];

function useTermsMetadata() {
  useEffect(() => {
    const previousTitle = document.title;
    const cleanups = [];
    const title = "Terms of Service | Pacemailer";
    const description =
      "Read Pacemailer's Terms of Service covering the Chrome extension, professional contact discovery, email outreach, connected accounts, subscriptions, and usage rules.";
    const siteUrl = (
      import.meta.env.VITE_SITE_URL || window.location.origin
    ).replace(/\/+$/, "");
    const pageUrl = `${siteUrl}/terms-of-service`;

    document.title = title;

    function setMeta(name, value, property = false) {
      const attribute = property ? "property" : "name";
      let tag = document.head.querySelector(`meta[${attribute}="${name}"]`);

      if (tag) {
        const oldContent = tag.getAttribute("content");
        tag.setAttribute("content", value);
        cleanups.push(() => {
          if (oldContent === null) tag.removeAttribute("content");
          else tag.setAttribute("content", oldContent);
        });
      } else {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, name);
        tag.setAttribute("content", value);
        document.head.appendChild(tag);
        cleanups.push(() => tag.remove());
      }
    }

    setMeta("description", description);
    setMeta("robots", "index, follow");
    setMeta("og:type", "website", true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", pageUrl, true);
    setMeta("og:site_name", "Pacemailer", true);
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (canonical) {
      const previousHref = canonical.getAttribute("href");
      canonical.setAttribute("href", pageUrl);
      cleanups.push(() => {
        if (previousHref === null) canonical.removeAttribute("href");
        else canonical.setAttribute("href", previousHref);
      });
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = pageUrl;
      document.head.appendChild(canonical);
      cleanups.push(() => canonical.remove());
    }

    return () => {
      document.title = previousTitle;
      cleanups.reverse().forEach((cleanup) => cleanup());
    };
  }, []);
}

function useActiveSection(sections) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");

  useEffect(() => {
    if (!sections.length || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActiveSection(visible[0].target.id);
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
    <nav
      className="pm-privacy__toc-links"
      aria-label="Terms of Service sections"
    >
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={activeSection === section.id ? "is-active" : ""}
          aria-current={activeSection === section.id ? "location" : undefined}
          onClick={() => onSelect(section.id)}
        >
          <span className="pm-privacy__toc-index">{index + 1}.</span>
          <span>{section.title}</span>
        </a>
      ))}
    </nav>
  );
}

function TermsSection({ number, id, title, children }) {
  return (
    <section
      id={id}
      className="pm-privacy__section"
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`} className="pm-privacy__section-heading">
        <span className="pm-privacy__number" aria-hidden="true">
          {number}
        </span>
        <span>{title}</span>
      </h2>
      <div className="pm-privacy__section-body">{children}</div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="pm-privacy__info-item">
      <div className="pm-privacy__info-icon" aria-hidden="true">
        <Icon size={21} strokeWidth={2.2} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}

function BulletList({ items }) {
  return (
    <ul className="pm-privacy__list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function PacemailerTermsOfService() {
  useTermsMetadata();
  const [activeSection, setActiveSection] = useActiveSection(SECTIONS);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const selectSection = (id) => {
    setActiveSection(id);
    setMobileTocOpen(false);
  };

  return (
    <main className="pm-privacy" id="pm-terms-top">
      <a className="pm-privacy__skip-link" href="#pm-terms-content">
        Skip to terms of service
      </a>

      <div className="pm-privacy__container">
        <nav className="pm-privacy__breadcrumb" aria-label="Breadcrumb">
          <a href="/" aria-label="Pacemailer home">
            <Home
              size={15}
              fill="currentColor"
              strokeWidth={2.2}
              aria-hidden="true"
            />
            <span>Home</span>
          </a>
          <ChevronRight size={15} aria-hidden="true" />
          <span aria-current="page">Terms of Service</span>
        </nav>

        <div className="pm-privacy__layout">
          <aside className="pm-privacy__sidebar" aria-label="On this page">
            <div className="pm-privacy__toc-card">
              <h2 className="pm-privacy__toc-title">On this page</h2>
              <button
                type="button"
                className="pm-privacy__toc-toggle"
                aria-expanded={mobileTocOpen}
                aria-controls="pm-terms-toc-content"
                onClick={() => setMobileTocOpen((value) => !value)}
              >
                On this page
                <ChevronDown
                  size={18}
                  className={mobileTocOpen ? "is-open" : ""}
                />
              </button>
              <div
                id="pm-terms-toc-content"
                className={`pm-privacy__toc-content${mobileTocOpen ? " is-open" : ""}`}
              >
                <TableOfContents
                  sections={SECTIONS}
                  activeSection={activeSection}
                  onSelect={selectSection}
                />
              </div>
            </div>
          </aside>

          <article className="pm-privacy__article" id="pm-terms-content">
            <header className="pm-privacy__hero">
              <h1>Terms of Service</h1>
              <p className="pm-privacy__updated">
                Last updated: {TERMS_DETAILS.lastUpdated}
              </p>
              <p className="pm-privacy__lede">
                These Terms of Service govern your use of Pacemailer's website,
                Chrome extension, connected email accounts, professional contact
                tools, and email outreach services. Please read them carefully
                before using Pacemailer.
              </p>
            </header>

            <TermsSection
              number={1}
              id="eligibility"
              title="Eligibility and Acceptance"
            >
              <p>
                Welcome to <strong>Pacemailer</strong>. These Terms of Service
                ("Terms") govern your access to and use of our website at{" "}
                <a href={TERMS_DETAILS.website}>pacemailer.com</a>, Chrome
                browser extension, web application, dashboard, APIs, and related
                features and services (collectively, the "Services").
              </p>
              <p>
                Pacemailer is operated by{" "}
                <strong>{TERMS_DETAILS.legalName}</strong> ("Pacemailer," "we,"
                "us," or "our"), located in{" "}
                <strong>{TERMS_DETAILS.businessAddress}</strong>.
              </p>
              <p>
                By creating an account, installing our Chrome extension,
                accessing our website, or using any part of the Services, you
                agree to these Terms and acknowledge our{" "}
                <a href="/privacy-policy">Privacy Policy</a>. If you do not
                agree, you must not use the Services.
              </p>
              <h3>1.1 Age requirement</h3>
              <p>
                You must be at least 18 years old to create an account or use
                Pacemailer. By using the Services, you represent that you meet
                this requirement and are legally capable of entering into a
                binding agreement.
              </p>
              <h3>1.2 Business and professional use</h3>
              <p>
                Pacemailer is designed primarily for professional productivity,
                business development, recruiting, networking, sales prospecting,
                and email outreach. You agree to use the Services only for
                lawful purposes and in compliance with applicable laws and
                regulations.
              </p>
              <h3>1.3 Organizational accounts</h3>
              <p>
                If you use Pacemailer on behalf of a company, organization, or
                other legal entity, you represent that you have the authority to
                accept these Terms on its behalf. In that case, references to
                "you" may include the organization you represent.
              </p>
              <p className="pm-privacy__effective-date">
                Effective date: {TERMS_DETAILS.effectiveDate}
              </p>
            </TermsSection>

            <TermsSection
              number={2}
              id="description-of-services"
              title="Description of Services"
            >
              <p>
                Pacemailer provides tools designed to simplify professional
                contact discovery, contact management, and personalized email
                outreach. Available functionality depends on your subscription
                plan, enabled features, connected accounts, and service
                availability.
              </p>
              <div
                className="pm-privacy__info-card"
                aria-label="Summary of service responsibilities"
              >
                <InfoCard icon={UserRound} title="Account & Contacts">
                  Manage professional contact information, email patterns,
                  personalized templates, and connected accounts.
                </InfoCard>
                <InfoCard icon={Mail} title="Email Outreach">
                  Prepare, queue, and send messages using your authorized email
                  accounts and available plan allowances.
                </InfoCard>
                <InfoCard icon={BarChart3} title="Insights & Tracking">
                  Review contact activity, sending history, and supported
                  engagement analytics where available.
                </InfoCard>
              </div>
              <p>Depending on availability, the Services may include:</p>
              <BulletList
                items={[
                  "Extracting professional information from supported LinkedIn profile pages.",
                  "Generating probable professional email addresses using names, company information, and email patterns.",
                  "Verifying or estimating the validity of professional email addresses.",
                  "Saving, organizing, searching, and managing professional contacts.",
                  "Creating email templates, personalized messages, and reusable variables.",
                  "Uploading attachments for use in supported email workflows.",
                  "Connecting supported email accounts through authorized integrations.",
                  "Preparing, queueing, and sending emails through connected accounts.",
                  "Monitoring sending activity, delivery-related information, and supported engagement metrics.",
                  "Displaying contacts, outreach history, and analytics through the dashboard.",
                  "Managing account settings, subscriptions, and usage limits.",
                ]}
              />
              <p>
                Some functionality may be experimental, unavailable in certain
                regions, restricted to eligible plans, or dependent on
                third-party services. We may add, modify, restrict, or
                discontinue features as described in these Terms.
              </p>
            </TermsSection>

            <TermsSection
              number={3}
              id="accounts-and-security"
              title="User Accounts and Security"
            >
              <h3>3.1 Account registration</h3>
              <p>
                Certain features require a registered Pacemailer account. When
                creating an account, you agree to provide accurate and current
                information and update it when necessary. You may not
                impersonate another individual or organization or create
                accounts using misleading or fraudulent information.
              </p>
              <h3>3.2 Account responsibility</h3>
              <p>You are responsible for:</p>
              <BulletList
                items={[
                  "Maintaining the confidentiality of your login credentials.",
                  "Protecting access to connected email accounts.",
                  "Activities performed through your Pacemailer account.",
                  "Ensuring that authorized users comply with these Terms.",
                  "Notifying us promptly of suspected unauthorized access or security incidents.",
                ]}
              />
              <p>
                You must not share, sell, transfer, or otherwise provide access
                to your account in violation of these Terms or applicable
                subscription restrictions.
              </p>
              <h3>3.3 Unauthorized access</h3>
              <p>
                If you suspect unauthorized use of your account, contact{" "}
                <a href={`mailto:${TERMS_DETAILS.contactEmail}`}>
                  {TERMS_DETAILS.contactEmail}
                </a>{" "}
                promptly. We may temporarily restrict account access where
                reasonably necessary to investigate security threats, prevent
                misuse, or protect the Services.
              </p>
            </TermsSection>

            <TermsSection
              number={4}
              id="extension-and-platforms"
              title="Chrome Extension and Third-Party Platforms"
            >
              <h3>4.1 Chrome extension functionality</h3>
              <p>
                Pacemailer's Chrome extension helps users work with professional
                profile information while browsing supported websites, including
                LinkedIn. Depending on enabled settings, the extension may
                access information displayed on supported profile pages, such as
                names, companies, professional positions, profile URLs, and
                other relevant professional details.
              </p>
              <p>
                Certain features, including automatic contact saving, may
                process supported profile information as you navigate between
                profiles. You are responsible for configuring the extension
                appropriately and using these features only when you have a
                lawful basis and any necessary authorization.
              </p>
              <h3>4.2 Third-party terms</h3>
              <p>
                Pacemailer integrates with or operates alongside third-party
                platforms, including LinkedIn, Google, and Microsoft. Your use
                of those platforms remains subject to their respective terms of
                service, privacy policies, access restrictions, and
                acceptable-use requirements.
              </p>
              <p>
                You must not use Pacemailer to bypass authentication
                requirements, access controls, technical restrictions, rate
                limits, or other protective measures established by third-party
                platforms. Nothing in these Terms grants permission to access,
                collect, copy, or use third-party information in violation of
                applicable laws or third-party agreements.
              </p>
              <div className="pm-privacy__callout">
                <div className="pm-privacy__callout-title">
                  <ShieldCheck size={18} aria-hidden="true" />
                  Third-party platform compliance
                </div>
                <p>
                  Your right to use Pacemailer does not replace or override any
                  restrictions imposed by LinkedIn, Google, Microsoft, or
                  another third-party platform.
                </p>
              </div>
              <h3>4.3 Independent service</h3>
              <p>
                Pacemailer is an independent software service and is not
                affiliated with, endorsed by, sponsored by, or officially
                associated with LinkedIn, Google, or Microsoft. References to
                third-party companies, trademarks, or products are provided
                solely to identify supported services or integrations.
              </p>
              <h3>4.4 Third-party availability</h3>
              <p>
                Third-party platforms may modify their websites, APIs,
                permissions, security requirements, or access policies. Such
                changes may affect Pacemailer's ability to extract information,
                connect accounts, verify information, send messages, or provide
                other functionality. We do not guarantee continued compatibility
                with any particular third-party platform.
              </p>
            </TermsSection>

            <TermsSection
              number={5}
              id="professional-contact-data"
              title="Professional Contact Information and Email Generation"
            >
              <h3>5.1 Contact information</h3>
              <p>
                Pacemailer allows users to collect, enter, generate, organize,
                and manage professional contact information, which may include
                names, job titles, company names, professional email addresses,
                profile URLs, and associated outreach records.
              </p>
              <p>
                You are responsible for ensuring that your collection, storage,
                and use of this information is lawful and respects the rights of
                the individuals concerned. The availability of information on a
                publicly accessible profile does not automatically establish
                permission to use it for every purpose.
              </p>
              <h3>5.2 Generated email addresses</h3>
              <p>
                Pacemailer may generate probable professional email addresses
                based on company domains, known or inferred email patterns, and
                available contact information.
              </p>
              <div className="pm-privacy__callout pm-privacy__callout--subtle">
                <div className="pm-privacy__callout-title">
                  Accuracy of generated addresses
                </div>
                <p>
                  Generated email addresses are predictions and are not
                  guaranteed to be correct, active, associated with the intended
                  individual, or appropriate for outreach.
                </p>
              </div>
              <p>
                You should review generated information before relying on it.
                Pacemailer is not responsible for consequences arising solely
                from your reliance on inaccurate, incomplete, outdated, or
                incorrectly inferred contact information, except where liability
                cannot legally be excluded.
              </p>
              <h3>5.3 Email verification</h3>
              <p>
                Where email verification is available, Pacemailer may classify
                an address using results such as valid, invalid, or unknown.
                Verification results represent technical assessments based on
                information available at the time of verification. They do not
                guarantee:
              </p>
              <BulletList
                items={[
                  "That an address will continue to exist.",
                  "That a message will be accepted or delivered.",
                  "That the address belongs to the intended individual.",
                  "That the recipient has consented to receive messages.",
                  "That sending to the address complies with applicable laws.",
                ]}
              />
              <p>
                You remain responsible for deciding whether contacting a
                recipient is lawful and appropriate.
              </p>
              <h3>5.4 Contact accuracy</h3>
              <p>
                We do not guarantee that professional contact information,
                company email patterns, employment details, or verification
                results will always be accurate or current. Users should
                independently review information where accuracy is important.
              </p>
            </TermsSection>

            <TermsSection
              number={6}
              id="connected-email-accounts"
              title="Connected Email Accounts"
            >
              <h3>6.1 Authorized connections</h3>
              <p>
                Pacemailer may allow you to connect supported email providers,
                including Google Gmail and Microsoft email services, using OAuth
                or other approved authorization methods. By connecting an email
                account, you authorize Pacemailer to use the permissions you
                approve to provide the relevant email-related features.
              </p>
              <p>
                Depending on the permissions requested and approved, these
                features may involve sending messages and processing relevant
                mailbox or message information as described in our{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
              </p>
              <h3>6.2 Your responsibility</h3>
              <p>
                You represent that you are authorized to connect and use the
                email account. You must not connect accounts belonging to
                another person or organization without the necessary permission.
                You are responsible for complying with the connected email
                provider's terms, policies, and sending restrictions.
              </p>
              <h3>6.3 Revoking access</h3>
              <p>
                You may revoke Pacemailer's access through your Google or
                Microsoft account settings or through any available
                disconnection functionality within Pacemailer. Revoking access
                may prevent sending, verification-related workflows, status
                synchronization, or other features that depend on the
                connection. Previously created outreach records may remain
                subject to the retention provisions described in our Privacy
                Policy.
              </p>
              <h3>6.4 Provider restrictions</h3>
              <p>
                Email providers may impose sending limits, authentication
                requirements, anti-spam restrictions, and account-specific
                security measures. Pacemailer's subscription limits do not
                replace or override your email provider's restrictions. We
                cannot guarantee that an email provider will accept, transmit,
                or deliver messages submitted through Pacemailer.
              </p>
            </TermsSection>

            <TermsSection
              number={7}
              id="email-sending"
              title="Email Sending and User Responsibilities"
            >
              <h3>7.1 User-directed sending</h3>
              <p>
                Pacemailer provides tools for preparing and sending emails at
                the direction of account holders. You are responsible for the
                recipients you select, the content you send, and the purposes of
                your outreach. Pacemailer does not independently authorize you
                to contact any individual merely because their information is
                available through the Services.
              </p>
              <h3>7.2 Compliance with email laws</h3>
              <p>
                You agree to comply with all applicable electronic
                communications, marketing, privacy, and anti-spam laws.
                Depending on your location and your recipients' locations, this
                may include requirements concerning consent, lawful bases for
                processing, sender identification, commercial message
                disclosures, and opt-out mechanisms.
              </p>
              <p>Where required, you must:</p>
              <BulletList
                items={[
                  "Obtain valid consent or establish another appropriate legal basis before sending messages.",
                  "Accurately identify yourself or the organization responsible for the message.",
                  "Use accurate sender information and non-deceptive subject lines.",
                  "Include any legally required business contact information or physical mailing address.",
                  "Provide an appropriate method to unsubscribe or opt out.",
                  "Honor unsubscribe requests, objections, and requests to stop contacting recipients.",
                  "Maintain appropriate suppression records to avoid contacting individuals who have opted out.",
                ]}
              />
              <p>
                You must not use Pacemailer to send unlawful unsolicited
                communications, deceptive messages, phishing attempts, or
                abusive outreach.
              </p>
              <h3>7.3 Recipient complaints</h3>
              <p>
                If a recipient requests that you stop contacting them, you are
                responsible for respecting that request in accordance with
                applicable law. We may investigate complaints involving messages
                sent through Pacemailer and may restrict sending capabilities or
                suspend accounts associated with suspected abuse.
              </p>
              <h3>7.4 Sending queues and delivery</h3>
              <p>
                Pacemailer may use background processing and queues to prepare
                and send messages asynchronously. Submitting an email for
                sending does not guarantee immediate transmission or successful
                delivery. Sending may be delayed, rejected, interrupted, or
                unsuccessful because of provider restrictions, expired
                authorization, technical failures, quota limits, recipient
                server behavior, or other circumstances outside our reasonable
                control.
              </p>
              <h3>7.5 Bulk sending</h3>
              <p>
                Where bulk sending is supported, Pacemailer may process only the
                number of messages permitted by your remaining quota or
                applicable system restrictions. Requests exceeding available
                limits may be partially processed, with remaining messages
                excluded or rejected. You are responsible for reviewing
                recipient selections, message content, and sending results.
              </p>
            </TermsSection>

            <TermsSection
              number={8}
              id="email-tracking"
              title="Email Tracking and Analytics"
            >
              <h3>8.1 Tracking functionality</h3>
              <p>
                Certain subscription plans may provide email-open tracking,
                engagement information, and outreach analytics. When enabled,
                tracking may use resources embedded in outgoing messages to
                detect possible email-open events.
              </p>
              <h3>8.2 Tracking accuracy</h3>
              <p>
                Email tracking information is inherently approximate. Email
                clients and security systems may block, cache, preload, or
                automatically retrieve tracking resources. As a result:
              </p>
              <BulletList
                items={[
                  "A recorded open does not necessarily mean the recipient personally read the message.",
                  "An email without a recorded open may still have been read.",
                  "Open counts, timestamps, and engagement metrics may be incomplete or inaccurate.",
                  "Analytical recommendations, including suggested sending times, may be based on limited or imperfect data.",
                ]}
              />
              <p>
                Pacemailer does not guarantee the accuracy of email engagement
                measurements.
              </p>
              <h3>8.3 Lawful tracking</h3>
              <p>
                You are responsible for ensuring that your use of email tracking
                complies with applicable privacy, electronic communications, and
                consent requirements. Where recipient consent or another legal
                authorization is required, you must obtain it before enabling
                the relevant tracking functionality.
              </p>
              <h3>8.4 Analytics disclaimer</h3>
              <p>
                Dashboard statistics, activity heatmaps, and recommended sending
                times are provided for informational purposes. They do not
                guarantee improved engagement, responses, conversions, sales,
                recruitment outcomes, or other business results.
              </p>
            </TermsSection>

            <TermsSection
              number={9}
              id="acceptable-use"
              title="Acceptable Use Policy"
            >
              <p>
                You agree not to use Pacemailer for unlawful, unauthorized,
                fraudulent, abusive, or harmful activities. Prohibited
                activities include the following.
              </p>
              <h3>9.1 Spam and deceptive communications</h3>
              <BulletList
                items={[
                  "Sending spam or messages prohibited by applicable law.",
                  "Sending phishing emails, fraudulent offers, or misleading communications.",
                  "Impersonating individuals, businesses, or organizations.",
                  "Using deceptive sender information or subject lines.",
                  "Continuing outreach to recipients whose applicable opt-out requests must be honored.",
                  "Using the Services to facilitate scams or other unlawful activities.",
                ]}
              />
              <h3>9.2 Unauthorized data collection</h3>
              <BulletList
                items={[
                  "Collecting information without a lawful basis or required authorization.",
                  "Accessing restricted, private, or protected information without permission.",
                  "Circumventing third-party website restrictions or security controls.",
                  "Collecting sensitive personal information where such collection is unauthorized or unnecessary for the legitimate purpose.",
                  "Using professional contact information for unlawful harassment, discrimination, or other prohibited activities.",
                ]}
              />
              <h3>9.3 Technical misuse</h3>
              <BulletList
                items={[
                  "Attempting to compromise Pacemailer's systems, accounts, APIs, or infrastructure.",
                  "Introducing malware, malicious attachments, or harmful code.",
                  "Reverse engineering or interfering with the Services except where permitted by applicable law.",
                  "Circumventing subscription restrictions, quotas, or access controls.",
                  "Using unauthorized automation to overload the Services.",
                  "Attempting to access another user's account or private information.",
                  "Reselling or redistributing access to the Services without written authorization.",
                ]}
              />
              <h3>9.4 Enforcement</h3>
              <p>
                We may investigate suspected violations and take proportionate
                action, including warning users, restricting features,
                suspending sending privileges, removing prohibited material, or
                terminating accounts. Where appropriate and legally permitted,
                we may cooperate with relevant authorities or affected third
                parties.
              </p>
            </TermsSection>

            <TermsSection
              number={10}
              id="subscription-plans"
              title="Subscription Plans, Features, and Usage Limits"
            >
              <h3>10.1 Account tiers</h3>
              <p>
                Pacemailer may provide different subscription plans, including
                Free, Core, and Pro. Each plan may have different features,
                usage allowances, and restrictions, including limits on:
              </p>
              <BulletList
                items={[
                  "Daily outgoing emails.",
                  "Saved email templates.",
                  "Custom template variables.",
                  "Connected email accounts.",
                  "Attachment quantity and size.",
                  "Email verification functionality.",
                  "Dashboard and contact-management capabilities.",
                  "Email-open tracking and analytics.",
                ]}
              />
              <p>
                The currently applicable features and limits are those displayed
                in the Services or on our pricing page.
              </p>
              <h3>10.2 Feature availability</h3>
              <p>
                Some features are available only to eligible subscription tiers.
                You acknowledge that access to premium functionality requires an
                applicable subscription or other authorization provided by
                Pacemailer.
              </p>
              <h3>10.3 Usage enforcement</h3>
              <p>
                Pacemailer may enforce limits through backend systems and
                account-access controls. Queued or pending email requests may
                temporarily reserve part of your daily sending allowance while
                processing is underway. Where a request exceeds your available
                quota, Pacemailer may limit the request to the permitted amount.
              </p>
              <h3>10.4 Changes to plans</h3>
              <p>
                We may update plan features, usage limits, pricing structures,
                or subscription offerings. For material reductions to paid-plan
                benefits, we will provide reasonable notice where required by
                law or our contractual commitments. Changes to paid
                subscriptions will take effect as disclosed to affected
                subscribers, subject to applicable law.
              </p>
            </TermsSection>

            <TermsSection
              number={11}
              id="payments-and-billing"
              title="Payments, Billing, and Subscriptions"
            >
              <div className="pm-privacy__callout pm-privacy__callout--subtle">
                <div className="pm-privacy__callout-title">
                  Applicability of billing terms
                </div>
                <p>
                  This section applies if and when paid subscriptions or
                  purchases are made available.
                </p>
              </div>
              <h3>11.1 Subscription purchases</h3>
              <p>
                If you purchase a paid subscription, you agree to pay the
                prices, applicable taxes, and other charges disclosed during
                checkout. Subscription pricing, billing frequency, currency, and
                included features will be displayed before you confirm a
                purchase.
              </p>
              <h3>11.2 Payment processing</h3>
              <p>
                Payments may be processed through third-party payment providers
                identified during checkout. Payment providers may handle payment
                credentials and transaction processing under their own terms and
                privacy policies. Pacemailer may maintain subscription
                information, transaction references, payment status, and billing
                history necessary to operate paid accounts.
              </p>
              <h3>11.3 Automatic renewal</h3>
              <p>
                If a subscription is expressly identified as automatically
                renewing at checkout, it will renew according to the billing
                frequency and renewal conditions you accept. You authorize the
                applicable payment provider to charge your selected payment
                method for renewal fees, subject to the disclosed subscription
                terms and applicable law.
              </p>
              <h3>11.4 Cancellation</h3>
              <p>
                You may cancel a paid subscription using the cancellation method
                identified in your account or at checkout, or by contacting our
                support team where no self-service method is available. Unless
                otherwise stated in the applicable subscription terms or
                required by law, cancellation stops future renewals and does not
                automatically terminate access for a billing period that has
                already been paid for.
              </p>
              <h3>11.5 Upgrades and downgrades</h3>
              <p>
                Plan changes may affect available features, usage limits,
                connected accounts, and other subscription benefits. Any
                immediate charges, prorated adjustments, credits, or changes to
                the next billing cycle will be disclosed before you confirm an
                applicable paid-plan change.
              </p>
              <h3>11.6 Refunds</h3>
              <p>
                Refund eligibility will be determined by the refund terms
                disclosed at purchase and any mandatory rights under applicable
                law. Nothing in these Terms limits statutory refund or
                cancellation rights that cannot legally be waived.
              </p>
              <h3>11.7 Failed payments</h3>
              <p>
                If a subscription payment fails or remains unpaid, we may
                restrict paid features, retry payment where authorized, or
                downgrade the account in accordance with the applicable billing
                terms.
              </p>
              <h3>11.8 Regional pricing</h3>
              <p>
                Subscription prices and available currencies may vary by country
                or billing region. Applicable prices may be determined using
                legitimate billing information and payment-provider
                requirements. You agree not to intentionally misrepresent your
                billing information or location to obtain pricing for which you
                are not eligible.
              </p>
            </TermsSection>

            <TermsSection
              number={12}
              id="user-content"
              title="User Content and Data"
            >
              <h3>12.1 Your content</h3>
              <p>
                You may create, upload, store, or submit information through
                Pacemailer, including email templates, message content,
                attachments, custom variables, and contact records ("User
                Content").
              </p>
              <p>
                As between you and Pacemailer, you retain whatever ownership or
                other legal rights you have in your original User Content.
                Storing third-party personal information through Pacemailer does
                not give you ownership of that individual's personal information
                or override their legal rights.
              </p>
              <h3>12.2 Permission to process content</h3>
              <p>
                You grant Pacemailer a limited, non-exclusive permission to
                host, store, reproduce, format, transmit, and otherwise process
                User Content as reasonably necessary to provide the Services you
                request, maintain their functionality, protect their security,
                and perform activities described in our Privacy Policy. This
                permission does not authorize uses prohibited by applicable law
                or relevant third-party platform policies.
              </p>
              <h3>12.3 Your warranties</h3>
              <p>
                You represent that you have the rights, permissions, and lawful
                basis necessary to submit and use User Content through the
                Services. You are responsible for ensuring that uploaded files,
                contact records, templates, and messages do not violate
                applicable laws or third-party rights.
              </p>
              <h3>12.4 Professional reference information</h3>
              <p>
                As explained in our Privacy Policy, Pacemailer may maintain
                reference records concerning professional contacts, companies,
                domains, company email patterns, and verification information.
                Certain professional reference information may be used across
                authorized accounts where such functionality is enabled and
                permitted by applicable law and relevant platform policies.
              </p>
              <p>
                This does not authorize unrestricted sharing of private account
                information. Connected mailbox contents, account passwords,
                OAuth credentials, and private email templates are not intended
                to form part of shared professional reference records.
                Information obtained through Google APIs or Chrome extension
                permissions remains subject to the applicable platform
                restrictions.
              </p>
              <h3>12.5 Data deletion and retention</h3>
              <p>
                Account information, contact records, templates, attachments,
                and outreach history may be retained while an account is active.
                Following account deletion or termination, information will be
                handled in accordance with our Privacy Policy, including
                applicable retention obligations, backup cycles, lawful
                exceptions, and separately maintained professional reference
                records where permitted.
              </p>
            </TermsSection>

            <TermsSection
              number={13}
              id="privacy"
              title="Privacy and Data Protection"
            >
              <p>
                Your use of Pacemailer is also subject to our{" "}
                <a href="/privacy-policy">Privacy Policy</a>, available through
                our website at{" "}
                <a href={TERMS_DETAILS.website}>pacemailer.com</a>. The Privacy
                Policy explains the categories of information we collect, how we
                process and share information, applicable retention practices,
                and available privacy rights.
              </p>
              <p>
                When you determine which individuals to contact and why, you are
                responsible for complying with applicable privacy and
                data-protection obligations in relation to those activities.
              </p>
              <p>
                Pacemailer may process information on your behalf for certain
                service functions and may independently process certain
                information for account administration, security, and other
                purposes described in our Privacy Policy. The respective legal
                responsibilities of you and Pacemailer depend on the processing
                activity and applicable law.
              </p>
              <p>
                If your intended use requires additional contractual
                data-protection arrangements, you should contact us before
                undertaking that processing.
              </p>
            </TermsSection>

            <TermsSection
              number={14}
              id="intellectual-property"
              title="Intellectual Property"
            >
              <h3>14.1 Ownership of the Services</h3>
              <p>
                Pacemailer and its licensors retain all rights, title, and
                interest in the software, website, Chrome extension, interfaces,
                code, designs, branding, documentation, and other proprietary
                components of the Services. These Terms do not transfer
                ownership of Pacemailer's intellectual property to you.
              </p>
              <h3>14.2 Limited license</h3>
              <p>
                Subject to your compliance with these Terms, we grant you a
                limited, non-exclusive, non-transferable, revocable license to
                access and use the Services for their intended purposes. This
                license does not include ownership rights or authorization to
                redistribute the software commercially without permission.
              </p>
              <h3>14.3 Feedback</h3>
              <p>
                If you voluntarily provide suggestions, ideas, or feedback about
                Pacemailer, you authorize us to use that feedback to improve or
                develop our Services without an obligation to compensate you.
                This provision does not grant Pacemailer additional rights to
                use personal information in ways prohibited by the Privacy
                Policy or applicable law.
              </p>
            </TermsSection>

            <TermsSection
              number={15}
              id="service-availability"
              title="Service Availability and Modifications"
            >
              <p>
                We aim to provide reliable access to Pacemailer, but
                uninterrupted availability cannot be guaranteed. The Services
                may be affected by maintenance, outages, third-party platform
                changes, infrastructure failures, email-provider limitations,
                security incidents, or other technical conditions.
              </p>
              <p>
                We may introduce new functionality, change existing features, or
                discontinue parts of the Services. Where a change materially
                affects an active paid subscription, we will provide appropriate
                notice or remedies where required by applicable law.
              </p>
              <p>
                We may perform maintenance or take necessary security actions
                without advance notice when immediate action is reasonably
                required.
              </p>
            </TermsSection>

            <TermsSection
              number={16}
              id="termination"
              title="Suspension and Termination"
            >
              <h3>16.1 Termination by you</h3>
              <p>
                You may stop using Pacemailer at any time. You may request
                account deletion by contacting{" "}
                <a href={`mailto:${TERMS_DETAILS.contactEmail}`}>
                  {TERMS_DETAILS.contactEmail}
                </a>{" "}
                or through any available account-deletion functionality.
              </p>
              <p>
                Deleting an account and cancelling a paid subscription may be
                separate actions depending on the available billing
                arrangements. Any remaining billing obligations and statutory
                cancellation rights will be handled under the applicable
                subscription terms and law.
              </p>
              <h3>16.2 Suspension or termination by Pacemailer</h3>
              <p>
                We may suspend, restrict, or terminate access if we reasonably
                determine that:
              </p>
              <BulletList
                items={[
                  "You have materially violated these Terms.",
                  "Your account is involved in spam, fraud, abuse, or unlawful activity.",
                  "Your activity threatens the security, reliability, or reputation of the Services.",
                  "Your use creates a material risk to other users or third parties.",
                  "Continued access would violate applicable law or binding third-party requirements.",
                  "A subscription remains unpaid in circumstances covered by the applicable billing terms.",
                ]}
              />
              <p>
                Where reasonably practicable and appropriate, we may provide
                notice or an opportunity to address the issue before
                termination.
              </p>
              <h3>16.3 Consequences of termination</h3>
              <p>
                Following termination, your right to access the Services may
                end. Certain records may be retained or deleted according to our
                Privacy Policy, contractual obligations, and applicable law.
              </p>
              <p>
                Provisions that by their nature should survive termination,
                including intellectual property protections, outstanding payment
                obligations, applicable liability limitations, and dispute
                provisions, will remain effective.
              </p>
            </TermsSection>

            <TermsSection
              number={17}
              id="warranties"
              title="Disclaimer of Warranties"
            >
              <p>
                To the maximum extent permitted by applicable law, Pacemailer is
                provided on an <strong>"as is" and "as available"</strong>{" "}
                basis. We do not guarantee that:
              </p>
              <BulletList
                items={[
                  "The Services will always be uninterrupted, secure, or error-free.",
                  "LinkedIn or other third-party integrations will remain available.",
                  "Extracted professional contact information will always be accurate.",
                  "Generated professional email addresses will be correct or deliverable.",
                  "Email verification results will always be reliable.",
                  "Emails will reach their intended recipients or avoid spam filters.",
                  "Email-open tracking will accurately reflect recipient behavior.",
                  "Analytics or recommendations will produce particular business outcomes.",
                  "The Services will satisfy every user's specific business or regulatory requirements.",
                ]}
              />
              <p>
                Except for warranties that cannot legally be excluded, we
                disclaim implied warranties of merchantability, fitness for a
                particular purpose, and non-infringement to the extent permitted
                by law.
              </p>
            </TermsSection>

            <TermsSection
              number={18}
              id="limitation-of-liability"
              title="Limitation of Liability"
            >
              <p>
                To the maximum extent permitted by applicable law, Pacemailer
                and its officers, employees, affiliates, and service providers
                will not be liable for indirect, incidental, special,
                consequential, exemplary, or punitive damages arising from or
                relating to your use of the Services.
              </p>
              <p>
                This includes, where legally permitted, lost profits, lost
                business opportunities, reputational harm, loss of anticipated
                savings, or indirect losses resulting from interruptions,
                inaccurate contact information, unsuccessful email delivery, or
                third-party service restrictions.
              </p>
              <p>
                To the maximum extent permitted by applicable law, Pacemailer's
                aggregate liability for claims relating to the Services will not
                exceed the greater of:
              </p>
              <BulletList
                items={[
                  "The amount you paid to Pacemailer for the Services during the 12 months preceding the event giving rise to the claim; or",
                  "US $100.",
                ]}
              />
              <p>
                These limitations do not exclude or restrict liability that
                cannot legally be limited, including liability arising from
                fraud, intentional misconduct, or other matters where applicable
                law prohibits such exclusions. Nothing in these Terms removes
                mandatory consumer or statutory rights that apply to you.
              </p>
            </TermsSection>

            <TermsSection
              number={19}
              id="indemnification"
              title="Indemnification"
            >
              <p>
                To the extent permitted by applicable law, you agree to
                indemnify and hold harmless Pacemailer, its affiliates, and
                their respective officers, employees, and representatives
                against third-party claims, liabilities, damages, and reasonable
                expenses arising from:
              </p>
              <BulletList
                items={[
                  "Your unlawful or unauthorized use of the Services.",
                  "Your violation of these Terms.",
                  "Your collection or misuse of professional contact information.",
                  "Email messages or attachments submitted or sent at your direction.",
                  "Your violation of applicable privacy, anti-spam, intellectual property, or other laws.",
                  "Your infringement of another person's rights.",
                ]}
              />
              <p>
                This obligation applies only to the extent that the claim arises
                from matters for which you are legally responsible and does not
                require you to indemnify Pacemailer for its own unlawful
                conduct.
              </p>
            </TermsSection>

            <TermsSection
              number={20}
              id="changes-to-terms"
              title="Changes to These Terms"
            >
              <p>
                We may revise these Terms to reflect changes to our Services,
                business operations, applicable laws, or security requirements.
                When we make changes, we will update the effective or
                last-updated date and provide additional notice where required
                by law or where changes materially affect users' rights or
                obligations.
              </p>
              <p>
                Updated Terms will apply prospectively from their stated
                effective date. If you do not agree to updated Terms, you should
                stop using the Services and may request account closure, subject
                to applicable subscription and legal obligations.
              </p>
              <p>
                Continued use after revised Terms become effective may
                constitute acceptance to the extent permitted by law.
              </p>
            </TermsSection>

            <TermsSection
              number={21}
              id="governing-law"
              title="Governing Law and Disputes"
            >
              <p>
                These Terms will be governed by the laws of{" "}
                <strong>{TERMS_DETAILS.governingLaw}</strong>, without regard to
                conflict-of-law principles.
              </p>
              <p>
                Subject to any mandatory rights or jurisdictional requirements
                under applicable law, disputes arising from these Terms or the
                Services will be subject to the courts located in{" "}
                <strong>{TERMS_DETAILS.disputeJurisdiction}</strong>.
              </p>
              <p>
                Before initiating formal legal proceedings, you are encouraged
                to contact{" "}
                <a href={`mailto:${TERMS_DETAILS.contactEmail}`}>
                  {TERMS_DETAILS.contactEmail}
                </a>{" "}
                so that we can attempt to resolve the matter informally.
              </p>
              <p>
                Nothing in this section limits rights or remedies that
                applicable law does not permit the parties to waive.
              </p>
            </TermsSection>

            <TermsSection
              number={22}
              id="general-provisions"
              title="General Provisions"
            >
              <h3>22.1 Entire agreement</h3>
              <p>
                These Terms, together with any applicable subscription terms and
                other expressly incorporated agreements, constitute the
                agreement governing your use of the Services. Our Privacy Policy
                separately explains our personal-information handling practices.
              </p>
              <h3>22.2 Severability</h3>
              <p>
                If any provision of these Terms is determined to be invalid or
                unenforceable, the remaining provisions will continue to apply
                to the extent permitted by law.
              </p>
              <h3>22.3 No waiver</h3>
              <p>
                Our failure to enforce a provision of these Terms does not
                constitute a waiver of our right to enforce that provision in
                the future.
              </p>
              <h3>22.4 Assignment</h3>
              <p>
                You may not transfer your rights or obligations under these
                Terms without our prior written consent, except where applicable
                law provides otherwise. We may assign these Terms as part of a
                legitimate business restructuring, merger, acquisition, or
                transfer of business assets, subject to applicable law and
                privacy obligations.
              </p>
              <h3>22.5 Electronic communications</h3>
              <p>
                You agree that we may communicate with you electronically
                regarding account activity, service updates, security notices,
                and contractual matters, subject to applicable law. You are
                responsible for maintaining an accurate email address associated
                with your account.
              </p>
            </TermsSection>

            <TermsSection number={23} id="contact-us" title="Contact Us">
              <p>
                If you have questions about these Terms, your account,
                subscription, or use of Pacemailer, you may contact us at:
              </p>
              <div className="pm-privacy__contact-card">
                <div className="pm-privacy__contact-logo" aria-hidden="true">
                  <ShieldCheck size={22} />
                </div>
                <div className="pm-privacy__contact-details">
                  <h3>Pacemailer</h3>
                  <p>
                    Website: <a href={TERMS_DETAILS.website}>pacemailer.com</a>
                  </p>
                  <p>
                    Email:{" "}
                    <a href={`mailto:${TERMS_DETAILS.contactEmail}`}>
                      {TERMS_DETAILS.contactEmail}
                    </a>
                  </p>
                  <p>Business name: {TERMS_DETAILS.legalName}</p>
                  <p>Business location: {TERMS_DETAILS.businessAddress}</p>
                </div>
              </div>
              <p>
                We will review inquiries and respond in accordance with
                applicable legal requirements.
              </p>
            </TermsSection>

            <div className="pm-privacy__closing">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>
                By accessing or using Pacemailer, you acknowledge that you have
                read and agree to these Terms of Service.
              </span>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
