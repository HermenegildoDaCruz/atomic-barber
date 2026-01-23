import BackDrop from "./BackDrop";
import SocialMedia from "./SocialMedia";
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
            <NavLink to="/products" className={({isActive}) => isActive ? "link--actived" : undefined}>Products</NavLink>
          </li>
          <li className="side-bar-list-item">
            <NavLink to="#hairstyle-prices">Hairstyles</NavLink>
          </li>
          {/* <li className="side-bar-list-item">
            <NavLink to="#products">Products</NavLink>
          </li> */}
        </ul>
        <SocialMedia/>
      </motion.aside>
    </>
  );
}
