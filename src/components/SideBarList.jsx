import { NavLink } from "react-router-dom";

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
        <a href="#products" onClick={onClose}>
          Products
        </a>
      </li>
      <li className="side-bar-list-item">
        <a href="#hairstyle-prices" onClick={onClose}>
          Hairstyles
        </a>
      </li>
    </ul>
  );
}
