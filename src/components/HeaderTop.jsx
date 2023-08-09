import styles from "../scss/HeaderTop.module.scss";

import phoneIcon from "../images/phone-icon.svg";
import mailIcon from "../images/massages-icon.svg";
import hourIcon from "../images/hour-icon.svg";

const HeaderTop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactLinks}>
        <a className={styles.contactLink} href="!#">
          <img className={styles.image} src={phoneIcon} alt="img" />
          <span className={styles.content} style={{ fontWeight: "bold" }}>
            8-800-201-75-78
          </span>
        </a>
        <a className={styles.contactLink} href="mailto:info@bionika-fire.ru">
          <img className={styles.image} src={mailIcon} alt="img" />
          <span className={styles.content}>info@bionika-fire.ru</span>
        </a>
        <div className={styles.contactLink}>
          <img className={styles.image} src={hourIcon} alt="img" />
          <span className={styles.content}>24/7 работаем по РФ и СНГ</span>
        </div>
      </div>
      <div className={styles.links}>
        <a className={styles.link} href="!#">
          Получить чертеж и схему монтажа по Вашим размерами
        </a>
        <a className={styles.link} href="!#">
          Ответы на вопросы
        </a>
        <a className={styles.link} href="!#">
          Заказать звонок
        </a>
      </div>
    </div>
  );
};
export default HeaderTop;
