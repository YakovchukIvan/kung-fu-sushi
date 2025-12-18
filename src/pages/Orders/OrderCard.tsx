import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import styles from './Orders.module.scss';
import { Order } from '../../types/index';
import { getSlidesPerView } from '../../utils/getSlidesPerView';
import { formatDate } from '../../utils/formatDate';
import { formatPrice } from '../../utils/productUtils';

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  const { id, orderDate, items, totalPrice } = order;

  return (
    <div className={styles.orders}>
      <div className={styles.itemOrders}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={0}
          slidesPerView={getSlidesPerView()}
          pagination={{ clickable: true }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} style={{ margin: 0, width: 125 }}>
              <div className={styles.orderTitle}>
                <div>
                  <img
                    className={styles.orderImg}
                    src={item.imageUrl}
                    alt={item.title}
                  />
                  <span className={styles.orderCountItem}>{item.count} шт</span>
                </div>
                <h4>{item.title}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.ordersInfo}>
        <div>
          <p className={styles.orderDate}>{formatDate(orderDate)}</p>
          <p>
            Замовлення номер: <span>№ {id}</span>
          </p>
          <p className={styles.orderPrice}>{formatPrice(totalPrice)}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
