import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function BurgerMenu({ openMenu, setOpenMenu }) {
  const closeVisible = () => {
    document.body.style.overflow = 'hidden';
    setOpenMenu(false);
  };

  const openVisible = () => {
    document.body.style.overflow = 'visible';
  };

  return (
    <div
      className={`${styles.overlayBurger} ${
        openMenu ? styles.overlayVisibleBurger : ''
      }`}
    >
      <div className={`${styles.bgClose}`} onClick={() => closeVisible()}></div>

      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          <Link to="/" title="На головну">
            <div className={styles.block__logo} onClick={() => closeVisible()}>
              <img width={60} height={60} src="/img/logo2.jpg" alt="logo" />

              <div className={styles.logo__title}>
                <h3>kung-fu Sushi</h3>
                <p>Магазин пандових суші</p>
              </div>
            </div>
          </Link>
          <img
            onClick={() => closeVisible()}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="btn-remove"
          />
        </h2>
        <ul>
          <li>Обрані</li>
          <li>Замовлення</li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
