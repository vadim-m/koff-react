import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../../components/Goods/Goods';
import { fetchCategories } from '../../store/categories/categories.slice';
import { Catalog } from '../../components/Catalog/Catalog';
import { fetchProducts } from '../../store/products/products.slice';

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

  return (
    <main className="main">
      <Catalog data={dataCategories} loading={loadingCategories} error={errorsCategories} />
      <Goods data={dataProducts} loading={loadingProducts} error={errorsProducts} />
    </main>
  );
};
