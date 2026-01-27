import BackDrop from "./BackDrop";
import SocialMedia from "./SocialMedia";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import HairStyleItem from "./HairStyleItem";

export default function SideBar({ open }) {
  const favoriteProducts = useSelector(state => state.favorites.products);
  const favoriteHairstyles = useSelector(state => state.favorites.hairstyles);

  console.log(favoriteProducts, favoriteHairstyles);
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
        <br />
        {
        favoriteProducts.length > 0 && <div>
          <h2 className="heading-secondary">Produtos favoritos:</h2>
          <ul className="products-list grid grid-3">
            {favoriteProducts.map(product => (
                <ProductItem key={product.id} product={product} />
            ))}
        </ul>
        </div>
        }
        <br />
        {favoriteHairstyles.length > 0 && <div>
          <h2 className="heading-secondary">Estilos favoritos:</h2>
          <ul className="hairstyle-list">
              {favoriteHairstyles.map((hairstyle) => (
                <HairStyleItem hairstyle={hairstyle} />
              ))}
          </ul>
        </div>
        }
        <br />
        <br />
        
        <SocialMedia/>
      </motion.aside>
    </>
  );
}
