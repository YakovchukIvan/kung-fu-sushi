import NotFoundImage from './NotFound.png';

const NotFound = () => {
  return (
    <div className="img-error">
      <p>Сторінку не знайдено</p>
      <img src={NotFoundImage} alt="404" />
    </div>
  );
};

export default NotFound;
