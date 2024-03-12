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

const category = [
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
  const { setCategorySushi, categorySushi } = useContext(AppContext);

  const activeNavigation = category.findIndex((item) => item === categorySushi);

  const [activeItem, setActiveItem] = useState(activeNavigation);

  function clickActivePages(index) {
    setActiveItem(index);
    setCategorySushi(category[index]);
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
