import { Container } from '../Container/Container';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { Button } from '../Button/Button';
import { LikeButton } from '../LikeButton/LikeButton';
import style from './ProductItem.module.scss';
import { Table } from '../Table/Table';

export const ProductItem = ({ data, error }) => {
  if (error || !data) {
    return (
      <Container>
        <div>Ошибка при загрузке информации о товаре: {error}</div>
      </Container>
    );
  }

  const { id, name, price, article, characteristics, images } = data;

  return (
    <Container className={style.container}>
      <section className={style.card}>
        <h2 className={style.title}>{name}</h2>
        <ProductSlider images={images} />
        <div className={style.info}>
          <p className={style.price}>{(+price).toLocaleString('ru-RU')} ₽</p>
          <p className={style.article}>арт. {article}</p>
          <div className={style.characteristics}>
            <h3 className={style.characteristicsTitle}>Общие характеристики</h3>
            <Table data={characteristics} />
          </div>
          <div className={style.btns}>
            <Button text="В корзину" filled />
            <LikeButton id={id} />
          </div>
        </div>
      </section>
    </Container>
  );
};
