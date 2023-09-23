import styles from "../scss/ThanksModal.module.scss";
import photoSuccess from "../images/photo_success.png";
import signature from "../images/signature.svg";
import { RiCloseFill } from "react-icons/ri";
import { useContext, useState } from "react";
import TilteContext from "./Context";
import katalog from "../object/katalog.pdf";
import play from "../images/Start.png";

const ThanksModal = () => {
  const { setThanksModalIsOpen } = useContext(TilteContext);
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className={styles.bgContainer}>
      <div
        onClick={() => setThanksModalIsOpen(false)}
        className={styles.closeBtn}
      >
        <RiCloseFill />
      </div>
      <div className={styles.titleContainer}>
        <h3 className={styles.title}>Спасибо за заявку!</h3>
        <a
          href={katalog}
          target="_blank"
          rel="noreferrer"
          className={styles.btnHidden}
        >
          Скачать каталог
        </a>
        <p className={styles.textContent}>
          Наши специалисты свяжутся с Вами в ближайшее время!
        </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentFlexContainer}>
          {!showVideo ? (
            <div className={styles.wrapper}>
              <img
                onClick={() => setShowVideo(true)}
                className={styles.play}
                src={play}
                alt="start"
              />
            </div>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/B8epIqQBWyc?showinfo=0&controls=0&rel=0&autoplay=1"
              className={styles.video}
              width="760"
              height="430"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}

          <div className={styles.textContainer}>
            <div className={styles.textFlexContainer}>
              <div className={styles.borderContainer}>
                <div className={styles.imgContainer}>
                  <img src={photoSuccess} alt="photoSuccess" />
                </div>
              </div>
              <div className={styles.respectContainer}>
                <p className={styles.text}>
                  С уважением, директор компании{" "}
                  <span className={styles.color}>Bionika</span> <br /> Павлов
                  И.В.
                </p>
                <img
                  className={styles.signature}
                  src={signature}
                  alt="signature"
                />
              </div>
            </div>
            <a
              href={katalog}
              target="_blank"
              rel="noreferrer"
              className={styles.btn}
            >
              Скачать каталог
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThanksModal;
