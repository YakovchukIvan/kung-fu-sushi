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
        // added={isItemAdded(item && item.id)}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Пошук за запитом: "${searchValue}"` : 'Всі кросівки'}
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

      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}

export default Home;
