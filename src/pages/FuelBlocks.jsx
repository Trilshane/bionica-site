import { useState, useRef, useEffect } from "react";
import { AiOutlineClose, AiFillCaretDown } from "react-icons/ai";

import Button from "../components/Button";
import FireIconTwoLine from "../components/FireIconTwoLine";

import homeIcon from "../images/home-icon.svg";
import menuLine from "../images/top-menu-bar-line.svg";
import fuelBlock from "../images/block-img.png";

import styles from "../scss/FuelBlocks.module.scss";

const lengthArraySteps = [
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  "1.0",
  1.1,
  1.2,
  1.3,
  1.4,
  1.5,
  1.6,
  1.7,
  1.8,
  1.9,
  "2.0",
  2.5,
  "3.0",
];
const widthPrice = [
  11160, 14940, 18720, 22500, 26280, 30060, 33840, 37620, 41400, 45180, 48960,
  52740, 56520, 60300, 64080, 67860, 71640, 75420, 108000, 135000,
];
const materials = [
  "Из бетона и кирпича",
  "Из гипсокартона",
  "Металлического листа",
  "Керамогранита",
  "Из дерева, МДФ, ДСП",
  "Из вермикулита",
];
const depth = ["Глубина меньше 170 мм", "Глубина больше 170 мм"];
const coverType = ["Слайдер", "Опрокидываемая крышка"];

const FuelBlocks = () => {
  const [materialSelectIsActive, setMaterialSelectIsActive] = useState(false);
  const [materialSelectetd, setMaterialSelected] = useState("");
  const [depthSelectIsActive, setDepthSelectIsActive] = useState(false);
  const [depthSelectetd, setDepthSelectetd] = useState("");
  const [coverTypeSelectActive, setCoverTypeSelectActive] = useState(false);
  const [coverTypeSelectetd, setCoverTypeSelectetd] = useState("");
  const [currentPrice, setCurrentPrice] = useState();

  const [length, setLenth] = useState(3);
  const rangeRef = useRef("");
  const materialRef = useRef("");
  const depthRef = useRef("");
  const coverTypeRef = useRef("");
  const priceIndex = lengthArraySteps.findIndex((i) => i === length);

  useEffect(() => {
    if (
      (materialSelectetd === "Из гипсокартона" &&
        depthSelectetd !== "Глубина больше 170 мм" &&
        coverTypeSelectetd !== "Опрокидываемая крышка") ||
      (materialSelectetd === "Из дерева, МДФ, ДСП" &&
        depthSelectetd !== "Глубина больше 170 мм" &&
        coverTypeSelectetd !== "Опрокидываемая крышка")
    ) {
      setCurrentPrice(Math.floor(widthPrice[priceIndex] * 1.1));
      if (currentPrice !== widthPrice[priceIndex]) {
        setCurrentPrice(Math.floor(widthPrice[priceIndex] * 1.1));
      }
    } else if (
      (materialSelectetd === "Из гипсокартона" &&
        depthSelectetd === "Глубина больше 170 мм" &&
        coverTypeSelectetd !== "Опрокидываемая крышка") ||
      (materialSelectetd === "Из дерева, МДФ, ДСП" &&
        depthSelectetd === "Глубина больше 170 мм" &&
        coverTypeSelectetd !== "Опрокидываемая крышка")
    ) {
      setCurrentPrice(Math.floor(widthPrice[priceIndex] * 1.15));
    } else if (
      (materialSelectetd === "Из гипсокартона" &&
        depthSelectetd === "Глубина больше 170 мм" &&
        coverTypeSelectetd === "Опрокидываемая крышка") ||
      (materialSelectetd === "Из дерева, МДФ, ДСП" &&
        depthSelectetd === "Глубина больше 170 мм" &&
        coverTypeSelectetd === "Опрокидываемая крышка")
    ) {
      setCurrentPrice(Math.floor(widthPrice[priceIndex] * 1.45));
    } else if (
      materialSelectetd !== "Из гипсокартона" &&
      materialSelectetd !== "Из дерева, МДФ, ДСП" &&
      depthSelectetd === "Глубина больше 170 мм" &&
      coverTypeSelectetd !== "Опрокидываемая крышка"
    ) {
      setCurrentPrice(Math.floor(widthPrice[priceIndex] * 1.05));
    } else if (
      materialSelectetd !== "Из гипсокартона" &&
      materialSelectetd !== "Из дерева, МДФ, ДСП" &&
      depthSelectetd !== "Глубина больше 170 мм" &&
      coverTypeSelectetd === "Опрокидываемая крышка"
    ) {
      setCurrentPrice(Math.floor(widthPrice[priceIndex] * 1.3));
    } else if (
      materialSelectetd !== "Из гипсокартона" &&
      materialSelectetd !== "Из дерева, МДФ, ДСП" &&
      depthSelectetd === "Глубина больше 170 мм" &&
      coverTypeSelectetd === "Опрокидываемая крышка"
    ) {
      setCurrentPrice(Math.floor(widthPrice[priceIndex] * 1.35));
    } else if (
      (materialSelectetd === "Из гипсокартона" ||
        materialSelectetd === "Из дерева, МДФ, ДСП") &&
      depthSelectetd !== "Глубина больше 170 мм" &&
      coverTypeSelectetd === "Опрокидываемая крышка"
    ) {
      setCurrentPrice(Math.floor(widthPrice[priceIndex] * 1.4));
    } else {
      setCurrentPrice(widthPrice[priceIndex]);
    }
  }, [
    materialSelectetd,
    currentPrice,
    priceIndex,
    depthSelectetd,
    coverTypeSelectetd,
  ]);

  useEffect(() => {
    const clickOutside = (e) => {
      if (!materialRef.current.contains(e.target)) {
        setMaterialSelectIsActive(false);
      }
      if (!depthRef.current.contains(e.target)) {
        setDepthSelectIsActive(false);
      }
      if (!coverTypeRef.current.contains(e.target)) {
        setCoverTypeSelectActive(false);
      }
    };

    document.addEventListener("click", clickOutside);
    return () => document.removeEventListener("click", clickOutside);
  }, [materialSelectIsActive, depthSelectIsActive, coverTypeSelectActive]);

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
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Качество</span>
          </a>
          <img className={styles.menuLine} src={menuLine} alt="menulaine" />
          <a href="#!" className={styles.headMenuElement}>
            <span className={styles.content}>Топливные блоки</span>
          </a>
        </div>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>
            Топливные <span className={styles.bold}>блоки Bionika</span> служат
            долго!
          </h1>
          <FireIconTwoLine />
          <div className={styles.content}>
            <div className={styles.upContent}>
              <p className={styles.leftText}>
                Самая качественная жаростойкая нержавеющая сталь на
                общедоступном рынке в мире, марки AISI 310 S толщиной 6 мм{" "}
                <br />
                <br />
                Специальный пористый керамический наполнитель, внутри которого
                медные трубки, благодаря им, он не ссыхается. Ваш топливный
                блок, также ярко горит, даже спустя несколько лет! В топливном
                блоке горят пары биотоплива, а не оно само. При такой
                технологии, топливо не прольется, даже если перевернуть блок
                вверх дном. Равномерное распределение биотоплива внутри блока,
                позволяет избежать «хлопков», вызванных скоплением паров,
                образующихся в процессе горения.
              </p>
              <img
                className={styles.fuelBlockImg}
                src={fuelBlock}
                alt="fuelBlock"
              />
              <p className={styles.rightText}>
                Непрерывная линия огня, даже при длине 2000 мм!
                <br />
                <br />
                Уникальная технология защиты от нагара. Отсутствие нагара у
                топливных блоков, благодаря защитному ободку, в зоне горения
                пламени. У Вас всегда будет чистый и красивый топливный блок
                <br />
                <br />
                Высота огня до 250 мм
                <br />
                <br />У нас два типа топливных блоков. С опрокидывающей крышкой
                и слайдером.
              </p>
            </div>
            <div className={styles.downContent}>
              <p className={styles.downText}>
                Топливный блок может быть выполнен по Вашим размерам или его{" "}
                <br />
                конструкция, может быть смоделирована для решения Вашей задачи!
              </p>
            </div>
          </div>
          <div className={styles.calcContainer}>
            <h1 className={styles.calcTitle}>
              <span>Узнайте стоимость топливного блока</span> для Вашего
              биокамина на онлайн калькуляторе
            </h1>
            <div className={styles.swiperZone}>
              <div className={styles.swiper}>
                <p>Длинна</p>{" "}
                <input
                  ref={rangeRef}
                  onInput={(e) => {
                    const currentValue =
                      ((e.target.value - 0) / (19 - 0)) * 100;
                    rangeRef.current.style.background =
                      "linear-gradient(to right, #f96e09 0%, #ecd823 " +
                      currentValue +
                      "%, #fff " +
                      currentValue +
                      "%, white 100%)";

                    const num = lengthArraySteps.findIndex(
                      (i) => i === lengthArraySteps[e.target.value]
                    );
                    setCurrentPrice(widthPrice[num]);
                  }}
                  type="range"
                  min={0}
                  max={19}
                  step={1}
                  onChange={(e) => setLenth(lengthArraySteps[e.target.value])}
                />{" "}
                <p>{length} м.</p>
              </div>
              <p>
                Нажмите на полосу или перемщайте ползунок для изменения длины
                топливного блока
              </p>
            </div>
            <div className={styles.selectZone}>
              <div ref={materialRef} className={styles.selectContainer}>
                <div
                  className={styles.dropdownBtn}
                  onClick={() =>
                    setMaterialSelectIsActive(!materialSelectIsActive)
                  }
                >
                  <p className={styles.text}>
                    {materialSelectetd ? materialSelectetd : "Тип крышки"}
                  </p>
                  {materialSelectetd ? (
                    <AiOutlineClose
                      className={styles.btn}
                      onClick={() => {
                        setMaterialSelected("");
                        setMaterialSelectIsActive(false);
                      }}
                    />
                  ) : (
                    <AiFillCaretDown
                      style={
                        materialSelectIsActive
                          ? { transform: "rotate(180deg)" }
                          : { transform: "rotate(0deg)" }
                      }
                      className={styles.btn}
                    />
                  )}
                </div>
                {materialSelectIsActive && (
                  <div className={styles.dropdownContent}>
                    {materials.map((materialsElem) => (
                      <div
                        key={materialsElem}
                        onClick={() => {
                          setMaterialSelected(materialsElem);
                          setMaterialSelectIsActive(false);
                        }}
                        className={styles.dropdownItem}
                      >
                        {materialsElem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div ref={depthRef} className={styles.selectContainer}>
                <div
                  className={styles.dropdownBtn}
                  onClick={() => setDepthSelectIsActive(!depthSelectIsActive)}
                >
                  <p className={styles.text}>
                    {depthSelectetd ? depthSelectetd : "Глубина"}
                  </p>
                  {depthSelectetd ? (
                    <AiOutlineClose
                      className={styles.btn}
                      onClick={() => {
                        setDepthSelectetd("");
                        setDepthSelectIsActive(false);
                      }}
                    />
                  ) : (
                    <AiFillCaretDown
                      style={
                        depthSelectIsActive
                          ? { transform: "rotate(180deg)" }
                          : { transform: "rotate(0deg)" }
                      }
                      className={styles.btn}
                    />
                  )}
                </div>
                {depthSelectIsActive && (
                  <div className={styles.dropdownContent}>
                    {depth.map((depthElem) => (
                      <div
                        key={depthElem}
                        onClick={() => {
                          setDepthSelectetd(depthElem);
                          setDepthSelectIsActive(false);
                        }}
                        className={styles.dropdownItem}
                      >
                        {depthElem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div ref={coverTypeRef} className={styles.selectContainer}>
                <div
                  className={styles.dropdownBtn}
                  onClick={() =>
                    setCoverTypeSelectActive(!coverTypeSelectActive)
                  }
                >
                  <p className={styles.text}>
                    {coverTypeSelectetd ? coverTypeSelectetd : "Тип Крышки"}
                  </p>
                  {coverTypeSelectetd ? (
                    <AiOutlineClose
                      className={styles.btn}
                      onClick={() => {
                        setCoverTypeSelectetd("");
                        setCoverTypeSelectActive(false);
                      }}
                    />
                  ) : (
                    <AiFillCaretDown
                      style={
                        coverTypeSelectActive
                          ? { transform: "rotate(180deg)" }
                          : { transform: "rotate(0deg)" }
                      }
                      className={styles.btn}
                    />
                  )}
                </div>
                {coverTypeSelectActive && (
                  <div className={styles.dropdownContent}>
                    {coverType.map((coverTypeElem) => (
                      <div
                        key={coverTypeElem}
                        onClick={() => {
                          setCoverTypeSelectetd(coverTypeElem);
                          setCoverTypeSelectActive(false);
                        }}
                        className={styles.dropdownItem}
                      >
                        {coverTypeElem}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className={styles.priceZone}>
              {" "}
              <p className={styles.price}>
                {currentPrice ? currentPrice : 135000}{" "}
                <span className={styles.small}>рублей</span>
              </p>{" "}
              <Button content={"Уточнить детали или заказать биокамин"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuelBlocks;
