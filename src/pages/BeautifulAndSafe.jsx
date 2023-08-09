import homeIcon from "../images/home-icon.svg";
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
        </div>
        <div className={styles.contentContainer}>
          {BeautifulAndSafeContentArray.map((elem) => (
            <div key={elem.title} className={styles.contentElem}>
              <h1 className={styles.title}>{elem.title}</h1>
              <FireIconOneLine />
              <p className={styles.firstContent}>{elem.firstContent}</p>
              <img src={elem.img} alt="catalogImg" />
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
