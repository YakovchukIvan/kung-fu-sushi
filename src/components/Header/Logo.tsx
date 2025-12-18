import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

export const Logo = ({ onClick }: { onClick?: () => void }) => (
  <Link to="/" title="На головну">
    <div className={styles.block__logo} onClick={onClick}>
      <img width={60} height={60} src="/img/logo2.jpg" alt="logo" />
      <div className={styles.logo__title}>
        <h3>kung-fu Sushi</h3>
        <p>Магазин пандових суші</p>
      </div>
    </div>
  </Link>
);
