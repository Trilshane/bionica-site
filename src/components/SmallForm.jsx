import { useState } from "react";
import axios from "axios";
import { useContext } from "react";

import styles from "../scss/SmallForm.module.scss";

import TilteContext from "./Context";

const SmallForm = ({ content }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { setThanksModalIsOpen } = useContext(TilteContext);

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    axios({
      url: "/sendEmailSmallForm.php",
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
          type="text"
          name="name"
          value={name}
          placeholder="Имя"
          required
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
        <button type="submit" className={styles.btn}>
          {content}
        </button>
      </form>
    </div>
  );
};
export default SmallForm;
