import { create } from 'zustand';
import { CartSlice, createCartSlice } from './slices/cartSlice';
import { FavoritesSlice, createFavoritesSlice } from './slices/favoritesSlice';
import { ProductsSlice, createProductsSlice } from './slices/productsSlice';
import { SearchSlice, createSearchSlice } from './slices/searchSlice';
import { UISlice, createUISlice } from './slices/uiSlice';

// Об'єднуємо всі slice'и в один тип
type StoreState = CartSlice &
  FavoritesSlice &
  ProductsSlice &
  SearchSlice &
  UISlice;

export const useStore = create<StoreState>()((...a) => ({
  ...createCartSlice(...a),
  ...createFavoritesSlice(...a),
  ...createProductsSlice(...a),
  ...createSearchSlice(...a),
  ...createUISlice(...a),
}));
