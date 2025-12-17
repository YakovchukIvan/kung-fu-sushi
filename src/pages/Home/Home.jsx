// import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import CategorySushi from './CategorySushi';
// import { selectSushiItems } from '../../redux/slices/sushiSlice';

function Home({
  items,
  filteredItems,
  searchValue,
  onAddToFavorite,
  onAddToCart,
  isLoading,
  newSearchItem,
}) {
  let product = [];

  // const sushiItems = useSelector(selectSushiItems);
  // const sushiItems = useSelector(selectSushiItems);

  if (searchValue) {
    product = filteredItems;
  } else {
    // product = items;
    product = items;
  }

  const renderItems = () =>
    (isLoading ? [...Array(12)] : product).map((item, index) => (
      <Card
        {...item}
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        loading={isLoading}
      />
    ));

  return (
    <div className="content">
      <div className="d-flex align-center justify-between mb-40">
        {searchValue ? (
          <h2 className="search__title">Пошук за запитом: {searchValue}</h2>
        ) : (
          <CategorySushi />
        )}
      </div>
      <div className="block-items-title">
        {product.length === 0 && searchValue ? (
          <div className="search-null">
            <h2>Товару з таким іменем не знайдено</h2>
            <button className="greenButton" onClick={() => newSearchItem()}>
              Спробуйте іншу назву
            </button>
            <img src="/img/cart-empty.jpg" alt="cart-empty" />
          </div>
        ) : (
          <div className="block-items ">{renderItems()}</div>
        )}
      </div>
    </div>
  );
}

export default Home;
