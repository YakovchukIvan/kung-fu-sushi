import { Link } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

import styles from './Card.module.scss';

function Item({
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
}) {
  const [isFavorite, setIsFavorite] = useState(favorited);
  const itemObj = {
    id,
    parentId: id,
    title,
    imageUrl,
    price,
    count,
    composition,
    weight,
  };

  const onClickPlus = () => {
    onPlus(itemObj);
    console.log('CARD.JSX', itemObj);
  };

  const onClickFavorite = () => {
    onFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };
  return (
    <Link>
      <div className={styles.favorite} onClick={onClickFavorite}>
        {onFavorite &&
          (isFavorite ? (
            <MdOutlineFavoriteBorder color="#fff" size={24} />
          ) : (
            <MdOutlineFavorite color="#fff" size={24} />
          ))}
        {/* {onFavorite && (
        <img
          src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
          alt={isFavorite ? 'Liked' : 'Unliked'}
        />
      )} */}
      </div>

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
  );
}

export default Item;
