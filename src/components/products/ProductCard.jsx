import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const isOutOfStock = product.stock === 0;

  return (
    <article className="product-card">
      <img
        className="product-image"
        src={product.image}
        alt={product.name}
      />

      <div className="product-content">
        <h2>{product.name}</h2>

        <p className="product-description">
          {product.description}
        </p>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

        {isOutOfStock ? (
          <p className="out-of-stock">Out of Stock</p>
        ) : (
          <p className="product-stock">
            Stock: {product.stock}
          </p>
        )}

        <div className="product-actions">
          <Link
            className="button secondary-button"
            to={`/products/${product.id}`}
          >
            View Product
          </Link>

          {!isOutOfStock && (
            <button
              className="button primary-button"
              type="button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;