import { Container } from '../../views/Container/Container';
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
            <a className={style.link} href={`/category?slug=${item}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};
