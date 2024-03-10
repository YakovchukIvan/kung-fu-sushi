import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

import styles from './Card.module.scss';
import AppContext from '../../Context';

function Item({
  id,
  title,
  imageUrl,
  price,
  composition,
  weight,
  count,
  category,
  favorite,
  onFavorite,
  onPlus,
  favorited = false,
}) {
  const [isFavorite, setIsFavorite] = useState(favorite);
  const { setModalOpen } = useContext(AppContext);

  const itemObj = {
    id,
    parentId: id,
    title,
    imageUrl,
    price,
    count,
    composition,
    weight,
    favorite,
  };

  const onClickPlus = () => {
    onPlus(itemObj);
    console.log('CARD.JSX', itemObj);
    setModalOpen(true);

    setTimeout(() => {
      setModalOpen(false);
    }, 5000);
  };

  const onClickFavorite = () => {
    onFavorite(itemObj);
    setIsFavorite(!isFavorite);
  };
  return (
    <Link>
      <div className={styles.favorite} onClick={onClickFavorite}>
        {isFavorite ? (
          <MdOutlineFavorite color="#fff" size={24} />
        ) : (
          <MdOutlineFavoriteBorder color="#fff" size={24} />
        )}
        {/* {favorite &&
          (isFavorite ? (
            <MdOutlineFavorite color="#fff" size={24} />
          ) : (
            <MdOutlineFavoriteBorder color="#fff" size={24} />
          ))} */}
      </div>

      <img className={styles.itemProduct} src={imageUrl} alt="sushi" />
      <h4>{title}</h4>

      <div className="d-flex justify-between align-center mt-10">
        <div className={`d-flex flex-column ${styles.priceTitle}`}>
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
          <span>
            {weight} {category === 'Drinks' ? 'л' : 'г'}
          </span>
        </p>
      </div>
    </Link>
  );
}

export default Item;
