import { CartNotification } from './CartNotification';
import styles from './Card.module.scss';

interface ProductCompositionProps {
  composition: string;
  weight: number;
  weightUnit: string;
  showCartNotification: boolean;
  onCartClick: () => void;
}

export const ProductComposition = ({
  composition,
  weight,
  weightUnit,
  showCartNotification,
  onCartClick,
}: ProductCompositionProps) => (
  <div className={styles.compositionBlock}>
    <strong>Склад: </strong>
    <span>{composition}</span>
    <p className={styles.compositionWeight}>
      <span className={styles.weightProduct}>
        {weight} {weightUnit}
      </span>
    </p>
    {showCartNotification && <CartNotification onClick={onCartClick} />}
  </div>
);
