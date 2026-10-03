import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Button from "../components/common/Button";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <section>
        <h1>Product Not Found</h1>

        <Link to="/products">
          Back to Products
        </Link>
      </section>
    );
  }

  const isOutOfStock = product.stock === 0;

  return (
    <section>
      <img
        src={product.image}
        alt={product.name}
        width="400"
      />

      <h1>{product.name}</h1>

      <p>{product.description}</p>

      <h2>${product.price.toFixed(2)}</h2>

      {isOutOfStock ? (
        <p>Out of Stock</p>
      ) : (
        <>
          <p>Available Stock: {product.stock}</p>

          <Button onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </>
      )}

      <br />

      <Link to="/products">
        Back to Products
      </Link>
    </section>
  );
}

export default ProductDetails;