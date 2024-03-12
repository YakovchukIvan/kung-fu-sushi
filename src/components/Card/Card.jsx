// import ContentLoader from 'react-content-loader';

import Item from './Item';
import styles from './Card.module.scss';
import Loader from './Loader';

function Card({
  id,
  title,
  imageUrl,
  price,
  composition,
  weight,
  count,
  category,
  onFavorite,
  onPlus,
  favorite,
  // favorited = false,
  loading = false,
}) {
  return (
    <div className={styles.card}>
      {loading ? (
        <Loader />
      ) : (
        <Item
          id={id}
          title={title}
          imageUrl={imageUrl}
          price={price}
          composition={composition}
          weight={weight}
          count={count}
          category={category}
          onFavorite={onFavorite}
          onPlus={onPlus}
          favorite={favorite}
          // favorited={favorited}
        />
      )}
    </div>
  );
}

export default Card;
