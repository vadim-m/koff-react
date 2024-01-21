import style from './Authors.module.scss';

export const Authors = () => {
  return (
    <ul className={style.list}>
      <li className={style.item}>
        Developer:&nbsp;
        <a href="https://github.com/vadim-m" target="_blank" rel="noreferrer">
          Vadim
        </a>
      </li>
      <li className={style.item}>
        Designer:&nbsp;
        <a href="https://t.me/Mrshmallowww" target="_blank" rel="noreferrer">
          Anastasia Ilina
        </a>
      </li>
    </ul>
  );
};
