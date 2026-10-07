import { plans } from "../data/site.js";

import { useEffect, useState, useCallback } from "react";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../styles/pricingCard.css";
import {
  getBillingStatus,
  createCheckout,
  changePlan,
  cancelSubscription,
} from "../api/billingApi.js";

const params = new URLSearchParams(window.location.search);
const checkoutContextId = params.get("checkout_context");

import {
  Sparkles,
  Rocket,
  Gift,
  Zap,
  Crown,
  Mail,
  Paperclip,
  ShieldCheck,
  ShieldX,
  BarChart3,
  FileText,
  Braces,
  Eye,
  EyeOff,
} from "lucide-react";

import "./pricing.css";

const plans = [
  {
    id: "free",
    name: "Free",
    subtitle: "Get started for free",
    description: "Perfect for trying out the extension and basic outreach.",
    icon: Gift,
    price: "₹0",
    period: "/ month",
    buttonLabel: "Get Started Free",
    features: [
      {
        icon: Mail,
        label: "30 mails per month",
        tone: "default",
      },
      {
        icon: Paperclip,
        label: "No attachments",
        tone: "muted",
      },
      {
        icon: ShieldX,
        label: "No validation check",
        tone: "danger",
      },
      {
        icon: BarChart3,
        label: "No dashboard access",
        tone: "success",
      },
      {
        icon: FileText,
        label: "1 template",
        tone: "default",
      },
      {
        icon: Braces,
        label: "No custom variables",
        tone: "danger",
      },
      {
        icon: Mail,
        label: "1 email account",
        tone: "default",
      },
      {
        icon: EyeOff,
        label: "Cannot see who opened the mail",
        tone: "danger",
      },
    ],
  },

  {
    id: "core",
    name: "Core",
    subtitle: "For individuals and small teams",
    description:
      "More capacity and essential features for consistent outreach.",
    icon: Zap,
    originalPrice: "₹100",
    price: "₹50",
    period: "/ month",
    discount: "New launch discount",
    popular: true,
    buttonLabel: "Get Core Plan",
    features: [
      {
        icon: Mail,
        label: "80 mails per month",
        tone: "default",
      },
      {
        icon: Paperclip,
        label: "2 attachments (1 MB each)",
        tone: "default",
      },
      {
        icon: ShieldCheck,
        label: "Validation check before sending mails",
        tone: "success",
      },
      {
        icon: BarChart3,
        label: "Limited dashboard access",
        tone: "success",
      },
      {
        icon: FileText,
        label: "2 templates",
        tone: "default",
      },
      {
        icon: Braces,
        label: "2 custom variables",
        tone: "danger",
      },
      {
        icon: Mail,
        label: "1 email account",
        tone: "default",
      },
      {
        icon: EyeOff,
        label: "Cannot see who opened the mail",
        tone: "danger",
      },
    ],
  },

  {
    id: "pro",
    name: "Pro",
    subtitle: "For power users and teams",
    description: "Unlock advanced features and scale your outreach.",
    icon: Crown,
    originalPrice: "₹400",
    price: "₹200",
    period: "/ month",
    discount: "New launch discount",
    buttonLabel: "Get Pro Plan",
    features: [
      {
        icon: Mail,
        label: "400 mails per month",
        tone: "default",
      },
      {
        icon: Paperclip,
        label: "5 attachments (10 MB each)",
        tone: "default",
      },
      {
        icon: ShieldCheck,
        label: "Validation check before sending mails",
        tone: "success",
      },
      {
        icon: BarChart3,
        label: "Full dashboard access",
        tone: "success",
      },
      {
        icon: FileText,
        label: "5 templates",
        tone: "default",
      },
      {
        icon: Braces,
        label: "10 custom variables",
        tone: "warning",
      },
      {
        icon: Mail,
        label: "3 email accounts",
        tone: "default",
      },
      {
        icon: Eye,
        label: "Can see who opened the mail",
        tone: "plain",
      },
    ],
  },
];

function FeatureItem({ icon: Icon, label, tone }) {
  return (
    <li className="pricing-feature">
      <span
        className={`pricing-feature__icon pricing-feature__icon--${tone}`}
        aria-hidden="true"
      >
        <Icon size={21} strokeWidth={2.2} />
      </span>

      <span>{label}</span>
    </li>
  );
}

function PricingCard({ plan }) {
  const Icon = plan.icon;

  return (
    <article
      className={[
        "pricing-card",
        `pricing-card--${plan.id}`,
        plan.popular ? "pricing-card--popular" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {plan.popular && (
        <div className="pricing-popular">
          <Sparkles size={17} fill="currentColor" />
          <span>Most Popular</span>
        </div>
      )}

      <div className="pricing-card__header">
        <div className="pricing-plan-icon">
          <Icon size={34} strokeWidth={2.2} />
        </div>

        <div>
          <h2>{plan.name}</h2>
          <p>{plan.subtitle}</p>
        </div>
      </div>

      <div className="pricing-price-row">
        {plan.originalPrice && (
          <span className="pricing-original-price">{plan.originalPrice}</span>
        )}

        <span className="pricing-price">{plan.price}</span>
        <span className="pricing-period">{plan.period}</span>
      </div>

      {plan.discount && (
        <div className="pricing-discount">
          <Rocket size={17} fill="currentColor" />
          <span>{plan.discount}</span>
        </div>
      )}

      <p className="pricing-description">{plan.description}</p>

      <button
        type="button"
        className={`pricing-button pricing-button--${plan.id}`}
      >
        {plan.buttonLabel}
      </button>

      <div className="pricing-divider" />

      <ul className="pricing-features">
        {plan.features.map((feature) => (
          <FeatureItem
            key={feature.label}
            icon={feature.icon}
            label={feature.label}
            tone={feature.tone}
          />
        ))}
      </ul>
    </article>
  );
}

export default function Pricing({ user, account, authLoading }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const checkoutContextId = searchParams.get("checkout_context");
  const isExtensionFlow = Boolean(checkoutContextId);
  const [billing, setBilling] = useState(null);
  const [billingLoading, setBillingLoading] = useState(false);
  const [billingError, setBillingError] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);
  const [actionError, setActionError] = useState(null);
  const loadBilling = useCallback(async () => {
    if (!isExtensionFlow && !user) {
      setBilling(null);
      return;
    }
    try {
      setBillingLoading(true);
      setBillingError(null);
      const data = await getBillingStatus({
        checkoutContextId: checkoutContextId || undefined,
      });
      setBilling(data.billing);
    } catch (error) {
      console.error("Failed to load billing status:", error);
      setBilling(null);
      setBillingError(error);
    } finally {
      setBillingLoading(false);
    }
  }, [checkoutContextId, isExtensionFlow, user]);

  useEffect(() => {
    if (!isExtensionFlow && authLoading) {
      return;
    }
    loadBilling();
  }, [authLoading, isExtensionFlow, loadBilling]);

  function sendToLogin() {
    window.sessionStorage.setItem(
      "relay_post_login_redirect",
      `${location.pathname}${location.search}`,
    );
    navigate("/login");
  }

  async function handlePlanAction(plan) {
    if (actionLoading) {
      return;
    }
    if (!isExtensionFlow && !user) {
      sendToLogin();
      return;
    }
    if (!billing) {
      setActionError(new Error("Billing information is not available."));
      return;
    }
    if (billing.planChange) {
      setActionError(
        new Error("A subscription change is already in progress."),
      );
      return;
    }
    const targetTierKey = plan.name.toUpperCase();
    const currentTierKey = billing.tier?.key || account?.tier?.key || "FREE";
    if (currentTierKey === targetTierKey) {
      return;
    }
    try {
      setActionLoading(targetTierKey);
      setActionError(null);
      if (targetTierKey === "FREE") {
        if (currentTierKey === "FREE") {
          return;
        }
        await cancelSubscription({
          checkoutContextId: checkoutContextId || undefined,
        });
        await loadBilling();
        return;
      }
      if (currentTierKey === "FREE") {
        const data = await createCheckout({
          checkoutContextId: checkoutContextId || undefined,
          tierKey: targetTierKey,
        });
        const checkoutUrl = data?.checkout?.checkoutUrl;
        if (!checkoutUrl) {
          throw new Error("Checkout URL was not returned");
        }
        window.location.href = checkoutUrl;
        return;
      }
      const data = await changePlan({
        checkoutContextId: checkoutContextId || undefined,

        tierKey: targetTierKey,
      });
      const checkoutUrl = data?.change?.checkoutUrl;
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
        return;
      }
      await loadBilling();
    } catch (error) {
      console.error("Billing action failed:", error);
      setActionError(error);
    } finally {
      setActionLoading(null);
    }
  }

  function getButtonLabel(plan) {
    const targetTierKey = plan.name.toUpperCase();
    if (actionLoading === targetTierKey) {
      return "Processing...";
    }
    if (!isExtensionFlow && authLoading) {
      return "Loading...";
    }
    if (!isExtensionFlow && !user) {
      if (targetTierKey === "FREE") {
        return "Get started";
      }
      return `Sign in to choose ${plan.name}`;
    }
    if (billingLoading) {
      return "Loading...";
    }
    if (!billing) {
      return `Choose ${plan.name}`;
    }
    const currentTierKey = billing.tier?.key;
    if (currentTierKey === targetTierKey) {
      return "Current plan";
    }
    if (billing.planChange) {
      return "Plan change pending";
    }
    if (targetTierKey === "FREE" && currentTierKey !== "FREE") {
      return "Cancel paid plan";
    }
    if (currentTierKey === "CORE" && targetTierKey === "PRO") {
      return "Upgrade to Pro";
    }
    if (currentTierKey === "PRO" && targetTierKey === "CORE") {
      return "Downgrade to Core";
    }
    return `Choose ${plan.name}`;
  }

  function isButtonDisabled(plan) {
    const targetTierKey = plan.name.toUpperCase();

    if (actionLoading) {
      return true;
    }

    if (!isExtensionFlow && authLoading) {
      return true;
    }

    /*
     * Anonymous website users need buttons
     * enabled so clicking sends them to login.
     */
    if (!isExtensionFlow && !user) {
      return false;
    }

    if (billingLoading) {
      return true;
    }

    if (!billing) {
      return false;
    }

    if (billing.tier?.key === targetTierKey) {
      return true;
    }

    /*
     * Prevent creating another replacement
     * while one change is already pending.
     */
    if (billing.planChange) {
      return true;
    }

    /*
     * If cancellation is already scheduled,
     * don't let them request it again.
     */
    if (targetTierKey === "FREE" && billing.subscription?.cancelAtPeriodEnd) {
      return true;
    }

    return false;
  }

  return (
    <section className="section pricing-v2" id="pricing">
      <div className="container pricing-v2__container">
        <header className="pricing-v2__hero">
          <div className="pricing-v2__launch-badge">
            <Sparkles size={15} aria-hidden="true" />
            <Rocket size={16} aria-hidden="true" />
            <span>New Launch Discount</span>
            <Sparkles size={15} aria-hidden="true" />
          </div>

          <h2 className="pricing-v2__title">
            Choose the plan that fits{" "}
            <span className="pricing-v2__title-accent">your outreach</span>
          </h2>

          <p className="pricing-v2__subtitle">
            Start free and upgrade as your outreach volume, automation, and
            reporting needs grow.
          </p>
        </header>

        <div className="pricing-v2__notices">
          {billingError ? (
            <div className="pricing-v2__notice pricing-v2__notice--danger">
              <AlertCircle size={20} aria-hidden="true" />

              <div>
                <strong>Unable to load your billing information.</strong>
                <p>{billingError.message}</p>
              </div>
            </div>
          ) : null}

          {actionError ? (
            <div className="pricing-v2__notice pricing-v2__notice--danger">
              <AlertCircle size={20} aria-hidden="true" />

              <div>
                <strong>Subscription action failed.</strong>
                <p>{actionError.message}</p>
              </div>
            </div>
          ) : null}

          {billing?.planChange ? (
            <div className="pricing-v2__notice pricing-v2__notice--accent">
              <Clock3 size={20} aria-hidden="true" />

              <div>
                <strong>Subscription change in progress</strong>

                <p>
                  {billing.planChange.type === "downgrade"
                    ? `Your downgrade to ${billing.planChange.targetTier.name} is scheduled. You keep your current plan until the billing cycle ends.`
                    : `Your upgrade to ${billing.planChange.targetTier.name} is being completed.`}
                </p>
              </div>
            </div>
          ) : null}

          {billing?.subscription?.cancelAtPeriodEnd ? (
            <div className="pricing-v2__notice pricing-v2__notice--warning">
              <Clock3 size={20} aria-hidden="true" />

              <div>
                <strong>Subscription cancellation scheduled</strong>
                <p>
                  You keep your current plan until the end of this billing
                  period.
                </p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="pricing-v2__grid">
          {plans.map((plan) => {
            const PlanIcon = PLAN_ICONS[plan.name] ?? CircleCheck;

            const tierKey = plan.name.toUpperCase();

            const isCurrentPlan =
              (billing?.tier?.key || account?.tier?.key) === tierKey;

            const isWorking = actionLoading === tierKey;

            return (
              <article
                key={plan.name}
                className={[
                  "pricing-v2__card",
                  `pricing-v2__card--${plan.name.toLowerCase()}`,
                  plan.featured ? "pricing-v2__card--featured" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {plan.featured ? (
                  <div className="pricing-v2__popular">
                    <Sparkles size={15} aria-hidden="true" />
                    <span>Most Popular</span>
                  </div>
                ) : null}

                <div className="pricing-v2__plan-header">
                  <div className="pricing-v2__plan-icon">
                    <PlanIcon size={30} strokeWidth={2} aria-hidden="true" />
                  </div>

                  <div className="pricing-v2__plan-heading">
                    <div className="pricing-v2__plan-name-row">
                      <h3>{plan.name}</h3>

                      {isCurrentPlan ? (
                        <span className="pricing-v2__current-badge">
                          Current
                        </span>
                      ) : null}
                    </div>

                    <p>{plan.label}</p>
                  </div>
                </div>

                <div className="pricing-v2__price-area">
                  <div className="pricing-v2__price">
                    {plan.name === "Free" ? (
                      <>
                        <strong>Free</strong>
                        <span>forever</span>
                      </>
                    ) : (
                      <>
                        <strong>Local price</strong>
                        <span>for your billing region</span>
                      </>
                    )}
                  </div>

                  {plan.name !== "Free" ? (
                    <div className="pricing-v2__discount">
                      <Rocket size={14} aria-hidden="true" />
                      <span>New launch discount</span>
                    </div>
                  ) : null}
                </div>

                <p className="pricing-v2__description">{plan.description}</p>

                <button
                  type="button"
                  className={[
                    "pricing-v2__button",
                    plan.featured
                      ? "pricing-v2__button--primary"
                      : "pricing-v2__button--secondary",
                  ].join(" ")}
                  onClick={() => handlePlanAction(plan)}
                  disabled={isButtonDisabled(plan)}
                >
                  <span>{getButtonLabel(plan)}</span>

                  {isWorking ? (
                    <LoaderCircle
                      className="pricing-v2__spinner"
                      size={18}
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowRight size={18} aria-hidden="true" />
                  )}
                </button>

                <div className="pricing-v2__divider" />

                <ul className="pricing-v2__features">
                  {plan.features.map((feature) => {
                    const { Icon, tone } = getFeatureVisual(feature);

                    return (
                      <li key={feature}>
                        <Icon
                          size={20}
                          strokeWidth={2}
                          className={`pricing-v2__feature-icon pricing-v2__feature-icon--${tone}`}
                          aria-hidden="true"
                        />

                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="pricing-v2__payment-note">
          <div className="pricing-v2__payment-copy">
            <div className="pricing-v2__payment-icon">
              <CreditCard size={22} aria-hidden="true" />
            </div>

            <div>
              <strong>Built for local checkout experiences.</strong>

              <p>
                Cards globally, plus supported wallets and regional methods such
                as UPI in India.
              </p>
            </div>
          </div>

          <div
            className="pricing-v2__payment-marks"
            aria-label="Supported payment methods"
          >
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

// return (
//   <section className="section section--alt" id="pricing">
//     <div className="container">
//       <div className="section-heading section-heading--center ">
//         <p className="section-kicker">Simple plans, regional checkout</p>
//         <h2>
//           Start free. Upgrade when the workflow starts paying for itself.
//         </h2>
//         <p>
//           Paid prices can be shown in the customer’s applicable billing region
//           and currency, with supported local payment methods at checkout.
//         </p>
//       </div>

//       {billingError ? (
//         <div className="payment-note">
//           <div>
//             <strong>Unable to load your billing information.</strong>

//             <p>{billingError.message}</p>
//           </div>
//         </div>
//       ) : null}

//       {actionError ? (
//         <div className="payment-note">
//           <div>
//             <strong>Subscription action failed.</strong>

//             <p>{actionError.message}</p>
//           </div>
//         </div>
//       ) : null}

//       {billing?.planChange ? (
//         <div className="payment-note">
//           <div>
//             <strong>Subscription change in progress</strong>

//             <p>
//               {billing.planChange.type === "downgrade"
//                 ? `Your downgrade to ${billing.planChange.targetTier.name} is scheduled. You keep your current plan until the billing cycle ends.`
//                 : `Your upgrade to ${billing.planChange.targetTier.name} is being completed.`}
//             </p>
//           </div>
//         </div>
//       ) : null}

//       {billing?.subscription?.cancelAtPeriodEnd ? (
//         <div className="payment-note">
//           <div>
//             <strong>Subscription cancellation scheduled</strong>

//             <p>
//               You keep your current plan until the end of this billing period.
//             </p>
//           </div>
//         </div>
//       ) : null}
//       <div className="pricing-grid ">
//         {plans.map((plan) => (
//           <article
//             className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}
//             key={plan.name}
//           >
//             {plan.featured ? (
//               <span className="pricing-card__ribbon">Popular</span>
//             ) : null}
//             <div className="pricing-card__top">
//               <p className="pricing-card__label">{plan.label}</p>
//               <h3>{plan.name}</h3>
//               <div className="pricing-card__price">
//                 {plan.name === "Free" ? (
//                   <>
//                     <strong>Free</strong>
//                     <span>forever</span>
//                   </>
//                 ) : (
//                   <>
//                     <strong>Local price</strong>
//                     <span>shown for your billing region</span>
//                   </>
//                 )}
//               </div>
//               <p>{plan.description}</p>
//             </div>
//             <ul>
//               {plan.features.map((feature) => (
//                 <li key={feature}>
//                   <span>✓</span>
//                   {feature}
//                 </li>
//               ))}
//             </ul>
//             <button
//               type="button"
//               className={`button ${
//                 plan.featured ? "button--primary" : "button--ghost"
//               } button--full`}
//               onClick={() => handlePlanAction(plan)}
//               disabled={isButtonDisabled(plan)}
//             >
//               {getButtonLabel(plan)}
//             </button>
//           </article>
//         ))}
//       </div>

//       <div className="payment-note ">
//         <div>
//           <strong>Built for local checkout experiences.</strong>
//           <p>
//             Cards globally, plus supported wallets and regional methods such
//             as UPI in India.
//           </p>
//         </div>
//         <div
//           className="payment-note__marks"
//           aria-label="Supported payment method placeholders"
//         >
//           <span>Cards</span>
//           <span>UPI</span>
//           <span>GPay</span>
//           <span>Apple Pay</span>
//         </div>
//       </div>
//     </div>
//   </section>
// );
