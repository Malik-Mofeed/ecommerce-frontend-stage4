import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { categories } from "../data/categories";
import ProductCard from "../components/products/ProductCard";
import SearchBar from "../components/common/SearchBar";
import EmptyState from "../components/common/EmptyState";

function Products() {
  const [search, setSearch] = useState("");
  const [searchParams] = useSearchParams();

  const categoryFromUrl = searchParams.get("category") || "all";

  const [categoryId, setCategoryId] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        categoryId === "all" ||
        product.categoryId === Number(categoryId);

      return matchesSearch && matchesCategory;
    });

    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    }

    if (sortBy === "name") {
      result = [...result].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    return result;
  }, [search, categoryId, sortBy]);

  return (
    <section>
      <h1>Products</h1>

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div>
        <label htmlFor="category">Category</label>

        <select
          id="category"
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="all">All Categories</option>

          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sort">Sort By</label>

        <select
          id="sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <EmptyState
          title="No Search Results"
          message="No products match your search or filters."
        />
      ) : (
        <div className="product-grid">
  {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;