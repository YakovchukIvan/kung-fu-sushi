import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';

import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import Orders from './pages/Orders/Orders';
import NotFound from './pages/Error/NotFound';

import AppContext from './Context';
import Footer from './components/Footer/Footer';

function App() {
  const location = useLocation();

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
  // Масив з вкладками категорій суші
  const [categorySushi, setCategorySushi] = useState('Dracon');
  // Стан для модального вікна при замовленні
  const [modalOpen, setModalOpen] = useState(false);

  //
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  // Відслідковуємо данні з input
  const onChangeSearchInput = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  // Відслідковуємо данні з input
  const onClearSearchInput = (event) => {
    setSearchValue('');
  };

  // Функція яка відслідковує подію в input а також передає її в map та рендерить товари до відповідного пошуку
  const filterItems = (items, searchValue) => {
    // console.log('items', items);
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  // Використання самої функції filterItems
  // const filteredItems = filterItems(items, searchValue);
  const filteredItems = filterItems(favorites, searchValue);

  // Додавання товару в кошик при кліку на плюс
  const onAddToCart = async (obj) => {
    const existingItem = cartItems.find((item) => item.title === obj.title);

    if (existingItem) {
      console.log('Спрацював true');
      // Якщо товар вже є в кошику, змініть кількість цього товару

      setCartItems((prev) =>
        prev.map((item) => {
          if (item.parentId === obj.parentId) {
            return {
              ...item,
              count: item.count + 1, // Збільшуємо кількість на 1
            };
          }
          return item;
        })
      );

      try {
        await axios.put(
          // `https://651323cd8e505cebc2e9a121.mockapi.io/cart/${obj.id}`,
          `https://650f314454d18aabfe99ec68.mockapi.io/items/${obj.id}`,
          {
            count: existingItem.count + 1, // Збільшуємо кількість на сервері
          }
        );
      } catch (error) {
        console.log(
          'Мокапі обмежує правильне додавання кількості товару:',
          error
        );
        // alert('Помилка при оновленні кількості товару в кошику на сервері');
      }
    } else {
      // Якщо товару немає в кошику, додаємо його
      setCartItems((prev) => [...prev, obj]);

      // Додаємо новий товар на сервер
      try {
        // const { data } = await axios.post(
        //   'https://651323cd8e505cebc2e9a121.mockapi.io/cart',
        //   obj
        // );
        const { data } = await axios.put(
          `https://650f314454d18aabfe99ec68.mockapi.io/items/${obj.id}`,
          { cart: true }
        );

        console.log('data', data);
      } catch (error) {
        console.log(
          'Мокапі обмежує правильне додавання кількості товару:',
          error
        );
        // alert('Помилка при додаванні товару в кошик на сервері', error);
      }
    }
  };

  // Для отримання данних з бек-енда
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);

        // const cartResponse = await axios.get(
        //   'https://651323cd8e505cebc2e9a121.mockapi.io/cart'
        // );
        // const favoritesResponse = await axios.get(
        //   'https://651323cd8e505cebc2e9a121.mockapi.io/favorites'
        // );
        const cartResponse = await axios.get(
          'https://650f314454d18aabfe99ec68.mockapi.io/items'
        );
        const favoritesResponse = await axios.get(
          'https://650f314454d18aabfe99ec68.mockapi.io/items'
        );
        const itemsResponse = await axios.get(
          `https://650f314454d18aabfe99ec68.mockapi.io/items?filter=${categorySushi}`
        );

        const cartItems = cartResponse.data.filter(
          (item) => item.cart === true
        );

        console.log(categorySushi);
        setIsLoading(false);
        // setCartItems(cartResponse.data);
        setCartItems(cartItems);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
        console.log(itemsResponse.data);
      } catch (error) {
        alert('Помилка при запиті данних.');
        console.error(error);
      }
    }
    console.log('Працює');
    fetchData();
  }, [categorySushi]);

  const onAddToFavorite = async (obj) => {
    // // Перевірка чи вже додано favorite, якщо так тоді видаляємо. Якщо favorite = true, тоді else додаємо товар до favorite
    try {
      // if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
      //   await axios.delete(
      //     `https://651323cd8e505cebc2e9a121.mockapi.io/favorites/${obj.id}`
      //   );
      //   await axios.put(
      //     `https://650f314454d18aabfe99ec68.mockapi.io/items/${obj.id}`,
      //     {
      //       favorite: !obj.favorite, // Збільшуємо кількість на сервері
      //     }
      //   );
      // } else {
      //   const { data } = await axios.post(
      //     'https://651323cd8e505cebc2e9a121.mockapi.io/favorites',
      //     obj
      //   );
      //   await axios.put(
      //     `https://650f314454d18aabfe99ec68.mockapi.io/items/${obj.id}`,
      //     {
      //       favorite: !obj.favorite, // Збільшуємо кількість на сервері
      //     }
      //   );
      //   setFavorites((prev) => [...prev, data]);
      // }

      setFavorites((prev) =>
        prev.map((item) => {
          if (item.id === obj.id) {
            return {
              ...item,
              favorite: !obj.favorite, // Збільшуємо кількість на 1
            };
          }
          return item;
        })
      );
      setItems((prev) =>
        prev.map((item) => {
          if (item.id === obj.id) {
            return {
              ...item,
              favorite: !obj.favorite, // Збільшуємо кількість на 1
            };
          }
          return item;
        })
      );

      await axios.put(
        `https://650f314454d18aabfe99ec68.mockapi.io/items/${obj.id}`,
        {
          favorite: !obj.favorite, // Збільшуємо кількість на сервері
        }
      );
    } catch (error) {
      alert('Не вдалося додати "вибране"');
      console.error(error);
    }
  };

  // Функція для видалення товару з бек-енд
  const onRemoveItem = async (id) => {
    try {
      console.log(id);
      // await axios.delete(
      //   `https://651323cd8e505cebc2e9a121.mockapi.io/cart/${id}`
      // );

      await axios.put(
        `https://650f314454d18aabfe99ec68.mockapi.io/items/${id}`,
        {
          cart: false, // Збільшуємо кількість на сервері
        }
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (error) {
      alert('Помилка при видаленні товару з корзини');
      console.error(error);
    }
  };

  const drawerClose = () => {
    setCartOpened(false);
    document.body.style.overflow = 'visible';
  };

  const drawerOpen = () => {
    setCartOpened(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <AppContext.Provider
      value={{
        location,
        searchValue,
        filteredItems,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
        setItems,
        categorySushi,
        setCategorySushi,
        modalOpen,
        setModalOpen,
        isLoading,
      }}
    >
      <div className="wrapper clear">
        {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} - це перший варіант, знизу другий варіант*/}

        <Drawer
          items={cartItems}
          onClose={() => drawerClose()}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />

        <Header
          cartItems={cartItems}
          searchValue={searchValue}
          onChangeSearchInput={onChangeSearchInput}
          onClearSearchInput={onClearSearchInput}
          onClickCart={() => drawerOpen()}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                filterItems={filterItems}
                filteredItems={filteredItems}
                // cartItems={cartItems}
                searchValue={searchValue}
                // onChangeSearchInput={onChangeSearchInput}
                // onClearSearchInput={onClearSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
