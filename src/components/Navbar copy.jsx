import { Link } from "react-router-dom";
import BrandMark from "./BrandMark.jsx";
// import { useState } from "react";
import "../styles/Navbar.css";

// export default function Navbar({
//   site,
//   darkMode,
//   onToggleTheme,
//   user,
//   onLogout,
//   authLoading,
//   account,
// }) {
//   const [profileOpen, setProfileOpen] = useState(false);
//   return (
//     <header className="site-header">
//       <div className="container navbar">
//         <Link className="brand" to="/" aria-label={`${site.name} home`}>
//           <BrandMark />
//           <span>{site.name}</span>
//         </Link>

//         <div className="nav-actions">
//           <nav className="nav-links" aria-label="Primary navigation">
//             <Link to="/contact">Contact </Link>
//             <Link to="/about">About</Link>
//             <Link to="/pricing">Pricing</Link>
//             <Link to="#faq">FAQ</Link>
//           </nav>

//           <button
//             className="theme-toggle"
//             type="button"
//             onClick={onToggleTheme}
//             aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
//           >
//             <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
//           </button>

//           <a
//             className="button button--ghost nav-login br-50"
//             href={site.chromeStoreUrl}
//           >
//             Install
//           </a>

//           {authLoading ? (
//             <div className="nav-auth-placeholder" />
//           ) : user ? (
//             <div className="profile-dropdown">
//               <button
//                 type="button"
//                 className="profile-button"
//                 onClick={() => setProfileOpen((prev) => !prev)}
//                 aria-label="Open profile menu"
//                 aria-expanded={profileOpen}
//               >
//                 {user.profileImage ? (
//                   <span className="profile-avatar">
//                     <img
//                       src={user.profileImage}
//                       alt=""
//                       className="profile-avatar-image"
//                     />
//                   </span>
//                 ) : (
//                   <span className="profile-avatar">
//                     {user.email?.charAt(0).toUpperCase()}
//                   </span>
//                 )}
//               </button>

//               {profileOpen && (
//                 <div className="profile-menu">
//                   <div className="profile-menu-header">
//                     <span className="profile-menu-label">Signed in as</span>

//                     <span className="profile-menu-email">{user.email}</span>
//                   </div>

//                   {account?.tier && (
//                     <>
//                       <div className="profile-menu-divider" />

//                       <div className="profile-menu-account">
//                         <span className="profile-menu-label">Current plan</span>

//                         <span className="profile-menu-tier">
//                           {account.tier.name}
//                         </span>
//                       </div>
//                     </>
//                   )}

//                   <div className="profile-menu-divider" />

//                   <button
//                     type="button"
//                     className="profile-menu-item"
//                     onClick={onToggleTheme}
//                   >
//                     <span>Theme</span>
//                     <span className="profile-menu-value">
//                       {darkMode ? "Dark" : "Light"}
//                     </span>
//                   </button>

//                   <button
//                     type="button"
//                     className="profile-menu-item profile-menu-logout"
//                     onClick={onLogout}
//                   >
//                     <span>Log Out</span>
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link className="button button--primary br-50" to="/login">
//               Get Started
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

const navItems = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({
  site,
  darkMode,
  onToggleTheme,
  user,
  onLogout,
  authLoading,
  account,
}) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        {/* Brand */}
        <Link to="/" className="site-header__brand" aria-label="Relay home">
          <RelayLogo />

          <span className="site-header__brand-name">
            Rel<span className="site-header__brand-diamond">a</span>y
          </span>
        </Link>

        {/* Navigation */}
        <nav className="site-header__nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="site-header__nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="site-header__actions">
          <span className="site-header__divider" />

          <a
            className="site-header__chrome-button"
            href="https://chromewebstore.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <ChromeIcon />
            <span>Add to Chrome</span>
          </a>

          <span className="site-header__divider site-header__divider--small" />

          {authLoading ? (
            <div className="nav-auth-placeholder" />
          ) : user ? (
            <div className="profile" ref={profileRef}>
              <button
                type="button"
                className={`profile__trigger ${
                  profileOpen ? "profile__trigger--open" : ""
                }`}
                aria-haspopup="menu"
                aria-expanded={profileOpen}
                onClick={() => setProfileOpen((prev) => !prev)}
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
                  <Avatar initials={user.email?.charAt(0).toUpperCase()} />
                )}

                <span className="profile__greeting">Hi, {user.firstName}</span>

                <ChevronIcon open={profileOpen} />
              </button>

              {profileOpen && (
                <div className="profile-menu" role="menu">
                  {/* User */}
                  <div className="profile-menu__user">
                    {user.profileImage ? (
                      <span className="profile-avatar">
                        <img
                          src={user.profileImage}
                          alt=""
                          className="profile-avatar-image"
                        />
                      </span>
                    ) : (
                      <Avatar initials={user.email?.charAt(0).toUpperCase()} />
                    )}

                    <div className="profile-menu__user-copy">
                      <strong>{user.fullName}</strong>
                      <span>{user.email}</span>
                    </div>
                  </div>

                  <div className="profile-menu__separator" />

                  {/* Plan */}
                  
                  <div className="profile-menu__plan">
                    <div className="profile-menu__plan-icon">
                      <CrownIcon />
                    </div>

                    <div className="profile-menu__plan-copy">
                      <strong>{user.plan}</strong>
                      <span>{user.renewalText}</span>
                    </div>

                    <span className="profile-menu__status">{user.status}</span>
                  </div>

                  <button
                    type="button"
                    className="profile-menu__cancel"
                    onClick={onCancelSubscription}
                  >
                    <CancelIcon />
                    Cancel Subscription
                  </button>

                  <div className="profile-menu__separator" />

                  {/* Theme */}
                  <div className="profile-menu__theme">
                    <div className="profile-menu__theme-label">
                      <MoonIcon />
                      <span>Theme</span>
                    </div>

                    <div className="profile-menu__theme-controls">
                      <SunIcon />

                      <button
                        type="button"
                        className={`theme-switch ${
                          isDark ? "theme-switch--active" : ""
                        }`}
                        aria-label="Toggle theme"
                        aria-pressed={isDark}
                        onClick={toggleTheme}
                      >
                        <span className="theme-switch__thumb" />
                      </button>

                      <MoonIcon small />
                    </div>
                  </div>

                  <div className="profile-menu__separator" />

                  {/* Logout */}
                  <button
                    type="button"
                    className="profile-menu__logout"
                    onClick={() => {
                      setProfileOpen(false);
                      onLogout?.();
                    }}
                  >
                    <LogoutIcon />
                    <span>Log out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              className="site-header__login-button"
              onClick={onLogin}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

/* ---------------------------------
   Icons
---------------------------------- */

function RelayLogo() {
  return (
    <span className="relay-logo" aria-hidden="true">
      <span className="relay-logo__lines">
        <i />
        <i />
        <i />
      </span>

      <span className="relay-logo__box">
        <svg viewBox="0 0 32 32">
          <path d="M6 9.5h20v13H6z" />
          <path d="m6.7 10.2 9.3 8 9.3-8" />
        </svg>
      </span>
    </span>
  );
}

function Avatar({ initials, large = false }) {
  return (
    <span className={`avatar ${large ? "avatar--large" : ""}`}>{initials}</span>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      className={`profile__chevron ${open ? "profile__chevron--open" : ""}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function CrownIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m3 7 4.2 3.1L12 4l4.8 6.1L21 7l-2.1 11H5.1L3 7Z" />
      <path d="M5 20h14" />
    </svg>
  );
}

function CancelIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <path d="m9.5 9.5 5 5m0-5-5 5" />
    </svg>
  );
}

function MoonIcon({ small = false }) {
  return (
    <svg
      className={small ? "icon--small" : ""}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20 15.2A8.5 8.5 0 0 1 8.8 4a8.7 8.7 0 1 0 11.2 11.2Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 4H5.5A1.5 1.5 0 0 0 4 5.5v13A1.5 1.5 0 0 0 5.5 20H10" />
      <path d="M14 8l4 4-4 4M8 12h10" />
    </svg>
  );
}

function ChromeIcon() {
  return (
    <span className="chrome-icon" aria-hidden="true">
      <span className="chrome-icon__center" />
    </span>
  );
}
