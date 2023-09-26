import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card/Card';

function App() {
  // Створюємо масив з данним з бек-енд
  const [items, setItems] = useState([]);

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
    axios
      .get('https://650f314454d18aabfe99ec68.mockapi.io/items')
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get('https://650f314454d18aabfe99ec68.mockapi.io/cart')
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  // Відкриває і закриває кошик
  const [cartOpened, setCartOpened] = useState(false);

  // Зберігання товарів в кошику
  const [cartItems, setCartItems] = useState([]);

  // Створення закладок вибраного
  const [favorites, setFavorites] = useState([]);

  const onAddToFavorite = (obj) => {
    console.log(obj);
    axios.post('https://651323cd8e505cebc2e9a121.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  // Пошук по фільтру
  const [searchValue, setSearchValue] = useState('');

  // Відслідковуємо данні з input
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  // Відслідковуємо данні з input
  const onClearSearchInput = (event) => {
    setSearchValue('');
  };

  // Додавання товару в кошик при кліку на плюс
  const onAddToCart = (obj) => {
    console.log(cartItems);
    const isObjectInCart = cartItems.some((item) => item.title === obj.title); // some - це метод, який перевіряє умову на кожному елементі масиву. Якщо хоча б один елемент у масиві cartItems задовольняє цю умову, то some повертає true, інакше він повертає false.
    console.log(isObjectInCart);

    if (!isObjectInCart) {
      setCartItems((prev) => [...prev, obj]); // Додаємо вибраний товар в кошик, шляхом інформації з старого масиву в новий масив та одночасно додавання обєкту до старого масиву, який повернеться вже новим
      axios.post('https://650f314454d18aabfe99ec68.mockapi.io/cart', obj);
    }
  };

  // Функція для видалення товару з бек-енд
  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://650f314454d18aabfe99ec68.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Функція яка відслідковує подію в input а також передає її в map та рендерить товари до відповідного пошуку
  const filterItems = (items, searchValue) => {
    return items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  // Використання самої функції filterItems
  const filteredItems = filterItems(items, searchValue);

  return (
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

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Пошук за запитом: "${searchValue}"`
              : 'Всі кросівки'}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search-icon" />
            {searchValue && (
              <img
                onClick={onClearSearchInput}
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="btn-remove-search"
              />
            )}
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Пошук ..."
            />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {
            // Перший спосіб, просто вписуючи сюди метод
            // items.filter((item) =>
            //   item.title.toLowerCase().includes(searchValue.toLowerCase())
            // )
            // Другий спосіб з створенням окремих функцій filteredItems
            filteredItems.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
