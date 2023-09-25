// import { useState } from 'react';

function Drawer({ onClose, onDeleteItems, items = [] }) {
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
            Оформити замовлення <img src="/img/arrow.svg" alt="arrow-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
