import styles from "../scss/ButtonWithIcon.module.scss";

const ButtonWithIcon = ({ content }) => {
  return <button className={styles.btn}>{content}</button>;
};
export default ButtonWithIcon;
