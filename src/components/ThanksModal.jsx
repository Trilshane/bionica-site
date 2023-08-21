import styles from "../scss/ThanksModal.module.scss";
import photoSuccess from "../images/photo_success.png";
import { RiCloseFill } from "react-icons/ri";
import { useContext } from "react";
import TilteContext from "./Context";
import katalog from "../object/katalog.pdf";

const ThanksModal = () => {
  const { setThanksModalIsOpen } = useContext(TilteContext);
  return (
    <div className={styles.bgContainer}>
      <img className={styles.imgDirector} src={photoSuccess} alt="success" />
      <h1 className={styles.title}>Спасибо за заявку!</h1>
      <div className={styles.contentContainer}>
        <button
          onClick={() => setThanksModalIsOpen(false)}
          className={styles.closeBtn}
        >
          <RiCloseFill />
        </button>
        <div className={styles.texContainer}>
          <h2 className={styles.titleContainer}>
            Наши специалисты свяжутся с вами!
          </h2>
          <p className={styles.content}>
            С уважением, <br /> руководитель компании{" "}
            <span className={styles.color}> Bionika</span>
          </p>
        </div>
        <div className={styles.catalogContainer}>
          <h2 className={styles.CatalogTitle}>Смотреть актуальный каталог</h2>
          <a href={katalog} target="_blank" rel="noreferrer">
            <button className={styles.btn}>Открыть</button>
          </a>
        </div>
        <p className={styles.initials}>Михаил Валерьевич Д.</p>
      </div>
    </div>
  );
};
export default ThanksModal;
