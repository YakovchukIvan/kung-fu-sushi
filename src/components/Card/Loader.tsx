import ContentLoader from 'react-content-loader';

export const Loader = () => (
  <ContentLoader
    speed={2}
    width="100%"
    height="100%"
    viewBox="0 0 155 187"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="45%" />
    <rect x="0" y="50%" rx="5" ry="5" width="100%" height="8%" />
    <rect x="0" y="60%" rx="5" ry="5" width="65%" height="8%" />
    <rect x="0" y="70%" rx="5" ry="5" width="51%" height="13%" />
    <rect x="79%" y="80%" rx="5" ry="5" width="20%" height="17%" />
  </ContentLoader>
);
