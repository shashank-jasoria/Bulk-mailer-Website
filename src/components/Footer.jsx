import BrandMark from './BrandMark.jsx';

export default function Footer({ site }) {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand-column">
          <a className="brand" href="#top">
            <BrandMark compact />
            <span>{site.name}</span>
          </a>
          <p>
            A browser-first prospecting and outreach workflow for capturing contacts, personalizing
            emails, and keeping follow-up organized.
          </p>
        </div>

        <div className="footer__links">
          <div>
            <strong>Product</strong>
            <a href="#product">How it works</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div>
            <strong>Resources</strong>
            <a href={site.docsUrl}>Docs</a>
            <a href="#faq">FAQ</a>
            <a href="#">Support</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
        <span>Temporary product name — replace before launch.</span>
      </div>
    </footer>
  );
}
