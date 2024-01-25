import style from './Goods.module.scss';
import { Container } from '../../views/Container/Container';
import { CardItem } from '../CardItem/CardItem';

export const Goods = () => {
  return (
    <section className={style.goods}>
      <Container>
        <h2 className={`${style.title} visually-hidden`}>Список товаров</h2>
        <ul className={style.list}>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
          <li>
            <CardItem />
          </li>
        </ul>
      </Container>
    </section>
  );
};
