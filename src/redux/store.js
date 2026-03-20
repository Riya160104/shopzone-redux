import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    filters: filterReducer,
    theme: themeReducer,
  },
});