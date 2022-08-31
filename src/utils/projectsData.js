import logo from "../img/logo/logo.svg";

import weatherlyMainImg from "../img/portfolioProjects/weatherly/weatherlyMainImg.png";
import weatherlyCode1 from "../img/portfolioProjects/weatherly/weatherlyCode1.png";
import weatherlyCode2 from "../img/portfolioProjects/weatherly/weatherlyCode2.png";
import weatherlyCode3 from "../img/portfolioProjects/weatherly/weatherlyCode3.png";
import weatherlyInnerImg1 from "../img/portfolioProjects/weatherly/weatherlyInnerImg1.png";
import weatherlyInnerImg2 from "../img/portfolioProjects/weatherly/weatherlyInnerImg2.png";
import weatherlyInnerImg3 from "../img/portfolioProjects/weatherly/weatherlyInnerImg3.png";

import messengerMainImg from "../img/portfolioProjects/messenger/messengerMainImg.png";
import messengerCode1 from "../img/portfolioProjects/messenger/messengerCode1.png";
import messengerCode2 from "../img/portfolioProjects/messenger/messengerCode2.png";
import messengerCode3 from "../img/portfolioProjects/messenger/messengerCode3.png";
import messengerInnerImg1 from "../img/portfolioProjects/messenger/messengerInnerImg1.png";
import messengerInnerImg2 from "../img/portfolioProjects/messenger/messengerInnerImg2.png";
import messengerInnerImg3 from "../img/portfolioProjects/messenger/messengerInnerImg3.png";

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

import mestoReactMainImg from "../img/portfolioProjects/mesto-react/mestoRactMainImg.png";
import mestoReactCode1 from "../img/portfolioProjects/mesto-react/mestoReactCode1.png";
import mestoReactCode2 from "../img/portfolioProjects/mesto-react/mestoReactCode2.png";
import mestoReactCode3 from "../img/portfolioProjects/mesto-react/mestoReactCode3.png";
import mestoReactInnerImg1 from "../img/portfolioProjects/mesto-react/mestoReactInnerImg1.png";
import mestoReactInnerImg2 from "../img/portfolioProjects/mesto-react/mestoReactInnerImg1.png";
import mestoReactInnerImg3 from "../img/portfolioProjects/mesto-react/mestoReactInnerImg1.png";

const projectWeatherly = {
  links: {
    githubPages: "https://script696.github.io/weatherly/",
  },
  images: {
    logo: {
      link: logo,
      alt: "Логотип NS",
    },
    mainImg: {
      link: weatherlyMainImg,
      alt: "Проект Weatherly общее изображение",
    },
    codeOneImg: {
      link: weatherlyCode1,
      alt: "Фрагмент кода TSX. Компонент weatherSliceReducer",
    },
    codeTwoImg: {
      link: weatherlyCode2,
      alt: "Фрагмент кода TSX. Flex",
    },
    codeThreeImg: {
      link: weatherlyCode3,
      alt: "Фрагмент кода TS. Типы",
    },
    innerImgOne: {
      link: weatherlyInnerImg1,
      alt: "Внешний вид приложения. Меню выбора городов",
    },
    innerImgTwo: {
      link: weatherlyInnerImg2,
      alt: "Внешний вид приложения. Недельный прогноз",
    },
    innerImgThree: {
      link: weatherlyInnerImg3,
      alt: "Внешний вид приложения. Главный экран",
    },
  },
  texts: {
    templateProjectTitle: "Weatherly",
    templateProjectSubtitle: `Приложение "Прогноз погоды"`,
    templateProjectRole: "Фронтенд разработчик",
    templateProjectContext: "Изучение нового стека",
    templateProjectPeriod: "Август 2022",
    templateProjectAbout: `Прогноз погоды - приложение, 
    в котором реализован суточный и недельный проноз погоды с возможностью выбора города.
    Для изучения технологий Style Components и Redux Toolkit мною была выбрана идея разработчки небольшого приложения,
    в которое бы хорошо вписалось применение данных концепций.
    В качестве сервиса предоставления погоды был выбран "Open-Meteo" с открытым API.
    `,
    templateProjectDescriptionOneTitle: "Middleware",
    templateProjectDescriptionTwoTitle: "Кастомные, типизированные хуки",
    templateProjectDescriptionThreeTitle: "Style Components",
    templateProjectDescriptionOneText:
      "При асинхронной работе с хранилищем использовал дефолтный Redux Toolkit Middleware ",
    templateProjectDescriptionTwoText:
      "Для использования хуков useDispatch и useSelector совместно с TypeScript применены кастомные хуки на основе типов хранилища",
    templateProjectDescriptionThreeText:
      "В качестве нового средства стилизации использована библиотека Style Components",
  },
};
const projectMessenger = {
  links: {
    githubPages: "https://script696.github.io/messenger/",
  },
  images: {
    logo: {
      link: logo,
      alt: "Логотип NS",
    },
    mainImg: {
      link: messengerMainImg,
      alt: "Проект Messenger общее изображение",
    },
    codeOneImg: {
      link: messengerCode1,
      alt: "Фрагмент кода TSX. Компонент MsgCard",
    },
    codeTwoImg: {
      link: messengerCode2,
      alt: "Фрагмент кода TS. reducer1",
    },
    codeThreeImg: {
      link: messengerCode3,
      alt: "Фрагмент кода TS. Типы",
    },
    innerImgOne: {
      link: messengerInnerImg1,
      alt: "Внешний вид мессежера, заполнение инпутов",
    },
    innerImgTwo: {
      link: messengerInnerImg2,
      alt: "Внешний вид мессежера, установка фильтра",
    },
    innerImgThree: {
      link: messengerInnerImg3,
      alt: "Внешний вид мессежера, отправка сообщения",
    },
  },
  texts: {
    templateProjectTitle: "Messenger",
    templateProjectSubtitle: `Приложение "Чат"`,
    templateProjectRole: "Фронтенд разработчик",
    templateProjectContext: "Тестовое задание",
    templateProjectPeriod: "Август 2022",
    templateProjectAbout: `Чат - приложение, в котором реализован чат с условным роботом
    и пользователем с использованием фейковой базы данных. 
    При наведении на сообщения появляется возможность "ответить".
    Для применения фильтров к тексту сообщения предусмотрен собственный редактор 
    текста с возможностью применения фильтров ко всему вводимому сообщению и сброса примененных фильтров. 
    Для имитации работой с БД реализованы фейковые запросы и редактирование локальных объектов с использованием промисов.
  
    

    `,
    templateProjectDescriptionOneTitle: "Применение css-in-js",
    templateProjectDescriptionTwoTitle: "Разработан свой WYSIWYG",
    templateProjectDescriptionThreeTitle: "TypeScript",
    templateProjectDescriptionOneText:
      "Использовал модульный подход в написании классов. Это позволило отойти от концепции БЭМ и не переживать о специфичности селекторов",
    templateProjectDescriptionTwoText:
      "По ТЗ было необходимо реаллизовать текстовый редактор без использования сторонних библиотек. Для создния 5 фильтров и кнопки сброса я решил использовать хук useReducer, вынести всю логику редактора отдульную функцию",
    templateProjectDescriptionThreeText:
      "Для тренировки приложение написано на Typescript с использованием интерфейсов и дженериков",
  },
};




const projectMestoReact = {
  links: {
    githubPages: "https://script696.github.io/mesto-react",
  },
  images: {
    logo: {
      link: logo,
      alt: "Логотип NS",
    },
    mainImg: {
      link: mestoReactMainImg,
      alt: "Проект MestoReact общее изображение",
    },
    codeOneImg: {
      link: mestoReactCode1,
      alt: "Фрагмент кода JSX. Компонент App",
    },
    codeTwoImg: {
      link: mestoReactCode2,
      alt: "Фрагмент кода JSX. Компонент Card",
    },
    codeThreeImg: {
      link: mestoReactCode3,
      alt: "Фрагмент кода JSX. Кастосный хук",
    },
    innerImgOne: {
      link: mestoReactInnerImg1,
      alt: "Попап редактирования профиля. Ошибки валидации",
    },
    innerImgTwo: {
      link: mestoReactInnerImg2,
      alt: "Попап с котиком",
    },
    innerImgThree: {
      link: mestoReactInnerImg3,
      alt: "Попап обновления аватара",
    },
  },
  texts: {
    templateProjectTitle: "Mesto-React", //
    templateProjectSubtitle: "Реактивный подход к старому проекту!",
    templateProjectRole: "Фронтенд разработчик",
    templateProjectContext: "Обучающий проект",
    templateProjectPeriod: "Май-Июнь 2022",
    templateProjectAbout: `Проект Mesto-React стал для меня переосмыслением класичесского подхода к созданию Веб-приложений.
    В данной работе я выполнил рефакторинг предыдущего проекта Mesto, переписав его под React стайл.
    Ванильный JS код, с его императивным стилем, был заменен на декларативный, компонентный. Для своего первого SPA
    приложения я предпочем функциональный подход с применением хуков классовому, как более современному и отвечающему запросам рынка.
    Этот проект стал моей первой настоящей работой с той технологией, с которой я в итоге хотел бы работать.
    `,
    templateProjectDescriptionOneTitle: "Работа с контекстом",
    templateProjectDescriptionTwoTitle: "Создание функциональных компонентов",
    templateProjectDescriptionThreeTitle: "Валидация форм, реакт стайл",
    templateProjectDescriptionOneText:
      "Научился передавать контекст и подписываться на него с помощью React Context. Дальше только Redux... ",
    templateProjectDescriptionTwoText:
      "Научился создавать React компоненты, контролировать их жизненный цикл, управлять стейтом",
    templateProjectDescriptionThreeText:
      "Разработал два кастомных хука для динамической валидации управляемых инпутов",
  },
};

const projectMesto = {
  links: {
    githubPages: "https://script696.github.io/mesto/",
  },
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
      alt: "Карточки с лапшой и камнями",
    },
    innerImgTwo: {
      link: mestoInnerImg2,
      alt: "Попап добавления новой карточки",
    },
    innerImgThree: {
      link: mestoInnerImg3,
      alt: "Попап с лапшой, фуллскрин",
    },
  },
  texts: {
    templateProjectTitle: "Mesto", //
    templateProjectSubtitle:
      "Интерактивная страница, куда можно добавлять фотографии, удалять их и ставить лайки.",
    templateProjectRole: "Фронтенд разработчик",
    templateProjectContext: "Обучающий проект",
    templateProjectPeriod: "Апрель-Июнь 2022",
    templateProjectAbout: `Проект Mesto стал моим первым серьезным проектом и иыспытание на пути Веб разработчика.
    Начавшись с банальной верстки, он расширялся и обрастал все новым и новым функционалом.
    Статичная разметка из карточек заменялась на динамический рендеринг с использованием шаблона и данных из локального массива.
    Массив данных, впоследствии, стал запрашиваться с сервера. Для карточек появилась возможность лайков, открытия - фуллскрин, удаления и добавления.
    Функциональный подход был переписан на классовый. Добавилась динамическая валидация форм.
    Этот проект дал мне хорошие базовые знания и подготовил к изучению новых библиотек и фреймворков. `,
    templateProjectDescriptionOneTitle: "Изучение ООП",
    templateProjectDescriptionTwoTitle: "Работа с API",
    templateProjectDescriptionThreeTitle: "Webpack",
    templateProjectDescriptionOneText:
      "Изчение парадигмы ООП. Создание классов и принципов их взаимодействия",
    templateProjectDescriptionTwoText:
      "Работа с методами HTTP, принципов построения REST API",
    templateProjectDescriptionThreeText:
      "Изучение настройка сборщика Webpack с нуля.",
  },
};

const projectTuoTown = {
  links: {
    githubPages: "https://script696.github.io/TuoTown/",
  },
  images: {
    logo: {
      link: logo,
      alt: "Логотип NS",
    },
    mainImg: {
      link: tuoTownMainImg,
      alt: "Проект TuoTown общее изображение",
    },
    codeOneImg: {
      link: tuoTownCode1,
      alt: "Фрагмент кода SCSS. Компонент flex-link",
    },
    codeTwoImg: {
      link: tuoTownCode2,
      alt: "Фрагмент кода SCSS. Компонент menu",
    },
    codeThreeImg: {
      link: tuoTownCode3,
      alt: "Фрагмент кода SCSS. Компонент gallery-grid",
    },
    innerImgOne: {
      link: tuoTownInnerImg1,
      alt: "Описание ножей",
    },
    innerImgTwo: {
      link: tuoTownInnerImg2,
      alt: "Выплывающее боковое меню",
    },
    innerImgThree: {
      link: tuoTownInnerImg3,
      alt: "Фотографии ножей",
    },
  },
  texts: {
    templateProjectTitle: "TuoTown", //
    templateProjectSubtitle:
      "Первый самостоятельный лендинг с всплывающем меню на чистом CSS!",
    templateProjectRole: "Верстальщик",
    templateProjectContext: "Обучающий проект",
    templateProjectPeriod: "Март 2022",
    templateProjectAbout: `Проект TuoTown стал моим первым опытом использования SCSS и первым самостоятельным проектом. 
    Зная, что в будущем мне пригодятся технологии SASS/SCSS, в свободное от учебы время, 
    я захотел сделать несложный лендинг и заодно потренироваться с адаптивной версткой.
    Для подключения SCSS я выбрал самый простой, на тот момент, способ - Prepros, что позволило мне не тратить 
    время на изучение сборщиков, а сосредоточиться на выбранной мной технологии. 
    Ради интереса, я сделал выпадающее меню без использования JS и использованием скрытых инпутов.
    Опыт работы с препроцессором, который я получил на данном проекте, помог мне в разработке сайта, который вы сейчас видите.`,
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

const allProjects = [
  projectWeatherly,
  projectMesto,
  projectMessenger,
  projectMestoReact,
  projectTuoTown,
];

export default allProjects;
