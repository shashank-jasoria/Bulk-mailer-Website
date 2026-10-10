import {
  Gift,
  Zap,
  Crown,
  Mail,
  Paperclip,
  ShieldCheck,
  BarChart3,
  FileText,
  Braces,
  Users,
  Eye,
  Check,
  X,
} from "lucide-react";

import "../styles/PlanComparison.css";

const features = [
  {
    label: "Email limit",
    icon: Mail,
    free: {
      type: "text",
      text: "30 mails / day",
    },
    core: {
      type: "text",
      text: "80 mails / day",
    },
    pro: {
      type: "text",
      text: "400 mails / day",
    },
  },

  {
    label: "Attachments",
    icon: Paperclip,
    free: {
      type: "no",
      text: "No attachments",
    },
    core: {
      type: "text",
      text: "2 attachments (1 MB each)",
    },
    pro: {
      type: "text",
      text: "5 attachments (10 MB each)",
    },
  },

  {
    label: "Email validation check",
    icon: ShieldCheck,
    free: {
      type: "no",
      text: "Not included",
    },
    core: {
      type: "yes",
      text: "Validation check before sending mails",
    },
    pro: {
      type: "yes",
      text: "Validation check before sending mails",
    },
  },

  {
    label: "Dashboard access",
    icon: BarChart3,
    free: {
      type: "no",
      text: "Not included",
    },
    core: {
      type: "yes",
      text: "Limited dashboard access",
    },
    pro: {
      type: "yes",
      text: "Full dashboard access",
    },
  },

  {
    label: "Email templates",
    icon: FileText,
    free: {
      type: "text",
      text: "1 template",
    },
    core: {
      type: "text",
      text: "2 templates",
    },
    pro: {
      type: "text",
      text: "5 templates",
    },
  },

  {
    label: "Custom variables",
    icon: Braces,
    free: {
      type: "no",
      text: "Not included",
    },
    core: {
      type: "text",
      text: "2 custom variables",
    },
    pro: {
      type: "text",
      text: "10 custom variables",
    },
  },

  {
    label: "Email accounts",
    icon: Users,
    free: {
      type: "text",
      text: "1 email account",
    },
    core: {
      type: "text",
      text: "1 email account",
    },
    pro: {
      type: "text",
      text: "3 email accounts",
    },
  },

  {
    label: "Email open tracking",
    icon: Eye,
    free: {
      type: "no",
      text: "Not included",
    },
    core: {
      type: "no",
      text: "Not included",
    },
    pro: {
      type: "yes",
      text: "Can see who opened the mail",
    },
  },
];

const plans = {
  free: {
    name: "Free",
    description: "Get started for free",
    price: "₹0",
    icon: Gift,
  },

  core: {
    name: "Core",
    description: "For individuals",
    price: "₹50",
    icon: Zap,
  },

  pro: {
    name: "Pro",
    description: "For power users",
    price: "₹200",
    icon: Crown,
  },
};

function FeatureValue({ value }) {
  if (value.type === "yes") {
    return (
      <div className="comparison-value comparison-value--status">
        <span className="comparison-status comparison-status--yes">
          <Check />
        </span>

        <span>{value.text}</span>
      </div>
    );
  }

  if (value.type === "no") {
    return (
      <div className="comparison-value comparison-value--status">
        <span className="comparison-status comparison-status--no">
          <X />
        </span>

        <span>{value.text}</span>
      </div>
    );
  }

  return <div className="comparison-value">{value.text}</div>;
}

function PlanHeader({ plan, type, popular = false }) {
  const Icon = plan.icon;

  return (
    <div className={`comparison-plan comparison-plan--${type}`}>
      {popular && <div className="comparison-popular">Most Popular</div>}

      <div className="comparison-plan-main">
        <div className="comparison-plan-icon">
          <Icon />
        </div>

        <div className="comparison-plan-info">
          <h3>{plan.name}</h3>
          <p>{plan.description}</p>

          <div className="comparison-plan-price">
            <strong>{plan.price}</strong>
            <span>/ month</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlanComparison() {
  return (
    <section className="">
      <div className="comparison-container">
        <header className="comparison-heading">
          <h2>
            Compare Plans <span>in Detail</span>
          </h2>

          <p>
            See what’s included in each plan and choose the best fit for your
            outreach needs.
          </p>
        </header>

        <div className="comparison-scroll">
          <div
            className="comparison-table"
            role="table"
            aria-label="Pricing plans comparison"
          >
            {/* Header row */}
            <div className="comparison-row comparison-row--header" role="row">
              <div
                className="comparison-cell comparison-cell--feature-heading"
                role="columnheader"
              >
                Features
              </div>

              <div
                className="comparison-cell comparison-cell--free comparison-cell--header"
                role="columnheader"
              >
                <PlanHeader plan={plans.free} type="free" />
              </div>

              <div
                className="comparison-cell comparison-cell--core comparison-cell--header"
                role="columnheader"
              >
                <PlanHeader plan={plans.core} type="core" popular />
              </div>

              <div
                className="comparison-cell comparison-cell--pro comparison-cell--header"
                role="columnheader"
              >
                <PlanHeader plan={plans.pro} type="pro" />
              </div>
            </div>

            {/* Feature rows */}
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;
              const last = index === features.length - 1;

              return (
                <div
                  className={`comparison-row ${
                    last ? "comparison-row--last" : ""
                  }`}
                  role="row"
                  key={feature.label}
                >
                  <div
                    className="comparison-cell comparison-feature-cell"
                    role="rowheader"
                  >
                    <div className="comparison-feature-icon">
                      <FeatureIcon />
                    </div>

                    <span>{feature.label}</span>
                  </div>

                  <div
                    className="comparison-cell comparison-cell--free"
                    role="cell"
                  >
                    <FeatureValue value={feature.free} />
                  </div>

                  <div
                    className="comparison-cell comparison-cell--core"
                    role="cell"
                  >
                    <FeatureValue value={feature.core} />
                  </div>

                  <div
                    className="comparison-cell comparison-cell--pro"
                    role="cell"
                  >
                    <FeatureValue value={feature.pro} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
