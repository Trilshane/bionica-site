import { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-scroll";

import TilteContext from "../components/Context";
import MapElem from "../components/MapElem";
import BlackModal from "../components/BlackModal";
import Button from "../components/Button";
import FireIconTwoLine from "../components/FireIconTwoLine";

import styles from "../scss/Reviews.module.scss";

import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import map from "../images/map-russia.png";
import Adygea from "../images/map-reviews/Адыгея.jpg";
import Anadyr from "../images/map-reviews/Анадырь.jpg";
import Krasnodar from "../images/map-reviews/Краснодар3.jpg";
import Krasnoyarsk from "../images/map-reviews/Красноярск.jpg";
import Rostov from "../images/map-reviews/Ростов.jpg";
import Stavropol from "../images/map-reviews/Ставрополь.jpeg";
import Tyumen from "../images/map-reviews/Тюмень.jpg";
import Vladymyr from "../images/map-reviews/владимир.jpeg";
import Volgograd from "../images/map-reviews/волгоград.jpeg";
import Kazan from "../images/map-reviews/казань2.jpg";
import Kyrov from "../images/map-reviews/киров.jpeg";
import Moscow from "../images/map-reviews/москва.jpeg";
import Nyagan from "../images/map-reviews/нягань.jpg";
import Petrozavodsk from "../images/map-reviews/петразоводск.jpeg";
import Samara from "../images/map-reviews/самара2.jpg";
import Surgut from "../images/map-reviews/сургут.jpg";
import Cherepovets from "../images/map-reviews/череповец.jpeg";
import Yakutsk from "../images/map-reviews/якутск.jpeg";
import review1 from "../images/map-reviews/анапа.jpeg";
import review2 from "../images/map-reviews/геленджик.jpeg";
import review3 from "../images/map-reviews/ейск.jpeg";
import review4 from "../images/map-reviews/краснодар.jpeg";
import review5 from "../images/map-reviews/набережные челны.jpeg";
import review6 from "../images/map-reviews/нягань.jpeg";
import review7 from "../images/map-reviews/пенза.jpeg";
import Carusel from "../components/Carusel";

const reviews = [
  Adygea,
  Anadyr,
  Krasnodar,
  Krasnoyarsk,
  Rostov,
  Stavropol,
  Tyumen,
  Vladymyr,
  Volgograd,
  Kazan,
  Kyrov,
  Moscow,
  Nyagan,
  Petrozavodsk,
  Samara,
  Surgut,
  Cherepovets,
  Yakutsk,
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
  review7,
];

const Reviews = () => {
  const [deleviryModal, setDeleviryModal] = useState(false);
  const closeModalWindow = () => setDeleviryModal(false);

  const { today, modalCaruselSettings } = useContext(TilteContext);
  return (
    <div id="reviews" className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.headMenu}>
          <Link
            to="headPage"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={styles.headMenuElement}
          >
            <img className={styles.icon} src={homeIcon} alt="homeIcon" />
          </Link>
          <Link
            to="product"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement}`}
          >
            Наша продукция
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement}`}
          >
            О нас
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="workExamples"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} `}
          >
            Примеры
          </Link>
          <img src={menuLine} alt="menulaine" />
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            Отзывы
          </Link>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              <span className={styles.bold}>Отзывы</span> реальных покупателей
            </h1>
            <FireIconTwoLine />
            <div className={styles.mapContainer}>
              <img src={map} alt="map" />
              <MapElem photo={Adygea} top={74.24} left={4.45} />
              <MapElem photo={Anadyr} top={6.24} left={86.62} />
              <MapElem photo={Krasnodar} top={71.55} left={3.45} />
              <MapElem photo={Krasnoyarsk} top={71.36} left={51.33} />
              <MapElem photo={Rostov} top={68.86} left={6.45} />
              <MapElem photo={Stavropol} top={71.55} left={7.68} />
              <MapElem photo={Tyumen} top={70.55} left={32.58} />
              <MapElem photo={Vladymyr} top={53.72} left={14.8} />
              <MapElem photo={Volgograd} top={70.72} left={11.8} />
              <MapElem photo={Kazan} top={59.72} left={18.49} />
              <MapElem photo={Kyrov} top={55.64} left={18.49} />
              <MapElem photo={Moscow} top={56.64} left={13.26} />
              <MapElem photo={Nyagan} top={51.64} left={26.26} />
              <MapElem photo={Petrozavodsk} top={36.76} left={17.24} />
              <MapElem photo={Samara} top={66.76} left={18.49} />
              <MapElem photo={Surgut} top={54.64} left={38.21} />
              <MapElem photo={Cherepovets} top={49.64} left={13.26} />
              <MapElem photo={Yakutsk} top={51.64} left={66.28} />
            </div>

            <div className={styles.reviewCaruselContainer}>
              <Carusel
                photos={reviews}
                caruselSettings={modalCaruselSettings}
              />
            </div>

            <h4 className={styles.deliveryTitle}>
              <span className={styles.bold}>Доставка 0 рублей </span> по России
              до {today}
            </h4>
            <Button
              click={() => setDeleviryModal(true)}
              content={"Получить бесплатную доставку"}
            />
          </div>
        </div>
      </div>
      <CSSTransition
        in={deleviryModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={"Заказать бесплатную доставку"}
          closeModal={closeModalWindow}
          message={false}
          state={deleviryModal}
          btn={"Отправить"}
        />
      </CSSTransition>
    </div>
  );
};
export default Reviews;
