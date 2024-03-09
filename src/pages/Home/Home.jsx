import Card from '../../components/Card/Card';
import NavSushi from '../../components/NavigationSushi/NavSushi';

function Home({
  filteredItems,
  searchValue,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const navPages = [
    'Дракони',
    'Каліфорнія',
    'Макі',
    'Напої',
    'Нігірі',
    'Пропозиція тижня',
    'Від шефа',
    'Сети',
    'Філадельфія',
    'Футомака',
    'Новинки(pumpkinrolls)',
    'Новинки (авторські роли)',
    'Вега роли',
  ];

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
        <h2>
          {searchValue ? (
            `Пошук за запитом: "${searchValue}"`
          ) : (
            <NavSushi namePages={navPages} />
          )}
        </h2>
      </div>
      <div className="block-items-title">
        <div className="block-items ">{renderItems()}</div>
      </div>
    </div>
  );
}

export default Home;
