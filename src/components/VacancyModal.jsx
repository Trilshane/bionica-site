import { useContext, useEffect, useRef } from "react";
import { RiCloseFill } from "react-icons/ri";
import styles from "../scss/VacancyModal.module.scss";
import TilteContext from "./Context";
import Button from "./Button";

const VacancyModal = ({
  name,
  conditions,
  responsibilities,
  requirements,
  click,
}) => {
  const { setModalIndex } = useContext(TilteContext);
  const modalRef = useRef();
  const modalWindowRef = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (modalRef.current.contains(e.target)) {
        if (!modalWindowRef.current.contains(e.target)) {
          setModalIndex();
        }
      }
    };
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [setModalIndex]);
  return (
    <div ref={modalRef} className={styles.container}>
      <div ref={modalWindowRef} className={styles.modalWindow}>
        <button className={styles.closeButton} onClick={() => setModalIndex()}>
          <RiCloseFill />
        </button>
        <h2 className={styles.title}>{name}</h2>
        <h4 className={styles.smallTitle}>Условия:</h4>
        <ul>
          {conditions.map((el, i) => {
            return (
              <li key={i} style={{ color: "black" }}>
                {el}
              </li>
            );
          })}
        </ul>
        <h4 className={styles.smallTitle}>Обязанности:</h4>
        <ul>
          {responsibilities.map((el, i) => {
            return (
              <li key={i} style={{ color: "black" }}>
                {el}
              </li>
            );
          })}
        </ul>
        <h4 className={styles.smallTitle}>Требования:</h4>
        <ul>
          {requirements.map((el, i) => {
            return (
              <li key={i} style={{ color: "black" }}>
                {el}
              </li>
            );
          })}
        </ul>
        <div className={styles.description}>
          <p>
            Оставьте заявку, либо свяжитесь с нами по телефону{" "}
            <a href="tel:+79276521765">+7 927 652-17-65</a>
          </p>
          <Button click={click} content={"Хочу устроиться"} />
        </div>
      </div>
    </div>
  );
};
export default VacancyModal;
