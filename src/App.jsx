import { useState } from "react";

import TilteContext from "./components/Context";
import HeaderTop from "./components/HeaderTop";
import HeadPage from "./pages/HeadPage";
import ProductPage from "./pages/ProductPage";

import styles from "./scss/App.module.scss";

import nastenniyTitle from "./images/nastenni1.jpg";
import nastenniyTitle2 from "./images/nastenni2.jpg";
import nastenniyTitle3 from "./images/nastenni3.jpg";
import nastenniySlide1 from "./images/nastenniy-slide-img1.jpg";
import nastenniySlide2 from "./images/nastenniy-slide-img2.jpg";
import nastenniySlide3 from "./images/nastenniy-slide-img3.jpg";
import nastenniySlide4 from "./images/nastenniy-slide-img4.jpg";
import nastenniySlide5 from "./images/nastenniy-slide-img5.jpg";
import nastenniySlide7 from "./images/nastenniy-slide-img6.jpg";
import nastenniySlide8 from "./images/nastenniy-slide-img7.jpg";
import vstraivaemiyTitle from "./images/vtraivaemiy1.jpg";
import vstraivaemiyTitle2 from "./images/vtraivaemiy2.jpg";
import vstraivaemiyTitle3 from "./images/vtraivaemiy3.jpg";
import vstraivaemiySlide1 from "./images/second-tab-modal-img4.jpg";
import vstraivaemiySlide2 from "./images/second-tab-modal-img5.jpg";
import vstraivaemiySlide3 from "./images/second-tab-modal-img6.jpg";
import vstraivaemiySlide4 from "./images/second-tab-modal-img7.jpg";
import vstraivaemiySlide5 from "./images/second-tab-modal-img1.jpg";
import vstraivaemiySlide6 from "./images/second-tab-modal-img2.jpg";
import vstraivaemiySlide7 from "./images/second-tab-modal-img7.jpg";
import vstraivaemiySlide8 from "./images/second-tab-modal-img9.jpg";
import vstraivaemiySlide9 from "./images/second-tab-modal-img10.jpg";
import vstraivaemiySlide10 from "./images/second-tab-modal-img11.jpg";
import vstraivaemiySlide11 from "./images/second-tab-modal-img8.jpg";
import vstraivaemiySlide12 from "./images/second-tab-modal-img12.jpg";
import vstraivaemiySlide13 from "./images/second-tab-modal-img13.jpg";
import napolnyTitle from "./images/napolnie1.jpg";
import napolnyTitle2 from "./images/napolnie2.jpg";
import napolnyTitle3 from "./images/napolnie3.jpg";
import napolnySlide1 from "./images/three-tab-modal-img1.jpg";
import napolnySlide2 from "./images/three-tab-modal-img2.jpg";
import napolnySlide3 from "./images/three-tab-modal-img3.jpg";
import napolnySlide4 from "./images/three-tab-modal-img4.jpg";
import napolnySlide5 from "./images/three-tab-modal-img5.jpg";
import napolnySlide6 from "./images/three-tab-modal-img6.jpg";
import napolnySlide7 from "./images/three-tab-modal-img7.jpg";
import napolnySlide8 from "./images/three-tab-modal-img8.jpg";
import napolnySlide9 from "./images/three-tab-modal-img9.jpg";
import napolnySlide10 from "./images/three-tab-modal-img10.jpg";
import napolnySlide11 from "./images/three-tab-modal-img11.jpg";
import napolnySlide12 from "./images/three-tab-modal-img12.jpg";
import napolnySlide13 from "./images/three-tab-modal-img13.jpg";
import napolnySlide14 from "./images/three-tab-modal-img14.jpg";
import napolnySlide15 from "./images/three-tab-modal-img15.jpg";
import napolnySlide16 from "./images/three-tab-modal-img16.jpg";
import napolnySlide17 from "./images/three-tab-modal-img17.jpg";
import napolnySlide18 from "./images/three-tab-modal-img18.jpg";
import napolnySlide19 from "./images/three-tab-modal-img19.jpg";
import napolnySlide20 from "./images/three-tab-modal-img20.jpg";
import napolnySlide21 from "./images/three-tab-modal-img21.jpg";
import napolnySlide22 from "./images/three-tab-modal-img22.jpg";
import napolnySlide23 from "./images/three-tab-modal-img23.jpg";
import napolnySlide24 from "./images/three-tab-modal-img24.jpg";
import napolnySlide25 from "./images/three-tab-modal-img25.jpg";
import toplivnyTitle from "./images/toplivnie1.jpg";
import toplivnyTitle2 from "./images/toplivnie2.jpg";
import toplivnyTitle3 from "./images/toplivnie3.jpg";
import toplivnySlide1 from "./images/four-tab-modal-img1.jpg";
import toplivnySlide2 from "./images/four-tab-modal-img2.jpg";
import toplivnySlide3 from "./images/four-tab-modal-img3.jpg";
import toplivnySlide4 from "./images/four-tab-modal-img4.jpg";
import toplivnySlide5 from "./images/four-tab-modal-img5.jpg";

import examplePhoto from "./images/swiper-img.jpeg";
import examplePhoto1 from "./images/swiper-img1.jpeg";
import examplePhoto2 from "./images/swiper-img2.jpeg";
import examplePhoto3 from "./images/swiper-img3.jpeg";
import examplePhoto4 from "./images/swiper-img4.jpeg";
import examplePhoto5 from "./images/swiper-img5.jpeg";

import AboutUs from "./pages/AboutUs";
import WorkExamples from "./pages/WorkExamples";
import Reviews from "./pages/Reviews";
import Quality from "./pages/Quality";
import FuelBlocks from "./pages/FuelBlocks";
import BeautifulAndSafe from "./pages/BeautifulAndSafe";
import Delivery from "./pages/Delivery";
import PaymentAndDelivery from "./pages/PaymentAndDelivery";
import FireplaceWarranty from "./pages/FireplaceWarranty";
import Designers from "./pages/Designers";
import Answers from "./pages/Answers";
import Footer from "./pages/Footer";
function App() {
  const [category, setCategory] = useState(0);
  const [modalIndex, setModalIndex] = useState();

  //получаем сегодняшнюю дату
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = dd + "." + mm + "." + yyyy;

  const btns = ["Настенные", "Встраиваемые", "Напольные", "Топливные баки"];
  const products = [
    {
      type: 0,
      titlePhoto: nastenniyTitle,
      sizes: "1000×400×230",
      power: 3,
      price: "39 900",
      name: "Дольче",
      slidePhotos: [nastenniySlide2, nastenniySlide3, nastenniySlide1],
      about:
        "Оригинальная модель в линейке. Вешается на любой стене за считаные минуты. Прекрасный дизайн. Станет самой яркой и запоминающейся частью вашего интерьера. Имеет скрытый крепеж. Биокамин как будто парит в воздухе! Может изготавливаться с защитным экраном из стекла.",
      fireLength: 700,
      burnerVolume: 2.7,
      material: "нержавеющая сталь, металл, стекло",
    },
    {
      type: 0,
      titlePhoto: nastenniyTitle2,
      sizes: "1200×450×230",
      power: 5,
      price: "49 900",
      name: "Джакарта",
      slidePhotos: [nastenniySlide4, nastenniySlide5],
      about:
        "Биокамин который можно разместить на любой стене внутри помещения. Длина до 3 метров. Любой цвет смотрится очень стильно. Верхняя крышка не греется абсолютно. Имеет скрытый крепеж. Биокамин как будто парит в воздухе.",
      fireLength: 1220,
      burnerVolume: 5,
      material: "нержавеющая сталь",
    },
    {
      type: 0,
      titlePhoto: nastenniyTitle3,
      sizes: "1000×900×300",
      power: 2.2,
      price: "49 900",
      name: "Настенный биокамин 'Беллучи'",
      slidePhotos: [nastenniySlide7, nastenniySlide8],
      about:
        "Интересная! Не ординарная модель. Достоинством данной модели является то, что она изначально идет как настенная, но может быть и напольной. Ярким достоинством является большой угол обзора огня. При этом само пламя утоплено. Что дает возможность наполнить пространство аксессуарами (дрова, камни…) Стекла съёмные. В производстве крайне сложная модель. Много этапов гибки и резки очага. Но в итоге получается возможно даже малый архитектурный элемент.",
      fireLength: 900,
      burnerVolume: 2,
      material: "нержавеющая сталь, металл",
    },
    {
      type: 1,
      titlePhoto: vstraivaemiyTitle,
      sizes: "1200×500×300",
      power: 5,
      price: "39 900",
      name: "Очаг Gold Fire",
      slidePhotos: [
        vstraivaemiySlide1,
        vstraivaemiySlide2,
        vstraivaemiySlide3,
        vstraivaemiySlide4,
        vstraivaemiySlide5,
        vstraivaemiySlide6,
        vstraivaemiySlide7,
      ],
      about:
        "Данный очаг изготавливается по Вашим размерам. Длина до 3.5 метров. Очаг биокамина выполнен из нержавеющей стали 2ммм. Все узлы закреплены НЕ болтами или клепками, как это делают многие, а проварены аргонно-дуговой сваркой. Сам корпус покрашен в черный матовый цвет кремнийорганической краской. Прекрасно себя чувствующей при температуре до 1000 градусов. Такая конструкция позволяет встраивать данную модель применяя малое количество термоизоляции. Топливный блок уже входит в стоимость.",
      fireLength: 800,
      burnerVolume: 4,
      material: "Только нержавеющая сталь",
    },
    {
      type: 1,
      titlePhoto: vstraivaemiyTitle2,
      sizes: "1200×500×300",
      power: 5,
      price: "43 900",
      name: "Gold Fire 2",
      slidePhotos: [
        vstraivaemiySlide8,
        vstraivaemiySlide9,
        vstraivaemiySlide10,
        vstraivaemiyTitle2,
        vstraivaemiySlide6,
        vstraivaemiySlide11,
      ],
      about:
        "Данный очаг изготавливается по Вашим размерам. Отсутствует одна или обе боковые стенки. Длина до 3.5 метров. Очаг биокамина выполнен из нержавеющей стали 2ммм. Все узлы закреплены НЕ болтами или клепками, как это делают многие, а проварены аргонно-дуговой сваркой. Сам корпус покрашен в черный матовый цвет кремнийорганической краской. Прекрасно себя чувствующей при температуре до 1000 градусов. Термоизоляция в комплекте.Изготовим под Ваши размеры. Топливный блок уже входит в стоимость.",
      fireLength: 800,
      burnerVolume: 4,
      material: "Только нержавеющая сталь",
    },
    {
      type: 1,
      titlePhoto: vstraivaemiyTitle3,
      sizes: "1100×650×250",
      power: 5,
      price: "43 900",
      name: "Безрамочный очаг",
      slidePhotos: [
        vstraivaemiySlide12,
        vstraivaemiySlide13,
        vstraivaemiyTitle3,
      ],
      about:
        "Сделайте Ваш встраиваемый биокамин стильным! Широкие рамки часто портят задумку дизайна. Технология безрамочного очага позволит решить эту проблему. Данный очаг изготавливается по ВАШИМ размерам. Отсутствует одна или обе боковые стенки. Длина до 3.5 метров. Очаг биокамина выполнен из нержавеющей стали 2ммм. Все узлы закреплены НЕ болтами или клепками, как это делают многие, а проварены аргонно-дуговой сваркой. Сам корпус покрашен в черный матовый цвет кремнийорганической краской. Прекрасно себя чувствующей при температуре до 1000 градусов. Термоизоляция в комплекте. Изготовим под Ваши размеры. Топливный блок уже входит в стоимость.",
      fireLength: 800,
      burnerVolume: 4,
      material: "Только нержавеющая сталь",
    },
    {
      type: 2,
      titlePhoto: napolnyTitle,
      sizes: "Индивидуально",
      power: "Индивидуально",
      price: "49 000",
      name: "Монреаль",
      slidePhotos: [
        napolnyTitle,
        napolnySlide1,
        napolnySlide2,
        napolnySlide3,
        napolnySlide4,
        napolnySlide5,
        napolnySlide6,
        napolnySlide7,
        napolnySlide8,
        napolnySlide9,
        napolnySlide10,
        napolnySlide11,
        napolnySlide12,
        napolnySlide13,
        napolnySlide14,
        napolnySlide15,
      ],
      about:
        "Изготовим столик из представленных в нашем каталоге. Или по Вашим эскизам или задумкам. Любой материал от массива дуба до мрамора.",
      fireLength: "Индивидуально",
      burnerVolume: "Индивидуально",
      material: "Индивидуально",
    },
    {
      type: 2,
      titlePhoto: napolnyTitle2,
      sizes: "1130×930×400",
      power: 2.2,
      price: "49 999 ",
      name: "Classic",
      slidePhotos: [
        napolnyTitle2,
        napolnySlide16,
        napolnySlide17,
        napolnySlide18,
        napolnySlide19,
      ],
      about:
        "Классические биокамины в портале из МДФ. Обычно ставятся к стене. Мы можем изготовить более 100 различных порталов. Для Вашего удобства можно скачать САМЫЙ СТИЛЬНЫЙ в рунете каталог порталов. Модели туда мы отбирали с помощью голосования из десятка дизайнеров интерьера! Выберите лучший классический биокамин прямо сейчас! Просто нажмите 'Скачать каталог порталов'",
      fireLength: 500,
      burnerVolume: 2.7,
      material: "нержавеющая сталь, МДФ",
    },
    {
      type: 2,
      titlePhoto: napolnyTitle3,
      sizes: "880×600×230",
      power: 2.2,
      price: "29 900 ",
      name: "Коллекция 'Milano'",
      slidePhotos: [
        napolnyTitle3,
        napolnySlide20,
        napolnySlide21,
        napolnySlide22,
        napolnySlide23,
        napolnySlide24,
        napolnySlide25,
      ],
      about:
        "Состоит из пяти моделей. Каждая модель имеет защитный экран из термостойкого стекла Robax. Как и все биокамины нашей марки, если перевернуть или уронить их, то биотопливо не прольется. Камины могут быть выполнены, как из металла, так и из МДФ или массива дерева. Размеры и цвет так же можно корректировать.",
      fireLength: 480,
      burnerVolume: 4,
      material: "сталь, ит. стекло мдф",
    },
    {
      type: 3,
      titlePhoto: toplivnyTitle,
      sizes: "300×150×70",
      power: 2.2,
      price: "11 900 ",
      name: "Flame",
      slidePhotos: [
        toplivnyTitle,
        toplivnySlide1,
        toplivnySlide2,
        toplivnySlide3,
      ],
      about:
        "Серия топливных блоков, которые уже готовы быть встроены в нишу. Размеры стандартных блоков разные. Цена указана за минимальный размер.",
      fireLength: 220,
      burnerVolume: 1.7,
      material: "огнеупорная сталь",
    },
    {
      type: 3,
      titlePhoto: toplivnyTitle2,
      sizes: "300×150×70",
      power: 2.2,
      price: "14 900 ",
      name: "Flame 2",
      slidePhotos: [toplivnyTitle2, toplivnySlide4],
      about:
        "Серия топливных блоков, которые уже готовы быть встроены в нишу. Размеры стандартных блоков разные. Цена указана за минимальный размер. Отличаются от серии Flame наличием дополнительного кожуха.",
      fireLength: 220,
      burnerVolume: 1.7,
      material: "огнеупорная сталь",
    },
    {
      type: 3,
      titlePhoto: toplivnyTitle3,
      sizes: "300×300×70",
      power: 2.2,
      price: "19 900 ",
      name: "Flame 3",
      slidePhotos: [toplivnyTitle3, toplivnySlide5],
      about:
        "Серия круглых топливных блоков. Могут быть выполнены в любом диаметре. Технология регулировки уровня пламени. Уменьшенный расход. В среднем на 500 мм диаметре меньше 1 литра в час!",
      fireLength: 220,
      burnerVolume: 1.7,
      material: "AISI 310S",
    },
  ];

  const modalCaruselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const currentProducts = products.filter((product) => {
    if (category === 0) {
      return product.type === 0;
    } else if (category === 1) {
      return product.type === 1;
    } else if (category === 2) {
      return product.type === 2;
    } else if (category === 3) {
      return product.type === 3;
    } else {
      return product;
    }
  });

  if (modalIndex === 0 || modalIndex) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "inherit";
  }

  const examplesPhotos = [
    examplePhoto,
    examplePhoto1,
    examplePhoto2,
    examplePhoto3,
    examplePhoto4,
    examplePhoto5,
  ];
  const examplesCaruselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  };

  const consultationTopics = [
    "Стоимость биокамина",
    "Общие вопросы",
    "Сложности с размещением",
    "Стоимость и срок доставки",
    "Узнать где мой биокамин",
    "Узнать о страховке груза",
    "Монтаж онлайн",
    "Монтаж в готовую нишу",
    "Подбор биокамина по интерьеру",
    "Визуализация биокамина",
    "Предложить услуги",
    "Предложить партнерство",
    "Брак",
    "Процесс производства биокамина",
    "О готовности биокамина",
    "Вопрос по материалам",
    "Консультация",
    "Помогите встроить биокамин",
    "Нужна консультация о технических характеристиках",
  ];
  const arr1 = ["a", "b", "c"];
  const arr2 = ["d", "e", "f"];
  const arr3 = ["g", "h", "i"];

  return (
    <TilteContext.Provider
      value={{
        category,
        setCategory,
        today,
        btns,
        products,
        modalIndex,
        setModalIndex,
        currentProducts,
        modalCaruselSettings,
        examplesPhotos,
        examplesCaruselSettings,
        consultationTopics,
        arr1,
        arr2,
        arr3,
      }}
    >
      <div className={styles.app}>
        <HeaderTop />
        <HeadPage />
        <ProductPage />
        <AboutUs />
        <WorkExamples />
        <Reviews />
        <Quality />
        <FuelBlocks />
        <BeautifulAndSafe />
        <Delivery />
        <PaymentAndDelivery />
        <FireplaceWarranty />
        <Designers />
        <Answers />
        <Footer />
      </div>
    </TilteContext.Provider>
  );
}

export default App;
