import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Orders.module.scss';
import Loader from '../../components/Card/Loader';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          'https://65ed7a9908706c584d99d718.mockapi.io/orders/'
        );

        const orders = data.map((obj) => {
          return obj;
        });

        setOrders(orders);
        setIsLoading(false);
      } catch (error) {
        alert('Помилка при запросі замовлення');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.wrapperOrders}>
      <div className={styles.titleOrders}>
        <h1>Профіль</h1>
      </div>

      <div className={styles.blockItemsOrders}>
        {isLoading
          ? [...Array(12)].map((_, index) => <Loader key={index} />)
          : orders.map((order) => {
              const { orderDate, id, items, totalPrice } = order;

              const formattedDate = new Date(
                orderDate * 1000
              ).toLocaleDateString(); // Перетворення timestamp на дату

              return (
                <div className={styles.orders} key={id}>
                  <div className={styles.itemOrders}>
                    {items.map((item) => (
                      <div className={styles.orderTitle} key={item.id}>
                        <img
                          className={styles.orderImg}
                          src={item.imageUrl}
                          alt={item.title}
                        />
                        <span className={styles.orderCountItem}>
                          {item.count} шт
                        </span>
                        <h4>{item.title}</h4>
                      </div>
                    ))}
                  </div>
                  <div className={styles.ordersInfo}>
                    <div>
                      <p>{formattedDate}</p>
                      <p>Замовлення номер: № {id}</p>
                      <p>{totalPrice.toFixed()} грн.</p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default Orders;
