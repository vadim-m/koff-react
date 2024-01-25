import style from './Button.module.scss';

export const Button = ({ text, filled = false }) => {
  return <button className={`${style.btn} ${filled ? style.filled : ''}`}>{text}</button>;
};
