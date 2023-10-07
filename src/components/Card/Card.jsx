import ContentLoader from 'react-content-loader';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import AppContext from '../../Context';

import styles from './Card.module.scss';

function Card({
  id,
  title,
  imageUrl,
  price,
  composition,
  weight,
  onFavorite,
  onPlus,
  favorited = false,
  loading = false,
}) {
  //

  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const itemObj = { id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(itemObj);
  };

  const onClickFavorite = () => {
    onFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={160}
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
        <Link>
          {/* <div className={styles.favorite} onClick={onClickFavorite}>            {onFavorite && (
              <img
                src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
                alt="Unliked"
              />
            )}</div> */}
          <img className={styles.itemProduct} src={imageUrl} alt="sushi" />
          <h4>{title}</h4>

          <div className="d-flex justify-between align-center mt-10">
            <div className="d-flex flex-column">
              <span>Ціна:</span>
              <b>{price}.00 грн.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                // src={
                //   isItemAdded(id) ? '/img/btn-cheked.svg' : '/img/btn-plus.svg'
                // }
                src="/img/btn-plus.svg"
                alt="btn-plus"
                onClick={onClickPlus}
              />
            )}
          </div>
          <div className={styles.compositionBlock}>
            <strong>Склад: </strong>
            <span>{composition}</span>
            <p className={styles.compositionWeight}>
              <span>{weight} г</span>
            </p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default Card;
