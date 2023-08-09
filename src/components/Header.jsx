import styles from "../scss/Header.module.scss";

import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img className={styles.img} src={logo} alt="logo" />
          <div className={styles.logoContent}>
            <p>
              Продажа и производство <br />
              надежных биокаминов с 2013 г.
            </p>
          </div>
        </div>
        <div className={styles.menuContainer}>
          <ul className={styles.navBar}>
            <li className={styles.navBarElem}>
              <a href="#!">Наша продукция</a>
            </li>
            <li className={styles.navBarElem}>
              <a href="#!">Отзывы</a>
            </li>
            <li className={styles.navBarElem}>
              <a href="#!">Качество</a>
            </li>
            <li className={styles.navBarElem}>
              <a href="#!">Оплата и доставка</a>
            </li>
            <li className={styles.navBarElem}>
              <a href="#!">Гарантия</a>
            </li>
            <li className={styles.navBarElem}>
              <a href="#!">Написать директору</a>
            </li>
            <li className={styles.navBarElem}>
              <a href="#!">Дизайнерам</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
