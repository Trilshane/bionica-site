import { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";

import styles from "../scss/WorkExamples.module.scss";

import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import Carusel from "../components/Carusel";
import TilteContext from "../components/Context";
import Button from "../components/Button";
import FireIconOneLine from "../components/FireIconOneLine";
import BlackModal from "../components/BlackModal";

const WorkExamples = () => {
  const [catalogModal, setCatalogModal] = useState(false);
  const closeModalWindow = () => setCatalogModal(false);
  const { examplesPhotos, examplesCaruselSettings } = useContext(TilteContext);
  return (
    <div className={styles.bgContainer}>
      <div id="workExamples" className={styles.container}>
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
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            Примеры
          </Link>
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
        <Button click={() => setCatalogModal(true)} content={"Да"} />
      </div>
      <CSSTransition
        in={catalogModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={"Каталог биокаминов"}
          closeModal={closeModalWindow}
          message={false}
          state={catalogModal}
          btn={"Получить каталог"}
        />
      </CSSTransition>
    </div>
  );
};
export default WorkExamples;
