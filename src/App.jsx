import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
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
    return cartItems.some((obj) => Number(obj.id) === Number(id));
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
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  // Використання самої функції filterItems
  const filteredItems = filterItems(items, searchValue);

  // Додавання товару в кошик при кліку на плюс
  const onAddToCart = (obj) => {
    console.log(obj);
    // console.log(cartItems);
    // const isObjectInCart = cartItems.some((item) => item.title === obj.title); // some - це метод, який перевіряє умову на кожному елементі масиву. Якщо хоча б один елемент у масиві cartItems задовольняє цю умову, то some повертає true, інакше він повертає false.
    // console.log(isObjectInCart);
    // if (!isObjectInCart) {
    //   setCartItems((prev) => [...prev, obj]); // Додаємо вибраний товар в кошик, шляхом інформації з старого масиву в новий масив та одночасно додавання обєкту до старого масиву, який повернеться вже новим
    //   axios.post('https://650f314454d18aabfe99ec68.mockapi.io/cart', obj);
    // }
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://650f314454d18aabfe99ec68.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post('https://650f314454d18aabfe99ec68.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Не вдалося додати товар в кошик');
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
      setIsLoading(true);

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
    }

    fetchData();
  }, []);

  const onAddToFavorite = async (obj) => {
    console.log(obj);
    // // Перевірка чи вже додано favorite, якщо так тоді видаляємо. Якщо favorite = true, тоді else додаємо товар до favorite
    // console.log(obj);
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://651323cd8e505cebc2e9a121.mockapi.io/favorites/${obj.id}`
        );
        // setFavorites((prev) => prev.filter((item) => item.id === obj.id));
      } else {
        const { data } = await axios.post(
          'https://651323cd8e505cebc2e9a121.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не вдалося додати "вибране"');
    }
  };

  // Функція для видалення товару з бек-енд
  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://650f314454d18aabfe99ec68.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider
      value={{ filteredItems, cartItems, favorites, isItemAdded, onAddToCart }}
    >
      <div className="wrapper clear">
        {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} - це перший варіант, знизу другий варіант*/}
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/favorites"
            element={<Favorites onAddToFavorite={onAddToFavorite} />}
          />
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
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
