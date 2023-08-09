import { useContext } from "react";

import styles from "../scss/ProductPage.module.scss";

import homeIcon from "../images/home-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";

import ProductModal from "../components/ProductModal";
import TilteContext from "../components/Context";
import ButtonWithIcon from "../components/ButtonWithIcon";
import FireIconTwoLine from "../components/FireIconTwoLine";

const ProductPage = () => {
  const {
    category,
    setCategory,
    today,
    btns,
    modalIndex,
    setModalIndex,
    currentProducts,
  } = useContext(TilteContext);

  return (
    <div className={styles.container}>
      <div className={styles.headMenu}>
        <a href="#!" className={styles.headMenuElement}>
          <img className={styles.icon} src={homeIcon} alt="homeIcon" />
          <span className={styles.content}>Наша продукция</span>
        </a>

        <img src={menuLine} alt="menulaine" />
      </div>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <p className={styles.firstTitle}>
            Наша <b style={{ fontWeight: "900" }}>продукция</b>
          </p>
          <p className={styles.secondTitle}>в наличии на {today}</p>
          <FireIconTwoLine />
        </div>
        <div className={styles.buttonsZone}>
          {btns.map((btn, i) => (
            <button
              key={btn}
              onClick={() => setCategory(i)}
              className={`${styles.button} ${
                category === i ? `${styles.active}` : ""
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
        <div className={styles.productZone}>
          {currentProducts.map((product, i) => {
            return (
              <div key={product.name} className={styles.product}>
                <img
                  className={styles.titleImage}
                  src={product.titlePhoto}
                  alt="productPhoto"
                />
                <div className={styles.sizesZone}>
                  <p className={styles.sizeZoneElem}>
                    Размеры: {product.sizes} мм
                  </p>
                  <p className={styles.sizeZoneElem}>
                    Мощность: {product.power} кВт
                  </p>
                </div>
                <div className={styles.priceZone}>
                  <div className={styles.price}>
                    <p>Цена:</p>
                    <h1>{product.price} ₽</h1>
                  </div>
                  <button
                    onClick={() => {
                      setModalIndex(i);
                    }}
                  >
                    Подробнее
                  </button>
                </div>
                {i === modalIndex && (
                  <ProductModal
                    name={product.name}
                    photos={product.slidePhotos}
                    about={product.about}
                    sizes={product.sizes}
                    power={product.power}
                    fireLength={product.fireLength}
                    burnerVolume={product.burnerVolume}
                    material={product.material}
                    price={product.price}
                  />
                )}
              </div>
            );
          })}
        </div>
        <ButtonWithIcon content={"Скачать каталог Bionika 2023"} />
      </div>
    </div>
  );
};
export default ProductPage;
