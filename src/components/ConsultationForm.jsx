import styles from "../scss/ConsultationForm.module.scss";
import Dropdown from "./Dropdown";
import Button from "./Button";
import { useContext } from "react";
import TilteContext from "./Context";

const ConsultationForm = () => {
  const { consultationTopics } = useContext(TilteContext);
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          placeholder="Имя"
          required
        />
        <input
          className={styles.input}
          type="tel"
          name="phone"
          placeholder="+7 (___) ___-__-__"
          required
        />
        <Dropdown list={consultationTopics} />
        <Button content={"Получить бесплатную консультацию"} />
      </form>
    </div>
  );
};
export default ConsultationForm;
