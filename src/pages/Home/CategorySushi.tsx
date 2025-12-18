import { useState } from 'react';
import { useStore } from '../../store/store';
import styles from './CategorySushi.module.scss';
import { CATEGORIES, NAV_PAGES } from '../../constants/index';

export const CategorySushi = () => {
  const { categorySushi, setCategorySushi } = useStore();

  const activeNavigation = CATEGORIES.findIndex(
    (item) => item === categorySushi,
  );

  const [activeItem, setActiveItem] = useState(activeNavigation);

  const handleCategoryClick = (index: number) => {
    setActiveItem(index);
    setCategorySushi(CATEGORIES[index]);
  };

  return (
    <nav className={styles.nav__sushi}>
      <ul className={styles.list__navSushi}>
        {NAV_PAGES.map((link, index) => (
          <li
            key={index}
            onClick={() => handleCategoryClick(index)}
            className={activeItem === index ? styles.active__nav : ''}
          >
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
};
