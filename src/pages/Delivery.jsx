import { Link } from "react-scroll";

import FireIconOneLine from "../components/FireIconOneLine";
import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import video from "../video/gif4.mp4";
import img from "../images/test-img.png";

import styles from "../scss/Delivery.module.scss";
import ConsultationForm from "../components/ConsultationForm";

const Delivery = () => {
  return (
    <div className={styles.bgConatiner}>
      <div id="delivery" className={styles.container}>
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
            to="delivery"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            Доставка
          </Link>
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
