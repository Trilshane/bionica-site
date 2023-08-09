import { useContext } from "react";

import styles from "../scss/WorkExamples.module.scss";

import homeIcon from "../images/home-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import Carusel from "../components/Carusel";
import TilteContext from "../components/Context";
import Button from "../components/Button";
import FireIconOneLine from "../components/FireIconOneLine";

const WorkExamples = () => {
  const { examplesPhotos, examplesCaruselSettings } = useContext(TilteContext);
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
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.firtsTitle}>
            <span className={styles.bold}>Примеры</span> наших работ
          </h1>
          <FireIconOneLine />
          <h3 className={styles.secondTitle}>
            Наши работы украшают лучшие интерьеры
          </h3>
        </div>
        <div className={styles.caruselContainer}>
          <Carusel
            photos={examplesPhotos}
            caruselSettings={examplesCaruselSettings}
            width={"100%"}
          />
        </div>
        <p className={styles.question}>
          <span className={styles.bold}>Хотите</span> что-то похожее ?
        </p>
        <Button content={"Да"} />
      </div>
    </div>
  );
};
export default WorkExamples;
