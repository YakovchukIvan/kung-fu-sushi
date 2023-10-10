import { Link } from 'react-router-dom';
// import { FaCartShopping, FaRegCircleUser } from 'react-icons/fa6';

import { useCart } from '../hooks/useCart';

function Header(props) {
  // console.log('props', props);
  const { totalPrice } = useCart();
  // console.log('items', props.cartItems.length);
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
          <ul className="list__header">
            <li className="">
              <Link to="/favorites">
                <img
                  width={24}
                  height={24}
                  src="/img/heart.svg"
                  alt="heart-icon"
                />
              </Link>
            </li>
            <li>
              <Link to="/orders">
                {/* <FaRegCircleUser style={{ width: '24px', height: '24px' }} /> */}
                <img
                  width={24}
                  height={24}
                  src="/img/user.svg"
                  alt="Замовлення"
                />
              </Link>
            </li>
            <li onClick={props.onClickCart} className="item__cart-icon">
              {/* <FaCartShopping style={{ width: '24px', height: '24px' }} /> */}
              <img
                className=""
                width={24}
                height={24}
                src="/img/cart.svg"
                alt="cart-icon"
              />
              <span className="icon__count-orders">
                {/* {props.cartItems.length} */}
              </span>
              {/* <span className="total__price-cart">{totalPrice} грн.</span> */}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
