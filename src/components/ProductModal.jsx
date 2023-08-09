import { useContext } from "react";
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
}) => {
  const { setModalIndex } = useContext(TilteContext);

  return (
    <div
      onClick={(e) => {
        e.currentTarget === e.target && setModalIndex();
      }}
      className={styles.container}
    >
      <div className={styles.modalWindow}>
        <button className={styles.closeButton} onClick={() => setModalIndex()}>
          <RiCloseFill />
        </button>
        <div className={styles.modalWindowContent}>
          <div className={styles.modalWindowLeftContent}>
            <Carusel
              photos={photos}
              caruselSettings={modalCaruselSettings}
              width={"400px"}
            />
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
            <Button content={"Купить в 1 клик"} />
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
              <p className={styles.characteristicsContent}>
                Размеры: {sizes} мм
              </p>
              <p className={styles.characteristicsContent}>
                Мощность: {power} кВт
              </p>
              <p className={styles.characteristicsContent}>
                Длинна огня: {fireLength} мм
              </p>
              <p className={styles.characteristicsContent}>
                Объем горелки: {burnerVolume} л.
              </p>
              <p className={styles.characteristicsContent}>
                Материал: {material}.
              </p>
            </div>
            <div className={styles.priceZone}>
              <div className={styles.existence}>
                <p className={styles.existenceContent}>
                  В наличии на складе 2шт.
                </p>
                <p className={styles.vendorCode}>110122</p>
              </div>
              <p className={styles.price}>
                <span className={styles.bold}>{price}</span>₽
              </p>
            </div>
            <div className={styles.otherModels}>
              Эту модель в другом цвете и размерах, а так же другие модели
              смотрите <a href="#!">в нашем каталоге</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
