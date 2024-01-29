import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../../components/Goods/Goods';
import { fetchCategories } from '../../store/categories/categories.slice';
import { Catalog } from '../../components/Catalog/Catalog';

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    errors: errorsCategories,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loadingCategories) {
    return <div>Идёт загрузка категорий</div>;
  }

  if (errorsCategories) {
    return <div>При загрузке категорий произошка ошибка: {errorsCategories}</div>;
  }

  return (
    <main className="main">
      <Catalog data={dataCategories} />
      <Goods />
    </main>
  );
};
