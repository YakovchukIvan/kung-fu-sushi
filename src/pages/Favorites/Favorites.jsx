import { useContext } from 'react';

import Card from '../../components/Card/Card';
import AppContext from '../../Context';
import Loader from '../../components/Card/Loader';

import styles from './Favorite.module.scss';

function Favorites() {
  const { favorites, onAddToFavorite, isLoading } = useContext(AppContext);
  console.log(isLoading);
  /*"content p-40"*/
  // "d-flex align-center justify-between mb-40"
  // "d-flex flex-wrap"
  // "d-flex flex-wrap"
  return (
    <div className={styles.wrapperFavorite}>
      <div className={styles.title}>
        <h1>Мої вибрані</h1>
      </div>

      <div className={styles.blockItems}>
        <div className={styles.itemFavorite}>
          {isLoading
            ? [...Array(12)].map((_, index) => <Loader key={index} />)
            : favorites.map((item, index) => (
                <Card
                  key={index}
                  favorited={true}
                  onFavorite={onAddToFavorite}
                  {...item}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
