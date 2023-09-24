import { CSSTransition } from "react-transition-group";
import styles from "../scss/WorksActiveVacancies.module.scss";
import FireIconOneLine from "./FireIconOneLine";
import { useContext } from "react";
import TilteContext from "./Context";
import VacancyModal from "./VacancyModal";
import BlackModal from "./BlackModal";

const vacancies = [
  {
    name: "Сварщик с опытом на полуавтомат",
    salary: "120 000",
    conditions: [
      "Официальное трудоустройство",
      "Возможность карьерного роста",
      "Постоянная работа на территории производства (Заводское Шоссе г.Самара)",
      "Прозрачный расчет оплаты",
      "Выплаты без задержек",
      "Удобный график на выбор 5/2 или 6/1. Время с 08:00 до 17:00; или с 09:00-18:00 на выбор",
      "Дружный коллектив",
      "Премии за выработку",
    ],

    responsibilities: [
      "Сварка металла после лазерной резки.",
      "Сборка изделий из листового металла толщиной 2-3 мм",
    ],
    requirements: [
      "Ответственность",
      "Исполнительность",
      "Желание работать и зарабатывать",
      "Опыт работы от 1 года ",
      "Внимательность и умение читать простые чертежи",
      "Знание принципов работы с профессиональным инструментом",
    ],
  },
  {
    name: "Маляр на метало конструкции",
    salary: "120 000",
    conditions: [
      "Официальное трудоустройство",
      "Возможность карьерного роста",
      "Постоянная работа на территории производства (Заводское Шоссе г.Самара)",
      "Прозрачный расчет оплаты",
      "Выплаты без задержек",
      "Удобный график на выбор 5/2 или 6/1. Время с 08:00 до 17:00; или с 09:00-18:00 на выбор",
      "Дружный коллектив",
      "Премии за выработку",
    ],

    responsibilities: [
      "Сварка металла после лазерной резки.",
      "Сборка изделий из листового металла толщиной 2-3 мм",
    ],
    requirements: [
      "Ответственность",
      "Исполнительность",
      "Желание работать и зарабатывать",
      "Опыт работы от 1 года ",
      "Внимательность и умение читать простые чертежи",
      "Знание принципов работы с профессиональным инструментом",
    ],
  },
];

const WorksActiveVacancies = () => {
  const { modalIndex, setModalIndex, onClickModal, setOnClickModal } =
    useContext(TilteContext);

  const OnClickModal = () => {
    setModalIndex();
    setOnClickModal(true);
  };
  const closeOnClickModal = () => {
    setOnClickModal(false);
  };

  return (
    <div id="#vacans" className={styles.bgContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Активные вакансии</h2>
        <FireIconOneLine />
        <div className={styles.vacanciesContainer}>
          {vacancies.map((vacancy, i) => (
            <div key={i}>
              <div className={styles.vacancy}>
                <h3>{vacancy.name}</h3>
                <p>Зарплата от {vacancy.salary} рублей</p>
                <button className={styles.btn} onClick={() => setModalIndex(i)}>
                  Узнать подробнее
                </button>
              </div>

              <CSSTransition
                in={i === modalIndex}
                classNames="modal"
                timeout={600}
                unmountOnExit
              >
                <VacancyModal
                  name={vacancy.name}
                  conditions={vacancy.conditions}
                  responsibilities={vacancy.responsibilities}
                  requirements={vacancy.requirements}
                  click={OnClickModal}
                />
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>
      <CSSTransition
        in={onClickModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={
            "Оставте заявку и наши менеджеры свяжутся с вами в течении 15 минут"
          }
          closeModal={closeOnClickModal}
          message={false}
          state={onClickModal}
          btn={"Купить в 1 клик"}
        />
      </CSSTransition>
    </div>
  );
};
export default WorksActiveVacancies;
