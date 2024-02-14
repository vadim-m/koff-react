import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../../components/Goods/Goods';
import { fetchCategories } from '../../store/categories/categories.slice';
import { Catalog } from '../../components/Catalog/Catalog';
import { fetchProducts } from '../../store/products/products.slice';
import { Spinner } from '../../components/Spinner/Spinner';

export const MainPage = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    errors: errorsCategories,
  } = useSelector((state) => state.categories);

  const {
    data: dataProducts,
    loading: loadingProducts,
    errors: errorsProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingCategories || loadingProducts) {
    return (
      <main className="main">
        <Spinner text={'Загрузка'} />
      </main>
    );
  }

  return (
    <main className="main">
      <Catalog data={dataCategories} error={errorsCategories} />
      <Goods data={dataProducts} error={errorsProducts} />
    </main>
  );
};
