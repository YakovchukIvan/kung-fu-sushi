import { ITEMS_API, ORDERS_API } from '../api/api';
import { IProduct } from '../types/index';
import axios from 'axios';

const DELAY_MS = 500;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const placeOrder = async (items: IProduct[], totalPrice: number) => {
  const { data } = await new Promise<{ data: { id: number } }>((resolve) => {
    setTimeout(async () => {
      resolve(
        await axios.post(ORDERS_API, {
          items,
          totalPrice,
        }),
      );
    }, 1000);
  });

  return data;
};

export const clearCartOnServer = async (items: IProduct[]) => {
  for (const item of items) {
    await axios.put(`${ITEMS_API}/${item.id}`, {
      count: 1,
      cart: false,
    });
    await delay(DELAY_MS);
  }
};
