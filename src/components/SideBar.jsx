import BackDrop from "./BackDrop";
import SocialMedia from "./SocialMedia";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import HairStyleItem from "./HairStyleItem";
import FavoriteList from "./FavoriteList";
import SideBarList from "./SideBarList";
import SideBarExtraInfo from "./SideBarExtraInfo";

import { useState } from "react";

export default function SideBar({ open, onClose }) {
  const [turnOnFullscreen, setTurnOnFullscreen] = useState(false);
  const favoriteProducts = useSelector((state) => state.favorites.products);
  const favoriteHairstyles = useSelector((state) => state.favorites.hairstyles);

  let sideBarClass = "side-bar";
  if (turnOnFullscreen) {
    sideBarClass += " side-bar--fullscreen";
  }

  return (
    <>
      <BackDrop open={open} />
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: open ? 0 : "100%" }}
        transition={{ duration: 0.1 }}
        className={sideBarClass}
        onDoubleClick={() => setTurnOnFullscreen(!turnOnFullscreen)}
      >
        <SideBarExtraInfo />
        <SideBarList onClose={onClose} />
        <br />
        <FavoriteList
          headingText="Produtos favoritos"
          classes="products-list grid grid-3"
          list={favoriteProducts}
          ItemComponent={ProductItem}
        />
        <br />
        <FavoriteList
          headingText="Estilos favoritos"
          classes="hairstyle-list"
          list={favoriteHairstyles}
          ItemComponent={HairStyleItem}
        />
        <br />
        <br />
        <SocialMedia />
      </motion.aside>
    </>
  );
}
