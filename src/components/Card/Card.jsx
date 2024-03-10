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
  console.log('card', id);

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={210}
          height={250}
          viewBox="0 0 155 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="155" height="90" />
          <rect x="0" y="100" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="125" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="155" rx="5" ry="5" width="80" height="25" />
          <rect x="122" y="150" rx="5" ry="5" width="32" height="32" />
        </ContentLoader>
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
