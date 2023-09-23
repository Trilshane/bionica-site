import { Link } from "react-scroll";

import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import img1 from "../images/catalog-img1.png";
import img2 from "../images/catalog-img2.png";

import styles from "../scss/BeautifulAndSafe.module.scss";
import FireIconOneLine from "../components/FireIconOneLine";
import SmallForm from "../components/SmallForm";

const BeautifulAndSafeContentArray = [
  {
    title: "Красиво",
    firstContent: "Окраска биокамина в более чем в 2150 оттенков",
    img: img1,
  },
  {
    title: "Надежно",
    firstContent: "Гарантируем качество более 13 лет",
    img: img2,
    secondContent:
      "Сотрудники расписываются на каждом этапе. Фото-контроль каждого изделия",
  },
];

const BeautifulAndSafe = () => {
  return (
    <div id="beautifulAndSafe" className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.headMenu}>
          <Link
            to="headPage"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.headMenuElement}
          >
            <img
              className={styles.icon}
              loading="lazy"
              src={homeIcon}
              alt="homeIcon"
            />
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
          <img src={menuLine} loading="lazy" alt="menulaine" />
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
          <img src={menuLine} loading="lazy" alt="menulaine" />
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
          <img src={menuLine} loading="lazy" alt="menulaine" />
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
          <img src={menuLine} loading="lazy" alt="menulaine" />
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
          <img src={menuLine} loading="lazy" alt="menulaine" />
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
          <img src={menuLine} loading="lazy" alt="menulaine" />
          <Link
            to="beautifulAndSafe"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            Красиво и надежно
          </Link>
        </div>
        <div className={styles.contentContainer}>
          {BeautifulAndSafeContentArray.map((elem) => (
            <div key={elem.title} className={styles.contentElem}>
              <h3 className={styles.title}>{elem.title}</h3>
              <FireIconOneLine />
              <p className={styles.firstContent}>{elem.firstContent}</p>
              <img
                loading="lazy"
                className={styles.contentElemImg}
                src={elem.img}
                alt="catalogImg"
              />
              <p className={styles.secondContent}>{elem.secondContent}</p>
            </div>
          ))}
        </div>
        <div className={styles.formContainer}>
          <h3 className={styles.title}>
            <span className={styles.bold}>
              Получите ссылку на каталог биокаминов
            </span>{" "}
            прямо сейчас!
          </h3>
          <SmallForm content={"Получить ссылку на каталог!"} />
        </div>
      </div>
    </div>
  );
};
export default BeautifulAndSafe;
