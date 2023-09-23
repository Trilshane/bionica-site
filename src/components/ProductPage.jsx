import { Link } from "react-scroll";
import { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "../scss/ProductPage.module.scss";

import homeIcon from "../images/house-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";

import ProductModal from "../components/ProductModal";
import TilteContext from "../components/Context";
import ButtonWithIcon from "../components/ButtonWithIcon";
import FireIconTwoLine from "../components/FireIconTwoLine";
import BlackModal from "../components/BlackModal";
import Button from "../components/Button";

const ProductPage = () => {
  const [catalogModal, setCatalogModal] = useState(false);
  const closeModalWindow = () => setCatalogModal(false);

  const {
    category,
    setCategory,
    today,
    btns,
    modalIndex,
    setModalIndex,
    currentProducts,
    onClickModal,
    setOnClickModal,
  } = useContext(TilteContext);

  const OnClickCatalogModal = () => {
    setModalIndex();
    setCatalogModal(true);
  };

  const OnClickModal = () => {
    setModalIndex();
    setOnClickModal(true);
  };
  const closeOnClickModal = () => {
    setOnClickModal(false);
  };

  return (
    <div id="product" className={styles.bgContainer}>
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
            <img
              className={styles.icon}
              loading="lazy"
              src={homeIcon}
              alt="homeIcon"
            />
          </Link>
          <Link
            to="product"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className={`${styles.headMenuElement} ${styles.active}`}
          >
            Наша продукция
          </Link>
          <img src={menuLine} loading="lazy" alt="menulaine" />
        </div>
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <p className={styles.firstTitle}>
              Наша <b style={{ fontWeight: "900" }}>продукция</b>
            </p>
            <p className={styles.secondTitle}>в наличии на {today}</p>
          </div>
          <FireIconTwoLine />
          <div className={styles.buttonsZone}>
            {btns.map((btn, i) => (
              <h2
                key={btn}
                onClick={() => setCategory(i)}
                className={`${styles.button} btn${i} ${
                  category === i ? `${styles.active} ` : ""
                }`}
              >
                {btn}
              </h2>
            ))}
          </div>
          <div className={styles.productZone}>
            {currentProducts.map((product, i) => {
              return (
                <div key={product.name} className={styles.product}>
                  <img
                    loading="lazy"
                    className={styles.titleImage}
                    src={product.titlePhoto}
                    alt="productPhoto"
                  />
                  <div className={styles.sizesZone}>
                    <div className={styles.sizeZoneElem}>
                      <p className={styles.title}>Размеры </p>{" "}
                      <div className={styles.border}></div>
                      <p className={styles.content}>{product.sizes}</p>
                    </div>
                    <div className={styles.sizeZoneElem}>
                      <p className={styles.title}>Мощность </p>{" "}
                      <div className={styles.border}></div>
                      <p className={styles.content}>{product.power}</p>
                    </div>
                  </div>
                  <div className={styles.priceZone}>
                    <div className={styles.price}>
                      <p>Цена:</p>
                      <h3>{product.price} </h3>
                    </div>
                    <Button
                      click={() => {
                        setModalIndex(i);
                      }}
                      content={"Подробнее"}
                    />
                  </div>

                  <CSSTransition
                    in={i === modalIndex}
                    classNames="modal"
                    timeout={600}
                    unmountOnExit
                  >
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
                      click={OnClickModal}
                      clickCatalog={OnClickCatalogModal}
                    />
                  </CSSTransition>
                </div>
              );
            })}
          </div>
          <ButtonWithIcon
            click={() => setCatalogModal(true)}
            content={"Скачать каталог Bionika 2023"}
          />
        </div>
      </div>
      <CSSTransition
        in={catalogModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={
            "Получите полный каталог биокаминов и выберите лучший прямо сейчас!"
          }
          closeModal={closeModalWindow}
          message={false}
          state={catalogModal}
          btn={"Получить каталог"}
        />
      </CSSTransition>
      <CSSTransition
        in={onClickModal}
        classNames="modal"
        timeout={600}
        unmountOnExit
      >
        <BlackModal
          title={
            "Оставте заявку и наши менеджеры свяжутся с вами в течении 15 минут"
          }
          closeModal={closeOnClickModal}
          message={false}
          state={catalogModal}
          btn={"Купить в 1 клик"}
        />
      </CSSTransition>
    </div>
  );
};
export default ProductPage;
