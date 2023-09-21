function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Кошик
          <img className="cu-p" src="/img/btn-remove.svg" alt="btn-remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
              <b>12 999 грн.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="btn-remove"
            />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              className="cartItemImg"
            ></div>

            <div className="mr-20 flex">
              <p className="mb-5">Чоловічі кросівки Nike Blazer Mid Suede</p>
              <b>12 999 грн.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/btn-remove.svg"
              alt="btn-remove"
            />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Всього:</span>
              <div></div>
              <b>21 498 грн.</b>
            </li>
            <li>
              <span>Податок: </span>
              <div></div>
              <b>1074 грн.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформити замовлення <img src="/img/arrow.svg" alt="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
