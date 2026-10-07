import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { site } from "../data/site.js";

export default function WebsiteLayout({
  darkMode,
  onToggleTheme,
  user,
  onLogout,
  authLoading,
  account,
  billing,
  billingLoading,
  onCancelSubscription,
  subscriptionActionLoading,
}) {
  return (
    // background
    <div className="site-shell ">
      <Navbar
        site={site}
        darkMode={darkMode}
        onToggleTheme={onToggleTheme}
        user={user}
        onLogout={onLogout}
        authLoading={authLoading}
        account={account}
        billing={billing}
        billingLoading={billingLoading}
        onCancelSubscription={onCancelSubscription}
        subscriptionActionLoading={subscriptionActionLoading}
      />

      <main>
        <Outlet
          context={{
            user,
            account,
            authLoading,
            billing,
            billingLoading,
          }}
        />
      </main>

      <Footer site={site} darkMode={darkMode} />
    </div>
  );
}
