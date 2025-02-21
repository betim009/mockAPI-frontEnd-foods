import { NavLink } from "react-router-dom";
import './navBar.css'

export default function MyNavBar() {
  return (
    <nav className="my-nav">
      <NavLink to="/payment">Sua Compra</NavLink>
    </nav>
  );
}
