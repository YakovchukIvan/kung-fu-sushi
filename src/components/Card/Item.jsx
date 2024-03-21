// import { Link } from 'react-router-dom';
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
  cart,
}) {
  console.log('cart:', cart);
  const { location, drawerOpen, onAddToCartIcon } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorite);

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
    onAddToCartIcon(itemObj.id);
  };

  const onClickFavorite = () => {
    onFavorite(itemObj);
    console.log('onClickFavorite:', itemObj);
    if (location.pathname === '/') {
      return setIsFavorite(!isFavorite);
    }
  };
  return (
    <div>
      {location.pathname !== '/orders' && (
        <div className={styles.favorite} onClick={onClickFavorite}>
          {isFavorite ? (
            <MdOutlineFavorite
              color="#fff"
              size={24}
              title={'Видалити з обраного'}
              className="test"
            />
          ) : (
            <MdOutlineFavoriteBorder
              color="#fff"
              size={24}
              title={'Додати в обране'}
            />
          )}
        </div>
      )}

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
          <span className={styles.weightProduct}>
            {weight} {category === 'Drinks' ? 'л' : 'г'}
          </span>
        </p>
        {cart && (
          <img
            className={styles.notificationAddProduct}
            onClick={() => drawerOpen()}
            width={30}
            height={30}
            src="/img/cart-red.svg"
            alt="cart-icon"
            title="Товар додано в кошик"
          />
        )}
      </div>
    </div>
  );
}

export default Item;
