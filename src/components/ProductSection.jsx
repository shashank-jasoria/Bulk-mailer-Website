import MediaPlaceholder from "./MediaPlaceholder.jsx";

export default function ProductSection({
  eyebrow,
  title,
  description,
  features,
  reverse = false,
  badge,
  mediaAspect = "wide",
}) {
  return (
    <section
      className={`product-section`} // 
    >
      <div className={`product-section__copy reveal product-part-top  ${reverse ? "product-part-top--reverse" : ""} `}>
        <div className="top-1st">
          <p className="section-kicker">{eyebrow}</p>
          {badge ? <span className="feature-badge">{badge}</span> : null}
          <h2>{title}</h2>
        </div>

        {/* <p className="product-section__description">{description}</p> */}
        <div className="product-section__visual reveal reveal--delay  product-part-top-right">
          <div className="media-frame">
            <MediaPlaceholder aspect={mediaAspect} />
          </div>
        </div>
      </div>

      <div className="feature-list">
        {features.map((feature) => (
          <div className="feature-list__item" key={feature.title}>
            <div className="feature-top">
              <span className="feature-list__icon">✓</span>
              <strong>{feature.title}</strong>
            </div>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
