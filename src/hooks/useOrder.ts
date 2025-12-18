import { useState } from 'react';
import { clearCartOnServer, placeOrder } from '../services/orderService';
import { useStore } from '../store/store';
import { IProduct } from '../types/index';

export const useOrder = () => {
  const { setCartItems } = useStore();

  const [orderId, setOrderId] = useState<number | null>(null);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const createOrder = async (items: IProduct[], totalPrice: number) => {
    try {
      setIsLoading(true);

      const { id } = await placeOrder(items, totalPrice);
      await clearCartOnServer(items);

      setCartItems([]);
      setOrderId(id);
      setIsOrderComplete(true);

      setTimeout(() => window.location.reload(), 2500);
    } catch (e) {
      alert('Помилка створення замовлення :(');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    orderId,
    isOrderComplete,
    isLoading,
    createOrder,
  };
};
