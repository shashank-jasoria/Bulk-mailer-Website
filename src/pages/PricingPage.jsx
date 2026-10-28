import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getRegionalPricing } from "../api/billingApi";
import Pricing from "../components/Pricing";
import PlanComparison from "../components/PlanComparison";
import "../styles/pricingCard.css";

export default function PricingPage() {
  const { user, account, authLoading } = useOutletContext();

  const [regionalPricing, setRegionalPricing] = useState(null);
  const [pricingRegion, setPricingRegion] = useState(null);
  const [pricingLoading, setPricingLoading] = useState(true);
  const [pricingError, setPricingError] = useState(null);

  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let cancelled = false;

    async function loadRegionalPricing() {
      try {
        setPricingLoading(true);
        setPricingError(null);

        const data = await getRegionalPricing();

        if (
          !data?.success ||
          !data?.prices?.CORE ||
          !data?.prices?.PRO ||
          !data?.region
        ) {
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
  }, [retryKey]);

  return (
    <div className="pricing-section">
      <div className="pricing-background-glow pricing-background-glow--left" />
      <div className="pricing-background-glow pricing-background-glow--right" />

      {pricingLoading ? (
        <div className="pricing-page-loading" role="status">
          <div className="pricing-page-spinner" />

          <h2>Loading Pricing...</h2>

          <p>Finding the best prices for your region.</p>
        </div>
      ) : pricingError ? (
        <div className="pricing-page-error" role="alert">
          <h2>Unable to load pricing</h2>

          <p>We couldn't fetch the latest prices. Please try again.</p>

          <button
            type="button"
            onClick={() => setRetryKey((value) => value + 1)}
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          <Pricing
            user={user}
            account={account}
            authLoading={authLoading}
            regionalPricing={regionalPricing}
            pricingRegion={pricingRegion}
          />

          <PlanComparison
            regionalPricing={regionalPricing}
            pricingRegion={pricingRegion}
          />
        </>
      )}
    </div>
  );
}
