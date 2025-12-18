import { useStore } from '../store/store';

export const useCart = () => {
  const { cartItems } = useStore();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.count,
    0,
  );

  return {
    cartItems,
    totalPrice,
  };
};
