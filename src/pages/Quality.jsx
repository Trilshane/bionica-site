import Button from "../components/Button";
import FireIconOneLine from "../components/FireIconOneLine";

import homeIcon from "../images/home-icon.svg";
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
            <Button content={"Записаться"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quality;
