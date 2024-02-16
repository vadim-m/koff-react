import { useDispatch, useSelector } from 'react-redux';
import { Catalog } from '../../components/Catalog/Catalog';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categories.slice';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { data, loading, errors } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <main className="main">
      <Catalog data={data} loading={loading} error={errors} />
      <ProductItem />
    </main>
  );
};
