import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside>
      <h2>Admin Panel</h2>

      <nav>
        <NavLink to="/admin">Dashboard</NavLink>
        <NavLink to="/admin/products">Products</NavLink>
        <NavLink to="/admin/orders">Orders</NavLink>
        <NavLink to="/admin/users">Users</NavLink>
      </nav>
    </aside>
  );
}

export default AdminSidebar;