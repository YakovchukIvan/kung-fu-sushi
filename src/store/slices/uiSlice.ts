import { StateCreator } from 'zustand';
import { StoreState } from '../../types';
import { dataService } from '../../services/dataService';

export interface UISlice {
  isLoading: boolean;

  setIsLoading: (isLoading: boolean) => void;
  fetchData: () => Promise<void>;
}

export const createUISlice: StateCreator<
  StoreState, // Весь стор
  [],
  [],
  UISlice // Тільки UI slice
> = (set, get) => ({
  isLoading: true,

  setIsLoading: (isLoading) => set({ isLoading }),

  fetchData: async () => {
    const { categorySushi } = get();

    try {
      set({ isLoading: true });

      const data = await dataService.fetchAll({ category: categorySushi });

      set({
        isLoading: false,
        cartItems: data.cartItems,
        favorites: data.favorites,
        items: data.items,
      });
    } catch (error) {
      alert('Помилка при запиті данних.');
      console.error(error);
      set({ isLoading: false });
    }
  },
});
