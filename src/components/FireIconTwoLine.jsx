import fireIcon from "../images/fire-icon.svg";

import styles from "../scss/FireIconTwoLine.module.scss";

const FireIconTwoLine = () => {
  return (
    <div className={styles.titleIcon}>
      <img className="icon" src={fireIcon} alt="fireIcon" />
    </div>
  );
};
export default FireIconTwoLine;
