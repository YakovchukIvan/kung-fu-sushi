import styles from './Header.module.scss';
import { Logo } from './Logo';
import { MenuLinks } from './MenuLinks';

interface IBurgerMenuProps {
  openMenu: boolean;
  closeVisible: () => void;
}

export const BurgerMenu = ({ openMenu, closeVisible }: IBurgerMenuProps) => {
  if (!openMenu) return null;

  return (
    <div className={`${styles.overlayBurger} ${styles.overlayVisibleBurger}`}>
      <div className={styles.bgClose} onClick={closeVisible} />

      <div className={styles.drawer}>
        <h2 className="d-flex justify-between">
          <Logo onClick={closeVisible} />
          <img
            onClick={closeVisible}
            className="cu-p ml-30"
            src="/img/btn-remove.svg"
            alt="btn-remove"
          />
        </h2>

        <hr className="mb-30" />

        <MenuLinks onClose={closeVisible} />
      </div>
    </div>
  );
};
