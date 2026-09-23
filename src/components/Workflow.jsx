import { workflow } from '../data/site.js';

export default function Workflow() {
  return (
    <section className="section section--tight" aria-label="Relay workflow">
      <div className="container workflow-band reveal">
        <p className="section-kicker">One connected workflow</p>
        <div className="workflow-band__steps">
          {workflow.map((step, index) => (
            <div className="workflow-step" key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
