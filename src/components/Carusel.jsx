import Slider from "react-slick";

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import styles from "../scss/Carusel.module.scss";

const Carusel = ({ photos, caruselSettings, width }) => {
  const settings = caruselSettings;
  return (
    <div className={styles.container} style={{ width: width }}>
      <Slider {...settings}>
        {photos.map((photo, i) => (
          <div key={i} className={styles.sliderContainer}>
            <img src={photo} alt="sliderPhoto" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carusel;
