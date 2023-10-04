import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(
  props,
  onClearSearchInput,
  filteredItems,
  searchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading
) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center ">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={60} height={60} src="/img/logo2.jpg" alt="logo" />

          <div>
            <h3 className="text-uppercase">kung-fu Sushi</h3>
            <p className="opacity-5">Магазин найсмачніших суші</p>
          </div>
        </div>
      </Link>
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
      <div>
        <ul className="d-flex">
          <li className="mr-10 cu-p">
            <Link to="/favorites">
              <img
                width={18}
                height={18}
                src="/img/heart.svg"
                alt="heart-icon"
              />
            </Link>
          </li>
          <li>
            <Link to="/orders">
              <img
                width={18}
                height={18}
                src="/img/user.svg"
                alt="Замовлення"
              />
            </Link>
          </li>
          <li onClick={props.onClickCart} className="cu-p">
            <img width={18} height={18} src="/img/cart.svg" alt="cart-icon" />
            <span>{totalPrice} грн.</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
