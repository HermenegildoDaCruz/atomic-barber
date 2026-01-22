import BackDrop from "./BackDrop";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";

export default function SideBar({ open }) {
  return (
    <>
      <BackDrop open={open} />
      <motion.aside 
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.1 }}
        className="side-bar">
        <ul className="side-bar-list">
          <li className="side-bar-list-item">
            <NavLink to="/" className={({isActive}) => isActive ? "link--actived" : undefined}>Home</NavLink>
          </li>
          <li className="side-bar-list-item">
            <NavLink to="#hairstyle-prices">Hairstyles</NavLink>
          </li>
          {/* <li className="side-bar-list-item">
            <NavLink to="#products">Products</NavLink>
          </li> */}
        </ul>
        <div className="social-links">
          <a href="/" target="_blank" className="social-link">
            <ion-icon name="logo-facebook" className="icon"></ion-icon>
          </a>
          <a href="/" target="_blank" className="social-link">
            <ion-icon name="logo-whatsapp" className="icon"></ion-icon>
          </a>
        </div>
      </motion.aside>
    </>
  );
}
