import AnimatedListItem from "./AnimatedListItem";
import { addOrRemoveFromFavorites } from "../store/Slices/favoriteSlice";
import { useSelector, useDispatch } from "react-redux";

export default function HairStyleItem({ hairstyle }) {
    const favoriteHairstyles = useSelector(state => state.favorites.hairstyles);
    const isFavorite = favoriteHairstyles.some(item => item.id === hairstyle.id);
    const dispatch = useDispatch();
    
    function addOrRemoveFavoriteHandler() {
        const payload = {
        type: 'hairstyle',
        item: hairstyle,
        };
        dispatch(addOrRemoveFromFavorites(payload));
    }
  return (
    <AnimatedListItem className="hairstyle">
        <button onClick={addOrRemoveFavoriteHandler} className="favorite-btn">
        {
          isFavorite ? <ion-icon name="heart" className="favorite-icon"></ion-icon>:<ion-icon name="heart-outline" className="favorite-icon"></ion-icon>
        }
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
      <button className="hairstyle-btn">Selecionar</button>
    </AnimatedListItem>
  );
}
