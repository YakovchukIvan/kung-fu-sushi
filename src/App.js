import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card/Card';
import { useEffect, useState } from 'react';

function App() {
  // Створюємо масив з данним з бек-енд
  const [items, setItems] = useState([]);

  // Для отримання данних з бек-енда
  useEffect(() => {
    fetch('https://650f314454d18aabfe99ec68.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  // Відкриває і закриває кошик
  const [cartOpened, setCartOpened] = useState(false);

  // Зберігання товарів в кошику
  const [cartItems, setCartItems] = useState([]);

  // Додава товару в кошик при кліку на плюс
  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]); // Додаємо вибраний товар в кошик, шляхом інформації з старого масиву в новий масив та одночасно додавання обєкту до старого масиву, який повернеться вже новим
  };

  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} - це перший варіант, знизу другий варіант*/}
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Всі кросівки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search-icon" />
            <input placeholder="Пошук" />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log('Додано товар в улюблені')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
