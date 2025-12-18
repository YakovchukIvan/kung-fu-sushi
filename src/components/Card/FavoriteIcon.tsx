import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import styles from './Card.module.scss';

export const FavoriteIcon = ({
  isFavorite,
  onClick,
}: {
  isFavorite: boolean;
  onClick: () => void;
}) => (
  <div
    className={`${styles.favorite} ${
      isFavorite ? styles.favoriteAdd : styles.favoriteNot
    }`}
    onClick={onClick}
  >
    {isFavorite ? (
      <MdOutlineFavorite color="#fff" size={24} title="Видалити з обраного" />
    ) : (
      <MdOutlineFavoriteBorder color="#fff" size={24} title="Додати в обране" />
    )}
  </div>
);
