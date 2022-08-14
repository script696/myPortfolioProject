import logo from "../img/logo/logo.svg";

import mestoMainImg from "../img/portfolioProjects/mesto/mestoMainImg.png";
import mestoCode1 from "../img/portfolioProjects/mesto/mestoCode1.png";
import mestoCode2 from "../img/portfolioProjects/mesto/mestoCode2.png";
import mestoCode3 from "../img/portfolioProjects/mesto/mestoCode3.png";
import mestoInnerImg1 from "../img/portfolioProjects/mesto/mestoInnerImg1.png";
import mestoInnerImg2 from "../img/portfolioProjects/mesto/mestoInnerImg2.png";
import mestoInnerImg3 from "../img/portfolioProjects/mesto/mestoInnerImg3.png";

import tuoTownMainImg from "../img/portfolioProjects/tuoTown/tuoTownMainImg.png";
import tuoTownCode1 from "../img/portfolioProjects/tuoTown/tuoTownCode1.png";
import tuoTownCode2 from "../img/portfolioProjects/tuoTown/tuoTownCode2.png";
import tuoTownCode3 from "../img/portfolioProjects/tuoTown/tuoTownCode3.png";
import tuoTownInnerImg1 from "../img/portfolioProjects/tuoTown/tuoTownInnerImg1.png";
import tuoTownInnerImg2 from "../img/portfolioProjects/tuoTown/tuoTownInnerImg2.png";
import tuoTownInnerImg3 from "../img/portfolioProjects/tuoTown/tuoTownInnerImg3.png";

// import myPortfolioMainImg from "../img/portfolioProjects/myPortfolioWebsite/myPortfolioMainImg.png";
// import myPortfolioCode1 from "../img/portfolioProjects/myPortfolioWebsite/myPortfolioCode1.png";
// import myPortfolioCode2 from "../img/portfolioProjects/myPortfolioWebsite/tuoTownCode2.png";
// import myPortfolioCode3 from "../img/portfolioProjects/myPortfolioWebsite/tuoTownCode3.png";
// import myPortfolioInnerImg1 from "../img/portfolioProjects/myPortfolioWebsite/tuoTownInnerImg1.png";
// import myPortfolioInnerImg2 from "../img/portfolioProjects/myPortfolioWebsite/tuoTownInnerImg2.png";
// import myPortfolioInnerImg3 from "../img/portfolioProjects/myPortfolioWebsite/tuoTownInnerImg3.png";

const projectMesto = {
  images: {
    logo: {
      link: logo,
      alt: "Логотип NS",
    },
    mainImg: {
      link: mestoMainImg,
      alt: "Проект Mesto общее изображение",
    },
    codeOneImg: {
      link: mestoCode1,
      alt: "Фрагмент кода JS. Класс Card",
    },
    codeTwoImg: {
      link: mestoCode2,
      alt: "Фрагмент кода JS. Класс Api",
    },
    codeThreeImg: {
      link: mestoCode3,
      alt: "Фрагмент кода JS. Класс Validation",
    },
    innerImgOne: {
      link: mestoInnerImg1,
      alt: "Фрагмент кода JS. Класс Validation",
    },
    innerImgTwo: {
      link: mestoInnerImg2,
      alt: "Фрагмент кода JS. Класс Validation",
    },
    innerImgThree: {
      link: mestoInnerImg3,
      alt: "Фрагмент кода JS. Класс Validation",
    },
  },
  texts: {
    templateProjectTitle: "Mesto", //
    templateProjectSubtitle:
      "Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.",
    templateProjectRole: "Фронтенд разработчки",
    templateProjectContext: "Обучающий проект",
    templateProjectPeriod: "Май-Июнь 2022",
    templateProjectAbout: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    aspernatur magnam sapiente blanditiis eaque ipsum saepe eos fuga sint maiores!Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Nostrum
    aspernatur magnam sapiente blanditiis eaque ipsum saepe eos fuga sint maiores!`,
    templateProjectDescriptionOneTitle: "Изучение ООП",
    templateProjectDescriptionTwoTitle: "Работа с API",
    templateProjectDescriptionThreeTitle: "Валидация форм",
    templateProjectDescriptionOneText:
      "Изчение парадигмы ООП. Создание классов и принципов их взаимодействия",
    templateProjectDescriptionTwoText:
      "Работа с методами HTTP, принципов построения REST API",
    templateProjectDescriptionThreeText:
      "Разработка динамической валидации формы",
  },
};

const projectTuoTown = {
  images: {
    logo: {
      link: logo,
      alt: "Логотип NS",
    },
    mainImg: {
      link: tuoTownMainImg,
      alt: "Проект Mesto общее изображение",
    },
    codeOneImg: {
      link: tuoTownCode1,
      alt: "Фрагмент кода JS. Класс Card",
    },
    codeTwoImg: {
      link: tuoTownCode2,
      alt: "Фрагмент кода JS. Класс Api",
    },
    codeThreeImg: {
      link: tuoTownCode3,
      alt: "Фрагмент кода JS. Класс Validation",
    },
    innerImgOne: {
      link: tuoTownInnerImg1,
      alt: "Фрагмент кода JS. Класс Validation",
    },
    innerImgTwo: {
      link: tuoTownInnerImg2,
      alt: "Фрагмент кода JS. Класс Validation",
    },
    innerImgThree: {
      link: tuoTownInnerImg3,
      alt: "Фрагмент кода JS. Класс Validation",
    },
  },
  texts: {
    templateProjectTitle: "TuoTown", //
    templateProjectSubtitle:
      "Первый самостоятельный лендинг с всплывающем меню на чистом CSS!",
    templateProjectRole: "Фронтенд разработчки",
    templateProjectContext: "Обучающий проект",
    templateProjectPeriod: "Март 2022",
    templateProjectAbout: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    aspernatur magnam sapiente blanditiis eaque ipsum saepe eos fuga sint maiores!Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Nostrum
    aspernatur magnam sapiente blanditiis eaque ipsum saepe eos fuga sint maiores!`,
    templateProjectDescriptionOneTitle: "Первый SCSS опыт",
    templateProjectDescriptionTwoTitle: "Чекбокс для открытия меню",
    templateProjectDescriptionThreeTitle: "Адаптивная верстка",
    templateProjectDescriptionOneText:
      "Впервые подключил SCSS в паре со сборщиком Prepros. Изучил синтаксис препроцессора (переменные, вложенность, миксины)",
    templateProjectDescriptionTwoText:
      "Сделал выплывающее меню с использованием скрытого чекбокса, без использования CSS",
    templateProjectDescriptionThreeText:
      "Выполнил адаптивную верстку с использованием flex && grid layout, медиазапросов",
  },
};
const myPortfolioproject = {
  images: {
    logo: {
      link: logo,
      alt: "Логотип NS",
    },
    mainImg: {
      link: mestoMainImg,
      alt: "Проект Mesto общее изображение",
    },
    codeOneImg: {
      link: mestoCode1,
      alt: "Фрагмент кода JS. Класс Card",
    },
    codeTwoImg: {
      link: mestoCode2,
      alt: "Фрагмент кода JS. Класс Api",
    },
    codeThreeImg: {
      link: mestoCode3,
      alt: "Фрагмент кода JS. Класс Validation",
    },
    innerImgOne: {
      link: mestoInnerImg1,
      alt: "Фрагмент кода JS. Класс Validation",
    },
    innerImgTwo: {
      link: mestoInnerImg2,
      alt: "Фрагмент кода JS. Класс Validation",
    },
    innerImgThree: {
      link: mestoInnerImg3,
      alt: "Фрагмент кода JS. Класс Validation",
    },
  },
  texts: {
    templateProjectTitle: "myPortfolioProject", //
    templateProjectSubtitle:
      "Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.",
    templateProjectRole: "Фронтенд разработчки",
    templateProjectContext: "Обучающий проект",
    templateProjectPeriod: "Май-Июнь 2022",
    templateProjectAbout: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
    aspernatur magnam sapiente blanditiis eaque ipsum saepe eos fuga sint maiores!Lorem ipsum dolor sit
    amet consectetur adipisicing elit. Nostrum
    aspernatur magnam sapiente blanditiis eaque ipsum saepe eos fuga sint maiores!`,
    templateProjectDescriptionOneTitle: "Изучение ООП",
    templateProjectDescriptionTwoTitle: "Работа с API",
    templateProjectDescriptionThreeTitle: "Валидация форм",
    templateProjectDescriptionOneText:
      "Изчение парадигмы ООП. Создание классов и принципов их взаимодействия",
    templateProjectDescriptionTwoText:
      "Работа с методами HTTP, принципов построения REST API",
    templateProjectDescriptionThreeText:
      "Разработка динамической валидации формы",
  },
};

const allProjects = [projectMesto, projectTuoTown, myPortfolioproject];

export default allProjects;
