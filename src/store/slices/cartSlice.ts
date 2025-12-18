import { StateCreator } from 'zustand';
import { IProduct, StoreState } from '../../types';
import { cartService } from '../../services/cartService';
import { lockBodyScroll, unlockBodyScroll } from '../../utils/bodyScroll';

export interface CartSlice {
  cartItems: IProduct[];
  cartOpened: boolean;

  setCartItems: (cartItems: IProduct[]) => void;
  setCartOpened: (cartOpened: boolean) => void;

  onAddToCart: (product: IProduct) => Promise<void>;
  onRemoveItem: (id: string) => Promise<void>;
  isItemAdded: (id: string) => boolean;

  drawerOpen: () => void;
  drawerClose: () => void;
}

export const createCartSlice: StateCreator<StoreState, [], [], CartSlice> = (
  set,
  get,
) => ({
  cartItems: [],
  cartOpened: false,

  setCartItems: (cartItems) => set({ cartItems }),
  setCartOpened: (cartOpened) => set({ cartOpened }),

  onAddToCart: async (product) => {
    const { cartItems, onAddToCartIcon } = get();
    const existingItem = cartItems.find((item) => item.title === product.title);

    if (existingItem) {
      const newCount = existingItem.count + 1;

      set({
        cartItems: cartItems.map((item) =>
          item.parentId === product.parentId
            ? { ...item, count: newCount }
            : item,
        ),
      });

      await cartService.updateCount(product.id, newCount);
    } else {
      set({ cartItems: [...cartItems, product] });
      await cartService.addToCart(product.id);
      onAddToCartIcon(product.id);
    }
  },

  onRemoveItem: async (id) => {
    const { cartItems, onAddToCartIcon } = get();

    try {
      onAddToCartIcon(id, 'Delete');
      await cartService.removeFromCart(id);

      set({
        cartItems: cartItems.filter((item) => Number(item.id) !== Number(id)),
      });
    } catch (error) {
      alert('Помилка при видаленні товару з корзини');
    }
  },

  isItemAdded: (id) => {
    const { cartItems } = get();
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  },

  drawerOpen: () => {
    set({ cartOpened: true });
    lockBodyScroll();
  },

  drawerClose: () => {
    set({ cartOpened: false });
    unlockBodyScroll();
  },
});
