import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from "./Slices/favoriteSlice";

export const store = configureStore({
  reducer: {
    favorites: favoriteSlice.reducer,
  },
});
