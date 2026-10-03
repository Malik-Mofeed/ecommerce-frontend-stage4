import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();
 
  const getLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          E-Commerce
        </Link>
<button
  type="button"
  className="menu-toggle"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
  aria-expanded={menuOpen}
>
  ☰
</button>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={getLinkClass}>
            Products
          </NavLink>

          <NavLink to="/login" className={getLinkClass}>
            Login
          </NavLink>

          <NavLink to="/register" className={getLinkClass}>
            Register
          </NavLink>

          <NavLink to="/profile" className={getLinkClass}>
            Account
          </NavLink>

          <NavLink to="/admin" className={getLinkClass}>
            Admin
          </NavLink>

          <Link to="/cart" className="cart-link">
            Cart
            {totalItems > 0 && (
              <span className="cart-count">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;