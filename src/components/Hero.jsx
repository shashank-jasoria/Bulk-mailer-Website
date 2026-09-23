import MediaPlaceholder from './MediaPlaceholder.jsx';

export default function Hero({ site }) {
  return (
    <section className="hero section" id="top">
      <div className="hero-glow hero-glow--one" />
      <div className="hero-glow hero-glow--two" />
      <div className="container hero__inner">
        <div className="hero__copy reveal">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            Browser extension + outreach workspace
          </div>
          <h1>
            Cold mailing for jobs just got <span>easier</span>.
          </h1>
          <p className="hero__lead">
            Capture contacts while you browse, generate and verify professional emails, save prospects,
            personalize messages, send from your connected inbox, and track what happens next.
          </p>
          <div className="hero__actions">
            <a className="button button--primary button--large" href={site.chromeStoreUrl}>
              Add to Chrome <span aria-hidden="true">→</span>
            </a>
            <a className="button button--ghost button--large" href="#product">
              See how it works
            </a>
          </div>
          <p className="hero__microcopy">
            Built for sales, recruiting, business development, lead generation, and networking.
          </p>
        </div>

        <div className="hero__visual reveal reveal--delay">
          <div className="browser-shell">
            <div className="browser-shell__top">
              <span />
              <span />
              <span />
              <div className="browser-shell__address" />
            </div>
            <MediaPlaceholder className="hero-media-slot" aspect="hero" />
          </div>
          <div className="floating-card floating-card--left">
            <span className="floating-card__icon">✓</span>
            <span>
              <strong>Contact saved</strong>
              <small>Ready for outreach</small>
            </span>
          </div>
          <div className="floating-card floating-card--right">
            <span className="floating-card__icon floating-card__icon--accent">@</span>
            <span>
              <strong>Email verified</strong>
              <small>Before you hit send</small>
            </span>
          </div>
        </div>
      </div>

      <div className="container benefit-strip reveal">
        <article>
          <span className="benefit-strip__index">01</span>
          <strong>Capture faster</strong>
          <p>Save the prospect while the context is still in front of you.</p>
        </article>
        <article>
          <span className="benefit-strip__index">02</span>
          <strong>Send smarter</strong>
          <p>Verify addresses and reuse personalized templates.</p>
        </article>
        <article>
          <span className="benefit-strip__index">03</span>
          <strong>Stay organized</strong>
          <p>Manage contacts, activity, and outreach from one account.</p>
        </article>
      </div>
    </section>
  );
}
