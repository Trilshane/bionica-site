import logo from "../images/logo.svg";
import phoneIcon from "../images/phone-icon.svg";
import mailIcon from "../images/massages-icon.svg";
import hourIcon from "../images/hour-icon.svg";

import styles from "../scss/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
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
        <div className={styles.bottomFootContainer}>
          <div className={styles.contactLinks}>
            <a className={styles.contactLink} href="!#">
              <img className={styles.image} src={phoneIcon} alt="img" />
              <span className={styles.content} style={{ fontWeight: "bold" }}>
                8-800-201-75-78
              </span>
            </a>
            <a
              className={styles.contactLink}
              href="mailto:info@bionika-fire.ru"
            >
              <img className={styles.image} src={mailIcon} alt="img" />
              <span className={styles.content}>info@bionika-fire.ru</span>
            </a>
            <div className={styles.contactLink}>
              <img className={styles.image} src={hourIcon} alt="img" />
              <span className={styles.content}>24/7 работаем по РФ и СНГ</span>
            </div>
          </div>
          <div className={styles.links}>
            <a className={styles.link} href="!#">
              Получить чертеж и схему монтажа по Вашим размерами
            </a>
            <a className={styles.link} href="!#">
              Ответы на вопросы
            </a>
            <a className={styles.link} href="!#">
              Заказать звонок
            </a>
          </div>
        </div>
        <h3 className={styles.allRightsReserved}>
          Copyright © 2010-2023. ООО "МЕТАЛЛ ЭЛЕКТРО ИНВЕСТ" ИНН 6319250937. Все
          права защищены.
        </h3>
      </div>
    </div>
  );
};
export default Footer;
