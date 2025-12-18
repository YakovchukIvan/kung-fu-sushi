import { RiDeleteBin6Line } from 'react-icons/ri';
import styles from './Drawer.module.scss';
import { useStore } from '../../store/store';
import { useCart } from '../../hooks/useCart';
import { useOrder } from '../../hooks/useOrder';

export const CartContent = () => {
  const { cartItems, onRemoveItem } = useStore();
  const { totalPrice } = useCart();
  const { isLoading, createOrder } = useOrder();

  return (
    <>
      <div className={styles.items}>
        {cartItems.map(({ id, title, price, count, imageUrl }) => (
          <div key={id} className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: `url(${imageUrl})` }}
              className="cartItemImg"
            />
            <div className="mr-20 flex">
              <p className="mb-5">{title}</p>
              <div className={styles.block__PriceCount}>
                <b>{price} грн.</b>
                <b>{count} шт.</b>
              </div>
            </div>
            <RiDeleteBin6Line
              size={28}
              onClick={() => onRemoveItem(id)}
              className={styles.btn__remove}
            />
          </div>
        ))}
      </div>

      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Доставка:</span>
            <b>безкоштовно</b>
          </li>
          <li>
            <span>Всього:</span>
            <b>{totalPrice} грн.</b>
          </li>
        </ul>

        <button
          disabled={isLoading}
          onClick={() => createOrder(cartItems, totalPrice)}
          className="greenButton"
        >
          Оформити замовлення
          <img src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </>
  );
};
