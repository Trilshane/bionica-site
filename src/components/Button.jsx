import styles from "../scss/Button.module.scss";

const Button = ({ content }) => {
  return (
    <>
      <button className={styles.btn}>{content}</button>
    </>
  );
};
export default Button;
