// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        <h1>Замовлення</h1>
      </div>
      {!orders.length && !isLoading && (
        <div className={styles.emptyOrder}>
          <h2>У вас ще немає замовлень</h2>
        </div>
      )}
      {orders && (
        <div className={styles.blockItemsOrders}>
          {isLoading
            ? [...Array(1)].map((_, index) => <Loader key={index} />)
            : orders.map((order) => {
                const { orderDate, id, items, totalPrice } = order;

                const formattedDate = new Date(
                  orderDate * 1000
                ).toLocaleDateString(); // Перетворення timestamp на дату

                return (
                  <div className={styles.orders} key={id}>
                    <div className={styles.itemOrders}>
                      <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={0}
                        // slidesPerView={4}
                        slidesPerView={
                          window.innerWidth < 840
                            ? window.innerWidth < 540
                              ? 2
                              : 3
                            : 4
                        }
                        pagination={{ clickable: true }}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                      >
                        {items.map((item) => (
                          <SwiperSlide
                            key={item.id}
                            style={{ margin: 0, width: 125 }}
                          >
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
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className={styles.ordersInfo}>
                      <div>
                        <p className={styles.orderDate}>{formattedDate}</p>
                        <p>
                          Замовлення номер: <span>№ {id}</span>
                        </p>
                        <p className={styles.orderPrice}>
                          {totalPrice.toFixed()} грн.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      )}
    </div>
  );
}

export default Orders;
