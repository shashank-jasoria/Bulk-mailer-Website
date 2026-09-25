import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h1>404</h1>

      <p>The page you're looking for doesn't exist.</p>

      <Link className="button button--primary" to="/">
        Back to home
      </Link>
    </div>
  );
}
