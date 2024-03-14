import { useContext } from 'react';
import AppContext from '../Context';

export const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);
  // console.log('useCart  :', cartItems);
  // const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  const totalPrice = cartItems.reduce((sum, obj) => {
    let sumCount = obj.price;
    if (obj.count > 1) {
      for (let i = 0; i < obj.count - 1; i++) {
        sumCount += obj.price;
      }
    }

    return sum + sumCount;
  }, 0);

  return { cartItems, setCartItems, totalPrice };
};
