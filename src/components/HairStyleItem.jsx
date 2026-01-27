import AnimatedListItem from "./AnimatedListItem";
import { useFavoriteItem } from "../hooks/useFavoriteItem";

export default function HairStyleItem({ hairstyle }) {
  const { isFavorite, addOrRemoveFavoriteHandler } = useFavoriteItem(
    hairstyle,
    "hairstyle"
  );
  return (
    <AnimatedListItem className="hairstyle">
      <button onClick={addOrRemoveFavoriteHandler} className="favorite-btn">
        {isFavorite ? (
          <ion-icon name="heart" className="favorite-icon"></ion-icon>
        ) : (
          <ion-icon name="heart-outline" className="favorite-icon"></ion-icon>
        )}
      </button>
      <div className="hairstyle-img-box">
        <img
          src={hairstyle.image}
          alt={hairstyle.name}
          className="hairstyle-img"
        />
      </div>
      <h3 className="heading-terciary">{hairstyle.name}</h3>
      <p className="hairstyle-price">{hairstyle.price} A0A</p>
      <button className="item-btn">Selecionar</button>
    </AnimatedListItem>
  );
}
