import styles from "../scss/SmallForm.module.scss";

const SmallForm = ({ content }) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="text"
          name="text"
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
        <button className={styles.btn}>{content}</button>
      </form>
    </div>
  );
};
export default SmallForm;
