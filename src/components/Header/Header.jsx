import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import AppContext from '../../Context';

function Header(props) {
  const { modalOpen, setModalOpen, snackbarCount, location } =
    useContext(AppContext);

  const Snackbar = ({ duration = 3000 }) => {
    useEffect(() => {
      // console.log('Працює модальне');
      const timeout = setTimeout(() => {
        setModalOpen(false);
      }, duration);
      return () => clearTimeout(timeout); // Очистка таймера при демонтажі
    }, [modalOpen, duration]);

    return <div className={styles.modalAddItem}>Product added to cart!</div>;
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <Link to="/" title="На головну">
          <div className={styles.block__logo}>
            <img width={60} height={60} src="/img/logo2.jpg" alt="logo" />

            <div className={styles.logo__title}>
              <h3>kung-fu Sushi</h3>
              <p>Магазин пандових суші</p>
            </div>
          </div>
        </Link>

        {location.pathname === '/' && (
          <div className={styles.search__block}>
            <img src="/img/search.svg" alt="Search-icon" />
            <input
              onChange={props.onChangeSearchInput}
              value={props.searchValue}
              placeholder="Пошук ..."
            />
          </div>
        )}

        <div>
          <ul className={styles.list__header}>
            <li>
              <Link to="/favorites" title="Обране">
                <img
                  width={24}
                  height={24}
                  src="/img/heart.svg"
                  alt="heart-icon"
                />
              </Link>
            </li>
            <li>
              <Link to="/orders" title="Замовлення">
                {/* <FaRegCircleUser style={{ width: '24px', height: '24px' }} /> */}
                <img
                  width={24}
                  height={24}
                  src="/img/user.svg"
                  alt="Замовлення"
                />
              </Link>
            </li>
            <li
              onClick={props.onClickCart}
              className={styles.item__cart__icon}
              title="Кошик"
            >
              <img width={24} height={24} src="/img/cart.svg" alt="cart-icon" />
              <span className={styles.icon__count__orders}>
                {props.cartItems.length}
              </span>
            </li>
          </ul>
        </div>
      </div>
      {snackbarCount > 0 && (
        <Snackbar />
        // <div className={styles.modalAddItem}>Product added to cart!</div>
      )}
    </header>
  );
}

export default Header;
