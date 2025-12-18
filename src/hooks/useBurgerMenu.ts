import { useState } from 'react';
import { lockBodyScroll, unlockBodyScroll } from '../utils/bodyScroll';

export const useBurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
    lockBodyScroll();
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
    unlockBodyScroll();
  };

  return { openMenu, handleMenuOpen, handleMenuClose };
};
