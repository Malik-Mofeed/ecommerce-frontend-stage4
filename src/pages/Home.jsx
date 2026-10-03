import { Link } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/products/ProductCard";
import CategoryCard from "../components/products/CategoryCard";

function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <section>
      <div className="hero">
        <h1>Welcome to E-Commerce Store</h1>

        <p>
          Discover our products and find what you need.
        </p>

        <Link
          to="/products"
          className="button primary-button"
        >
          Shop Now
        </Link>
      </div>

      <section className="section">
        <h2 className="section-title">
          Categories
        </h2>

        <div className="category-grid">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">
          Featured Products
        </h2>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;