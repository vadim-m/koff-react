import { Container } from '../Container/Container';
import { Logo } from '../../components/Logo/Logo';
import style from './Footer.module.scss';
import { Authors } from '../../components/Authors/Authors';
import { Contacts } from '../../components/Contacts/Contacts';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container className={style.container}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.contacts}>
          <Contacts />
        </div>
        <div className={style.authors}>
          <Authors />
        </div>
        <p className={style.copyright}>© Koff, 2024</p>
      </Container>
    </footer>
  );
};
