import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

function Header(
  props
  // onClearSearchInput,
  // filteredItems,
  // searchValue,
  // onChangeSearchInput,
  // onAddToFavorite,
  // onAddToCart,
  // isLoading
) {
  // console.log('props', props);
  const { totalPrice } = useCart();

  return (
    <header>
      <div className="header-wrapper">
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
          {props.searchValue && (
            <img
              onClick={props.onClearSearchInput}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="btn-remove-search"
            />
          )}
          <input
            onChange={props.onChangeSearchInput}
            value={props.searchValue}
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
              <span className="total__price-cart">{totalPrice} грн.</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
