// import { plans } from "../data/site.js";

import { useEffect, useState, useCallback } from "react";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "../styles/pricingCard.css";
import {
  getBillingStatus,
  createCheckout,
  changePlan,
  cancelSubscription,
} from "../api/billingApi";

const params = new URLSearchParams(window.location.search);
const checkoutContextId = params.get("checkout_context");
import {
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
  Rocket,
  Star,
} from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Free",
    description: "Get started for free",
    icon: Gift,
    price: "₹0",
    oldPrice: null,
    priceSuffix: "/ month",
    summary: "Perfect for trying out the extension and basic outreach.",
    buttonText: "Get Started Free",
    popular: false,
    discount: false,

    features: [
      {
        icon: Mail,
        text: "900 mails per month (30 mails/day)",
        tone: "neutral",
      },
      {
        icon: Paperclip,
        text: "No attachments",
        tone: "danger",
      },
      {
        icon: ShieldX,
        text: "No validation check",
        tone: "danger",
      },
      {
        icon: BarChart3,
        text: "No dashboard access",
        tone: "success",
      },
      {
        icon: FileText,
        text: "1 template",
        tone: "neutral",
      },
      {
        icon: Braces,
        text: "2 custom variables",
        tone: "danger",
      },
      {
        icon: Mail,
        text: "1 email account",
        tone: "neutral",
      },
      {
        icon: EyeOff,
        text: "Cannot see who opened the mail",
        tone: "danger",
      },
    ],
  },

  {
    id: "core",
    name: "Core",
    description: "For individuals and small teams",
    icon: Zap,
    price: "₹49",
    oldPrice: "₹99",
    priceSuffix: "/ month",
    summary: "More capacity and essential features for consistent outreach.",
    buttonText: "Get Core Plan",
    popular: true,
    discount: true,

    features: [
      {
        icon: Mail,
        text: "2,400 mails per month (80 mails/day)",
        tone: "neutral",
      },
      {
        icon: Paperclip,
        text: "2 attachments (1 MB each)",
        tone: "neutral",
      },
      {
        icon: ShieldCheck,
        text: "Validation check before sending mails",
        tone: "success",
      },
      {
        icon: BarChart3,
        text: "Limited dashboard access",
        tone: "success",
      },
      {
        icon: FileText,
        text: "2 templates",
        tone: "neutral",
      },
      {
        icon: Braces,
        text: "4 custom variables",
        tone: "danger",
      },
      {
        icon: Mail,
        text: "1 email account",
        tone: "neutral",
      },
      {
        icon: EyeOff,
        text: "Cannot see who opened the mail",
        tone: "danger",
      },
    ],
  },

  {
    id: "pro",
    name: "Pro",
    description: "For power users and teams",
    icon: Crown,
    price: "₹199",
    oldPrice: "₹399",
    priceSuffix: "/ month",
    summary: "Unlock advanced features and scale your outreach.",
    buttonText: "Get Pro Plan",
    popular: false,
    discount: true,

    features: [
      {
        icon: Mail,
        text: "12,000 mails per month (400 mails/day)",
        tone: "neutral",
      },
      {
        icon: Paperclip,
        text: "5 attachments (10 MB each)",
        tone: "neutral",
      },
      {
        icon: ShieldCheck,
        text: "Validation check before sending mails",
        tone: "success",
      },
      {
        icon: BarChart3,
        text: "Full dashboard access",
        tone: "success",
      },
      {
        icon: FileText,
        text: "5 templates",
        tone: "neutral",
      },
      {
        icon: Braces,
        text: "10 custom variables",
        tone: "warning",
      },
      {
        icon: Mail,
        text: "3 email accounts",
        tone: "neutral",
      },
      {
        icon: Eye,
        text: "Can see who opened the mail",
        tone: "primary",
      },
    ],
  },
];

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

  // function getPlanStatusText({ account, billing }) {
  //   const tier = billing?.tier || account?.tier;

  //   const subscription = billing?.subscription;

  //   const planChange = billing?.planChange;

  //   if (!tier) {
  //     return null;
  //   }

  //   if (tier.key === "FREE") {
  //     return "Explore Relay with essential features";
  //   }

  //   // Plan changes take priority because
  //   // replacement flows also cancel the old
  //   // subscription at period end.
  //   if (planChange?.effectiveAt && planChange?.type === "downgrade") {
  //     return `Plan changes on ${formatPlanDate(planChange.effectiveAt)}`;
  //   }

  //   if (planChange?.effectiveAt && planChange?.type === "upgrade") {
  //     return `New billing starts on ${formatPlanDate(planChange.effectiveAt)}`;
  //   }

  //   if (subscription?.cancelAtPeriodEnd && subscription?.currentPeriodEnd) {
  //     return `Plan ends on ${formatPlanDate(subscription.currentPeriodEnd)}`;
  //   }

  //   if (subscription?.currentPeriodEnd) {
  //     return `Renews on ${formatPlanDate(subscription.currentPeriodEnd)}`;
  //   }

  //   return null;
  // }

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
    if (targetTierKey === "FREE" && billing.subscription?.cancelAtPeriodEnd) {
      return "Cancellation scheduled";
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
    if (billing.planChange) {
      return true;
    }
    if (targetTierKey === "FREE" && billing.subscription?.cancelAtPeriodEnd) {
      return true;
    }

    return false;
  }

  return (
    <section className="">
      <div className="pricing-container">
        {/* Header */}

        {billingError ? (
          <div className="payment-note">
            <div>
              <strong>Unable to load your billing information.</strong>

              <p>{billingError.message}</p>
            </div>
          </div>
        ) : null}

        {actionError ? (
          <div className="payment-note">
            <div>
              <strong>Subscription action failed.</strong>

              <p>{actionError.message}</p>
            </div>
          </div>
        ) : null}

        {billing?.planChange ? (
          <div className="payment-note">
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
        {billing?.subscription?.cancelAtPeriodEnd && !billing?.planChange ? (
          <div className="payment-note">
            <div>
              <strong>Subscription cancellation scheduled</strong>

              <p>
                You keep your current plan until the end of this billing period.
              </p>
            </div>
          </div>
        ) : null}
        <header className="pricing-header">
          <div className="pricing-launch-badge">
            <span className="pricing-spark">✦</span>

            <span className="pricing-launch-pill">
              <Rocket size={17} />
              New Launch Discount
            </span>

            <span className="pricing-spark">✦</span>
          </div>

          <h2 className="pricing-title">
            Choose the plan that fits <span>your outreach</span>
          </h2>

          <p className="pricing-subtitle">
            Extract LinkedIn contacts, generate emails and send personalized
            outreach —
            <br className="pricing-desktop-break" />
            with features that grow with you.
          </p>
        </header>

        {/* Pricing cards */}
        <div className="pricing-grid">
          {plans.map((plan) => {
            const PlanIcon = plan.icon;

            return (
              <article
                key={plan.id}
                className={[
                  "pricing-card",
                  `pricing-card--${plan.id}`,
                  plan.popular ? "pricing-card--popular" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {plan.popular && (
                  <div className="pricing-popular-badge">
                    <Star size={16} fill="currentColor" />
                    Most Popular
                  </div>
                )}

                {/* Plan heading */}
                <div className="pricing-plan-header">
                  <div className="pricing-plan-icon">
                    <PlanIcon size={31} strokeWidth={2.2} />
                  </div>

                  <div>
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="pricing-price-area">
                  <div className="pricing-price-row">
                    {plan.oldPrice && (
                      <span className="pricing-old-price">{plan.oldPrice}</span>
                    )}

                    <span className="pricing-price">{plan.price}</span>

                    <span className="pricing-price-suffix">
                      {plan.priceSuffix}
                    </span>
                  </div>

                  {plan.discount && (
                    <div className="pricing-card-discount">
                      <Rocket size={15} />
                      New launch discount
                    </div>
                  )}
                </div>

                <p className="pricing-summary">{plan.summary}</p>

                <button
                  type="button"
                  className="pricing-button"
                  onClick={() => handlePlanAction(plan)}
                  disabled={isButtonDisabled(plan)}
                >
                  {getButtonLabel(plan)}
                </button>

                <div className="pricing-divider" />

                {/* Features */}
                <ul className="pricing-feature-list">
                  {plan.features.map((feature, index) => {
                    const FeatureIcon = feature.icon;

                    return (
                      <li
                        key={`${plan.id}-${index}`}
                        className="pricing-feature"
                      >
                        <FeatureIcon
                          className={`pricing-feature-icon pricing-feature-icon--${feature.tone}`}
                          size={21}
                          strokeWidth={2.2}
                        />

                        <span>{feature.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );

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
}
