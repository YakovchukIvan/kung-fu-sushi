import { useStore } from '../../store/store';
import { CategorySushi } from './CategorySushi';
import { EmptySearch } from './EmptySearch';
import { Card } from '../../components/Card/Card';

export const Home = () => {
  const {
    items,
    favorites,
    searchValue,
    isLoading,
    onAddToFavorite,
    onAddToCart,
    filterItems,
    clearSearch,
  } = useStore();

  const filteredItems = filterItems(favorites, searchValue);

  const products = searchValue ? filteredItems : items;

  const displayItems = isLoading ? Array(12).fill(null) : products;

  const hasNoResults = products.length === 0 && searchValue;

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
        {hasNoResults ? (
          <EmptySearch onReset={clearSearch} />
        ) : (
          <div className="block-items">
            {displayItems.map((item, index) => (
              <Card
                key={item?.id || index}
                item={item}
                onFavorite={onAddToFavorite}
                onPlus={onAddToCart}
                loading={isLoading}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
