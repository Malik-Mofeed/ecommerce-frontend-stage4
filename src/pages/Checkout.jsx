import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Alert from "../components/common/Alert";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (cartItems.length === 0) {
      setError("Your cart is empty");
      return;
    }

    if (!formData.fullName.trim()) {
      setError("Full name is required");
      return;
    }

    if (!formData.email.trim()) {
      setError("Email is required");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Phone is required");
      return;
    }

    if (!formData.address.trim()) {
      setError("Address is required");
      return;
    }

    if (!formData.city.trim()) {
      setError("City is required");
      return;
    }

    setSuccess("Order placed successfully");

    clearCart();

    setTimeout(() => {
      navigate("/profile");
    }, 1000);
  };

  if (cartItems.length === 0 && !success) {
    return (
      <section className="auth-page">
        <div className="auth-card">
          <h1>Checkout</h1>

          <Alert
            type="error"
            message="Your cart is empty"
          />

          <Link to="/products">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="auth-page">
      <div className="auth-card">
        <h1>Checkout</h1>

        <p className="auth-subtitle">
          Complete your order
        </p>

        <Alert
          type="error"
          message={error}
        />

        <Alert
          type="success"
          message={success}
        />

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          {cartItems.map((item) => (
            <div
              className="checkout-item"
              key={item.id}
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <span>
                $
                {(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <hr />

          <h3>
            Total: ${totalPrice.toFixed(2)}
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

          <Input
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

          <Input
            label="Address"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />

          <Input
            label="City"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
          />

          <Button type="submit">
            Place Order
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;