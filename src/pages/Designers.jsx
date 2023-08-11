import { Link } from "react-scroll";

import FireIconOneLine from "../components/FireIconOneLine";
import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import disignersImg from "../images/conditions-img.jpg";

import styles from "../scss/Designers.module.scss";
import SmallForm from "../components/SmallForm";

const Designers = () => {
  return (
    <div className={styles.bgContainer}>
      <div id="designers" className={styles.container}>
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
            className={`${styles.headMenuElement}`}
          >
            Оплата и доставка
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="designers"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            Дизайнерам
          </Link>
        </div>
        <h1 className={styles.title}>
          <span className={styles.bold}>Лучшие условия</span> для дизайнеров и
          архитекторов
        </h1>
        <FireIconOneLine />
        <div className={styles.textContainer}>
          <p className={styles.textContent}>
            {" "}
            3D Визуализация для вашего клиента. Выполнение чертежей от 1 дня.
            Персональный менеджер консультант.
          </p>
          <p className={styles.textContent}>
            {" "}
            Понятные и красочные КП. Точное соблюдение сроков. Видео процесса
            производства. Индивидуальные бонуcы.
          </p>
          <p className={styles.textContent}>
            Решим технические задачи и поддержка при монтаже. Ваш клиент
            останется доволен!
          </p>
        </div>
        <img src={disignersImg} alt="disignersImg" />
        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>
            <span className={styles.bold}>Оставьте заявку</span> с Вашими
            контактами в течении 59 секунд и получите биокамин в подарок!
          </h3>
          <SmallForm content={"Получить биокамин в подарок!"} />
        </div>
      </div>
    </div>
  );
};
export default Designers;
