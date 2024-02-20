import { Link } from 'react-router-dom';
import style from './Logo.module.scss';

export const Logo = () => {
  return (
    <Link to="/">
      <img className={style.logo} src="/img/logo.svg" alt="Лого Koff маркет" />
    </Link>
  );
};
