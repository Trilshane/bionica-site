import Slider from "react-slick";

import HeaderTopWorks from "./HeaderTopWorks";
import HeaderWorks from "./HeaderWorks";

import styles from "../scss/HeadPageWorks.module.scss";

import img1 from "../images/worksSliderElem1.webp";
import img2 from "../images/worksSliderElem2.webp";
import img3 from "../images/worksSliderElem3.webp";

const photos = [
  {
    img: img1,
    title: "КРУПНЫЕ ЗАКАЗЧИКИ",
    firstDescription: "Крупные предприятия нефтегазового комплекса",
    secondDescription:
      "Эффективная и своевременная реализация интересов заказчика",
  },
  {
    img: img2,
    title: "ШИРОКАЯ ГЕОГРАФИЯ",
    firstDescription: "Объекты на всей территории Российской Федерации",
    secondDescription:
      "Использование высокотехнологичных и самых современных инженерных решений",
  },
  {
    img: img3,
    title: "КОМФОРТНЫЕ УСЛОВИЯ ТРУДА И ПРОЖИВАНИЯ",
    firstDescription: "Современные общежития, квалифицированное обслуживание",
    secondDescription: "Уважительное отношение к сотрудникам",
    thirdDescription:
      "Соблюдение правил и стандартов в области охраны труда и промышленной безопасности",
  },
];

const HeadPageWorks = () => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
  };
  return (
    <div className={styles.container}>
      <HeaderTopWorks />
      <HeaderWorks />
      <Slider {...settings}>
        {photos.map((photo, i) => (
          <div key={i} className={styles.sliderContainer}>
            <img src={photo.img} alt="sliderPhoto" />
            <div className={styles.textContent}>
              <h2 className={styles.title}>{photo.title}</h2>
              <p className={styles.firstDescription}>
                {photo.firstDescription}
              </p>
              <p className={styles.secondDescription}>
                {photo.secondDescription}
              </p>
              <p className={styles.thirdDescription}>
                {photo.thirdDescription}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeadPageWorks;
