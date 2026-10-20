// import { plans } from "../data/site.js";

import { useEffect, useState, useCallback } from "react";

import {
  useLocation,
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import "../styles/pricingCard.css";
import {
  getBillingStatus,
  createCheckout,
  changePlan,
  cancelSubscription,
  getRegionalPricing,
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
    // price: "₹49",
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
    // price: "₹199",
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

let razorpayScriptPromise = null;

function loadRazorpayCheckout() {
  if (window.Razorpay) {
    return Promise.resolve();
  }

  if (!razorpayScriptPromise) {
    razorpayScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");

      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;

      script.onload = () => {
        if (window.Razorpay) {
          resolve();
        } else {
          razorpayScriptPromise = null;
          reject(new Error("Razorpay checkout did not initialize"));
        }
      };

      script.onerror = () => {
        razorpayScriptPromise = null;
        script.remove();
        reject(new Error("Unable to load Razorpay checkout"));
      };

      document.body.appendChild(script);
    });
  }

  return razorpayScriptPromise;
}

export default function Pricing({ user, account, authLoading }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const checkoutContextId = searchParams.get("checkout_context");
  const razorpayReturn = searchParams.get("razorpay") === "verifying";
  const isExtensionFlow = Boolean(checkoutContextId);
  const [billing, setBilling] = useState(null);
  const [billingLoading, setBillingLoading] = useState(false);
  const [billingError, setBillingError] = useState(null);
  const [actionLoading, setActionLoading] = useState(null);
  const [actionError, setActionError] = useState(null);
  const [regionalPricing, setRegionalPricing] = useState(null);
  // Country/provider/checkout availability are determined by the backend.
  const [pricingRegion, setPricingRegion] = useState(null);
  const [pricingLoading, setPricingLoading] = useState(true);
  const [pricingError, setPricingError] = useState(null);
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
  const { refreshWebsiteUser } = useOutletContext();

  useEffect(() => {
    if (!isExtensionFlow && authLoading) {
      return;
    }
    loadBilling();
  }, [authLoading, isExtensionFlow, loadBilling]);

  useEffect(() => {
    if (!razorpayReturn) return;

    let cancelled = false;
    let timer;
    let attempts = 0;

    async function checkActivation() {
      try {
        const data = await getBillingStatus({
          checkoutContextId: checkoutContextId || undefined,
        });

        if (cancelled) return;

        const latestBilling = data?.billing || null;
        setBilling(latestBilling);

        if (
          latestBilling?.tier?.key === "CORE" ||
          latestBilling?.tier?.key === "PRO"
        ) {
          if (!isExtensionFlow && user) {
            refreshWebsiteUser().catch(console.error);
          }
          return;
        }
      } catch (error) {
        console.error("Billing refresh failed:", error);
      }
      attempts += 1;
      if (!cancelled && attempts < 15) {
        timer = window.setTimeout(checkActivation, 2000);
      }
    }
    checkActivation();

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [razorpayReturn, checkoutContextId, isExtensionFlow]);

  function sendToLogin() {
    window.sessionStorage.setItem(
      "relay_post_login_redirect",
      `${location.pathname}${location.search}`,
    );
    navigate("/login");
  }

  useEffect(() => {
    let cancelled = false;
    async function loadRegionalPricing() {
      try {
        setPricingLoading(true);
        setPricingError(null);

        const data = await getRegionalPricing();

        if (!data?.success || !data?.prices || !data?.region) {
          throw new Error("Failed to load regional pricing");
        }

        if (cancelled) return;

        setRegionalPricing(data.prices);
        setPricingRegion(data.region);
      } catch (error) {
        if (cancelled) return;

        console.error("Failed to load prices:", error);
        setRegionalPricing(null);
        setPricingRegion(null);
        setPricingError(error);
      } finally {
        if (!cancelled) {
          setPricingLoading(false);
        }
      }
    }

    loadRegionalPricing();

    return () => {
      cancelled = true;
    };
  }, []);

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

    if (
      targetTierKey !== "FREE" &&
      currentTierKey === "FREE" &&
      (!regionalPricing?.[targetTierKey] ||
        pricingRegion?.checkoutEnabled !== true)
    ) {
      setActionError(new Error("Checkout is not available right now."));
      return;
    }
    if (
      targetTierKey !== "FREE" &&
      currentTierKey !== "FREE" &&
      billing.subscription?.provider === "paypal"
    ) {
      setActionError(new Error("PayPal plan changes are not supported yet."));
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

        const checkout = data?.checkout;

        if (checkout?.provider === "razorpay") {
          if (!checkout.subscriptionId || !checkout.keyId) {
            throw new Error("Razorpay checkout information is missing");
          }

          await loadRazorpayCheckout();
          let authorizationReturned = false;
          const razorpay = new window.Razorpay({
            key: checkout.keyId,
            subscription_id: checkout.subscriptionId,
            name: "Pacemailer",
            description: `${targetTierKey} subscription`,

            handler: async (response) => {
              authorizationReturned = true;
              try {
                if (
                  response.razorpay_subscription_id !== checkout.subscriptionId
                ) {
                  throw new Error("Razorpay subscription mismatch");
                }
                await verifyRazorpayAuthorization({
                  checkoutContextId: checkoutContextId || undefined,
                  subscriptionId: checkout.subscriptionId,
                  paymentId: response.razorpay_payment_id,
                  signature: response.razorpay_signature,
                });
                const params = new URLSearchParams(location.search);
                params.set("razorpay", "verifying");

                navigate(`/pricing?${params.toString()}`, {
                  replace: true,
                });
              } catch (error) {
                console.error("Razorpay verification failed:", error);
                setActionError(error);
              }
            },

            modal: {
              ondismiss: () => {
                if (authorizationReturned) {
                  return;
                }

                setActionLoading("ABANDONING");
                setActionError(null);

                abandonRazorpayCheckout({
                  checkoutContextId: checkoutContextId || undefined,
                  subscriptionId: checkout.subscriptionId,
                })
                  .then(() => loadBilling())
                  .catch((error) => {
                    console.error(
                      "Unable to close unfinished Razorpay checkout:",
                      error,
                    );
                    setActionError(error);
                  })
                  .finally(() => {
                    setActionLoading(null);
                  });
              },
            },
          });

          razorpay.on("payment.failed", (response) => {
            setActionError(
              new Error(
                response?.error?.description || "Razorpay payment failed",
              ),
            );
          });

          razorpay.open();
          return;
        }
        const checkoutUrl = checkout?.checkoutUrl;
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
      if (!isExtensionFlow && user) {
        await refreshWebsiteUser();
      }
    } catch (error) {
      console.error("Billing action failed:", error);
      setActionError(error);
    } finally {
      setActionLoading(null);
    }
  }

  function getButtonLabel(plan) {
    const targetTierKey = plan.name.toUpperCase();
    const currentTierKey = billing?.tier?.key || account?.tier?.key || "FREE";
    if (actionLoading === targetTierKey) {
      return "Processing...";
    }
    if (!isExtensionFlow && authLoading) {
      return "Loading...";
    }
    if (targetTierKey !== "FREE") {
      if (pricingLoading) return "Loading prices...";
      if (!pricingRegion || !regionalPricing?.[targetTierKey]) {
        return "Pricing unavailable";
      }
      if (
        (currentTierKey === "FREE" || (!isExtensionFlow && !user)) &&
        pricingRegion.checkoutEnabled !== true
      ) {
        return pricingRegion.provider === "paypal"
          ? "PayPal checkout coming soon"
          : "Checkout unavailable";
      }
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
    if (currentTierKey === targetTierKey) {
      return "Current plan";
    }
    if (billing.planChange) {
      return "Plan change pending";
    }
    if (targetTierKey === "FREE" && billing.subscription?.cancelAtPeriodEnd) {
      return "Cancellation scheduled";
    }
    if (
      targetTierKey === "FREE" &&
      currentTierKey === "PRO" &&
      billing?.subscription?.provider === "razorpay" &&
      billing?.subscription?.status === "authenticated" &&
      billing?.subscription?.trialOfferKey === "PRO_3_DAY"
    ) {
      return "Cancel Free Trial";
    }
    if (targetTierKey === "FREE" && currentTierKey !== "FREE") {
      return "Cancel paid plan";
    }
    if (
      targetTierKey !== "FREE" &&
      billing.subscription?.provider === "paypal"
    ) {
      return "Plan changes unavailable";
    }
    if (currentTierKey === "CORE" && targetTierKey === "PRO") {
      return "Upgrade to Pro";
    }
    if (currentTierKey === "PRO" && targetTierKey === "CORE") {
      return "Downgrade to Core";
    }
    if (
      targetTierKey === "PRO" &&
      currentTierKey === "FREE" &&
      billing?.trial?.pro3DayAvailable === true
    ) {
      return "Book 3-Day Free Trial";
    }
    return `Choose ${plan.name}`;
  }

  function isButtonDisabled(plan) {
    const targetTierKey = plan.name.toUpperCase();
    const currentTierKey = billing?.tier?.key || account?.tier?.key || "FREE";

    if (actionLoading) {
      return true;
    }

    if (!isExtensionFlow && authLoading) {
      return true;
    }

    if (targetTierKey !== "FREE") {
      if (
        pricingLoading ||
        !pricingRegion ||
        !regionalPricing?.[targetTierKey]
      ) {
        return true;
      }
      // New checkouts are closed until the backend advertises them as open.
      // This does not block cancellation or Razorpay plan changes.
      if (
        (currentTierKey === "FREE" || (!isExtensionFlow && !user)) &&
        pricingRegion.checkoutEnabled !== true
      ) {
        return true;
      }
    }

    if (!isExtensionFlow && !user) {
      return false;
    }

    if (billingLoading || !billing) {
      return true;
    }

    if (billing.tier?.key === targetTierKey) {
      return true;
    }
    if (billing.planChange) {
      return true;
    }
    if (
      targetTierKey !== "FREE" &&
      billing.subscription?.provider === "paypal"
    ) {
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

        {razorpayReturn && (
          <div className="payment-note">
            <div>
              {billing?.tier?.key === "CORE" || billing?.tier?.key === "PRO" ? (
                <>
                  <strong>Your subscription is active!</strong>
                  <p>Your account has been updated to your selected plan.</p>
                </>
              ) : (
                <>
                  <strong>Authorization received!</strong>
                  <p>
                    We are confirming your subscription. Your plan will update
                    when verification is complete. If it takes longer, refresh
                    this page.
                  </p>
                </>
              )}
            </div>
          </div>
        )}

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
          {pricingRegion?.currency === "INR" && (
            <div className="pricing-launch-badge">
              <span className="pricing-spark">✦</span>

              <span className="pricing-launch-pill">
                <Rocket size={17} />
                New Launch Discount
              </span>

              <span className="pricing-spark">✦</span>
            </div>
          )}

          <h1 className="pricing-title">
            Choose the plan that fits <span>your outreach</span>
          </h1>

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
            const priceInfo =
              plan.id === "free"
                ? null
                : regionalPricing?.[plan.id.toUpperCase()];

            const displayPrice =
              plan.id === "free"
                ? "Free"
                : pricingLoading
                  ? "Loading..."
                  : priceInfo?.formattedPrice || "Unavailable";

            const displaySuffix = priceInfo?.billingPeriod
              ? `/ ${priceInfo.billingPeriod}`
              : "";

            const priceUnavailable = plan.id !== "free" && !priceInfo;
            // PayPal cannot upgrade/downgrade in-place yet. Leave the
            // current-plan and cancellation buttons available as before.
            const hideUnsupportedPayPalChange =
              plan.id !== "free" &&
              billing?.subscription?.provider === "paypal" &&
              billing?.tier?.key !== plan.id.toUpperCase();

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
                    {plan.oldPrice && pricingRegion?.currency === "INR" && (
                      <span className="pricing-old-price">{plan.oldPrice}</span>
                    )}

                    <span className="pricing-price"> {displayPrice}</span>

                    {displaySuffix && (
                      <span className="pricing-price-suffix">
                        {displaySuffix}
                      </span>
                    )}
                  </div>

                  {plan.discount && pricingRegion?.currency === "INR" && (
                    <div className="pricing-card-discount">
                      <Rocket size={15} />
                      New launch discount
                    </div>
                  )}
                </div>

                <p className="pricing-summary">{plan.summary}</p>

                {!hideUnsupportedPayPalChange && (
                  <button
                    type="button"
                    className="pricing-button"
                    onClick={() => handlePlanAction(plan)}
                    disabled={
                      isButtonDisabled(plan) ||
                      actionLoading !== null ||
                      priceUnavailable
                    }
                  >
                    {getButtonLabel(plan)}
                  </button>
                )}

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
}
