import { useState } from "react";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";

import BlackModal from "../components/BlackModal";

import logo from "../images/logo.svg";
import phoneIcon from "../images/phone-icon.svg";
import mailIcon from "../images/massages-icon.svg";
import hourIcon from "../images/hour-icon.svg";

import styles from "../scss/Footer.module.scss";

const Footer = () => {
  const [drawModal, setDrawModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);

  const closeDrawModalWindow = () => setDrawModal(false);
  const closePhoneModalWindow = () => setPhoneModal(false);

  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logoContainer}>
            <img className={styles.img} loading="lazy" src={logo} alt="logo" />
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
                <Link
                  to="product"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={styles.navElem}
                >
                  Наша продукция
                </Link>
              </li>
              <li className={styles.navBarElem}>
                <Link
                  to="reviews"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={styles.navElem}
                >
                  Отзывы
                </Link>
              </li>
              <li className={styles.navBarElem}>
                <Link
                  to="quality"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={styles.navElem}
                >
                  Качество
                </Link>
              </li>
              <li className={styles.navBarElem}>
                <Link
                  to="paymentAndDelivery"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={styles.navElem}
                >
                  Оплата и доставка
                </Link>
              </li>
              <li className={styles.navBarElem}>
                <Link
                  to="fireplaceWarranty"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={styles.navElem}
                >
                  Гарантия
                </Link>
              </li>
              <li className={styles.navBarElem}>
                <a className={styles.navElem} href="#!">
                  Написать директору
                </a>
              </li>
              <li className={styles.navBarElem}>
                <Link
                  to="designers"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={styles.navElem}
                >
                  Дизайнерам
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomFootContainer}>
          <div className={styles.contactLinks}>
            <a className={styles.contactLink} href="tel:+78002017578">
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
            <button className={styles.link} onClick={() => setDrawModal(true)}>
              Получить чертеж и схему монтажа по Вашим размерами
            </button>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="answers"
              className={styles.link}
            >
              Ответы на вопросы
            </Link>
            <button className={styles.link} onClick={() => setPhoneModal(true)}>
              Заказать звонок
            </button>
          </div>
        </div>
        <h3 className={styles.allRightsReserved}>
          Copyright © 2010-2023. ООО "МЕТАЛЛ ЭЛЕКТРО ИНВЕСТ" ИНН 6319250937. Все
          права защищены.
        </h3>
      </div>
      <CSSTransition
        in={drawModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={"Получить чертеж"}
          closeModal={closeDrawModalWindow}
          message={false}
          state={drawModal}
          btn={"Отправить"}
        />
      </CSSTransition>
      <CSSTransition
        in={phoneModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={"Заказать звонок"}
          closeModal={closePhoneModalWindow}
          message={false}
          state={phoneModal}
          btn={"Заказать"}
        />
      </CSSTransition>
    </div>
  );
};
export default Footer;
