import React, { useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  FileText,
  Mail,
  MessageCircle,
  Paperclip,
  Send,
} from "lucide-react";
import { submitContactForm } from "../api/contactApi";
import "../styles/ContactUs.css";

const faqItems = [
  {
    question: "How does the extension work?",
    answer:
      "Install the extension, sign in to your account, and Relay will be ready to use from your browser.",
  },
  {
    question: "Is my data safe?",
    answer:
      "We take privacy and security seriously and use appropriate safeguards to protect your information.",
  },
  {
    question: "Can I use it on multiple devices?",
    answer:
      "Yes. Sign in with the same Relay account on each supported device.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refund eligibility depends on your plan and purchase. Contact support and our team can review your request.",
  },
  {
    question: "Where can I manage my subscription?",
    answer:
      "You can manage your subscription from your Relay account settings.",
  },
];

function ContactIllustration() {
  return (
    <div className="contact-illustration" aria-hidden="true">
      <span className="illustration-spark spark-one" />
      <span className="illustration-spark spark-two" />

      <div className="illustration-paper-back" />

      <div className="illustration-paper">
        <span />
        <span />
        <span />
      </div>

      <div className="illustration-envelope">
        <div className="envelope-left" />
        <div className="envelope-right" />
        <div className="envelope-front" />
      </div>

      <div className="illustration-chat">
        <span />
        <span />
        <span />
      </div>

      <div className="illustration-plane">
        <Send size={42} strokeWidth={1.5} />
      </div>

      <svg
        className="illustration-path"
        width="150"
        height="74"
        viewBox="0 0 150 74"
        fill="none"
      >
        <path
          d="M3 19C17 5 35 11 38 27C42 49 19 55 23 65C27 75 69 70 91 45C107 27 118 25 144 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="7 8"
        />
      </svg>
    </div>
  );
}

function SupportCard({ icon, title, description, linkText, href = "#" }) {
  return (
    <div className="support-card">
      <div className="support-card-icon">{icon}</div>

      <div className="support-card-content">
        <h3>{title}</h3>
        <p>{description}</p>

        <a href={href}>
          {linkText}
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (submitting) {
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await submitContactForm({
        email,
        subject,
        description,
      });

      setEmail("");
      setSubject("");
      setDescription("");

      setSubmitSuccess(true);
    } catch (error) {
      console.error("Contact form submission failed:", error);

      setSubmitError(
        error.message || "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      <div className="contact-background contact-background-left" />
      <div className="contact-background contact-background-right" />

      <div className="contact-container">
        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero-copy">
            <span className="contact-eyebrow">CONTACT US</span>

            <h1>
              We’re here to <span>help</span>
            </h1>

            <p>
              Have a question, found a bug, or need assistance? Our team usually
              responds within 24 hours.
            </p>
          </div>

          <ContactIllustration />
        </section>

        {/* Main content */}
        <section className="contact-content">
          {/* Form */}
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <h2>Send us a message</h2>
              <p>
                Fill out the form below and we’ll get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              {/* Email */}
              <div className="form-group">
                <label htmlFor="contact-email">
                  Your Email <span>*</span>
                </label>

                <div className="input-wrapper">
                  <Mail size={20} />
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="contact-subject">
                  Subject <span>*</span>
                </label>

                <div className="input-wrapper select-wrapper">
                  <FileText size={20} />

                  <select
                    id="contact-subject"
                    name="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="general">General Question</option>
                    <option value="technical">Technical Support</option>
                    <option value="bug">Report a Bug</option>
                    <option value="billing">Billing & Subscription</option>
                    <option value="feature">Feature Request</option>
                    <option value="other">Other</option>
                  </select>

                  <ChevronDown className="select-arrow" size={18} />
                </div>
              </div>

              {/* Description */}
              <div className="form-group">
                <label htmlFor="contact-description">
                  Description <span>*</span>
                </label>

                <div className="textarea-wrapper">
                  <MessageCircle size={20} />

                  <textarea
                    id="contact-description"
                    name="description"
                    maxLength={1000}
                    value={description}
                    required
                    placeholder="Please provide more details about your question or issue..."
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </div>

                <div className="character-count">{description.length}/1000</div>
              </div>
              {submitError && (
                <div className="contact-form-error">{submitError}</div>
              )}

              {submitSuccess && (
                <div className="contact-form-success">
                  Thanks! Your message has been sent. We’ll get back to you
                  shortly.
                </div>
              )}
              <button
                type="submit"
                className="send-message-button"
                disabled={submitting}
              >
                <Send size={19} />

                {submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="contact-sidebar">
            <div className="other-contact-header">
              <h2>Other ways to reach us</h2>
              <p>Prefer a different channel? You can also reach us here.</p>
            </div>

            <div className="support-options">
              <SupportCard
                icon={<Mail size={25} />}
                title="Email Support"
                description="For general queries and support"
                linkText="support@relayapp.com"
                href="mailto:support@relayapp.com"
              />
              {/* 
              <SupportCard
                icon={<MessageCircle size={25} />}
                title="Live Chat"
                description="Chat with our team (Mon – Sat, 9 AM – 6 PM IST)"
                linkText="Open Live Chat"
              />

              <SupportCard
                icon={<BookOpen size={25} />}
                title="Help Center"
                description="Find answers to common questions"
                linkText="Visit Help Center"
              /> */}
            </div>

            {/* FAQs */}
            <div className="common-topics">
              <div className="common-topics-header">
                <h2>Common Topics</h2>
                <p>Find quick answers to popular questions.</p>
              </div>

              <div className="contact-faq-list">
                {faqItems.map((item) => (
                  <details className="contact-faq-item" key={item.question}>
                    <summary>
                      <span>{item.question}</span>
                      <ChevronDown size={18} />
                    </summary>

                    <div className="contact-faq-answer">{item.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
