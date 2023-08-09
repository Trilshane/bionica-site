import Button from "../components/Button";

import FireIconOneLine from "../components/FireIconOneLine";
import homeIcon from "../images/home-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import company1 from "../images/shipping-payment-logo.jpg";
import company2 from "../images/shipping-payment-logo2.jpg";
import company3 from "../images/shipping-payment-logo3.jpg";
import company4 from "../images/shipping-payment-logo4.jpg";
import company5 from "../images/shipping-payment-logo5.jpg";

import styles from "../scss/PaymentAndDeelivery.module.scss";

const transportCompanies = [company1, company2, company3, company4, company5];

const PaymentAndDelivery = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.headMenu}>
          <a href="#!" className={styles.headMenuElement}>
            <img className={styles.icon} src={homeIcon} alt="homeIcon" />
            <span className={styles.content}>Наша продукция</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>О нас</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Примеры</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Отзывы</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Качество</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Топливные блоки</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Красиво и надежно</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Оплата и доставка</span>
          </a>
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
        <Button content={"Биокамины в наличии"} />
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
        <Button content={"Заказать надежный биокамин"} />
      </div>
    </div>
  );
};
export default PaymentAndDelivery;
