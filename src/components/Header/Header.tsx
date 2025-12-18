import { ChangeEvent, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import { useStore } from '../../store/store';
import { useSearchVisibility } from '../../hooks/useSearchVisibility';
import { useBurgerMenu } from '../../hooks/useBurgerMenu';
import { usePageContext } from '../../hooks/usePageContext';

import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { HeaderNav } from './HeaderNav';
import { CartButton } from './CartButton';
import { BurgerMenu } from './BurgerMenu';

import styles from './Header.module.scss';

export const Header = () => {
  const { isHomePage } = usePageContext();
  const isWideScreen = useMediaQuery('(min-width:540px)');

  const { cartItems, searchValue, setSearchValue, drawerOpen, clearSearch } =
    useStore();

  const { searchView, toggleSearchView } = useSearchVisibility(isWideScreen);
  const { openMenu, handleMenuOpen, handleMenuClose } = useBurgerMenu();

  useEffect(() => {
    clearSearch();
  }, [location.pathname, clearSearch]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <header className={styles.header} id="header">
      <div className={styles.header__wrapper}>
        <Logo />

        {isHomePage && searchView && (
          <SearchBar value={searchValue} onChange={handleSearchChange} />
        )}

        <div className={styles.blockMenu}>
          <HeaderNav />
          <CartButton itemsCount={cartItems.length} onClick={drawerOpen} />

          {isHomePage && !isWideScreen && (
            <SearchIcon
              onClick={toggleSearchView}
              className={styles.searchIcon}
            />
          )}

          <MenuIcon onClick={handleMenuOpen} className={styles.burger} />
          <BurgerMenu closeVisible={handleMenuClose} openMenu={openMenu} />
        </div>
      </div>
    </header>
  );
};
