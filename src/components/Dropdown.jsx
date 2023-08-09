import { useState, useEffect, useRef } from "react";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";

import styles from "../scss/Dropdown.module.scss";

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

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");

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
  return (
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
            className={styles.btn}
            onClick={() => {
              setSelected("");
              setIsActive(false);
            }}
          />
        ) : (
          <AiFillCaretDown
            style={
              isActive
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            }
            className={styles.btn}
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
  );
};
export default Dropdown;
