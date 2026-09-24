import BrandMark from "./BrandMark.jsx";

export default function Navbar({ site, darkMode, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="container navbar">
        <a className="brand" href="#top" aria-label={`${site.name} home`}>
          <BrandMark />
          <span>{site.name}</span>
        </a>

        <div className="nav-actions">
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#product">Product</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          {/* <button
            className="theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          >
            <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
          </button> */}
          <a
            className="button button--ghost nav-login br-50"
            href={site.loginUrl}
          >
            Install
          </a>
          <a
            className="button button--primary br-50"
            href={site.chromeStoreUrl}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
