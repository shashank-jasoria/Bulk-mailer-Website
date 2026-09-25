import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import { site } from "../data/site.js";

export default function WebsiteLayout({
  darkMode,
  onToggleTheme,
  user,
  onLogout,
}) {
  return (
    <div className="site-shell background">
      <Navbar
        site={site}
        darkMode={darkMode}
        onToggleTheme={onToggleTheme}
        user={user}
        onLogout={onLogout}
      />
      <main>
        <Outlet />
      </main>

      <Footer site={site} />
    </div>
  );
}
