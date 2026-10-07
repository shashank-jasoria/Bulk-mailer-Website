import { useOutletContext } from "react-router-dom";
import Pricing from "../components/Pricing";
import PlanComparison from "../components/PlanComparison";
import "../styles/pricingCard.css";

export default function PricingPage() {
  const { user, account, authLoading } = useOutletContext();

  return (
    <div className="pricing-section">
      <div className="pricing-background-glow pricing-background-glow--left" />
      <div className="pricing-background-glow pricing-background-glow--right" />
      <Pricing user={user} account={account} authLoading={authLoading} />
      <PlanComparison />
    </div>
  );
}
