import { createSlice } from "@reduxjs/toolkit";
import { i } from "motion/react-client";

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    products: [],
    hairstyles: [],
  },
  reducers: {
    addOrRemoveFromFavorites: (state, action) => {
      const { type, item } = action.payload;
      if (type === 'hairstyle') {
        const existingHairstyle = state.hairstyles.find(hairstyle => hairstyle.id === item.id);
        if (existingHairstyle) {
          state.hairstyles = state.hairstyles.filter(hairstyle => hairstyle.id !== item.id);
        } else {
          state.hairstyles.push(item);
        }
      } else {
        const existingProduct = state.products.find(product => product.id === item.id);
        if (existingProduct) {
          state.products = state.products.filter(product => product.id !== item.id);
        } else {
          state.products.push(item);
        }
      }
    },
  //   addToFavorites: (state, action) => {
  //   if (action.payload.type === 'hairstyle') {
  //       state.hairstyles.push(action.payload);
  //       return;
  //   }
  //     state.products.push(action.payload);
  //   },
  //   removeFromFavorites: (state, action) => {
  //       if (action.payload.type === 'hairstyle') {
  //       state.hairstyles = state.hairstyles.filter(
  //           (hairstyle) => hairstyle.id !== action.payload.id
  //       );
  //       return;
  //   }
  //     state.products = state.products.filter(
  //       (product) => product.id !== action.payload.id
  //     );
  //   },
  },
});

export const { addOrRemoveFromFavorites } = favoriteSlice.actions;


