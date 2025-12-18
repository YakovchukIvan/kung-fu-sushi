import { StateCreator } from 'zustand';
import { IProduct, StoreState } from '../../types';

export interface ProductsSlice {
  items: IProduct[];
  categorySushi: string;

  setItems: (items: IProduct[]) => void;
  setCategorySushi: (categorySushi: string) => void;

  onAddToCartIcon: (id: string, check?: string) => void;
}

export const createProductsSlice: StateCreator<
  StoreState,
  [],
  [],
  ProductsSlice
> = (set, get) => ({
  items: [],
  categorySushi: 'Dracon',

  setItems: (items) => set({ items }),
  setCategorySushi: (categorySushi) => set({ categorySushi }),

  onAddToCartIcon: (id, check) => {
    const { items, favorites } = get();

    const updateItem = (item: IProduct) => {
      if (item.id !== id) return item;
      if (item.cart === true && check) return { ...item, cart: !item.cart };
      if (item.cart === true) return item;
      return { ...item, cart: !item.cart };
    };

    set({
      items: items.map(updateItem),
      favorites: favorites.map(updateItem),
    });
  },
});
