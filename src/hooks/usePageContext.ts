import { useLocation } from 'react-router-dom';

export const usePageContext = () => {
  const location = useLocation();

  return {
    isOrdersPage: location.pathname === '/orders',
    isHomePage: location.pathname === '/',
  };
};
