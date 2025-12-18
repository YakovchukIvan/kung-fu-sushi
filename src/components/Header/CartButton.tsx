import styles from './Header.module.scss';

interface CartButtonProps {
  itemsCount: number;
  onClick: () => void;
}

export const CartButton = ({ itemsCount, onClick }: CartButtonProps) => (
  <div className={styles.item__cart__icon} onClick={onClick} title="Кошик">
    <img width={24} height={24} src="/img/cart.svg" alt="cart-icon" />
    {itemsCount > 0 && (
      <span className={styles.icon__count__orders}>{itemsCount}</span>
    )}
  </div>
);
