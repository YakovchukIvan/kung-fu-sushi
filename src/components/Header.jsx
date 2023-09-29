import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />

          <div>
            <h3 className="text-uppercase">easy step</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>
      </Link>
      <div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="/img/cart.svg" alt="cart-icon" />
            <span>1205 грн.</span>
          </li>
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
            <img width={18} height={18} src="/img/user.svg" alt="Вибрані" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
