import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './NavSushi.module.scss';
import AppContext from '../../Context';

const NavSushi = ({ namePages }) => {
  const [activePages, setActivePages] = useState(null);
  const { filteredItems, categorySushi } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get(
          'https://650f314454d18aabfe99ec68.mockapi.io/items?filter=Dracon'
        );
        // test.setItems(itemsResponse.data);
      } catch (error) {
        alert('Помилка при запиті данних.');
        console.error(error);
      }
    }

    fetchData();
  }, [activePages]);

  function clickActivePages(index) {
    setActivePages(index);
    console.log(categorySushi);
    // Створюємо масив унікальних категорій
  }

  return (
    <>
      <nav className={styles.nav__sushi}>
        <ul className={styles.list__navSushi}>
          {namePages.map((name, index) => (
            <li key={`${name}_${index}`} onClick={() => clickActivePages()}>
              <Link
                className={activePages === index ? styles.active__item : ''}
                to={`/${categorySushi[index]}`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavSushi;
