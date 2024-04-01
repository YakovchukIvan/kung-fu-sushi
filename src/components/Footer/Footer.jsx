import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <hr />
      <div>
        <div>
          <Link to="/">
            <h3>KUNG FU SUSHI</h3>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Політика конфіденційності</h4>
          </Link>
        </div>
        <div>
          <Link to="/">
            <h4>Доставка та ресторани</h4>
          </Link>
        </div>
        <div>
          <img width={50} src="/img/visa-svgrepo.svg" alt="visa" />
          <img width={50} src="/img/mastercard-svgrepo.svg" alt="mastercard" />
        </div>
      </div>
      <hr />
      <div className={styles.protectText}>
        <p>© 2023-2024 Kung Fu Sushi. Всі права захищено</p>
      </div>
    </div>
  );
}

export default Footer;
