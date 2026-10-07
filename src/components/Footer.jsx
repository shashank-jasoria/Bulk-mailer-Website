// import { Mail, Linkedin, Youtube } from "lucide-react";
import {
  Zap,
  Users,
  Target,
  ArrowRight,
  Send,
  UserRound,
  Sparkles,
} from "lucide-react";
import "../styles/Footer.css";

export default function Footer({ site, darkMode }) {
  console.log("site", site);
  return (
    <>
      <footer className="site-footer">
        <OutreachBanner darkMode={darkMode} />
        <div className="site-footer__inner">
          {/* Brand */}
          <div className="site-footer__brand">
            <div className="site-footer__brand-top">
              <div className="site-footer__logo">
                {/* <Mail size={26} strokeWidth={2.2} /> */}
              </div>

              <div className="site-footer__brand-text">
                <h2>SpeedyApply</h2>
                <p>LinkedIn Email Extractor</p>
              </div>
            </div>

            <p className="site-footer__description">
              Extract LinkedIn contacts, generate professional emails and
              automate your outreach — all in one simple extension.
            </p>

            <div className="site-footer__socials">
              <a href="#" aria-label="LinkedIn" className="site-footer__social">
                {/* <Linkedin /> */}
              </a>

              <a href="#" aria-label="X" className="site-footer__social">
                <span className="site-footer__x-logo">𝕏</span>
              </a>

              <a href="#" aria-label="YouTube" className="site-footer__social">
                {/* <Youtube /> */}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="site-footer__links">
            <div className="site-footer__column">
              <h3>Resources</h3>

              <nav aria-label="Footer resources">
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <a href="#faq">FAQ</a>
                <a href="#blog">Blog</a>
              </nav>
            </div>

            <div className="site-footer__column">
              <h3>Legal</h3>

              <nav aria-label="Footer legal">
                <a href="/privacy-policy">Privacy Policy</a>

                <a href="/terms">Terms of Service</a>
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <p className="site-footer__copyright">
            © 2026 SpeedyApply. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

function OutreachBanner({ darkMode }) {
  const imageSrc = darkMode
    ? "./footer-banner-dark.png"
    : "./footer-banner-light.png";
  return (
    <section className="outreach-banner">
      {/* decorative background */}
      <div className="outreach-banner__wave outreach-banner__wave--left" />
      <div className="outreach-banner__wave outreach-banner__wave--right" />

      <div className="outreach-banner__content">
        {/* ==============================
            LEFT
        ============================== */}
        <div className="outreach-banner__main">
          <div className="outreach-banner__badge">
            <Zap size={15} />
            <span>
              Get started with <strong>SpeedyApply</strong>
            </span>
          </div>

          <h2 className="outreach-banner__title">
            Ready to get <span>started</span>
          </h2>

          <p className="outreach-banner__subtitle">
            Send cold emails faster, get more interviews, and land your next job
            with SpeedyApply..
          </p>

          <div className="outreach-banner__cta">
            <button
              type="button"
              className="outreach-banner__button"
              // onClick={onGetStarted}
            >
              Get Started
              <ArrowRight />
            </button>

            <span className="outreach-banner__note">
              No credit card required
            </span>
          </div>
          {/* <div className="outreach-banner__benefits">
            <div className="outreach-banner__benefit">
              <span className="outreach-banner__benefit-icon">
                <Zap />
              </span>

              <span>Save time</span>
            </div>

            <div className="outreach-banner__benefit">
              <span className="outreach-banner__benefit-icon">
                <Users />
              </span>

              <span>Grow your network</span>
            </div>

            <div className="outreach-banner__benefit">
              <span className="outreach-banner__benefit-icon outreach-banner__benefit-icon--success">
                <Target />
              </span>

              <span>Work smarter</span>
            </div>
          </div> */}
        </div>
        <div className="">
          <img src={imageSrc} className="footer-img" alt="" />
        </div>

        {/* ==============================
            CTA
        ============================== */}

        {/* ==============================
            ILLUSTRATION
        ============================== */}
        {/* <div className="outreach-banner__illustration" aria-hidden="true">
          <Sparkles className="outreach-banner__spark outreach-banner__spark--one" />
          <Sparkles className="outreach-banner__spark outreach-banner__spark--two" />

          <div className="outreach-banner__plane">
            <Send />
          </div>

          <div className="outreach-banner__profile">
            <span className="outreach-banner__profile-icon">
              <UserRound />
            </span>

            <div className="outreach-banner__profile-lines">
              <span />
              <span />
            </div>
          </div>

          <svg
            className="outreach-banner__path"
            viewBox="0 0 230 110"
            fill="none"
          >
            <path
              d="M20 8C7 30 10 59 37 65C69 72 80 45 110 60C133 72 131 95 171 91C194 89 201 75 220 96"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="6 7"
            />
          </svg>
        </div> */}
      </div>
    </section>
  );
}
