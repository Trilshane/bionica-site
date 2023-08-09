import FireIconOneLine from "../components/FireIconOneLine";
import homeIcon from "../images/home-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import video from "../video/gif4.mp4";
import img from "../images/test-img.png";

import styles from "../scss/Delivery.module.scss";
import ConsultationForm from "../components/ConsultationForm";

const Delivery = () => {
  return (
    <div className={styles.bgConatiner}>
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
            <span className={styles.content}>Доставка</span>
          </a>
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <span className={styles.bold}>Доставляем</span> по РФ и СНГ в 300 +
            городов
          </h1>
          <FireIconOneLine />
          <p className={styles.content}>
            За 10 лет опыта мы стали специалистами в надежной доставке. <br />{" "}
            <br />
            200 тонн, - общий вес доставленных нами биокаминов за 2022 г.
          </p>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentElem}>
            <h3 className={styles.title}>
              <span className={styles.bold}>Тест упаковки биокамина</span> в
              портале из дерева
            </h3>
            <video
              className={styles.media}
              src={video}
              autoPlay
              playsInline
              loop
              muted
            ></video>
          </div>
          <div className={styles.contentElem}>
            <h3 className={styles.title}>
              <span className={styles.bold}>Фото-контроль</span> сдачи груза
            </h3>
            <img className="media" src={img} alt="img" />
          </div>
        </div>
        <div className={styles.formContainer}>
          <h3 className={styles.title}>
            Получите{" "}
            <span className={styles.bold}>бесплатную консультацию</span> нашего
            логиста в течении 15 минут
          </h3>
          <ConsultationForm />
        </div>
      </div>
    </div>
  );
};
export default Delivery;
