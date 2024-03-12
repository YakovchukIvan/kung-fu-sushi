import ContentLoader from 'react-content-loader';

function Loader() {
  return (
    <div>
      <ContentLoader
        speed={2}
        width="100%" // Адаптивна ширина
        height="100%" // Адаптивна висота
        viewBox="0 0 155 187" // Ваше значення viewBox
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="10" ry="10" width="100%" height="45%" />{' '}
        {/* Відносні значення */}
        <rect x="0" y="50%" rx="5" ry="5" width="100%" height="8%" />{' '}
        {/* Відносні значення */}
        <rect x="0" y="60%" rx="5" ry="5" width="65%" height="8%" />{' '}
        {/* Відносні значення */}
        <rect x="0" y="70%" rx="5" ry="5" width="51%" height="13%" />{' '}
        {/* Відносні значення */}
        <rect x="79%" y="80%" rx="5" ry="5" width="20%" height="17%" />{' '}
        {/* Відносні значення */}
      </ContentLoader>
    </div>
  );
}

export default Loader;
