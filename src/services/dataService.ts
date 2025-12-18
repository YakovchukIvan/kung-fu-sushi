import axios from 'axios';
import { IProduct } from '../types';
import { ITEMS_API } from '../api/api';

interface FetchDataParams {
  category: string;
}

interface FetchDataResult {
  cartItems: IProduct[];
  favorites: IProduct[];
  items: IProduct[];
}

export const dataService = {
  fetchAll: async ({ category }: FetchDataParams): Promise<FetchDataResult> => {
    try {
      const [cartResponse, favoritesResponse, itemsResponse] =
        await Promise.all([
          axios.get(ITEMS_API),
          axios.get(ITEMS_API),
          axios.get(`${ITEMS_API}?filter=${category}`),
        ]);

      const cartItems = cartResponse.data.filter(
        (item: IProduct) => item.cart === true,
      );

      return {
        cartItems,
        favorites: favoritesResponse.data,
        items: itemsResponse.data,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  },
};
