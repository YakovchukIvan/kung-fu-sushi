import Snackbars from './Snackbars';
import styles from './Card.module.scss';

interface ProductPriceProps {
  price: number;
  showAddButton: boolean;
  onAddToCart: () => void;
}

export const ProductPrice = ({
  price,
  showAddButton,
  onAddToCart,
}: ProductPriceProps) => (
  <div className="d-flex justify-between align-center mt-10">
    <div className={`d-flex flex-column ${styles.priceTitle}`}>
      <span>Ціна:</span>
      <b>{price}.00 грн.</b>
    </div>
    {showAddButton && <Snackbars onClickPlus={onAddToCart} />}
  </div>
);
