import styles from './Orders.module.scss';

const EmptyOrdersMessage = () => (
  <div className={styles.emptyOrder}>
    <h2>У вас ще немає замовлень</h2>
  </div>
);
export default EmptyOrdersMessage;
