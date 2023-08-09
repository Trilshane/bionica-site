import FireIconOneLine from "../components/FireIconOneLine";
import homeIcon from "../images/home-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import disignersImg from "../images/conditions-img.jpg";

import styles from "../scss/Designers.module.scss";
import SmallForm from "../components/SmallForm";

const Designers = () => {
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
            <span className={styles.content}>Дизайнерам</span>
          </a>
        </div>
        <h1 className={styles.title}>
          <span className={styles.bold}>Лучшие условия</span> для дизайнеров и
          архитекторов
        </h1>
        <FireIconOneLine />
        <div className={styles.textContainer}>
          <p className={styles.textContent}>
            {" "}
            3D Визуализация для вашего клиента. Выполнение чертежей от 1 дня.
            Персональный менеджер консультант.
          </p>
          <p className={styles.textContent}>
            {" "}
            Понятные и красочные КП. Точное соблюдение сроков. Видео процесса
            производства. Индивидуальные бонуcы.
          </p>
          <p className={styles.textContent}>
            Решим технические задачи и поддержка при монтаже. Ваш клиент
            останется доволен!
          </p>
        </div>
        <img src={disignersImg} alt="disignersImg" />
        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>
            <span className={styles.bold}>Оставьте заявку</span> с Вашими
            контактами в течении 59 секунд и получите биокамин в подарок!
          </h3>
          <SmallForm content={"Получить биокамин в подарок!"} />
        </div>
      </div>
    </div>
  );
};
export default Designers;
