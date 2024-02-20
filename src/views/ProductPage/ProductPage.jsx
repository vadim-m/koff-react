import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Catalog } from '../../components/Catalog/Catalog';
import { ProductItem } from '../../components/ProductItem/ProductItem';
import { Spinner } from '../../components/Spinner/Spinner';
import { fetchCategories } from '../../store/categories/categories.slice';
import { fetchProduct } from '../../store/product/product.slice';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const {
    data: dataProduct,
    loading: loadingProduct,
    errors: errorsProduct,
  } = useSelector((state) => state.product);
  const {
    data: dataCategories,
    loading: loadingCategories,
    errors: errorsCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loadingCategories || loadingProduct) {
    return (
      <main className="main">
        <Spinner text={'Загрузка'} />
      </main>
    );
  }

  return (
    <main className="main">
      <Catalog data={dataCategories} error={errorsCategories} />
      <ProductItem data={dataProduct} error={errorsProduct} />
    </main>
  );
};
