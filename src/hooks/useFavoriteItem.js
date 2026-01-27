import { useSelector, useDispatch } from "react-redux";
import { addOrRemoveFromFavorites } from "../store/Slices/favoriteSlice";

export function useFavoriteItem(item, itemType) {
  const favoriteItems = useSelector((state) => state.favorites[`${itemType}s`]);
  const isFavorite = favoriteItems.some((favItem) => favItem.id === item.id);
  const dispatch = useDispatch();

  function addOrRemoveFavoriteHandler() {
    const payload = {
      type: itemType,
      item: item,
    };
    dispatch(addOrRemoveFromFavorites(payload));
  }
  return { isFavorite, addOrRemoveFavoriteHandler };
}
