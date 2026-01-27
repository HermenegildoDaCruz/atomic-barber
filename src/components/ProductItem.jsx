import { useBooleanHook } from "../hooks/useBooleanHook";
import { useFavoriteItem } from "../hooks/useFavoriteItem";
import { useState } from "react";

export default function ProductItem({ product }) {
  const { isFavorite, addOrRemoveFavoriteHandler } = useFavoriteItem(
    product,
    "product"
  );
  const {
    value: showProductBtns,
    setTrue: showProductBtnsHandler,
    setFalse: HideProductBtnsHandler,
  } = useBooleanHook(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  return (
    <li
      className="product-item"
      onMouseOver={showProductBtnsHandler}
      onMouseLeave={HideProductBtnsHandler}
    >
      <button onClick={addOrRemoveFavoriteHandler} className="favorite-btn">
        {isFavorite ? (
          <ion-icon name="heart" className="favorite-icon"></ion-icon>
        ) : (
          <ion-icon name="heart-outline" className="favorite-icon"></ion-icon>
        )}
      </button>
      <div className="product-img-box">
        <img
          src={
            product.image
              ? product.image
              : product.colors[currentColorIndex].image
          }
          alt={product.name}
          className="product-img"
        />
      </div>
      <h2 className="heading-terciary product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <p className="product-price">{product.price} AOA</p>
      <p className="deliver-price">+2.000kz da entrega</p>
      {showProductBtns && !product.image && (
        <div className="product-colors">
          <button
            className={
              currentColorIndex === 0
                ? "product-color red product-color--actived"
                : "product-color red"
            }
            onClick={() => setCurrentColorIndex(0)}
          ></button>
          <button
            className={
              currentColorIndex === 1
                ? "product-color blue product-color--actived"
                : "product-color blue"
            }
            onClick={() => setCurrentColorIndex(1)}
          ></button>
          <button
            className={
              currentColorIndex === 2
                ? "product-color black product-color--actived"
                : "product-color black"
            }
            onClick={() => setCurrentColorIndex(2)}
          ></button>
        </div>
      )}
    </li>
  );
}
