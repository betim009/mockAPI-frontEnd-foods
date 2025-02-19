import { NavLink } from "react-router-dom";
import './navBar.css'

export default function MyNavBar() {
  return (
    <nav className="my-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">Sua Compra</NavLink>
    </nav>
  );
}
