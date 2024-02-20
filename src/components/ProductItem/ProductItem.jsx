import { Container } from '../Container/Container';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { Button } from '../Button/Button';
import { LikeButton } from '../LikeButton/LikeButton';
import style from './ProductItem.module.scss';

export const ProductItem = ({ data, error }) => {
  if (error) {
    return (
      <Container>
        <div>Ошибка при загрузке информации о товаре: {error}</div>
      </Container>
    );
  }

  const { name, price, article } = data;

  return (
    <Container className={style.container}>
      <section className={style.card}>
        <h2 className={style.title}>{name}</h2>
        <ProductSlider />
        <div className={style.info}>
          <p className={style.price}>{(+price).toLocaleString('ru-RU')} ₽</p>
          <p className={style.article}>арт. {article}</p>
          <div className={style.characteristics}>
            <h3 className={style.characteristicsTitle}>Общие характеристики</h3>
            <table className={style.table}>
              <tbody>
                <tr className={style.row}>
                  <th className={style.key}>Dennis</th>
                  <td className={style.value}>Web accessibility</td>
                </tr>
                <tr className={style.row}>
                  <th className={style.key}>Sarah</th>
                  <td className={style.value}>JavaScript frameworks</td>
                </tr>
                <tr className={style.row}>
                  <th className={style.key}>Karen</th>
                  <td className={style.value}>Web performance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={style.btns}>
            <Button text="В корзину" filled />
            <LikeButton />
          </div>
        </div>
      </section>
    </Container>
  );
};
