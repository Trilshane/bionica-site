import img from "../images/workIcon.svg";
import img1 from "../images/workIcon1.svg";
import img2 from "../images/workIcon2.svg";
import img3 from "../images/workIcon3.svg";
import img4 from "../images/workIcon4.svg";
import img5 from "../images/workIcon5.svg";
import img6 from "../images/workIcon6.svg";
import img7 from "../images/workIcon7.svg";
import img8 from "../images/workIcon8.svg";

import styles from "../scss/WorkAdvantages.module.scss";
import FireIconOneLine from "./FireIconOneLine";
import SmallForm from "../components/SmallForm";

const advantages = [
  { icon: img, advantages: "Официальное трудоустройство" },
  { icon: img1, advantages: "Выплата заработной платы 2 раза в месяц" },
  { icon: img2, advantages: "Обеспечение спецодеждой и СИЗ" },
  { icon: img3, advantages: "Социальный пакет" },
  { icon: img4, advantages: "Достойная оплата труда" },
  { icon: img5, advantages: "График работы – 60/30" },
  { icon: img6, advantages: "Оплата проезда до места проведения работ" },
  { icon: img7, advantages: "Бесплатное трехразовое питание" },
  { icon: img8, advantages: "Проживание в благоустроенном вахтовом городке" },
];

const WorkAdvantages = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши условия</h2>
        <FireIconOneLine />
        <div className={styles.advantageContainer}>
          {advantages.map((advantage) => (
            <div key={advantage.advantages} className={styles.advantage}>
              <img src={advantage.icon} alt="img" />
              <p>{advantage.advantages}</p>
            </div>
          ))}
        </div>
        <div className={styles.formContainer}>
          <h4>
            Оставьте свои контактные данные и мы свяжемся с вами в ближайшее
            время
          </h4>
          <SmallForm content={"Отправить данные и получить работу"} />
        </div>
      </div>
    </div>
  );
};
export default WorkAdvantages;
