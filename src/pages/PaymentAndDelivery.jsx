import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

import Button from "../components/Button";

import FireIconOneLine from "../components/FireIconOneLine";
import BlackModal from "../components/BlackModal";

import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import company1 from "../images/shipping-payment-logo.jpg";
import company2 from "../images/shipping-payment-logo2.jpg";
import company3 from "../images/shipping-payment-logo3.jpg";
import company4 from "../images/shipping-payment-logo4.jpg";
import company5 from "../images/shipping-payment-logo5.jpg";

import styles from "../scss/PaymentAndDeelivery.module.scss";

const transportCompanies = [company1, company2, company3, company4, company5];

const PaymentAndDelivery = () => {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const closeModalWindow1 = () => setModal1Open(false);
  const closeModalWindow2 = () => setModal2Open(false);

  return (
    <div className={styles.bgContainer}>
      <div id="paymentAndDelivery" className={styles.container}>
        <div className={styles.headMenu}>
          <Link
            to="headPage"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.headMenuElement}
          >
            <img className={styles.icon} src={homeIcon} alt="homeIcon" />
          </Link>
          <Link
            to="product"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement}`}
          >
            Наша продукция
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement}`}
          >
            О нас
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="workExamples"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} `}
          >
            Примеры
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement}`}
          >
            Отзывы
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="quality"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement}`}
          >
            Качественно
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="fuelBlocks"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement}`}
          >
            Топливные блоки
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="paymentAndDelivery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            Оплата и доставка
          </Link>
        </div>
        <h1 className={styles.title}>
          <span className={styles.bold}>Оплата</span> и доставка
        </h1>
        <FireIconOneLine />
        <p className={styles.textContent}>
          Биокамины в наличии отправляем на следующей день транспортной
          компанией.
        </p>
        <p className={styles.textContent}>
          Оплата картой, кредиткой, банковским переводом, безналичный расчёт
          (ООО на УСН).
        </p>
        <div className={styles.iconsContainer}>
          {transportCompanies.map((el, i) => (
            <div key={i} className={styles.iconContainer}>
              <img src={el} alt="transportCompanyIcon" />
            </div>
          ))}
        </div>
        <p className={styles.textContent}>
          <span className={styles.bold}>Что мы готовы</span> отправить завтра
        </p>
        <Button
          click={() => setModal1Open(true)}
          content={"Биокамины в наличии"}
        />
        <p className={styles.textContent}>
          Модели из каталога по Вашим размерам{" "}
          <span className={styles.bold}>произведем за 4 дня.</span> <br />
          <span className={styles.bold}>Предоплата 30%.</span> Остаток при
          получении.
        </p>
        <p className={styles.textContent}>
          <span>Закажите надежный биокамин</span> Bionika по Вашим размерам
          прямо сейчас!
        </p>
        <Button
          click={() => setModal2Open(true)}
          content={"Заказать надежный биокамин"}
        />
      </div>
      <CSSTransition
        in={modal1Open}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={
            "Оставте заявку и наши менеджеры свяжутся с вами в течении 15 минут"
          }
          closeModal={closeModalWindow1}
          message={false}
          state={modal1Open}
          btn={"Получить каталог"}
        />
      </CSSTransition>
      <CSSTransition
        in={modal2Open}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={
            "Оставте заявку и наши менеджеры свяжутся с вами в течении 15 минут"
          }
          closeModal={closeModalWindow2}
          message={false}
          state={modal2Open}
          btn={"Заказать надежный биокамин"}
        />
      </CSSTransition>
    </div>
  );
};
export default PaymentAndDelivery;
