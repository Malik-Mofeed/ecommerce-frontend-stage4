function SearchBar({ value, onChange }) {
  return (
    <div>
      <label htmlFor="product-search">Search Products</label>

      <input
        id="product-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
}

export default SearchBar;