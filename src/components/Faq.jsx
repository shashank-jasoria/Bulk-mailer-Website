import { useState } from "react";
import { faqs } from "../data/site.js";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="container faq-layout">
        <div className="section-heading reveal">
          {/* <p className="section-kicker">Questions</p> */}
          <h2 className="faq-heading">Any Questions.</h2>
          <p>Learn More about Relay and how it can help you .</p>
        </div>

        <div className="faq-list reveal reveal--delay">
          {faqs.map((item, index) => {
            const open = index === openIndex;
            return (
              <article
                className={`faq-item ${open ? "faq-item--open" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? -1 : index)}
                  aria-expanded={open}
                >
                  <span>{item.question}</span>
                  <b aria-hidden="true">{open ? "−" : "+"}</b>
                </button>
                {open ? <p>{item.answer}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
