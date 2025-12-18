import { StateCreator } from 'zustand';
import { IProduct, StoreState } from '../../types';
import { favoritesService } from '../../services/favoritesService';

export interface FavoritesSlice {
  favorites: IProduct[];

  setFavorites: (favorites: IProduct[]) => void;
  onAddToFavorite: (product: IProduct) => Promise<void>;
}

export const createFavoritesSlice: StateCreator<
  StoreState,
  [],
  [],
  FavoritesSlice
> = (set, get) => ({
  favorites: [],

  setFavorites: (favorites) => set({ favorites }),

  onAddToFavorite: async (product) => {
    const { favorites, items } = get();

    try {
      const updatedFavorites = favorites.map((item) =>
        item.id === product.id
          ? { ...item, favorite: !product.favorite }
          : item,
      );

      const updatedItems = items.map((item) =>
        item.id === product.id
          ? { ...item, favorite: !product.favorite }
          : item,
      );

      set({
        favorites: updatedFavorites,
        items: updatedItems,
      });

      await favoritesService.toggleFavorite(product.id, !!product.favorite);
    } catch (error) {
      alert('Не вдалося додати "вибране"');
      console.error(error);
      set({ favorites, items });
    }
  },
});
