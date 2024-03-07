import ContentLoader from 'react-content-loader';

import Item from './Item';
import styles from './Card.module.scss';

function Card({
  id,
  title,
  imageUrl,
  price,
  composition,
  weight,
  count,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader />
      ) : (
        <Item
          id={id}
          title={title}
          imageUrl={imageUrl}
          price={price}
          composition={composition}
          weight={weight}
          count={count}
          onFavorite={onFavorite}
          onPlus={onPlus}
          favorited={favorited}
        />
      )}
    </div>
  );
}

export default Card;
