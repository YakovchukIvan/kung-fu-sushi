import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer/Drawer';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

import AppContext from './Context';

function App() {
  // Створюємо масив з данним з бек-енд
  const [items, setItems] = useState([]);
  // Відкриває і закриває кошик
  const [cartOpened, setCartOpened] = useState(false);
  // Зберігання товарів в кошику
  const [cartItems, setCartItems] = useState([]);
  // Створення закладок вибраного
  const [favorites, setFavorites] = useState([]);
  // Пошук по фільтру
  const [searchValue, setSearchValue] = useState('');
  // Поки не загрузився повністю сайт, використовуємо skeleton в компоненті card
  const [isLoading, setIsLoading] = useState(true);
  //
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  // Відслідковуємо данні з input
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  // Відслідковуємо данні з input
  const onClearSearchInput = (event) => {
    setSearchValue('');
  };

  // Функція яка відслідковує подію в input а також передає її в map та рендерить товари до відповідного пошуку
  const filterItems = (items, searchValue) => {
    console.log(items);
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  // Використання самої функції filterItems
  const filteredItems = filterItems(items, searchValue);

  // Додавання товару в кошик при кліку на плюс
  const onAddToCart = async (obj) => {
    // console.log(obj);
    // console.log(cartItems);
    // const isObjectInCart = cartItems.some((item) => item.title === obj.title); // some - це метод, який перевіряє умову на кожному елементі масиву. Якщо хоча б один елемент у масиві cartItems задовольняє цю умову, то some повертає true, інакше він повертає false.
    // console.log(isObjectInCart);
    // if (!isObjectInCart) {
    //   setCartItems((prev) => [...prev, obj]); // Додаємо вибраний товар в кошик, шляхом інформації з старого масиву в новий масив та одночасно додавання обєкту до старого масиву, який повернеться вже новим
    //   axios.post('https://650f314454d18aabfe99ec68.mockapi.io/cart', obj);
    // }
    try {
      const findItem = cartItems.find(
        (item) => Number(item.parentId) === Number(obj.id)
      );
      console.log(findItem);
      if (findItem) {
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://650f314454d18aabfe99ec68.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          'https://650f314454d18aabfe99ec68.mockapi.io/cart',
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.parentId,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert('Помилка при додаванні товару в кошик');
    }
  };

  // Для отримання данних з бек-енда
  useEffect(() => {
    // Метод fetch
    // fetch('https://650f314454d18aabfe99ec68.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     setItems(json);
    //   });

    // Метод axios
    async function fetchData() {
      try {
        setIsLoading(true);

        // Відправлення всіх запитів відразу
        // const [cartResponse, favoritesResponse, itemsResponse] =
        //   await Promise.all([
        //     axios.get('https://650f314454d18aabfe99ec68.mockapi.io/cart'),
        //     axios.get('https://651323cd8e505cebc2e9a121.mockapi.io/favorites'),
        //     axios.get('https://650f314454d18aabfe99ec68.mockapi.io/items'),
        //   ]);
        // Варіант з відправлення запитів кожен окремо. Найчастіше цей використовують
        const cartResponse = await axios.get(
          'https://650f314454d18aabfe99ec68.mockapi.io/cart'
        );
        const favoritesResponse = await axios.get(
          'https://651323cd8e505cebc2e9a121.mockapi.io/favorites'
        );
        const itemsResponse = await axios.get(
          'https://650f314454d18aabfe99ec68.mockapi.io/items'
        );

        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert('Помилка при запиті данних.');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const onAddToFavorite = async (obj) => {
    console.log(obj);
    // // Перевірка чи вже додано favorite, якщо так тоді видаляємо. Якщо favorite = true, тоді else додаємо товар до favorite
    // console.log(obj);
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        await axios.delete(
          `https://651323cd8e505cebc2e9a121.mockapi.io/favorites/${obj.id}`
        );
        // setFavorites((prev) =>
        //   prev.filter((item) => Number(item.id) === Number(obj.id))
        // );
      } else {
        const { data } = await axios.post(
          'https://651323cd8e505cebc2e9a121.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не вдалося додати "вибране"');
      console.error(error);
    }
  };

  // Функція для видалення товару з бек-енд
  const onRemoveItem = async (id) => {
    try {
      console.log(id);
      await axios.delete(
        `https://650f314454d18aabfe99ec68.mockapi.io/cart/${id}`
      );
      console.log(setCartItems);
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert('Помилка при видаленні товару з корзини');
      console.error(error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        searchValue,
        filteredItems,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} - це перший варіант, знизу другий варіант*/}

        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header
          filterItems={filterItems}
          filteredItems={filteredItems}
          cartItems={cartItems}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          onClearSearchInput={onClearSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
          isLoading={isLoading}
          onClickCart={() => setCartOpened(true)}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                filterItems={filterItems}
                filteredItems={filteredItems}
                cartItems={cartItems}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                onClearSearchInput={onClearSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
