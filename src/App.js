import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

function App() {
  return (
    <div className="wrapper clear">
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
