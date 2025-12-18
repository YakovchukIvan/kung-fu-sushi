import axios from 'axios';
import { ITEMS_API } from '../api/api';

export const cartService = {
  // Додати товар у кошик (API)
  addToCart: async (productId: string) => {
    try {
      await axios.put(`${ITEMS_API}/${productId}`, { cart: true });
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  },

  // Оновити кількість товару
  updateCount: async (productId: string, count: number) => {
    try {
      await axios.put(`${ITEMS_API}/${productId}`, { count });
    } catch (error) {
      console.error('MockAPI limits count updates:', error);
    }
  },

  // Видалити товар з кошика
  removeFromCart: async (productId: string) => {
    try {
      await axios.put(`${ITEMS_API}/${productId}`, {
        cart: false,
        count: 1,
      });
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  },
};
