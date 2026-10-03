import { useState } from "react";
import { products } from "../data/products";
import { categories } from "../data/categories";
import { orders } from "../data/orders";
import AdminSidebar from "../components/layout/AdminSidebar";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import Alert from "../components/common/Alert";

function AdminDashboard() {
  const [productList, setProductList] = useState(products);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
    categoryId: "",
    description: "",
    image: "",
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

    if (!formData.name.trim()) {
      setError("Product name is required");
      return;
    }

    if (!formData.price || Number(formData.price) <= 0) {
      setError("Price must be greater than 0");
      return;
    }

    if (formData.stock === "" || Number(formData.stock) < 0) {
      setError("Stock cannot be negative");
      return;
    }

    if (!formData.categoryId) {
      setError("Please select a category");
      return;
    }

    if (!formData.description.trim()) {
      setError("Description is required");
      return;
    }

    if (!formData.image.trim()) {
      setError("Image URL is required");
      return;
    }

    const newProduct = {
      id: productList.length + 1,
      name: formData.name,
      price: Number(formData.price),
      stock: Number(formData.stock),
      categoryId: Number(formData.categoryId),
      description: formData.description,
      image: formData.image,
    };

    setProductList((current) => [
      ...current,
      newProduct,
    ]);

    setFormData({
      name: "",
      price: "",
      stock: "",
      categoryId: "",
      description: "",
      image: "",
    });

    setSuccess("Product added successfully");
  };

  return (
    <section className="admin-page">
      <div className="admin-layout">
        <AdminSidebar />

        <main className="admin-content">
          <div className="admin-header">
            <div>
              <h1>Admin Dashboard</h1>
              <p>
                Manage products, orders, and store information.
              </p>
            </div>
          </div>

          <div className="admin-stats">
            <div className="admin-stat">
              <span>Products</span>
              <strong>{productList.length}</strong>
            </div>

            <div className="admin-stat">
              <span>Categories</span>
              <strong>{categories.length}</strong>
            </div>

            <div className="admin-stat">
              <span>Orders</span>
              <strong>{orders.length}</strong>
            </div>
          </div>

          <section className="admin-card">
            <h2>Add Product</h2>

            <Alert
              type="error"
              message={error}
            />

            <Alert
              type="success"
              message={success}
            />

            <form
              className="admin-form"
              onSubmit={handleSubmit}
            >
              <Input
                label="Product Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                required
              />

              <Input
                label="Price"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter price"
                min="0"
                step="0.01"
                required
              />

              <Input
                label="Stock"
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Enter stock quantity"
                min="0"
                required
              />

              <div className="admin-field">
                <label htmlFor="categoryId">
                  Category
                </label>

                <select
                  id="categoryId"
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleChange}
                >
                  <option value="">
                    Select category
                  </option>

                  {categories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter product description"
                required
              />

              <Input
                label="Image URL"
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                required
              />

              <Button type="submit">
                Add Product
              </Button>
            </form>
          </section>

          <section className="admin-card">
            <h2>Products</h2>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Category</th>
                  </tr>
                </thead>

                <tbody>
                  {productList.map((product) => {
                    const category = categories.find(
                      (item) =>
                        item.id === product.categoryId
                    );

                    return (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>
                          ${product.price.toFixed(2)}
                        </td>
                        <td>{product.stock}</td>
                        <td>
                          {category?.name || "Unknown"}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section className="admin-card">
            <h2>Recent Orders</h2>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>User ID</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>#{order.id}</td>
                      <td>{order.userId}</td>
                      <td>
                        ${order.total.toFixed(2)}
                      </td>
                      <td>{order.status}</td>
                      <td>{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}

export default AdminDashboard;