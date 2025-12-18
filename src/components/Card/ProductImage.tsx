import { FavoriteIcon } from './FavoriteIcon';
import styles from './Card.module.scss';

interface ProductImageProps {
  imageUrl: string;
  title: string;
  showFavorite: boolean;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export const ProductImage = ({
  imageUrl,
  title,
  showFavorite,
  isFavorite,
  onToggleFavorite,
}: ProductImageProps) => (
  <div className={styles.itemProduct}>
    {showFavorite && (
      <FavoriteIcon isFavorite={isFavorite} onClick={onToggleFavorite} />
    )}
    <img src={imageUrl} alt={title} />
  </div>
);
