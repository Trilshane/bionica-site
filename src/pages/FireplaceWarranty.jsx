import { Link } from "react-scroll";
import FireIconOneLine from "../components/FireIconOneLine";
import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import guaranteeImg from "../images/Guarantee-img.jpg";

import styles from "../scss/FireplaceWarranty.module.scss";

const FireplaceWarranty = () => {
  return (
    <div className={styles.bgContainer}>
      <div id="fireplaceWarranty" className={styles.container}>
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
            to="fireplaceWarranty"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            Гарантия
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.firstTitle}>Гарантия</h1>
          <FireIconOneLine />
          <h3 className={styles.secondTitle}>
            Вы получите <span className={styles.bold}>надежную вещь,</span>{" "}
            которая не надоест.
          </h3>
          <p className={styles.textContent}>
            Наши менеджеры с удовольствием подберут биокамин под Ваши задачи.
          </p>
        </div>
        <div className={styles.contentContainer}>
          <img src={guaranteeImg} alt="guaranteeImg" />
          <h3 className={styles.contentTitile}>
            Биокамины Bionika{" "}
            <span className={styles.bold}>отличного качества</span>.
          </h3>
          <p className={styles.textContent}>
            Используем качественную толстую сталь (2-4 мм). Каждая деталь
            режется на лазерном станке ЧПУ. При покраске биокамина применяется
            кремне-органическая краска, выдерживающая температуру до 1200 С.
          </p>
          <h3 className={styles.contentTitile}>
            <span className={styles.bold}>Качество не устроило? </span>{" "}
            Переделываем за наш счет. Гарантия на все изделия 5 лет
          </h3>
        </div>
      </div>
    </div>
  );
};
export default FireplaceWarranty;
