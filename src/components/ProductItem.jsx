import { useBooleanHook } from "../hooks/useBooleanHook";
import { useFavoriteItem } from "../hooks/useFavoriteItem";
import { useState } from "react";

export default function ProductItem({ item }) {
  const { isFavorite, addOrRemoveFavoriteHandler } = useFavoriteItem(
    item,
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
      onClick={showProductBtnsHandler}
      onMouseLeave={HideProductBtnsHandler}
    >
      <button onClick={addOrRemoveFavoriteHandler} className="favorite-btn">
        {isFavorite ? (
          <ion-icon name="heart" className="favorite-icon"></ion-icon>
        ) : (
          <ion-icon name="heart-outline" className="favorite-icon"></ion-icon>
        )}
      </button>
      <div>
        <div className="product-img-box">
          <img
            src={
              item.image
                ? item.image
                : item.colors[currentColorIndex].image
            }
            alt={item.name}
            className="product-img"
          />
        </div>
        <h2 className="heading-terciary product-name">{item.name}</h2>
        <p className="product-description">{item.description}</p>
      </div>
      <div>
        <p className="product-price">{item.price} AOA</p>
        <p className="deliver-price">+2.000kz da entrega</p>
        <button className="item-btn">Comprar</button>
      </div>
      {showProductBtns && !item.image && (
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
