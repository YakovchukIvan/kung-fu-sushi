// import { useState } from 'react';

function Drawer({ onClose, onRemove, items = [] }) {
  // const [isAdded, setIsAdded] = useState(false);
  // const onClickDelete = () => {
  //   onDeleteItems(items);
  //   setIsAdded(!isAdded);
  // };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Кошик
          <img
            onClick={onClose}
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="btn-remove"
          />
        </h2>

        {/* Тут ми викликаємо тернарний оператор. Якщо items.length (приставка length щоб визначити пустий масив чи ні), пустий значить показуємо вікно "Кошик порожній".
        А якщо в items.length є товар, тоді відображаємо товар */}
        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj, index) => (
                <div key={index} className="cartItem d-flex align-center mb-20">
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img
                    // onClick={onClickDelete}
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="btn-remove"
                  />
                </div>
              ))}
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
                Оформити замовлення{' '}
                <img src="/img/arrow.svg" alt="arrow-icon" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/empty-cart.jpg"
              alt="empty-cart"
            />
            <h2>Кошик порожній</h2>
            <p className="opacity-6">
              Добавте хоча би одну пару кросівок, щоб зробити замовлення.
            </p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Повернутися назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
