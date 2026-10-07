import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  startGoogleWebsiteLogin,
  startMicrosoftWebsiteLogin,
  getWebsiteUser,
  logoutWebsite,
} from "./api/authApi";
import { getBillingStatus, cancelSubscription } from "./api/billingApi";
import WebsiteLayout from "./layout/WebsiteLayout.jsx";
import WebsiteAuthCallback from "./pages/WebsiteAuthCallback.jsx";

import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import PublicOnlyRoute from "./components/PublicOnlyRoute.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import AboutUs from "./pages/AboutUs.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.localStorage.getItem("relay-theme") === "dark";
  });
  const [user, setUser] = useState(null);
  const [account, setAccount] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [billing, setBilling] = useState(null);
  const [billingLoading, setBillingLoading] = useState(false);
  const [subscriptionActionLoading, setSubscriptionActionLoading] =
    useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadUser() {
      try {
        const data = await getWebsiteUser();

        if (!cancelled) {
          setUser(data.user);
          setAccount(data.account);
        }
      } catch (error) {
        if (!cancelled && error.status === 401) {
          setUser(null);
          setAccount(null);
        }
      } finally {
        if (!cancelled) {
          setAuthLoading(false);
        }
      }
    }

    loadUser();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);

    window.localStorage.setItem("relay-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  async function handleLogout() {
    try {
      await logoutWebsite();

      setUser(null);
      setAccount(null);
      setBilling(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

  async function handleCancelSubscription() {
    try {
      setSubscriptionActionLoading(true);
      await cancelSubscription();
      const data = await getBillingStatus();
      setBilling(data?.billing || null);
    } catch (error) {
      console.error("Cancel subscription failed:", error);
      alert(error?.message || "Failed to cancel subscription");
    } finally {
      setSubscriptionActionLoading(false);
    }
  }

  function handleWebsiteLogin({
    user: loggedInUser,
    account: loggedInAccount,
  }) {
    setUser(loggedInUser);
    setAccount(loggedInAccount || null);
  }

  useEffect(() => {
    let cancelled = false;
    async function loadBilling() {
      if (!user) {
        setBilling(null);
        return;
      }
      try {
        setBillingLoading(true);
        const data = await getBillingStatus();
        if (!cancelled) {
          setBilling(data?.billing || null);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Failed to load billing status:", error);

          setBilling(null);
        }
      } finally {
        if (!cancelled) {
          setBillingLoading(false);
        }
      }
    }

    loadBilling();

    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route
          element={
            <WebsiteLayout
              darkMode={darkMode}
              onToggleTheme={() => setDarkMode((value) => !value)}
              user={user}
              onLogout={handleLogout}
              authLoading={authLoading}
              account={account}
              billing={billing}
              billingLoading={billingLoading}
              onCancelSubscription={handleCancelSubscription}
              subscriptionActionLoading={subscriptionActionLoading}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>

        {/* Authentication pages */}
        <Route
          element={<PublicOnlyRoute user={user} authLoading={authLoading} />}
        >
          <Route
            path="login"
            element={
              <LoginPage
                onGoogleLogin={startGoogleWebsiteLogin}
                onOutlookLogin={startMicrosoftWebsiteLogin}
              />
            }
          />
        </Route>
        <Route
          path="auth/callback"
          element={<WebsiteAuthCallback onLogin={handleWebsiteLogin} />}
        />

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
