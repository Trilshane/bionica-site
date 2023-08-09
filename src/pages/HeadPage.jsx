import Header from "../components/Header";
import styles from "../scss/HeadPage.module.scss";

import checkMark from "../images/home-icon.svg";
import ButtonWithIcon from "../components/ButtonWithIcon";

const HeadPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.titleZone}>
        <p className={styles.title}>
          <b className={styles.bold}>Надежный</b> биокамин
          <b className={styles.bold}> по Вашим размерам</b> за 4 дня!
        </p>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <img src={checkMark} alt="checkMark" />
            <p>
              На 30% дешевле<span className={styles.bold}> аналогов. </span>
              Итальянский дизайн.
            </p>
          </div>
          <div className={styles.contentItem}>
            <img src={checkMark} alt="checkMark" />
            <p>
              Доставка<span className={styles.bold}> 0 рублей. </span>
              Подберем из 200 моделей.
            </p>
          </div>
          <div className={styles.contentItem}>
            <img src={checkMark} alt="checkMark" />
            <p>
              <span className={styles.bold}> Оплата при получении </span>в 236
              городах.
            </p>
          </div>
        </div>
        <div className={styles.btnZone}>
          <div className={styles.btnZoneText}>
            <p>
              Получите новый каталог биокаминов
              <span className={styles.bold}> Bionika 2023</span> прямо сейчас!
            </p>
          </div>
          <ButtonWithIcon content={"Получить каталог"} />
        </div>
      </div>
    </div>
  );
};
export default HeadPage;
