import React, { useContext } from 'react';
import AppContext from '../../Context';

const Info = ({ title, image, description }) => {
  const { setCartOpened } = useContext(AppContext);

  const cartOpened = () => {
    setCartOpened(false);
    document.body.style.overflow = 'visible';
  };

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width={225} src={image} alt="empty-cart" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={() => cartOpened()} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Повернутися назад
      </button>
    </div>
  );
};

export default Info;
