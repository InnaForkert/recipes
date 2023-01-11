import "./NavBar.css";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking Ninja</h1>
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default NavBar;
