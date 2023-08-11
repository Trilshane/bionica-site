import styles from "../scss/Button.module.scss";

const Button = ({ click, content }) => {
  return (
    <>
      <button onClick={click} className={styles.btn}>
        {content}
      </button>
    </>
  );
};
export default Button;
