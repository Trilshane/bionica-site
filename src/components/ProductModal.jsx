import { useContext, useEffect, useRef } from "react";
import { RiCloseFill } from "react-icons/ri";

import styles from "../scss/ProductModal.module.scss";
import TilteContext from "./Context";
import Carusel from "./Carusel";
import Button from "./Button";

const ProductModal = ({
  name,
  photos,
  about,
  sizes,
  power,
  fireLength,
  burnerVolume,
  material,
  price,
  modalCaruselSettings,
  click,
  clickCatalog,
}) => {
  const { category, modalIndex, setModalIndex } = useContext(TilteContext);
  const modalRef = useRef();
  const modalWindowRef = useRef();

  useEffect(() => {
    const clickOutside = (e) => {
      if (modalRef.current.contains(e.target)) {
        console.log(1);
        if (!modalWindowRef.current.contains(e.target)) {
          setModalIndex();
        }
      }
    };
    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [setModalIndex]);
 
  return (
    <div ref={modalRef} className={styles.container}>
      <div ref={modalWindowRef} className={styles.modalWindow}>
        <button className={styles.closeButton} onClick={() => setModalIndex()}>
          <RiCloseFill />
        </button>
        <div className={styles.modalWindowContent}>
          <div className={styles.modalWindowLeftContent}>
            <div className={styles.photoContainer}>
              <Carusel
                photos={photos}
                caruselSettings={modalCaruselSettings}
                // width={"400px"}
              />
            </div>
            <div className={styles.guarantee}>
              <p className={styles.guaranteeContent}>
                <span className={styles.bold}>Гарантия</span> 5 лет.
              </p>
              <p className={styles.guaranteeContent}>
                Топливо и зажигалка
                <span className={styles.bold}>в падарок!</span>
              </p>
              <p className={styles.guaranteeContent}>
                <span className={styles.bold}>Бесплатно доставим</span> по РФ за
                1-5 дней
              </p>
            </div>
            <Button click={click} content={"Купить в 1 клик"} />
          </div>
          <div className={styles.modalWindowRightContent}>
            <h4 className={styles.title}>{name}</h4>
            <p className={styles.about}>
              <span className={styles.bold}>Описание:</span>
              <br />
              <br />
              {about}
            </p>
            <div className={styles.characteristics}>
              <p className={styles.bold}>Характеристики:</p>
              {modalIndex === 0 && category === 2 ? (
                <p className={styles.individual}>
                  Индивидуальное проектирование!
                </p>
              ) : (
                <div className={styles.characteristicsZone}>
                  <div className={styles.characteristicsContent}>
                    <p className={styles.titleContent}>Размеры</p>
                    <div className={styles.border}></div>
                    <p className={styles.content}>{sizes}</p>
                  </div>
                  <div className={styles.characteristicsContent}>
                    <p className={styles.titleContent}>Мощность</p>
                    <div className={styles.border}></div>
                    <p className={styles.content}>{power}</p>
                  </div>
                  <div className={styles.characteristicsContent}>
                    <p className={styles.titleContent}>Длинна огня</p>
                    <div className={styles.border}></div>
                    <p className={styles.content}>{fireLength}</p>
                  </div>
                  <div className={styles.characteristicsContent}>
                    <p className={styles.titleContent}>Объем горелки</p>
                    <div className={styles.border}></div>
                    <p className={styles.content}>{burnerVolume}</p>
                  </div>
                  <div className={styles.characteristicsContent}>
                    <p className={styles.titleContent}>Материал</p>
                    <div className={styles.border}></div>
                    <p className={styles.content}>{material}</p>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.priceZone}>
              <div className={styles.existence}>
                <p className={styles.existenceContent}>
                  В наличии на складе,{" "}
                  <span className={styles.green}>2шт.</span>
                </p>
                <p className={styles.vendorCode}>Арт. 110122</p>
              </div>
              <p className={styles.price}>
                <span className={styles.bold}>{price}</span>
              </p>
            </div>
            <div className={styles.otherModels}>
              Эту модель в другом цвете и размерах, а так же другие модели
              смотрите{" "}
              <span onClick={clickCatalog} className={styles.catalogLink}>
                в нашем каталоге
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
