function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">Reacr Sneakers</h3>
          <p className="opacity-5">Магазин найкращих кросівок</p>
        </div>
      </div>
      <div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="/img/cart.svg" alt="cart-icon" />
            <span>1205 грн.</span>
          </li>
          <li className="mr-10 cu-p">
            <img width={18} height={18} src="/img/heart.svg" alt="heart-icon" />
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user-icon" />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
