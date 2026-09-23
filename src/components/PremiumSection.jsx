import MediaPlaceholder from './MediaPlaceholder.jsx';

export default function PremiumSection() {
  const benefits = [
    'Verify emails before sending',
    'Use more templates and custom variables',
    'Attach files to reusable outreach templates',
    'Unlock richer analytics and open tracking on Pro',
  ];

  return (
    <section className="section" id="features">
      <div className="container premium-panel reveal">
        <div className="premium-panel__content">
          <p className="section-kicker section-kicker--light">Core + Pro</p>
          <h2>More control when your outreach gets serious.</h2>
          <p>
            Keep the free workflow simple, then unlock higher limits and deeper tooling when you need
            verification, richer personalization, attachments, and analytics.
          </p>
          <div className="premium-panel__list">
            {benefits.map((benefit) => (
              <span key={benefit}>
                <b>✓</b> {benefit}
              </span>
            ))}
          </div>
          <a className="button button--light button--large" href="#pricing">
            Compare plans
          </a>
        </div>
        <div className="premium-panel__visual">
          <MediaPlaceholder aspect="premium" />
        </div>
      </div>
    </section>
  );
}
