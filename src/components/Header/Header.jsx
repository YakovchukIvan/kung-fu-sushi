import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

// import { useCart } from '../hooks/useCart';

function Header(props) {
  // console.log('props', props);
  // const { totalPrice } = useCart();
  // console.log('items', props.cartItems.length);
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link to="/">
          <div className={styles.block__logo}>
            <img width={60} height={60} src="img/logo2.jpg" alt="logo" />

            <div className={styles.logo__title}>
              <h3>kung-fu Sushi</h3>
              <p>Магазин найсмачніших суші</p>
            </div>
          </div>
        </Link>
        <div className={styles.search__block}>
          <img src="img/search.svg" alt="Search-icon" />
          {props.searchValue && (
            <img
              onClick={props.onClearSearchInput}
              className="clear cu-p"
              src="img/btn-remove.svg"
              alt="btn-remove-search"
            />
          )}
          <input
            onChange={props.onChangeSearchInput}
            value={props.searchValue}
            placeholder="Пошук ..."
          />
        </div>
        <div>
          <ul className={styles.list__header}>
            <li>
              <Link to="/favorites">
                <img
                  width={24}
                  height={24}
                  src="img/heart.svg"
                  alt="heart-icon"
                />
              </Link>
            </li>
            <li>
              <Link to="/orders">
                {/* <FaRegCircleUser style={{ width: '24px', height: '24px' }} /> */}
                <img
                  width={24}
                  height={24}
                  src="img/user.svg"
                  alt="Замовлення"
                />
              </Link>
            </li>
            <li onClick={props.onClickCart} className={styles.item__cart__icon}>
              {/* <FaCartShopping style={{ width: '24px', height: '24px' }} /> */}
              <img width={24} height={24} src="img/cart.svg" alt="cart-icon" />
              <span className={styles.icon__count__orders}>
                {props.cartItems.length}
              </span>
              {/* <span className="total__price-cart">{totalPrice} грн.</span> */}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
