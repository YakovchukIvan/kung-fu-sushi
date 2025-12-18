import { useStore } from '../../store/store';

interface IInfoProps {
  title: string;
  image: string;
  description: string;
}

export const Info = ({ title, image, description }: IInfoProps) => {
  const { drawerClose } = useStore();

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img
        className="empty-cart mb-20"
        width={225}
        src={image}
        alt="empty-cart"
      />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>
      <button onClick={drawerClose} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow" />
        Повернутися назад
      </button>
    </div>
  );
};
