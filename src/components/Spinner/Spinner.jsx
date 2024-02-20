import style from './Spinner.module.scss';

export const Spinner = ({ text }) => {
  return (
    <div className={style.container}>
      <span className={style.loader}></span>
      <span className={style.text}>{text}</span>
    </div>
  );
};
