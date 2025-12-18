import { useEffect, useState } from 'react';
import axios from 'axios';

import styles from './Orders.module.scss';
import { Loader } from '../../components/Card/Loader';
import { Order } from '../../types/index';
import { ORDERS_API } from '../../api/api';

import EmptyOrdersMessage from './EmptyOrdersMessage';
import OrderCard from './OrderCard';

const Orders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get<Order[]>(ORDERS_API);
        setOrders(data);
      } catch (error) {
        alert('Помилка при запиті замовлення');
        console.error('Error fetching orders:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const showEmptyState = !orders.length && !isLoading;

  return (
    <div className={styles.wrapperOrders}>
      <div className={styles.titleOrders}>
        <h1>Замовлення</h1>
      </div>

      {showEmptyState && <EmptyOrdersMessage />}

      {orders.length > 0 && (
        <div className={styles.blockItemsOrders}>
          {isLoading ? (
            <Loader />
          ) : (
            orders.map((order) => <OrderCard key={order.id} order={order} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
