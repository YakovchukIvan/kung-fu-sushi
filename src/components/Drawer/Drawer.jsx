import { useState } from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = useState(null);
  const [isOrderComplate, setIsOrderComplate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://651323cd8e505cebc2e9a121.mockapi.io/orders/',
        { items: cartItems }
      );

      setOrderId(data.id);
      setIsOrderComplate(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          'https://650f314454d18aabfe99ec68.mockapi.io/cart/' + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert('Помилка створення замовлення :(');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Кошик
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="btn-remove"
          />
        </h2>

        {/* Тут ми викликаємо тернарний оператор. Якщо items.length (приставка length щоб визначити пустий масив чи ні), пустий значить показуємо вікно "Кошик порожній".
        А якщо в items.length є товар, тоді відображаємо товар */}
        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="btn-remove"
                  />
                </div>
              ))}
            </div>

            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Всього:</span>
                  <div></div>
                  <b>{totalPrice} грн.</b>
                </li>
                <li>
                  <span>Ваша знижка 5%: </span>
                  <div></div>
                  <b>{(totalPrice * 0.05).toFixed(2)} грн.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформити замовлення{' '}
                <img src="/img/arrow.svg" alt="arrow-icon" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplate ? 'Замовлення оформлено!' : 'Кошик порожній'}
            description={
              isOrderComplate ? (
                <span>
                  Ваше замовлення <strong>№{orderId}</strong> створено.
                  Зачекайте поки ми його опрацюємо та очікуйте повідомлення про
                  відправення'
                </span>
              ) : (
                'Добавте хоча би одну пару кросівок, щоб зробити замовлення.'
              )
            }
            image={
              isOrderComplate ? '/img/done-empty.jpg' : '/img/empty-cart.jpg'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;