import { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavSushi.module.scss';

const NavSushi = ({ namePages }) => {
  const [activePages, setActivePages] = useState(null);

  return (
    <>
      <nav className={styles.nav__sushi}>
        {/* <ul>
          <li
            className={activeCategory === null ? 'active' : ''}
            onClick={() => onClickCategory(null)}
          >
            Вся продукція
          </li>
          {items && // Якщо items зберігає true то функція виконається, якщо буде false(undefined, null) то функція не виконається
            items.map((name, index) => (
              <li
                key={`${name}_${index}`}
                className={activeCategory === index ? 'focus__item' : ''}
                onClick={() => onClickCategory(index)}
              >
                {name}
              </li>
            ))}
        </ul> */}
        <ul className={styles.list__navSushi}>
          {namePages.map((name, index) => (
            <li key={`${name}_${index}`} onClick={() => setActivePages(index)}>
              <Link
                className={
                  activePages === index
                    ? styles.active__item // Використовуємо змінну з CSS-модулем
                    : '' // Використовуємо ту саму змінну
                }
                to="/"
              >
                {name}
              </Link>
            </li>
          ))}
          {/* <li className={styles.list__navSushi}>
            <Link to="/">Дракони</Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default NavSushi;
