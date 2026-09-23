import { plans } from '../data/site.js';

export default function Pricing() {
  return (
    <section className="section section--alt" id="pricing">
      <div className="container">
        <div className="section-heading section-heading--center reveal">
          <p className="section-kicker">Simple plans, regional checkout</p>
          <h2>Start free. Upgrade when the workflow starts paying for itself.</h2>
          <p>
            Paid prices can be shown in the customer’s applicable billing region and currency, with
            supported local payment methods at checkout.
          </p>
        </div>

        <div className="pricing-grid reveal">
          {plans.map((plan) => (
            <article className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`} key={plan.name}>
              {plan.featured ? <span className="pricing-card__ribbon">Popular</span> : null}
              <div className="pricing-card__top">
                <p className="pricing-card__label">{plan.label}</p>
                <h3>{plan.name}</h3>
                <div className="pricing-card__price">
                  {plan.name === 'Free' ? (
                    <>
                      <strong>Free</strong>
                      <span>forever</span>
                    </>
                  ) : (
                    <>
                      <strong>Local price</strong>
                      <span>shown for your billing region</span>
                    </>
                  )}
                </div>
                <p>{plan.description}</p>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className={`button ${plan.featured ? 'button--primary' : 'button--ghost'} button--full`}
                href="#"
              >
                {plan.name === 'Free' ? 'Get started' : `Choose ${plan.name}`}
              </a>
            </article>
          ))}
        </div>

        <div className="payment-note reveal">
          <div>
            <strong>Built for local checkout experiences.</strong>
            <p>Cards globally, plus supported wallets and regional methods such as UPI in India.</p>
          </div>
          <div className="payment-note__marks" aria-label="Supported payment method placeholders">
            <span>Cards</span>
            <span>UPI</span>
            <span>GPay</span>
            <span>Apple Pay</span>
          </div>
        </div>
      </div>
    </section>
  );
}
