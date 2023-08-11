import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import styles from "../scss/Header.module.scss";

import logo from "../images/logo.svg";
import { useState } from "react";
import BlackModal from "./BlackModal";

const Header = () => {
  const [directorMessageModal, setDirectorMessageModal] = useState(false);
  const closeModalWindow = () => setDirectorMessageModal(false);

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
              <a
                className={styles.navElem}
                onClick={() => setDirectorMessageModal(true)}
                href="#!"
              >
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
      <CSSTransition
        in={directorMessageModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={"Написать директору"}
          closeModal={closeModalWindow}
          message={true}
          state={directorMessageModal}
          btn={"Отправить"}
        />
      </CSSTransition>
    </div>
  );
};
export default Header;
