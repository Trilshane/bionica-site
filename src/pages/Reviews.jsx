import { useContext } from "react";

import TilteContext from "../components/Context";
import MapElem from "../components/MapElem";

import styles from "../scss/Reviews.module.scss";

import homeIcon from "../images/home-icon.svg";
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
import Button from "../components/Button";
import FireIconTwoLine from "../components/FireIconTwoLine";

const Reviews = () => {
  const { today } = useContext(TilteContext);
  return (
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.headMenu}>
          <a href="#!" className={styles.headMenuElement}>
            <img className={styles.icon} src={homeIcon} alt="homeIcon" />
            <span className={styles.content}>Наша продукция</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>О нас</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Примеры</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Отзывы</span>
          </a>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              <span className={styles.bold}>Отзывы</span> реальных покупателей
            </h1>
            <FireIconTwoLine />
            <div className={styles.mapContainer}>
              <img src={map} alt="map" />
              <MapElem photo={Adygea} top={76.24} left={4.45} />
              <MapElem photo={Anadyr} top={8.24} left={86.62} />
              <MapElem photo={Krasnodar} top={73.55} left={3.45} />
              <MapElem photo={Krasnoyarsk} top={73.36} left={51.33} />
              <MapElem photo={Rostov} top={70.86} left={6.45} />
              <MapElem photo={Stavropol} top={73.55} left={7.68} />
              <MapElem photo={Tyumen} top={72.55} left={32.58} />
              <MapElem photo={Vladymyr} top={55.72} left={14.8} />
              <MapElem photo={Volgograd} top={72.72} left={11.8} />
              <MapElem photo={Kazan} top={61.72} left={18.49} />
              <MapElem photo={Kyrov} top={57.64} left={18.49} />
              <MapElem photo={Moscow} top={58.64} left={13.26} />
              <MapElem photo={Nyagan} top={53.64} left={26.26} />
              <MapElem photo={Petrozavodsk} top={38.76} left={17.24} />
              <MapElem photo={Samara} top={68.76} left={18.49} />
              <MapElem photo={Surgut} top={56.64} left={38.21} />
              <MapElem photo={Cherepovets} top={51.64} left={13.26} />
              <MapElem photo={Yakutsk} top={53.64} left={66.28} />
            </div>
            <h4 className={styles.deliveryTitle}>
              <span className={styles.bold}>Доставка 0 рублей </span> по России
              до {today}
            </h4>
            <Button content={"Получить бесплатную доставку"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reviews;