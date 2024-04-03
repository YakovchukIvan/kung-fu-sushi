import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Header.module.scss';
import AppContext from '../../Context';
import BurgerMenu from './BurgerMenu';

function Header(props) {
  const { location } = useContext(AppContext);
  const isWideScreen = useMediaQuery('(min-width:540px)');

  const [openMenu, setOpenMenu] = useState(false);
  const [seacrhView, setSearchView] = useState(false);

  const closeVisible = () => {
    setOpenMenu(false);
    document.body.style.overflow = 'visible';
  };

  const openVisible = () => {
    setOpenMenu(true);
    document.body.style.overflow = 'hidden';
  };

  // Оновлення стану searchView, якщо екран ширший за 540px
  useEffect(() => {
    if (isWideScreen) {
      setSearchView(true);
    }
  }, []);

  const toggleSearchView = () => {
    setSearchView((prev) => !prev);
  };

  return (
    <header className={styles.header} id="header">
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

        {location.pathname === '/' && seacrhView && (
          <div className={styles.search__block}>
            <img src="/img/search.svg" alt="Search-icon" />
            <input
              onChange={props.onChangeSearchInput}
              value={props.searchValue}
              placeholder="Пошук ..."
            />
          </div>
        )}

        <div className={styles.blockMenu}>
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
                <img
                  width={24}
                  height={24}
                  src="/img/user.svg"
                  alt="Замовлення"
                />
              </Link>
            </li>
          </ul>
          <div
            className={styles.item__cart__icon}
            onClick={props.onClickCart}
            title="Кошик"
          >
            <img width={24} height={24} src="/img/cart.svg" alt="cart-icon" />
            <span className={styles.icon__count__orders}>
              {props.cartItems.length}
            </span>
          </div>

          {location.pathname === '/' && (
            <SearchIcon
              onClick={() => toggleSearchView()}
              className={styles.searchIcon}
            />
          )}
          <MenuIcon onClick={() => openVisible()} className={styles.burger} />
          <BurgerMenu closeVisible={closeVisible} openMenu={openMenu} />
        </div>
      </div>
    </header>
  );
}

export default Header;
