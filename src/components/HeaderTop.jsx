import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";

import styles from "../scss/HeaderTop.module.scss";

import phoneIcon from "../images/phone-icon.svg";
import mailIcon from "../images/massages-icon.svg";
import hourIcon from "../images/hour-icon.svg";
import BlackModal from "./BlackModal";

const HeaderTop = () => {
  const [drawModal, setDrawModal] = useState(false);
  const [phoneModal, setPhoneModal] = useState(false);

  const closeDrawModalWindow = () => setDrawModal(false);
  const closePhoneModalWindow = () => setPhoneModal(false);
  return (
    <div className={styles.container}>
      <div className={styles.contactLinks}>
        <a className={styles.contactLink} href="!#">
          <img className={styles.image} src={phoneIcon} alt="img" />
          <span className={styles.content} style={{ fontWeight: "bold" }}>
            8-800-201-75-78
          </span>
        </a>
        <a className={styles.contactLink} href="mailto:info@bionika-fire.ru">
          <img className={styles.image} src={mailIcon} alt="img" />
          <span className={styles.content}>info@bionika-fire.ru</span>
        </a>
        <div className={styles.contactLink}>
          <img className={styles.image} src={hourIcon} alt="img" />
          <span className={styles.content}>24/7 работаем по РФ и СНГ</span>
        </div>
      </div>
      <div className={styles.links}>
        <button onClick={() => setDrawModal(true)} className={styles.link}>
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
export default HeaderTop;
