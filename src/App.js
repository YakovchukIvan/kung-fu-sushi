import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card/Card';
import { useState } from 'react';

const arr = [
  {
    title: 'Чоловічі кросівки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/1.jpg',
  },
  {
    title: 'Чоловічі кросівки Nike Air Max 270',
    price: 12499,
    imageUrl: '/img/sneakers/2.jpg',
  },
  {
    title: 'Чоловічі кросівки Nike Blazer Mid Suede',
    price: 8999,
    imageUrl: '/img/sneakers/3.jpg',
  },
  {
    title: 'Чоловічі кросівки X Aka Boku Future Rider',
    price: 8499,
    imageUrl: '/img/sneakers/4.jpg',
  },
];

function App() {
  const [cartOpened, setCartOpened] = useState(false);

  return (
    <div className="wrapper clear">
      {/* {cartOpened ? <Drawer onClose={() => setCartOpened(false)} /> : null} - це перший варіант, знизу другий варіант*/}
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Всі кросівки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search-icon" />
            <input placeholder="Пошук" />
          </div>
        </div>

        <div className="d-flex ">
          {arr.map((obj, index) => (
            <Card
              key={index}
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
