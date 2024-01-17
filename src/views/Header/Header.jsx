import { Logo } from '../../components/Logo/Logo';
import { Navigation } from '../../components/Navigation/Navigation';
import { Search } from '../../components/Search/Search';
import { Container } from '../Container/Container';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <Container className={style.container}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.search}>
          <Search />
        </div>
        <div className={style.navigation}>
          <Navigation />
        </div>
      </Container>
    </header>
  );
};
