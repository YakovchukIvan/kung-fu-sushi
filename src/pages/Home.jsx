import { useContext } from 'react';
import Card from '../components/Card/Card';

function Home({
  onClearSearchInput,
  filteredItems,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  //
  // const { searchValue } = useContext(AppContext);

  const renderItems = () => {
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        // Перший спосіб, просто вписуючи сюди метод
        // items.filter((item) =>
        //   item.title.toLowerCase().includes(searchValue.toLowerCase())
        // )
        // Другий спосіб з створенням окремих функцій filteredItems
        // id={item.id}
        // title={item.title}
        // price={item.price}
        // imageUrl={item.imageUrl}
        {...item}
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Пошук за запитом: "${searchValue}"` : 'Всі суші'}
        </h1>
        {/* <div className="search-block">
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
        </div> */}
      </div>
      <div className="block-items-title">
        <div className="block-items ">{renderItems()}</div>
      </div>
    </div>
  );
}

export default Home;
