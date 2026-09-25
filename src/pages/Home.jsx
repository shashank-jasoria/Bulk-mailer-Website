import { useEffect } from "react";

import Hero from "../components/Hero.jsx";
import ProductOptions from "../components/ProductOptions.jsx";
import Faq from "../components/Faq.jsx";

import { site } from "../data/site.js";

export default function Home() {
  useEffect(() => {
    const items = [...document.querySelectorAll(".reveal")];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    items.forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero site={site} />

      <ProductOptions />

      <Faq />

      <section className="section final-cta">
        <div className="container final-cta__panel reveal">
          <div>
            <p className="section-kicker section-kicker--light">
              Ready when the prospect is
            </p>

            <h2>
              Keep prospecting, contact capture, and outreach in the same
              rhythm.
            </h2>

            <p>
              Install the extension, create your account, and build the rest of
              the workflow around the way you already research people and
              companies.
            </p>
          </div>

          <a
            className="button button--light button--large"
            href={site.chromeStoreUrl}
          >
            Get the extension <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
