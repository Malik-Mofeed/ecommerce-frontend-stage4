function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <h2>E-Commerce Store</h2>
          <p>
            Your trusted online store for quality products.
          </p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;