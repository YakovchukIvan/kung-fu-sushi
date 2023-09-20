function App() {
  return (
    <div className="wrapper clear">
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
            <li className="mr-30">
              <img width={18} height={18} src="/img/cart.svg" alt="cart-icon" />
              <span>1205 грн.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt="" />
            </li>
          </ul>
        </div>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Всі кросівки</h1>

        <div className="d-flex justify-center flex-wrap">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                {/* <img width={11} height={11} src="/img/plus.svg" alt="plus-icon" /> */}
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                {/* <img width={11} height={11} src="/img/plus.svg" alt="plus-icon" /> */}
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="Sneakers"
            />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                {/* <img width={11} height={11} src="/img/plus.svg" alt="plus-icon" /> */}
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Ціна:</span>
                <b>12 999 грн.</b>
              </div>
              <button className="button">
                {/* <img width={11} height={11} src="/img/plus.svg" alt="plus-icon" /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
