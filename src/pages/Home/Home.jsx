import Card from '../../components/Card/Card';
import CategorySushi from './CategorySushi';

function Home({
  filteredItems,
  searchValue,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        {...item}
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
      />
    ));
  };

  return (
    <div className="content">
      <div className="d-flex align-center justify-between mb-40">
        {searchValue ? (
          <h2>Пошук за запитом: {searchValue}</h2>
        ) : (
          <CategorySushi />
        )}
      </div>
      <div className="block-items-title">
        <div className="block-items ">{renderItems()}</div>
      </div>
    </div>
  );
}

export default Home;
