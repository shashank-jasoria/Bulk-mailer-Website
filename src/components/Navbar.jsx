import { Link } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
import { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar({
  site,
  darkMode,
  onToggleTheme,
  user,
  onLogout,
}) {
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container navbar">
        <Link className="brand" to="/" aria-label={`${site.name} home`}>
          <BrandMark />
          <span>{site.name}</span>
        </Link>

        <div className="nav-actions">
          <nav className="nav-links" aria-label="Primary navigation">
            <Link to="#product">Product</Link>
            <Link to="#features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="#faq">FAQ</Link>
          </nav>

          <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          >
            <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
          </button>

          <a
            className="button button--ghost nav-login br-50"
            href={site.chromeStoreUrl}
          >
            Install
          </a>

          {user ? (
            <div className="profile-dropdown">
              <button
                type="button"
                className="profile-button"
                onClick={() => setProfileOpen((prev) => !prev)}
                aria-label="Open profile menu"
                aria-expanded={profileOpen}
              >
                {user.profileImage ? (
                  <span className="profile-avatar">
                    <img
                      src={user.profileImage}
                      alt=""
                      className="profile-avatar-image"
                    />
                  </span>
                ) : (
                  <span className="profile-avatar">
                    {user.email?.charAt(0).toUpperCase()}
                  </span>
                )}
              </button>

              {profileOpen && (
                <div className="profile-menu">
                  <div className="profile-menu-header">
                    <span className="profile-menu-label">Signed in as</span>

                    <span className="profile-menu-email">{user.email}</span>
                  </div>

                  <div className="profile-menu-divider" />

                  <button
                    type="button"
                    className="profile-menu-item"
                    onClick={onToggleTheme}
                  >
                    <span>Theme</span>
                    <span className="profile-menu-value">
                      {darkMode ? "Dark" : "Light"}
                    </span>
                  </button>

                  <button
                    type="button"
                    className="profile-menu-item profile-menu-logout"
                    onClick={onLogout}
                  >
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link className="button button--primary br-50" to="/login">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
