import FireIconOneLine from "../components/FireIconOneLine";
import homeIcon from "../images/home-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import guaranteeImg from "../images/Guarantee-img.jpg";

import styles from "../scss/FireplaceWarranty.module.scss";

const FireplaceWarranty = () => {
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
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Гарантия</span>
          </a>
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
