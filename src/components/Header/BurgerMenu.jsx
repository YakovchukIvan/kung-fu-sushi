import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function BurgerMenu({ openMenu, closeVisible }) {
  return (
    <div
      className={`${styles.overlayBurger} ${
        openMenu ? styles.overlayVisibleBurger : ''
      }`}
    >
      <div className={`${styles.bgClose}`} onClick={() => closeVisible()}></div>

      <div className={styles.drawer}>
        <h2 className="d-flex justify-center">
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
            className="cu-p ml-30"
            src="/img/btn-remove.svg"
            alt="btn-remove"
          />
        </h2>

        <hr className="mb-30" />

        <ul>
          <li>
            <Link to="/favorites" title="Обране" onClick={() => closeVisible()}>
              ОБРАНІ
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              title="Замовлення"
              onClick={() => closeVisible()}
            >
              ЗАМОВЛЕННЯ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
