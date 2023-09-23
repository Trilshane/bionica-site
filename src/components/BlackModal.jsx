import { useRef, useEffect, useState, useContext } from "react";
import { RiCloseFill } from "react-icons/ri";
import axios from "axios";
import styles from "../scss/BlackModal.module.scss";

import TilteContext from "./Context";

const BlackModal = ({ title, closeModal, message, state, btn }) => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [messageModal, setMessageModal] = useState("");
  const { setThanksModalIsOpen } = useContext(TilteContext);

  const modalRef = useRef();
  const blackModal = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (modalRef.current.contains(e.target)) {
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
  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", mail);
    formData.append("message", messageModal);

    axios({
      url: "/sendEmail.php",
      method: "post",
      data: formData,
    })
      .then((res) => {
        closeModal();
        setThanksModalIsOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
  };

  return (
    <div ref={modalRef} onSubmit={handleSubmit} className={styles.container}>
      <div ref={blackModal} className={styles.blackModal}>
        <button onClick={closeModal} className={styles.closeBtn}>
          <RiCloseFill />
        </button>
        <form className={styles.form}>
          <h3 className={styles.title}>{title}</h3>{" "}
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            type="text"
            name="name"
            placeholder="Введите имя"
            required
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={styles.input}
            type="tel"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            required
          />{" "}
          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className={styles.input}
            type="email"
            name="email"
            placeholder="Введите email"
          />
          {message && (
            <textarea
              value={messageModal}
              onChange={(e) => setMessageModal(e.target.value)}
              style={{ resize: "none" }}
              className={styles.input}
              type="text"
              name="message"
              placeholder="Введите сообщение"
              rows={1}
              cols={22}
            />
          )}
          <button type="submit" className={styles.btn}>
            {btn}
          </button>
        </form>
      </div>
      ;
    </div>
  );
};
export default BlackModal;
