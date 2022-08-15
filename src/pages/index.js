import "./index.scss";

import {
  preloaderElem,
  swiper1,
  navigationConfig,
  sectionsConfig,
  projectTemplateSelector,
  projectsListSelector,
  projectSlideTemplateSelector,
  contactsFormSelector,
  formOptions,
  homeNavigationElement,
  mainNavigationElement,
  aboutSection,
  popupConfig,
  apiCofig,
  codewarsConfig,
} from "../utils/constants.js";

import allProjects from "../utils/projectsData.js";
import Navigation from "../components/Navigation.js";
import NavigationWithScroll from "../components/NavigationWithScroll.js";
import SectionInfo from "../components/SectionInfo.js";
import Project from "../components/Project";
import ProjectSlide from "../components/ProjectSlide.js";
import Api from "../components/Api.js";
import Form from "../components/Form.js";
import Popup from "../components/Popup.js";
import Codewars from "../components/Codewars.js";
import Preloader from "../components/Preloader";



VANTA.BIRDS({
  el: ".home ",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
    backgroundColor: 0x16171b,
  color1: 0xecb614,
  color2: 0xb1361e,
  colorMode: "lerpGradient",
  birdSize: 0.5,
  quantity: 4,
  speedLimit: 2,

})

const preloader = new Preloader (preloaderElem)
preloader.setEventListeners()

const sectionsList = new SectionInfo(sectionsConfig);
sectionsList.setSectionInfo();

const homeNavigation = new Navigation({
  navigationConfig,
  element: homeNavigationElement,
  navigateSlider,
});
homeNavigation.setEventListeners();

const mainSection = document.querySelector(".main");

const mainNavigation = new NavigationWithScroll({
  navigationConfig,
  element: mainNavigationElement,
  navigateSlider,
  mainSection,
  scrollToSec: aboutSection,
});
mainNavigation.setEventListeners();

const telegramForm = new Form(
  contactsFormSelector,
  apiTelegramHandler,
  formOptions
);
telegramForm.setEventListeners();

const loadingPopup = new Popup(popupConfig);

const api = new Api(apiCofig);

api.getCodewarsUserData().then((res) => {
  const {
    username,
    honor,
    clan,
    ranks: { languages },
    ranks: {
      overall: { name },
    },
    codeChallenges: { totalCompleted },
  } = res;

  const codewars = new Codewars({
    username,
    honor,
    clan,
    languages,
    name,
    totalCompleted,
    codewarsConfig,
  });
  codewars.setValues();
});

async function apiTelegramHandler(bodyData) {
  loadingPopup.openPopup();
  try {
    const res = await api.sentTelegramMessage(bodyData);
    res.ok ? loadingPopup.handlePopup(true) : loadingPopup.handlePopup(false);
  } catch (err) {
    console.log(err);
  } finally {
    telegramForm.resetForm();
  }
}

function navigateSlider({ slideNumber, sectionToScroll, isMain }) {
  const isCurrentSlide = swiper1.activeIndex === slideNumber;

  if (isCurrentSlide) {
    sectionToScroll?.scrollIntoView({ block: "start", behavior: "smooth" });
  } else {
    swiper1.slideTo(slideNumber, 1000);
    setTimeout(
      () =>
        sectionToScroll?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        }),
      1000
    );
    if (swiper1.slides.length === 3)
      setTimeout(() => {
        swiper1.removeSlide(2);
      }, 1000);
  }
}

function renderPage() {
  const projectsContainer = document.querySelector(projectsListSelector);

  const projectsListElements = allProjects.map((projectData, index) => {
    const newProjectSlide = new ProjectSlide({
      projectData,
      projectSlideTemplateSelector,
      navigationConfig,
      navigateSlider,
      mainSection,
    });
    const projectSlideElem = newProjectSlide.generateProject();

    return new Project({
      projectData,
      projectTemplateSelector,
      index,
      projectSlideElem,
      addExtraSlide,
    }).generateProject();
  });
  projectsListElements.forEach((project) => {
    projectsContainer.append(project);
  });
}

function handleProjectMasc(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("project__insight-mask_deactivate");
    }
  });
}


function addExtraSlide(projectSlideElem) {
  swiper1.appendSlide(projectSlideElem);
  setTimeout(() => swiper1.slideNext(1000), 300);
}

renderPage();

swiper1.on("slideResetTransitionEnd", () => {
  if (swiper1.slides.length === 3) swiper1.removeSlide(2);
});


const projectObserver = new IntersectionObserver(handleProjectMasc, {
  threshold: [0.9],
});


document
  .querySelectorAll(".project__insight-mask")
  .forEach((project) => projectObserver.observe(project));
