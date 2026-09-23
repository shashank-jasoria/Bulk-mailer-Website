import MediaPlaceholder from './MediaPlaceholder.jsx';

export default function ProductSection({
  eyebrow,
  title,
  description,
  features,
  reverse = false,
  badge,
  mediaAspect = 'wide',
}) {
  return (
    <section className={`product-section ${reverse ? 'product-section--reverse' : ''}`}>
      <div className="product-section__copy reveal">
        <p className="section-kicker">{eyebrow}</p>
        {badge ? <span className="feature-badge">{badge}</span> : null}
        <h2>{title}</h2>
        <p className="product-section__description">{description}</p>
        <div className="feature-list">
          {features.map((feature) => (
            <div className="feature-list__item" key={feature.title}>
              <span className="feature-list__icon">✓</span>
              <div>
                <strong>{feature.title}</strong>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="product-section__visual reveal reveal--delay">
        <div className="media-frame">
          <MediaPlaceholder aspect={mediaAspect} />
        </div>
      </div>
    </section>
  );
}
