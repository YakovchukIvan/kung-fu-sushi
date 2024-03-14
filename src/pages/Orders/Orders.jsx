import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';

import styles from './Orders.module.scss';
import OrdersSushi from './OrdersSushi';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(
          'https://65ed7a9908706c584d99d718.mockapi.io/orders/'
        );
        // Перший варіант. Дістаємо з бекенд масив з orders та поєднуємо його в один масив з окремими обєктами
        // console.log(data.map((obj) => obj.items).flat());
        // Другий варіант обєднання масивів
        // setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        const orders = data.map((obj) => {
          const { id, items } = obj;
          return { items };
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

      {/* <div className={styles.itemOrders}>
          {(isLoading ? [...Array(12)] : orders).map((item, index) => (
            <Card key={index} loading={isLoading} {...item} />
          ))}
        </div> */}

      <div className={styles.blockItemsOrders}>
        {orders.map(({ items }, index) => {
          console.log(items);

          return (
            <div className={styles.orders}>
              <div className={styles.itemOrders}>
                {items.map((item) => {
                  console.log(item);
                  return <img src={item.src} alt={item.title} />;
                })}
              </div>
              <div className={styles.ordersInfo}>
                <p>дата</p>
                <p>номер замовлення</p>
                <p>ціна</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
