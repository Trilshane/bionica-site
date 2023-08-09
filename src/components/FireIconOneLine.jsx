import fireIcon from "../images/fire-icon.svg";

import styles from "../scss/FireIconOneLine.module.scss";

const FireIconOneLine = () => {
  return (
    <div className={styles.titleIcon}>
      <img className="icon" src={fireIcon} alt="fireIcon" />
    </div>
  );
};
export default FireIconOneLine;
