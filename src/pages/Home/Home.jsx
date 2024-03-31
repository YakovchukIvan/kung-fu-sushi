import Card from '../../components/Card/Card';
import CategorySushi from './CategorySushi';

function Home({
  items,
  filteredItems,
  searchValue,
  onAddToFavorite,
  onAddToCart,
  isLoading,
  searchMess,
}) {
  let product = [];

  if (searchValue) {
    product = filteredItems;
  } else {
    product = items;
  }

  // console.log('product', filteredItems.length);

  const renderItems = () => {
    return (isLoading ? [...Array(12)] : product).map((item, index) => (
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
          <h2 className="search__title">Пошук за запитом: {searchValue}</h2>
        ) : (
          <CategorySushi />
        )}
      </div>
      <div className="block-items-title">
        {searchMess && (
          <div>
            <h3>Товару з таким іменем не існує, спробуйте іншу назву</h3>
            <img className="empty-cart" src="/img/cart-empty.jpg" alt="alt" />
          </div>
        )}
        {product.length === 0 && searchValue ? (
          <p>Пробуй шукати далі товар</p>
        ) : (
          <div className="block-items ">{renderItems()}</div>
        )}
      </div>
    </div>
  );
}

export default Home;
