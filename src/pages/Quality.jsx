import { useState } from "react";
import { Link } from "react-scroll";
import { CSSTransition } from "react-transition-group";

import Button from "../components/Button";
import FireIconOneLine from "../components/FireIconOneLine";
import BlackModal from "../components/BlackModal";

import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";

import styles from "../scss/Quality.module.scss";

import video1 from "../video/gif1-min.mp4";
import video2 from "../video/gif2.mp4";
import video3 from "../video/gif3.mp4";

const videoElems = [
  {
    firstTitle: "Внимательны к деталям при 3Д проектировании",
    video: video1,
    secondTitle: "Опыт в проектировании более 1325 моделей",
  },
  {
    firstTitle: "Свое производсво с лучшим оборудованием",
    video: video2,
    secondTitle: "Точность всех деталей 0.1 мм",
  },
  {
    firstTitle: "Опытные мастера на каждом этапе",
    video: video3,
    secondTitle: "Обязательный контроль качества каждого изделия",
  },
];

const Quality = () => {
  const [videoInstructionModal, setVideoInstructionModal] = useState(false);
  const closeModalWindow = () => setVideoInstructionModal(false);
  return (
    <div className={styles.bgContainer}>
      <div id="quality" className={styles.container}>
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
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            Качественно
          </Link>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.firstTitle}>Качственно</h1>
          <FireIconOneLine />
          <div className={styles.videosContainer}>
            {videoElems.map((videoElem) => (
              <div className={styles.videoElem}>
                <h5 className={styles.videoTitle}>{videoElem.firstTitle}</h5>
                <video
                  className={styles.video}
                  src={videoElem.video}
                  autoPlay
                  playsInline
                  loop
                  muted
                ></video>
                <h5 className={styles.videoTitle}>{videoElem.secondTitle}</h5>
              </div>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <p className={styles.buttonContainerTitle}>
              <span className={styles.bold}>
                Запишитесь на видео-экскурсию с менеджером
              </span>{" "}
              на наше производство
            </p>
            <Button
              click={() => setVideoInstructionModal(true)}
              content={"Записаться"}
            />
          </div>
        </div>
      </div>
      <CSSTransition
        in={videoInstructionModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={"Записаться на видео-экскурсию"}
          closeModal={closeModalWindow}
          message={false}
          state={videoInstructionModal}
          btn={"Записаться"}
        />
      </CSSTransition>
    </div>
  );
};
export default Quality;
