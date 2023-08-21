import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";

import styles from "../scss/Header.module.scss";

import logo from "../images/logo.svg";
import phoneIcon from "../images/phone-icon.svg";
import BlackModal from "./BlackModal";
import adaptiveBtn from "../images/bars.svg";

const Header = () => {
  const [directorMessageModal, setDirectorMessageModal] = useState(false);
  const closeModalWindow = () => setDirectorMessageModal(false);
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [navBar, setNavBar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <div
      style={
        scrollY !== 0
          ? {
              backgroundColor: "rgba(31, 37, 54, 0.8)",
              padding: "5px 0 15px 0",
            }
          : {}
      }
      className={styles.container}
    >
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
          <ul
            className={
              navBar ? `${styles.navBar} ${styles.active}` : styles.navBar
            }
          >
            <li className={styles.navBarElem}>
              <Link
                onClick={() => setNavBar(false)}
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
                onClick={() => setNavBar(false)}
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
                onClick={() => setNavBar(false)}
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
                onClick={() => setNavBar(false)}
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
                onClick={() => setNavBar(false)}
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
                onClick={() => {
                  setNavBar(false);
                  setDirectorMessageModal(true);
                }}
                href="#!"
              >
                Написать директору
              </a>
            </li>
            <li className={styles.navBarElem}>
              <Link
                onClick={() => setNavBar(false)}
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
        <div className={styles.mobileLinks}>
          <div className={styles.phoneLink}>
            {" "}
            <a className={styles.contactLink} href="tel:+78002017578">
              <img className={styles.image} src={phoneIcon} alt="img" />
              <span className={styles.content} style={{ fontWeight: "bold" }}>
                8-800-201-75-78
              </span>
            </a>
          </div>
          <div
            className={styles.navBarAdaptive}
            onClick={() => setNavBar(!navBar)}
          >
            {" "}
            <img src={adaptiveBtn} alt="adaptivbtn" />{" "}
          </div>
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
