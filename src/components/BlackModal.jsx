import { useRef, useEffect } from "react";
import styles from "../scss/BlackModal.module.scss";
import { RiCloseFill } from "react-icons/ri";

const BlackModal = ({ title, closeModal, message, state, btn }) => {
  const modalRef = useRef();
  const blackModal = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (modalRef.current.contains(e.target)) {
        console.log(1);
        if (!blackModal.current.contains(e.target)) {
          closeModal();
        }
      }
    };
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [closeModal]);

  if (state) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "inherit";
  }

  return (
    <div ref={modalRef} className={styles.container}>
      <div ref={blackModal} className={styles.blackModal}>
        <button onClick={closeModal} className={styles.closeBtn}>
          <RiCloseFill />
        </button>
        <form className={styles.form}>
          <h1 className={styles.title}>{title}</h1>{" "}
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder="Введите имя"
            required
          />
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            required
          />{" "}
          <input
            className={styles.input}
            type="email"
            name="mail"
            placeholder="Введите email"
          />
          {message && (
            <textarea
              style={{ resize: "none" }}
              className={styles.input}
              type="text"
              name="message"
              placeholder="Введите сообщение"
              rows={1}
              cols={22}
            />
          )}
          <button className={styles.btn}>{btn}</button>
        </form>
      </div>
      ;
    </div>
  );
};
export default BlackModal;
