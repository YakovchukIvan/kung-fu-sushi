import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { NAV_ITEMS } from '../../constants/index';

export const HeaderNav = () => (
  <ul className={styles.list__header}>
    {NAV_ITEMS.map((item) => (
      <li key={item.to}>
        <Link to={item.to} title={item.title}>
          <img width={24} height={24} src={item.icon} alt={item.alt} />
        </Link>
      </li>
    ))}
  </ul>
);
