import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card/Card';

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
  return (
    <div className="wrapper clear">
      <div>
        <center>
          <button>+</button>
          <button>-</button>
          <h1>0</h1>
        </center>
      </div>
      <Header />
      <Drawer />

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
              onFavorite={() => console.log('Добавили в сподобалося')}
              onPlus={() => console.log('Добавили в кошик')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
