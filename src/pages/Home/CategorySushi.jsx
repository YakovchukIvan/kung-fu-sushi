import { useContext, useState } from 'react';

import styles from './CategorySushi.module.scss';
import AppContext from '../../Context';

const navPages = [
  'Дракони',
  'Каліфорнія',
  'Макі',
  'Напої',
  'Нігірі',
  'Пропозиція тижня',
  'Від шефа',
  'Сети',
  'Новинки (авторські роли)',
  'Філадельфія',
  'Футомака',
  'Новинки(pumpkinrolls)',
  'Вега роли',
];

const categorySushi = [
  'Dracon',
  'California',
  'Maki',
  'Drinks',
  'Nigiri',
  'Offer-of-the-week',
  'from-boss',
  'Sets',
  'Novelty-master',
  'Philadelphia',
  'Futomaki',
  'Novelty',
  'Vega-roles',
];

function CategorySushi() {
  const [activeItem, setActiveItem] = useState(0);
  const { setCategorySushi } = useContext(AppContext);

  function clickActivePages(index) {
    setActiveItem(index);
    setCategorySushi(categorySushi[index]);
  }

  return (
    <nav className={styles.nav__sushi}>
      <ul className={styles.list__navSushi}>
        {navPages.map((link, index) => (
          <li
            key={index}
            onClick={() => clickActivePages(index)}
            className={activeItem === index ? `${styles.active__nav}` : ''}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategorySushi;
