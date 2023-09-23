import { useState } from "react";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";

import BlackModal from "../components/BlackModal";

import logo from "../images/logo.svg";
import phoneIcon from "../images/phone-icon.svg";
import mailIcon from "../images/massages-icon.svg";
import hourIcon from "../images/hour-icon.svg";

import styles from "../scss/FooterWorks.module.scss";

const FooterWorks = () => {
  const [directorMessageModal, setDirectorMessageModal] = useState(false);
  const [modal, setModal] = useState(false);
  const closeModalWindow = () => setDirectorMessageModal(false);
  const closeModalWindow1 = () => setModal(false);

  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.logoContainer}>
            <img className={styles.img} loading="lazy" src={logo} alt="logo" />
            <div className={styles.logoContent}>
              <p>
                Производственное предприятие <br />
                полного цикла с 2013 года
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
                  О нас
                </Link>
              </li>
              <li className={styles.navBarElem}>
                <Link
                  to="#vacans"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className={styles.navElem}
                >
                  Вакансии
                </Link>
              </li>
              <li className={styles.navBarElem}>
                <a
                  className={styles.navElem}
                  onClick={() => {
                    setModal(true);
                  }}
                  href="#!"
                >
                  Связаться с нами
                </a>
              </li>

              <li className={styles.navBarElem}>
                <a
                  className={styles.navElem}
                  onClick={() => {
                    setDirectorMessageModal(true);
                  }}
                  href="#!"
                >
                  Написать директору
                </a>
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
        </div>
        <h3 className={styles.allRightsReserved}>
          Copyright © 2010-2023. ООО "МЕТАЛЛ ЭЛЕКТРО ИНВЕСТ" ИНН 6319250937. Все
          права защищены.
        </h3>
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
      <CSSTransition in={modal} classNames="modal" timeout={600} unmountOnExit>
        <BlackModal
          title={"Связаться с нами"}
          closeModal={closeModalWindow1}
          message={false}
          state={modal}
          btn={"Связаться"}
        />
      </CSSTransition>
    </div>
  );
};
export default FooterWorks;
