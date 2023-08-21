import { CSSTransition } from "react-transition-group";
import axios from "axios";
import { useState, useContext } from "react";

import styles from "../scss/HeadPage.module.scss";

import checkMark from "../images/home-icon.svg";
import ButtonWithIcon from "../components/ButtonWithIcon";
import BlackModal from "../components/BlackModal";
import HeaderTop from "../components/HeaderTop";
import Header from "../components/Header";
import TilteContext from "../components/Context";

const HeadPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [catalogModal, setCatalogModal] = useState(false);
  const closeModalWindow = () => setCatalogModal(false);
  const { setThanksModalIsOpen } = useContext(TilteContext);

  const handleSubmit = (e) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    axios({
      url: "/sendEmailSmallForm.php",
      method: "post",
      data: formData,
    })
      .then((res) => {
        setThanksModalIsOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div id="headPage" className={styles.container}>
      <HeaderTop />
      <Header />
      <div className={styles.titleZone}>
        <p className={styles.title}>
          <b className={styles.bold}>Надежный</b> биокамин
          <b className={`${styles.bold} ${styles.titleHide}`}>
            {" "}
            премиум качества
          </b>{" "}
          от производителя.
        </p>
        <div className={styles.content}>
          <div className={styles.contentItem}>
            <img src={checkMark} alt="checkMark" />
            <p>
              На 30% дешевле<span className={styles.bold}> аналогов. </span>
              Итальянский дизайн.
            </p>
          </div>
          <div className={styles.contentItem}>
            <img src={checkMark} alt="checkMark" />
            <p>
              Доставка<span className={styles.bold}> 0 рублей. </span>
              Подберем из 200 моделей.
            </p>
          </div>
          <div className={styles.contentItem}>
            <img src={checkMark} alt="checkMark" />
            <p>
              <span className={styles.bold}> Оплата при получении </span>в 236
              городах.
            </p>
          </div>
        </div>
        <div className={styles.btnZone}>
          <div className={styles.btnZoneText}>
            <p>
              Получите новый каталог биокаминов
              <span className={styles.bold}> Bionika 2023</span> прямо сейчас!
            </p>
          </div>
          <ButtonWithIcon
            click={() => setCatalogModal(true)}
            content={"Получить каталог"}
          />
        </div>
        <div className={styles.formZone}>
          <h3 name className={styles.formZoneTitile}>
            Получите ссылку на каталог прямо сейчас!
          </h3>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите имя"
              required
            />
            <input
              name="phone"
              type="tel"
              value={phone}
              placeholder="+7 (___) ___-__-__"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Получить ссылку на каталог</button>
          </form>
        </div>
      </div>
      <CSSTransition
        in={catalogModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={"Каталог биокаминов"}
          closeModal={closeModalWindow}
          message={false}
          state={catalogModal}
          btn={"Получить каталог"}
        />
      </CSSTransition>
    </div>
  );
};
export default HeadPage;
