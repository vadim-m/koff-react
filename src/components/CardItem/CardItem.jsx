import { Link } from 'react-router-dom';
import { API_URL } from '../../constants/constants';
import { Button } from '../Button/Button';
import { LikeButton } from '../LikeButton/LikeButton';
import style from './CardItem.module.scss';

export const CardItem = ({ price, name, id, images: [image] }) => {
  return (
    <article className={style.card}>
      <div className={style.wrapper}>
        <Link className={style.link} to={`/product/${id}`}>
          <img className={style.img} src={`${API_URL}/${image}`} alt={name} />
        </Link>
        <div className={style.like}>
          <LikeButton />
        </div>
      </div>
      <div className={style.info}>
        <Link className={style.link} to={`/product/${id}`}>
          {name}
        </Link>
        <span className={style.price}>{price.toLocaleString()} ₽</span>
      </div>
      <Button text="В корзину" />
    </article>
  );
};
