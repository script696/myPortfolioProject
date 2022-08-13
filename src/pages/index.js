import "./index.scss";

import {
  swiper1,
  navigationConfig,
  projectsConfig,
  sectionsConfig,
  projectTemplateSelector,
  projectsListSelector,
  projectSlideTemplateSelector,
  navigation,
  contactsFormSelector,
  phpScriptLink,
  formOptions,
  homeNavigationElement,
  mainNavigationElement,
  aboutSection,
  formLoaderMask,
  formSuccesMsg,
  formRejectMsg,
} from "../utils/constants.js";

import allProjects from "../utils/projectsData.js";
import Navigation from "../components/Navigation.js";
import NavigationWithScroll from "../components/NavigationWithScroll.js";
import Projects from "../components/Projects.js";
import SectionInfo from "../components/SectionInfo.js";
import Project from "../components/Project";
import ProjectSlide from "../components/ProjectSlide.js";
import Api from "../components/Api.js";
import Form from "../components/Form.js";

VANTA.BIRDS({
  el: ".home  ",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  backgroundColor: 0x16171b,
  color1: 0xecb614,
  color2: 0xb1361e,
  speedLimit: 0.50,
  birdSize: 0.50,
  quantity: 3.0,
  colorMode: "lerpGradient",
});


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

const api = new Api(phpScriptLink);



async function apiTelegramHandler(bodyData) {
  formLoaderMask.classList.add('contacts__form-status_active')

  try{
    const res = await api.sentTelegramMessage(bodyData)

    res.ok 
    ? formSuccesMsg.classList.add('contacts__loader-sucess_active')
    : formRejectMsg.classList.add('contacts__loader-reject_active')
  } catch (err){
    console.log(err)
  } finally{
    setTimeout(()=>{
      formLoaderMask.classList.remove('contacts__form-status_active')
      formSuccesMsg.classList.remove('contacts__loader-sucess_active')
    formRejectMsg.classList.remove('contacts__loader-reject_active')
    telegramForm.resetForm()
    },2000)
  }
}

function navigateSlider({ slideNumber, sectionToScroll, isMain }) {
  swiper1.slideTo(slideNumber, 1000);

  isMain
    ? sectionToScroll?.scrollIntoView({ block: "start", behavior: "smooth" })
    : setTimeout(
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
const aboutRightCol = document.querySelector(".about__right-col");

function handleAboutSecAnimation(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      aboutRightCol.classList.add("about__right-col_active");
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

const sectionAboutObserver = new IntersectionObserver(handleAboutSecAnimation, {
  threshold: [0.9],
});

const projectObserver = new IntersectionObserver(handleProjectMasc, {
  threshold: [0.9],
});

sectionAboutObserver.observe(aboutSection);

document
  .querySelectorAll(".project__insight-mask")
  .forEach((project) => projectObserver.observe(project));
