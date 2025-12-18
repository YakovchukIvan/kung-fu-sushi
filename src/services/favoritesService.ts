import axios from 'axios';
import { ITEMS_API } from '../api/api';

export const favoritesService = {
  toggleFavorite: async (productId: string, currentState: boolean) => {
    try {
      await axios.put(`${ITEMS_API}/${productId}`, {
        favorite: !currentState,
      });
    } catch (error) {
      console.error('Error toggling favorite:', error);
      throw error;
    }
  },
};
