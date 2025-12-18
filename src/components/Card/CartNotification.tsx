import styles from './Card.module.scss';

export const CartNotification = ({ onClick }: { onClick: () => void }) => (
  <img
    className={styles.notificationAddProduct}
    onClick={onClick}
    width={30}
    height={30}
    src="/img/cart-red.svg"
    alt="cart-icon"
    title="Товар додано в кошик"
  />
);
