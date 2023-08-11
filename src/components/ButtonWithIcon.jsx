import styles from "../scss/ButtonWithIcon.module.scss";

const ButtonWithIcon = ({ content, click }) => {
  return (
    <button onClick={click} className={styles.btn}>
      {content}
    </button>
  );
};
export default ButtonWithIcon;
