import { Info } from './Info';
import styles from './Drawer.module.scss';
import { useOrder } from '../../hooks/useOrder';
import { CartContent } from './CartContent';
import { useStore } from '../../store/store';

export const Drawer = () => {
  const { orderId, isOrderComplete } = useOrder();
  const { cartItems, drawerClose, cartOpened } = useStore();

  if (!cartOpened) return null;

  return (
    <div className={`${styles.overlay} ${styles.overlayVisible}`}>
      <div className={styles.bgClose} onClick={drawerClose} />

      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Кошик
          <img
            onClick={drawerClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="close"
          />
        </h2>

        {cartItems.length === 0 ? (
          <Info
            title={isOrderComplete ? 'Замовлення оформлено!' : 'Кошик порожній'}
            description={
              isOrderComplete
                ? `Ваше замовлення №${orderId} створено`
                : 'Потрібно замовити хоча би одне суші'
            }
            image={isOrderComplete ? '/img/logo2.jpg' : '/img/cart-empty.jpg'}
          />
        ) : (
          <CartContent />
        )}
      </div>
    </div>
  );
};
