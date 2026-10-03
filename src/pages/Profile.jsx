import { Link } from "react-router-dom";
import { currentUser } from "../data/users";

function Profile() {
  return (
    <section className="profile-page">
      <div className="profile-header">
        <div>
          <h1>My Account</h1>
          <p>Manage your account information and orders.</p>
        </div>

        <Link
          to="/products"
          className="button secondary-button"
        >
          Continue Shopping
        </Link>
      </div>

      <div className="profile-grid">
        <article className="profile-card">
          <h2>Personal Information</h2>

          <div className="profile-info">
            <div>
              <span>Name</span>
              <strong>{currentUser.name}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{currentUser.email}</strong>
            </div>

            <div>
              <span>Phone</span>
              <strong>{currentUser.phone}</strong>
            </div>

            <div>
              <span>Address</span>
              <strong>{currentUser.address}</strong>
            </div>
          </div>
        </article>

        <article className="profile-card">
          <h2>Account</h2>

          <div className="profile-actions">
            <button
              type="button"
              className="button secondary-button"
            >
              Edit Profile
            </button>

            <button
              type="button"
              className="button secondary-button"
            >
              Change Password
            </button>

            <Link
              to="/"
              className="button primary-button"
            >
              Logout
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Profile;