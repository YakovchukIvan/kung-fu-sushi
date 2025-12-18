import { Card } from '../../components/Card/Card';
import { Loader } from '../../components/Card/Loader';

import styles from './Favorite.module.scss';
import { useStore } from '../../store/store';

const Favorites = () => {
  const { favorites, onAddToFavorite, isLoading } = useStore();
  const favorit = favorites.filter((item) => item.favorite === true);

  return (
    <div className={styles.wrapperFavorite}>
      <div className={styles.title}>
        <h1>Мої вибрані</h1>
      </div>

      {favorit && (
        <div className={styles.blockItems}>
          <div className={styles.itemFavorite}>
            {isLoading
              ? [...Array(12)].map((_, index) => <Loader key={index} />)
              : favorit.map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    onFavorite={onAddToFavorite}
                    loading={isLoading}
                  />
                ))}
          </div>
        </div>
      )}

      {favorit.length < 1 && (
        <div className={styles.emptyFavorite}>
          <h2>У вас ще немає обраних товарів</h2>
        </div>
      )}
    </div>
  );
};

export default Favorites;
