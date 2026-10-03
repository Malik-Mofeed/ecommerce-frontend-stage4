import { useCart } from "../context/CartContext";
import EmptyState from "../components/common/EmptyState";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <section>
        <h1>Your Cart</h1>

        <EmptyState
          title="Empty Cart"
          message="Your shopping cart is empty."
        />

        <Link to="/products">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Your Cart</h1>

      {cartItems.map((item) => (
        <article key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            width="120"
          />

          <h2>{item.name}</h2>

          <p>
            Price: ${item.price.toFixed(2)}
          </p>

          <label htmlFor={`quantity-${item.id}`}>
            Quantity:
          </label>

          <input
            id={`quantity-${item.id}`}
            type="number"
            min="1"
            max={item.stock}
            value={item.quantity}
            onChange={(event) =>
              updateQuantity(
                item.id,
                Number(event.target.value)
              )
            }
          />

          <p>
            Subtotal: $
            {(item.price * item.quantity).toFixed(2)}
          </p>

          <Button
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </Button>
        </article>
      ))}

      <hr />

      <h2>
        Total: ${totalPrice.toFixed(2)}
      </h2>

      <Link to="/checkout">
        Checkout
      </Link>
    </section>
  );
}

export default Cart;