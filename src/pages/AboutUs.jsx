import React from "react";
import {
  ArrowRight,
  BarChart3,
  Clock3,
  Heart,
  Mail,
  MessageCircleMore,
  Rocket,
  Send,
  ShieldCheck,
  TrendingUp,
  UserRound,
  Users,
  Zap,
} from "lucide-react";

import "../styles/AboutUs.css";

const values = [
  {
    icon: <Zap size={27} />,
    title: "Simplicity",
    description: "We build tools that are easy to use and save you time.",
    className: "value-purple",
  },
  {
    icon: <Users size={27} />,
    title: "User First",
    description: "Our users’ success is at the center of everything we do.",
    className: "value-blue",
  },
  {
    icon: <ShieldCheck size={27} />,
    title: "Privacy & Security",
    description: "We take data privacy seriously and give you control.",
    className: "value-green",
  },
  {
    icon: <BarChart3 size={27} />,
    title: "Continuous Improvement",
    description: "We listen, learn, and keep building based on your feedback.",
    className: "value-orange",
  },
];

function SectionTag({ children }) {
  return <span className="about-section-tag">{children}</span>;
}

function BrowserIllustration() {
  return (
    <div className="about-browser-wrapper">
      <div className="browser-glow" />

      <div className="about-browser">
        <div className="browser-topbar">
          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>

          <div className="browser-address" />
        </div>

        <div className="browser-content">
          <div className="linkedin-title">
            Linked<span>in</span>
          </div>

          <div className="linkedin-divider" />

          <div className="linkedin-profile">
            <div className="linkedin-avatar">
              <UserRound size={39} />
            </div>

            <div className="linkedin-lines">
              <span />
              <span />
              <span />
            </div>
          </div>

          <strong>Alex Johnson</strong>
          <small>Software Engineer</small>

          <div className="profile-lines">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>

      <div className="relay-contact-card">
        <div className="relay-card-logo">
          <span>R</span>
          <strong>Relay</strong>
        </div>

        <label>
          Name
          <div className="relay-fake-input">Alex Johnson</div>
        </label>

        <label>
          Company
          <div className="relay-fake-input">Acme Inc.</div>
        </label>

        <label>
          Email
          <div className="relay-fake-input">alex.johnson@acme.com</div>
        </label>

        <div className="relay-save-button">Save Contact</div>
      </div>

      <Send className="hero-plane hero-plane-top" size={35} />

      <Send className="hero-plane hero-plane-bottom" size={35} />

      <div className="browser-note">
        <p>
          From
          <br />
          LinkedIn
          <br />
          to your
          <br />
          outreach list
          <br />
          in seconds
        </p>
        <div class="arrow">
          <div class="curve"></div>
          <div class="point"></div>
        </div>
        {/* <span>↙</span> */}
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <main className="about-page">
      <div className="about-page-decoration decoration-one" />
      <div className="about-page-decoration decoration-two" />

      {/* =========================================
          HERO
      ========================================== */}
      <section className="about-hero about-container">
        <div className="about-hero-content">
          <SectionTag>ABOUT US</SectionTag>

          <h1>
            Making professional
            <br />
            outreach simpler
            <br />
            and more effective
          </h1>

          <p className="about-hero-description">
            Relay was built to help professionals save time, find the right
            contacts, and send personalized emails that create real
            opportunities.
          </p>

          <div className="about-benefits">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Clock3 size={23} />
              </div>

              <div>
                <strong>Save hours</strong>
                <span>on manual work</span>
              </div>
            </div>

            <div className="benefit-divider" />

            <div className="benefit-item">
              <div className="benefit-icon">
                <Users size={23} />
              </div>

              <div>
                <strong>Reach the</strong>
                <span>right people</span>
              </div>
            </div>

            <div className="benefit-divider" />

            <div className="benefit-item">
              <div className="benefit-icon">
                <TrendingUp size={23} />
              </div>

              <div>
                <strong>Create more</strong>
                <span>opportunities</span>
              </div>
            </div>
          </div>
        </div>

        <BrowserIllustration />
      </section>

      {/* =========================================
          STORY
      ========================================== */}
      <section className="about-story about-container">
        <SectionTag>OUR STORY</SectionTag>

        <h2>Built by a developer, for professionals</h2>

        <p>
          After spending countless hours manually copying emails into Gmail,
          guessing email formats, personalizing templates, and attaching
          documents, I realized there had to be a better way. Most outreach
          tools are built for sales teams and recruiters, often with expensive
          subscriptions, and they can still make it surprisingly difficult to
          add and manage individual unique contacts. So I built Relay a simple
          yet powerful browser extension that streamlines the entire outreach
          process, from finding and generating emails to personalizing and
          sending them.
        </p>
        {/* <p>
          Most outreach tools are built for sales teams and recruiters, often
          with expensive subscriptions, and they can still make it surprisingly
          difficult to add and manage individual unique contacts.
        </p>
        <p>
          So I built Relay a simple yet powerful browser extension that
          streamlines the entire outreach process, from finding and generating
          emails to personalizing and sending them.
        </p> */}
      </section>

      {/* =========================================
          MISSION
      ========================================== */}
      <section className="about-mission about-container">
        <div className="mission-image-wrapper">
          {/*
            Replace the src below with your own image.
            Example: /images/about-mission.jpg
          */}
          <img
            src="/images/about-mission.jpg"
            alt="Professional working on outreach"
            className="mission-image"
          />

          <div className="mission-image-badge">
            <div className="mission-badge-icon">
              <Mail size={20} />
            </div>

            <span>
              Less manual work
              <br />
              More meaningful
              <br />
              conversations
            </span>
          </div>
        </div>

        <div className="mission-content">
          <SectionTag>OUR MISSION</SectionTag>

          <h2>
            To make professional
            <br />
            opportunities more accessible
          </h2>

          <p>
            We believe that the right conversation can open doors. Our mission
            is to give professionals, job seekers, and businesses the tools to
            connect with the right people easily and efficiently.
          </p>
        </div>
      </section>

      {/* =========================================
          VALUES
      ========================================== */}
      <section className="about-values about-container">
        <div className="section-centered-heading">
          <SectionTag>OUR VALUES</SectionTag>
          <h2>What drives us</h2>
        </div>

        <div className="values-grid">
          {values.map((value) => (
            <article
              className={`value-card ${value.className}`}
              key={value.title}
            >
              <div className="value-icon">{value.icon}</div>

              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================
          IMPACT
      ========================================== */}
      <section className="about-impact about-container">
        <div className="impact-copy">
          <SectionTag>OUR IMPACT</SectionTag>

          <h2>
            Helping professionals
            <br />
            connect
          </h2>

          <p>
            From job seekers to recruiters and sales professionals, Relay is
            used by people around the world to create meaningful connections.
          </p>
        </div>

        <div className="impact-separator" />

        <div className="impact-stats">
          <div className="impact-stat">
            <div className="impact-icon">
              <Rocket size={28} />
            </div>

            <strong>Actively Building</strong>
            <span>New features and improvements are coming soon</span>
          </div>

          <div className="impact-stat">
            <div className="impact-icon">
              <MessageCircleMore size={28} />
            </div>

            <strong>Your Feedback Matters</strong>
            <span>Helps us build a tool that solves real problems</span>
          </div>

          <div className="impact-stat">
            <div className="impact-icon">
              <Heart size={28} />
            </div>

            <strong>Join Early</strong>
            <span>Be among the first to use Relay and get early updates</span>
          </div>
        </div>
      </section>

      {/* =========================================
          CTA
      ========================================== */}
      <section className="about-cta">
        <div className="cta-decoration cta-decoration-left">
          <p>
            More tools
            <br />
            More opportunities
            <br />A brighter future
          </p>
          {/* <span>↘</span> */}
        </div>

        <div className="about-cta-content">
          <SectionTag>OUR JOURNEY CONTINUES</SectionTag>

          <h2>Let’s make outreach effortless</h2>

          <p>
            We're just getting started. Our goal is to keep improving Relay and
            empowering professionals like you to achieve more.
          </p>

          <a href="/signup" className="about-cta-button">
            Get Started for Free
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="cta-decoration cta-decoration-right">
          <p>
            Thank you
            <br />
            for being part
            <br />
            of our journey!
          </p>
          {/* <span>↙</span> */}
        </div>
      </section>
    </main>
  );
}
