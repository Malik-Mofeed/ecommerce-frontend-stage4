import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <article className="category-card">
      <div className="category-content">
        <h2>{category.name}</h2>

        <p>{category.description}</p>

        <Link
          className="button secondary-button"
          to={`/products?category=${category.id}`}
        >
          View Products
        </Link>
      </div>
    </article>
  );
}

export default CategoryCard;