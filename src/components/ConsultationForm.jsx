import { useState, useEffect, useContext, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

import styles from "../scss/ConsultationForm.module.scss";

import dropDown from "../images/arrow-down.svg";
import TilteContext from "./Context";

const consultationTopics = [
  "Стоимость биокамина",
  "Общие вопросы",
  "Сложности с размещением",
  "Стоимость и срок доставки",
  "Узнать где мой биокамин",
  "Узнать о страховке груза",
  "Монтаж онлайн",
  "Монтаж в готовую нишу",
  "Подбор биокамина по интерьеру",
  "Визуализация биокамина",
  "Предложить услуги",
  "Предложить партнерство",
  "Брак",
  "Процесс производства биокамина",
  "О готовности биокамина",
  "Вопрос по материалам",
  "Консультация",
  "Помогите встроить биокамин",
  "Нужна консультация о технических характеристиках",
];

const ConsultationForm = ({ content }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selected, setSelected] = useState("");
  const [isActive, setIsActive] = useState(false);

  const dropDownRef = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (!dropDownRef.current.contains(e.target)) {
        setIsActive(false);
      }
    };

    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [setIsActive]);
  const { setThanksModalIsOpen } = useContext(TilteContext);

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("consultation", selected);
    console.log(formData);
    axios({
      url: "/sendEmailConsultation.php",
      method: "post",
      data: formData,
    })
      .then((res) => {
        setThanksModalIsOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          name="name"
          type="text"
          placeholder="Имя"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="+7 (___) ___-__-__"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div ref={dropDownRef} className={styles.container}>
          <div
            className={styles.dropdownBtn}
            onClick={() => setIsActive(!isActive)}
          >
            <p className={styles.text}>
              {selected ? selected : "Тема Консультации"}
            </p>
            {selected ? (
              <AiOutlineClose
                className={styles.selectBtn}
                onClick={() => {
                  setSelected("");
                  setIsActive(false);
                }}
              />
            ) : (
              <img
                src={dropDown}
                alt="dropdown"
                style={
                  isActive
                    ? { transform: "rotate(180deg)" }
                    : { transform: "rotate(0deg)" }
                }
                className={styles.selectBtn}
              />
            )}
          </div>
          {isActive && (
            <div className={styles.dropdownContent}>
              {consultationTopics.map((listElem) => (
                <div
                  key={listElem}
                  onClick={() => {
                    setSelected(listElem);
                    setIsActive(false);
                  }}
                  className={styles.dropdownItem}
                >
                  {listElem}
                </div>
              ))}
            </div>
          )}
        </div>
        <input
          style={{ display: "none" }}
          name="consultation"
          value={selected}
        />
        <button type="submit" className={styles.btn}>
          {" "}
          {content}
        </button>
      </form>
    </div>
  );
};
export default ConsultationForm;
