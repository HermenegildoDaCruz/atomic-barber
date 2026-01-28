import AnimatedListItem from "./AnimatedListItem";
import { useFavoriteItem } from "../hooks/useFavoriteItem";

export default function HairStyleItem({ item }) {
  const { isFavorite, addOrRemoveFavoriteHandler } = useFavoriteItem(
    item,
    "hairstyle",
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
        <img src={item.image} alt={item.name} className="hairstyle-img" />
      </div>
      <h3 className="heading-terciary">{item.name}</h3>
      <p className="hairstyle-price">{item.price} A0A</p>
      <button className="item-btn">Selecionar</button>
    </AnimatedListItem>
  );
}
