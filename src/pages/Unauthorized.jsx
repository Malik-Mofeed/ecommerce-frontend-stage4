import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <section className="not-found-page">
      <div className="not-found-card">
        <h1>403</h1>

        <h2>Unauthorized</h2>

        <p>
          You do not have permission to access this page.
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

export default Unauthorized;