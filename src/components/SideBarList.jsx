import { NavLink } from "react-router-dom";
import { handleScrollIntoView } from "../utils/utils-functions";

export default function SideBarList({ onClose }) {
  return (
    <ul className="side-bar-list">
      <li className="side-bar-list-item">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link--actived" : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className="side-bar-list-item">
        <a href="#products" onClick={(e) => handleScrollIntoView(e, onClose)}>
          Productos
        </a>
      </li>
      <li className="side-bar-list-item">
        <a href="#hairstyle-prices" onClick={(e) => handleScrollIntoView(e, onClose)}>
          Estilos
        </a>
      </li>
    </ul>
  );
}
