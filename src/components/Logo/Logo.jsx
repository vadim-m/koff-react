import style from './Logo.module.scss';

export const Logo = () => {
  return (
    <a href="/">
      <img className={style.logo} src="/img/logo.svg" alt="Лого Koff маркет" />
    </a>
  );
};
