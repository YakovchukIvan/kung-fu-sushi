import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function BurgerMenu({ openMenu, setOpenMenu }) {
  {
    openMenu && `${document.body.style.overflow} = ${'visible'}`;
  }

  return (
    <div
      className={`${styles.overlayBurger} ${
        openMenu ? styles.overlayVisibleBurger : ''
      }`}
    >
      <div
        className={`${styles.bgClose}`}
        onClick={() => setOpenMenu(false)}
      ></div>

      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          <Link to="/" title="На головну">
            <div
              className={styles.block__logo}
              onClick={() => setOpenMenu(false)}
            >
              <img width={60} height={60} src="/img/logo2.jpg" alt="logo" />

              <div className={styles.logo__title}>
                <h3>kung-fu Sushi</h3>
                <p>Магазин пандових суші</p>
              </div>
            </div>
          </Link>
          <img
            onClick={() => setOpenMenu(false)}
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
