import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccessToken } from './store/auth/auth.slice';
import { MainPage } from './views/MainPage/MainPage';
import { CartPage } from './views/CartPage/CartPage';
import { ProductPage } from './views/ProductPage/ProductPage';
import { NotFoundPage } from './views/NotFoundPage/NotFoundPage';
import { ErrorPortal } from './components/ErrorPortal/ErrorPortal';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <MainPage />
        <ErrorPortal />
        <Footer />
      </>
    ),
  },
  {
    path: '*',
    element: (
      <>
        <Header />
        <NotFoundPage />
        <Footer />
      </>
    ),
  },

  {
    path: '/favorites',
    element: (
      <>
        <Header />
        <MainPage />
        <ErrorPortal />
        <Footer />
      </>
    ),
  },
  {
    path: '/categories',
    element: (
      <>
        <Header />
        <MainPage />
        <ErrorPortal />
        <Footer />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Header />
        <CartPage />
        <ErrorPortal />
        <Footer />
      </>
    ),
  },
  {
    path: '/product/:productId',
    element: (
      <>
        <Header />
        <ProductPage />
        <ErrorPortal />
        <Footer />
      </>
    ),
  },
]);

export const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (loading) {
    return <div>Идёт загрузка</div>;
  }

  return <RouterProvider router={router}></RouterProvider>;
};
