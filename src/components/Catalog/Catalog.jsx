import { Link } from 'react-router-dom';
import { Container } from '../Container/Container';
import style from './Catalog.module.scss';

export const Catalog = ({ data, loading, error }) => {
  if (error) {
    return (
      <Container>
        <div>Ошибка при загрузке категорий товаров: {error}</div>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <div>Идёт загрузка категорий...</div>
      </Container>
    );
  }

  return (
    <Container className={style.container}>
      <ul className={style.list}>
        {data.map((item, i) => (
          <li key={i}>
            <Link className={style.link} to={`/categories?slug=${item}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};
