import style from './Goods.module.scss';
import { Container } from '../Container/Container';
import { CardItem } from '../CardItem/CardItem';

export const Goods = ({ data, loading, error }) => {
  if (error) {
    return (
      <Container>
        <div>Ошибка при загрузке товаров: {error}</div>
      </Container>
    );
  }

  if (loading) {
    return (
      <Container>
        <div>Идёт загрузка товаров...</div>
      </Container>
    );
  }

  return (
    <section className={style.goods}>
      <Container>
        <h2 className={`${style.title} visually-hidden`}>Список товаров</h2>
        <ul className={style.list}>
          {data.map((item) => (
            <li key={item.id}>
              <CardItem {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
