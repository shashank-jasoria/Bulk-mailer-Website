import LazyLoopVideo from "./LazyLoopVideo";

export default function ProductSection({
  eyebrow,
  title,
  description,
  features,
  reverse = false,
  badge,
  videoSrc,
  posterSrc,
}) {
  return (
    <section className="product-section">
      <div
        className={`product-section__copy reveal product-part-top ${
          reverse ? "product-part-top--reverse" : ""
        }`}
      >
        <div className="top-1st">
          <p className="section-kicker">{eyebrow}</p>

          {badge && <span className="feature-badge">{badge}</span>}

          <h2>{title}</h2>

          <p className="product-section__description">{description}</p>
        </div>

        <div className="product-section__visual reveal reveal--delay product-part-top-right">
          <div className="media-frame">
            <LazyLoopVideo
              src={videoSrc}
              poster={posterSrc}
              title={`${title} product demonstration`}
            />
          </div>
        </div>
      </div>

      <div className="feature-list">
        {features.map((feature) => (
          <div className="feature-list__item" key={feature.title}>
            <div className="feature-top">
              <feature.icon className="feature-list__icon-svg" />
              <strong>{feature.title}</strong>
            </div>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
