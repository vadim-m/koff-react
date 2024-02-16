import { Container } from '../Container/Container';
// import { useParams } from 'react-router-dom';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { Button } from '../Button/Button';
import { LikeButton } from '../LikeButton/LikeButton';
import style from './ProductItem.module.scss';

export const ProductItem = () => {
  // const { productId } = useParams();

  return (
    <Container className={style.container}>
      <section className={style.card}>
        <h2 className={style.title}>Кресло с подлокотниками</h2>
        <ProductSlider />
        <div className={style.info}>
          <p className={style.price}>{(5000).toLocaleString('ru-RU')} ₽</p>
          <p className={style.article}>арт. 325325</p>
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
