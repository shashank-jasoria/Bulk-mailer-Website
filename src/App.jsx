import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  startGoogleWebsiteLogin,
  startMicrosoftWebsiteLogin,
  getWebsiteUser,
  logoutWebsite,
} from "./api/authApi";
import WebsiteLayout from "./layout/WebsiteLayout.jsx";
import WebsiteAuthCallback from "./pages/WebsiteAuthCallback.jsx";

import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PricingPage from "./pages/PricingPage.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;

    return window.localStorage.getItem("relay-theme") === "dark";
  });
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function loadUser() {
      try {
        const data = await getWebsiteUser();

        if (!cancelled) {
          setUser(data.user);
        }
      } catch (error) {
        if (!cancelled && error.status === 401) {
          setUser(null);
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
    } catch (error) {
      console.error("Logout failed:", error);
    }
  }

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
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="pricing" element={<PricingPage />} />
        </Route>

        {/* Authentication pages */}
        <Route
          path="login"
          element={
            <LoginPage
              onGoogleLogin={startGoogleWebsiteLogin}
              onOutlookLogin={startMicrosoftWebsiteLogin}
            />
          }
        />
        <Route
          path="auth/callback"
          element={<WebsiteAuthCallback onLogin={setUser} />}
        />

        {/* 404 */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
