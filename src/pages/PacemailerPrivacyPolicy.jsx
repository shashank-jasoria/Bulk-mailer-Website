import { useEffect, useState } from "react";
import {
  BarChart3,
  ChevronDown,
  ChevronRight,
  Home,
  ShieldCheck,
  UserRound,
  Users,
} from "lucide-react";
import "../styles/PacemailerPrivacyPolicy.css";

const POLICY_DETAILS = {
  effectiveDate: "October 12, 2026",
  lastUpdated: "October 12, 2026",
  legalName: "Shashank",
  businessAddress: "Rajsthan, India",
  contactEmail: "support@pacemailer.com",
};

const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "chrome-extension", title: "Chrome Extension Access" },
  { id: "how-we-use-information", title: "How We Use Information" },
  { id: "google-api-data", title: "Google API Data & Limited Use" },
  { id: "professional-contact-data", title: "Professional Contact Data" },
  { id: "email-recipients-and-tracking", title: "Email Recipients & Tracking" },
  { id: "information-sharing", title: "Information Sharing" },
  { id: "cookies-and-local-storage", title: "Cookies & Local Storage" },
  { id: "legal-bases", title: "Legal Bases & Responsibilities" },
  { id: "data-retention", title: "Data Storage & Retention" },
  { id: "your-rights", title: "Your Privacy Rights" },
  { id: "international-transfers", title: "International Data Transfers" },
  { id: "data-security", title: "Data Security" },
  { id: "childrens-privacy", title: "Children’s Privacy" },
  { id: "third-party-services", title: "Third-Party Services" },
  { id: "changes-to-policy", title: "Changes to This Policy" },
  { id: "contact-us", title: "Contact Us" },
];

function usePrivacyMetadata() {
  useEffect(() => {
    const previousTitle = document.title;
    const cleanups = [];
    const title = "Privacy Policy | Pacemailer";
    const description =
      "Learn how Pacemailer handles personal information across its website, Chrome extension, connected email accounts, and outreach services.";
    const siteUrl = (
      import.meta.env.VITE_SITE_URL || window.location.origin
    ).replace(/\/+$/, "");
    const pageUrl = `${siteUrl}/privacy-policy`;

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

// Based on the TOC/IntersectionObserver approach from your blog page.
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
    <nav className="pm-privacy__toc-links" aria-label="Privacy policy sections">
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

function PolicySection({ number, id, title, children }) {
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

export default function PacemailerPrivacyPolicy() {
  usePrivacyMetadata();
  const [activeSection, setActiveSection] = useActiveSection(SECTIONS);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const selectSection = (id) => {
    setActiveSection(id);
    setMobileTocOpen(false);
  };

  return (
    <main className="pm-privacy" id="pm-privacy-top">
      <a className="pm-privacy__skip-link" href="#pm-privacy-content">
        Skip to privacy policy
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
          <span aria-current="page">Privacy Policy</span>
        </nav>

        <div className="pm-privacy__layout">
          <aside className="pm-privacy__sidebar" aria-label="On this page">
            <div className="pm-privacy__toc-card">
              <h2 className="pm-privacy__toc-title">On this page</h2>
              <button
                type="button"
                className="pm-privacy__toc-toggle"
                aria-expanded={mobileTocOpen}
                aria-controls="pm-privacy-toc-content"
                onClick={() => setMobileTocOpen((value) => !value)}
              >
                On this page
                <ChevronDown
                  size={18}
                  className={mobileTocOpen ? "is-open" : ""}
                />
              </button>
              <div
                id="pm-privacy-toc-content"
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

          <article className="pm-privacy__article" id="pm-privacy-content">
            <header className="pm-privacy__hero">
              <h1>Privacy Policy</h1>
              <p className="pm-privacy__updated">
                Last updated: {POLICY_DETAILS.lastUpdated}
              </p>
              <p className="pm-privacy__lede">
                At Pacemailer, we value your privacy and are committed to
                handling personal information responsibly. This Privacy Policy
                explains what information we collect, how we use and protect it,
                and the choices available to you when using our website, Chrome
                extension, and related services.
              </p>
            </header>

            <PolicySection number={1} id="introduction" title="Introduction">
              <p>
                Welcome to <strong>Pacemailer</strong>. Pacemailer
                ("Pacemailer," "we," "our," or "us") is a productivity platform
                that helps users discover professional contacts, manage prospect
                information, generate email addresses, create personalized
                outreach messages, connect email accounts, send emails, and
                analyze outreach activity.
              </p>
              <p>
                This Privacy Policy applies to our website at{" "}
                <a href="https://pacemailer.com">https://pacemailer.com</a>, our
                Chrome browser extension, and our related applications, APIs,
                and services (collectively, the "Services"). It applies to
                registered users, website visitors, and individuals whose
                professional contact information is processed through
                Pacemailer.
              </p>
              <p>
                Pacemailer is operated by{" "}
                <strong>{POLICY_DETAILS.legalName}</strong>, located at{" "}
                <strong>{POLICY_DETAILS.businessAddress}</strong>.
              </p>
              <p>
                By using our Services, you acknowledge the practices described
                in this policy. Where applicable law requires consent for
                particular processing activities, we will obtain that consent
                separately.
              </p>
              <p className="pm-privacy__effective-date">
                Effective date: {POLICY_DETAILS.effectiveDate}
              </p>
            </PolicySection>

            <PolicySection
              number={2}
              id="information-we-collect"
              title="Information We Collect"
            >
              <p>
                We process information needed to provide Pacemailer's features,
                including account details, professional contact data, and
                service usage information.
              </p>
              <div
                className="pm-privacy__info-card"
                aria-label="Summary of information collected"
              >
                <InfoCard icon={UserRound} title="Account Information">
                  Name, email address, login details, connected accounts,
                  subscription information, and preferences.
                </InfoCard>
                <InfoCard icon={Users} title="Professional Contact Data">
                  Names, companies, job titles, LinkedIn profile URLs,
                  professional email addresses, and associated outreach records.
                </InfoCard>
                <InfoCard icon={BarChart3} title="Usage Information">
                  Feature activity, requests, technical diagnostics, and email
                  delivery or tracking information where applicable.
                </InfoCard>
              </div>

              <h3>2.1 Account information</h3>
              <p>When you register for or use Pacemailer, we may collect:</p>
              <BulletList
                items={[
                  "Your name and email address.",
                  "Account identifiers and authentication information.",
                  "Passwords stored in hashed form.",
                  "Subscription plan, account preferences, and feature settings.",
                  "Connected email account identifiers.",
                  "Account creation and login activity.",
                ]}
              />
              <p>
                We use this information to create and manage accounts,
                authenticate users, and provide access to the Services.
              </p>

              <h3>2.2 Professional contact information</h3>
              <p>
                Pacemailer allows users to collect and manage professional
                information from LinkedIn profiles and manually entered
                contacts. Depending on the available information and enabled
                features, this can include:
              </p>
              <BulletList
                items={[
                  "Full name and professional position.",
                  "Company name and company domain.",
                  "LinkedIn profile URL and relevant professional information.",
                  "Professional email addresses, including generated or inferred addresses.",
                  "Email verification and delivery status.",
                  "Contact creation and update timestamps.",
                  "Email sending and engagement history.",
                ]}
              />
              <p>
                Email addresses generated from company email patterns may be
                predictions and are not guaranteed to be accurate. Information
                may come from profiles viewed by a user, information entered by
                users, and records already available within the Services.
              </p>

              <h3>2.3 Google and Microsoft account information</h3>
              <p>
                When you connect a supported email account through OAuth, we may
                access your email address, basic account profile, account
                identifiers, authorization tokens, authorized sending
                functionality, and relevant information about messages sent
                using Pacemailer.
              </p>
              <p>
                With your authorization, message metadata and, where necessary
                for an enabled feature, message content may be processed to
                determine delivery or failure status. Gmail permissions may
                include sending access and read-only mailbox access. Read-only
                access can permit access to mailbox messages and settings; it is
                used only for the disclosed, authorized email-related features.
              </p>
              <p>
                You can revoke Pacemailer's access in your Google or Microsoft
                account security settings.
              </p>

              <h3>2.4 Email content and attachments</h3>
              <BulletList
                items={[
                  "Email recipients, subjects, and message bodies.",
                  "Personalized templates and custom variables.",
                  "Uploaded attachments.",
                  "Sending schedules and queue information.",
                  "Sending results, message identifiers, and delivery-related records.",
                ]}
              />
              <p>
                We process this information to prepare, personalize, schedule,
                and send messages at your direction. Uploaded attachments may be
                stored using third-party cloud storage providers.
              </p>

              <h3>2.5 Outreach and email tracking information</h3>
              <p>
                When supported tracking features are enabled, we may process
                send times, detected email opens, the time and number of
                detected opens, bounce information, and technical information
                associated with tracking requests, potentially including IP
                addresses and browser or device information. Email-open tracking
                may use a small image or similar technology in outgoing
                messages.
              </p>
              <p>
                Open tracking is not always accurate. Email clients can block,
                cache, or automatically retrieve tracking images.
              </p>

              <h3>2.6 Payment and subscription information</h3>
              <p>
                If you purchase a subscription, we may collect plan selections,
                billing status, transaction references, payment history,
                currency, and renewal or cancellation information. External
                payment providers process payment credentials under their own
                privacy policies.
              </p>

              <h3>2.7 Technical and usage information</h3>
              <p>
                We may automatically collect IP addresses, browser and operating
                system details, device or extension-related information, API
                requests, error and performance logs, authentication activity,
                and feature usage information to operate and secure Pacemailer.
              </p>
            </PolicySection>

            <PolicySection
              number={3}
              id="chrome-extension"
              title="How the Chrome Extension Accesses Information"
            >
              <p>
                The Pacemailer Chrome extension supports professional contact
                discovery and email outreach. On supported LinkedIn pages, it
                may read relevant professional profile information displayed on
                those pages to enable contact extraction, email generation, and
                saving.
              </p>
              <p>
                If you enable automatic contact saving, supported profile
                information may be processed as you navigate LinkedIn profiles.
                The extension may use browser permissions for LinkedIn access,
                local storage, authentication, notifications, and communication
                with our backend.
              </p>
              <p>
                These permissions support the extension's disclosed
                functionality. We do not use extension-collected browsing
                information for unrelated behavioral advertising or sell it to
                advertising data brokers.
              </p>
            </PolicySection>

            <PolicySection
              number={4}
              id="how-we-use-information"
              title="How We Use Information"
            >
              <p>We process personal information to:</p>
              <BulletList
                items={[
                  "Create, authenticate, and maintain user accounts.",
                  "Extract, save, update, and organize professional contacts.",
                  "Generate and validate possible professional email addresses.",
                  "Maintain email templates, custom variables, and attachments.",
                  "Connect authorized email accounts and send messages at users' direction.",
                  "Queue and schedule outgoing emails.",
                  "Track sending activity, delivery results, and supported engagement metrics.",
                  "Generate dashboards and outreach analytics.",
                  "Manage subscriptions, billing records, and account limitations.",
                  "Detect fraud, investigate abuse, troubleshoot errors, and secure our Services.",
                  "Respond to support requests and comply with legal obligations.",
                ]}
              />
              <p>
                We do not use information obtained through Google APIs or Chrome
                extension permissions for personalized advertising, sale to data
                brokers, creditworthiness evaluation, or unrelated purposes.
              </p>
            </PolicySection>

            <PolicySection
              number={5}
              id="google-api-data"
              title="Google API Data Usage and Limited Use Disclosure"
            >
              <p>
                Pacemailer's Google integration enables user-authorized
                authentication, email sending, and related mailbox
                functionality. Google information is accessed only within the
                permissions granted by users and used for features relevant to
                the Pacemailer experience.
              </p>
              <BulletList
                items={[
                  "Google API data is used only to provide or improve authorized user-facing features.",
                  "Google user data is not sold or transferred to advertising platforms, data brokers, or information resellers.",
                  "Google user data is not used for personalized or interest-based advertising.",
                  "Google user data is not used to train general-purpose artificial intelligence or machine-learning models.",
                  "Transfers are limited to uses authorized by the user and permitted under Google's policies, applicable security or legal requirements, or other expressly permitted circumstances.",
                  "Human access is restricted to circumstances permitted by Google's policies, such as specific user consent, security investigations, or legal compliance.",
                ]}
              />
              <div className="pm-privacy__callout">
                <div className="pm-privacy__callout-title">
                  <ShieldCheck size={18} aria-hidden="true" />
                  Google Limited Use Disclosure
                </div>
                <p>
                  Pacemailer's use and transfer of information received from
                  Google APIs will adhere to the{" "}
                  <a
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements.
                </p>
              </div>
              <div className="pm-privacy__callout pm-privacy__callout--subtle">
                <div className="pm-privacy__callout-title">
                  Chrome Web Store Limited Use Disclosure
                </div>
                <p>
                  Pacemailer's use of information obtained through the Chrome
                  extension will adhere to the Chrome Web Store User Data
                  Policy, including its Limited Use requirements.
                </p>
              </div>
              <p>
                You may disconnect your Google account or revoke Pacemailer's
                permissions in your Google account security settings. Revoking
                access prevents further authorized API access, although
                previously created historical records may remain subject to this
                policy's retention provisions.
              </p>
            </PolicySection>

            <PolicySection
              number={6}
              id="professional-contact-data"
              title="Professional Contact Data and Shared Reference Records"
            >
              <p>
                Pacemailer processes professional contact information supplied
                or collected by account holders. To support contact management,
                deduplication, email discovery, and verification, Pacemailer may
                maintain reference records concerning professional contacts,
                companies, email domains, company email patterns, and
                verification status.
              </p>
              <p>
                Some reference records may be used across accounts where this
                functionality is enabled and permitted by applicable law. This
                may involve sharing professional contact details or reference
                information with other authorized Pacemailer users.
              </p>
              <p>
                Connected mailbox contents, passwords, OAuth credentials, and
                private email templates are not intended to be part of shared
                professional contact reference records. Data obtained from
                Google APIs remains subject to Google's applicable restrictions,
                including rules concerning derived data and unauthorized
                transfers.
              </p>
              <p>
                Users must ensure they have an appropriate legal basis for
                collecting contact details and conducting outreach, and must
                honor recipients' privacy rights. Individuals may contact us
                about access, correction, or deletion requests, subject to
                applicable law and the roles of Pacemailer and the relevant
                account holder.
              </p>
            </PolicySection>

            <PolicySection
              number={7}
              id="email-recipients-and-tracking"
              title="Email Recipients and Tracking"
            >
              <p>
                You may receive an email sent using Pacemailer even if you do
                not have a Pacemailer account. In those cases, a sender may have
                supplied or collected your professional contact information and
                used our Services to prepare or send an email.
              </p>
              <p>
                If the sender enables open tracking, the email may contain a
                tracking resource that helps record a possible email open. This
                information is used to provide engagement information to the
                sender.
              </p>
              <p>
                Recipients may contact the sender to request that outreach stop,
                and may contact Pacemailer concerning personal information
                processed through our Services. Senders are responsible for
                complying with applicable email marketing, privacy, consent, and
                unsubscribe requirements. Where tracking requires consent under
                applicable law, the appropriate consent or legal authorization
                must be obtained.
              </p>
            </PolicySection>

            <PolicySection
              number={8}
              id="information-sharing"
              title="How We Share Information"
            >
              <p>
                We may disclose information to service providers and other
                parties when necessary to operate Pacemailer, including:
              </p>
              <BulletList
                items={[
                  <>
                    <strong>Cloud hosting and databases:</strong> Providers such
                    as Railway that host our application, databases, and job
                    queues.
                  </>,
                  <>
                    <strong>File storage:</strong> Cloudflare R2 or other
                    configured providers that store and retrieve attachments.
                  </>,
                  <>
                    <strong>Email providers:</strong> Google and Microsoft when
                    users connect accounts or request authorized mailbox
                    functionality.
                  </>,
                  <>
                    <strong>Payment processors:</strong> External providers that
                    process subscription payments and transactions.
                  </>,
                  <>
                    <strong>Authorized users:</strong> Professional contact
                    reference information, when shared-data features are enabled
                    as described above.
                  </>,
                  <>
                    <strong>Legal and security disclosures:</strong> Where
                    required by valid legal process or necessary to investigate
                    fraud, abuse, or security incidents.
                  </>,
                  <>
                    <strong>Business transactions:</strong> In a merger,
                    acquisition, restructuring, or asset transfer, subject to
                    applicable laws and platform-policy requirements.
                  </>,
                ]}
              />
              <p>
                Service providers are permitted to process information only for
                authorized services and under applicable contractual and legal
                safeguards.
              </p>
            </PolicySection>

            <PolicySection
              number={9}
              id="cookies-and-local-storage"
              title="Cookies and Local Storage"
            >
              <p>
                Pacemailer may use cookies and browser storage to maintain login
                sessions, remember settings, temporarily store authentication
                information, and support the extension's functionality. The
                extension may store account settings locally using Chrome
                storage.
              </p>
              <p>
                Email tracking is separate from website session cookies and may
                use tracking resources embedded in outgoing messages. Where
                non-essential analytics or tracking technologies are used on the
                website, we will provide appropriate information and choices
                where required by law.
              </p>
              <p>
                You may manage website cookies through your browser settings,
                although disabling necessary cookies may affect some features.
              </p>
            </PolicySection>

            <PolicySection
              number={10}
              id="legal-bases"
              title="Legal Bases and Processing Responsibilities"
            >
              <p>
                Where privacy laws require a legal basis, Pacemailer relies on
                the relevant lawful grounds for each processing activity, which
                may include:
              </p>
              <BulletList
                items={[
                  "Performance of a contract to provide Services to registered users.",
                  "Consent, where required for optional integrations or processing activities.",
                  "Legitimate interests in operating, maintaining, securing, and improving Services, where not overridden by individuals' rights.",
                  "Compliance with applicable legal obligations.",
                ]}
              />
              <p>
                For professional contact data processed at an account holder's
                direction, the account holder may determine the purpose and
                means of outreach while Pacemailer provides related processing
                services. Pacemailer may independently determine certain
                purposes for account management, security, and shared reference
                data. Responsibilities depend on the activity and applicable
                law.
              </p>
            </PolicySection>

            <PolicySection
              number={11}
              id="data-retention"
              title="Data Storage and Retention"
            >
              <p>
                We retain information for as long as reasonably necessary to
                provide the Services and fulfill the purposes described in this
                policy. Account information, contacts, templates, attachments,
                and outreach history may be retained while an account remains
                active.
              </p>
              <p>
                Certain billing, security, and transaction records may be kept
                for additional periods where required by law or necessary for
                legitimate business purposes. When an account is deleted,
                personal information associated with it will be deleted or
                de-identified in accordance with applicable retention
                requirements, subject to technical backup cycles and legal
                exceptions.
              </p>
              <p>
                Shared professional reference records may follow separate
                retention criteria where Pacemailer has an independent lawful
                basis to maintain them. Individuals may submit deletion requests
                using the contact information below.
              </p>
            </PolicySection>

            <PolicySection
              number={12}
              id="your-rights"
              title="Your Privacy Rights and Choices"
            >
              <p>
                Depending on your location and applicable laws, you may have the
                right to:
              </p>
              <BulletList
                items={[
                  "Request access to personal information held about you.",
                  "Request correction of inaccurate information.",
                  "Request deletion of personal information.",
                  "Object to or restrict certain processing activities.",
                  "Request a portable copy of applicable personal information.",
                  "Withdraw consent where processing is based on consent.",
                  "Lodge a complaint with an applicable data protection authority.",
                ]}
              />
              <p>
                Registered users can manage some information through account
                settings and revoke connected email permissions through Google
                or Microsoft. Individuals whose professional information is
                stored through Pacemailer may contact us about their rights.
                Certain requests relating to a sender's records may need to be
                addressed by that account holder. We may reasonably verify
                identity before responding.
              </p>
            </PolicySection>

            <PolicySection
              number={13}
              id="international-transfers"
              title="International Data Transfers"
            >
              <p>
                Pacemailer uses cloud infrastructure and third-party providers
                that may process information in countries other than where you
                live. Where international transfers are subject to specific
                legal requirements, we will apply the safeguards required by
                applicable law.
              </p>
            </PolicySection>

            <PolicySection number={14} id="data-security" title="Data Security">
              <p>
                We take reasonable technical and organizational measures to
                protect personal information against unauthorized access,
                alteration, disclosure, or loss. Measures may include encrypted
                HTTPS connections, authentication controls, restricted access,
                secure credential handling, and infrastructure monitoring.
              </p>
              <p>
                No internet-connected system can guarantee absolute security.
                Users should protect their account credentials and report
                suspected unauthorized account access promptly.
              </p>
            </PolicySection>

            <PolicySection
              number={15}
              id="childrens-privacy"
              title="Children’s Privacy"
            >
              <p>
                Pacemailer is intended for professional productivity and is not
                designed for children under 18. We do not intentionally collect
                children's personal information to register them as users. If we
                learn that a child has registered or that children's information
                has been processed unlawfully, we will take appropriate steps
                under applicable law.
              </p>
            </PolicySection>

            <PolicySection
              number={16}
              id="third-party-services"
              title="Third-Party Services"
            >
              <p>
                Pacemailer integrates with third-party platforms such as
                LinkedIn, Google, and Microsoft. Your use of those platforms is
                also governed by their own terms and privacy policies.
              </p>
              <p>
                Pacemailer is an independent service and is not affiliated with,
                endorsed by, or officially sponsored by LinkedIn, Google, or
                Microsoft.
              </p>
            </PolicySection>

            <PolicySection
              number={17}
              id="changes-to-policy"
              title="Changes to This Privacy Policy"
            >
              <p>
                We may update this policy to reflect changes in our Services,
                data practices, security measures, or legal requirements. We
                will update the "Last updated" date when changes are made and
                provide additional notice or seek consent where required by law
                or platform policies.
              </p>
            </PolicySection>

            <PolicySection number={18} id="contact-us" title="Contact Us">
              <p>
                If you have questions, want to exercise privacy rights, or need
                to report a privacy concern, please contact us:
              </p>
              <div className="pm-privacy__contact-card">
                <div className="pm-privacy__contact-logo" aria-hidden="true">
                  <ShieldCheck size={22} />
                </div>
                <div className="pm-privacy__contact-details">
                  <h3>Pacemailer</h3>
                  <p>
                    Website: <a href="https://pacemailer.com">pacemailer.com</a>
                  </p>
                  <p>Email: {POLICY_DETAILS.contactEmail}</p>
                  <p>Business name: {POLICY_DETAILS.legalName}</p>
                  {/* <p>Business address: {POLICY_DETAILS.businessAddress}</p> */}
                </div>
              </div>
              <p>
                We will review privacy-related requests and respond in
                accordance with applicable legal requirements.
              </p>
            </PolicySection>

            <div className="pm-privacy__closing">
              <ShieldCheck size={19} aria-hidden="true" />
              <span>
                Questions about your privacy? Reach out through the contact
                information above.
              </span>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
