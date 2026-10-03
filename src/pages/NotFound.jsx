import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="button primary-button"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;