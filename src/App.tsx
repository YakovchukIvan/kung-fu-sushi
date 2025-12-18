import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useStore } from './store/store';
import { Drawer } from './components/Drawer/Drawer';
import Favorites from './pages/Favorites/Favorites';
import Orders from './pages/Orders/Orders';
import NotFound from './pages/Error/NotFound';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';

export const App = () => {
  const { categorySushi, fetchData } = useStore();

  useEffect(() => {
    fetchData();
  }, [categorySushi]);

  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};
