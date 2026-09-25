import "../styles/LoginPage.css";

export default function LoginPage({ onGoogleLogin, onOutlookLogin }) {
  return (
    <main className="login-page">
      <section className="login-left">
        <div className="login-brand">
          <LogoIcon />

          <span className="login-brand-name">SpeedyApply</span>
        </div>

        <div className="login-content">
          <div className="login-heading">
            <h1>Welcome</h1>
            <p>Sign in to get started</p>
          </div>

          <div className="login-providers">
            <button
              type="button"
              className="provider-button"
              onClick={onGoogleLogin}
            >
              <span className="provider-icon">
                <GoogleIcon />
              </span>

              <span className="provider-label">Sign in with Google</span>

              <span className="last-used-badge">Last used</span>
            </button>

            <button
              type="button"
              className="provider-button"
              onClick={onOutlookLogin}
            >
              <span className="provider-icon">
                <OutlookIcon />
              </span>

              <span className="provider-label">Sign in with Outlook</span>
            </button>
          </div>
        </div>

        <footer className="login-footer">
          By continuing, you agree to SpeedyApply&apos;s{" "}
          <a href="/terms">Terms of Service</a> and{" "}
          <a href="/privacy">Privacy Policy</a>, and to receive periodic emails
          with updates.
        </footer>
      </section>

      {/* =========================
          RIGHT SIDE
      ========================== */}
      <section className="login-showcase">
        <div className="login-pattern" />

        <button type="button" className="install-button">
          <ChromeIcon />
          <span>Install</span>
        </button>

        <div className="testimonial">
          <div className="testimonial-quote-mark">“</div>

          <blockquote>
            Great tool for helping apply and track for unemployment. Wish I
            would have thought to look for a tool like this sooner!
          </blockquote>

          <div className="testimonial-user">
            <div className="testimonial-avatar">CW</div>

            <span>Cale Wilson</span>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ========================================
   LOGO
======================================== */

function LogoIcon() {
  return (
    <svg
      className="logo-icon"
      width="44"
      height="34"
      viewBox="0 0 44 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 9V6.5C12 4.57 13.57 3 15.5 3H28.5C30.43 3 32 4.57 32 6.5V9"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <rect
        x="7"
        y="9"
        width="30"
        height="21"
        rx="3"
        stroke="currentColor"
        strokeWidth="3"
      />

      <path
        d="M7 15L18 21H26L37 15"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path
        d="M2 13H10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M1 19H8"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M4 25H10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ========================================
   GOOGLE
======================================== */

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M21.35 12.18c0-.71-.06-1.4-.18-2.07H12v3.91h5.24a4.48 4.48 0 0 1-1.94 2.94v2.54h3.14c1.84-1.69 2.91-4.19 2.91-7.32Z"
      />

      <path
        fill="#34A853"
        d="M12 21.7c2.62 0 4.82-.87 6.43-2.36l-3.14-2.54c-.87.58-1.98.92-3.29.92-2.53 0-4.67-1.71-5.44-4.01H3.32v2.62A9.7 9.7 0 0 0 12 21.7Z"
      />

      <path
        fill="#FBBC05"
        d="M6.56 13.71A5.82 5.82 0 0 1 6.26 12c0-.59.1-1.17.3-1.71V7.67H3.32A9.7 9.7 0 0 0 2.3 12c0 1.56.37 3.03 1.02 4.33l3.24-2.62Z"
      />

      <path
        fill="#EA4335"
        d="M12 6.28c1.43 0 2.72.49 3.73 1.45l2.79-2.79C16.81 3.35 14.61 2.3 12 2.3a9.7 9.7 0 0 0-8.68 5.37l3.24 2.62c.77-2.3 2.91-4.01 5.44-4.01Z"
      />
    </svg>
  );
}

/* ========================================
   OUTLOOK
======================================== */

function OutlookIcon() {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="11" height="16" rx="1.5" fill="#0078D4" />

      <rect x="11" y="6" width="11" height="12" rx="1" fill="#106EBE" />

      <path
        d="M11 7L16.5 11L22 7"
        stroke="#fff"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      <text
        x="7.4"
        y="15"
        textAnchor="middle"
        fontSize="9"
        fontFamily="Arial"
        fontWeight="700"
        fill="#fff"
      >
        O
      </text>
    </svg>
  );
}

/* ========================================
   CHROME
======================================== */

function ChromeIcon() {
  return (
    <svg width="21" height="21" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#EA4335" />

      <path d="M12 12L20.6 12A10 10 0 0 1 8 21.2Z" fill="#34A853" />

      <path d="M12 12L7.9 4.1A10 10 0 0 1 20.6 12Z" fill="#FBBC05" />

      <circle
        cx="12"
        cy="12"
        r="4"
        fill="#4285F4"
        stroke="#fff"
        strokeWidth="1"
      />
    </svg>
  );
}
