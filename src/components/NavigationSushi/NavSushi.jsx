import { Link } from 'react-router-dom';
import styles from './NavSushi.module.scss';

const NavSushi = () => {
  return (
    <>
      <nav className={styles.nav__sushi}>
        <ul className={styles.list__navSushi}>
          <li className={styles.list__navSushi}>
            <Link to="/">Дракони</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Каліфорнія</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Макі</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Напої</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Нігірі</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Пропозиція тижня</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Від шефа</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Сети</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Філадельфія</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Футомака</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Новинки(pumpkinrolls)</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Новинки (авторські роли)</Link>
          </li>
          <li className={styles.list__navSushi}>
            <Link to="/">Вега роли</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavSushi;
