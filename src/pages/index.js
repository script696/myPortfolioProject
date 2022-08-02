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

} from "../utils/constants.js";

import allProjects from "../utils/projectsData.js";
import Navigation from "../components/Navigation.js";
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
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x16171b,
  color1: 0xcd1717,
  color2: 0xc2ff00,
  colorMode: "lerpGradient"
})


const projectObserver = new IntersectionObserver(handleProjectMasc, {
  threshold: [0.9],
});

const sectionsList = new SectionInfo(sectionsConfig);
sectionsList.setSectionInfo();

const homeNavigation = new Navigation({navigationConfig, navigateSlider});
homeNavigation.setEventListeners();

const telegramForm = new Form(contactsFormSelector, apiTelegramHandler, formOptions)
telegramForm.setEventListeners()

const api = new Api(phpScriptLink)



function apiTelegramHandler (bodyData){
  api.sentTelegramMessage(bodyData)
}

function navigateSlider({slideNumber, sectionToScroll}) {
  swiper1.slideTo(slideNumber, 1000);
  setTimeout(()=> sectionToScroll?.scrollIntoView({block: 'start', behavior: 'smooth'}), 1000)
}

function renderPage() {
  const projectsContainer = document.querySelector(projectsListSelector);

  const projectsListElements = allProjects.map((projectData, index) => {
    const newProjectSlide = new ProjectSlide({
      projectData,
      projectSlideTemplateSelector,
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

swiper1.on('slideResetTransitionEnd', ()=> {
  if(swiper1.slides.length === 3) swiper1.removeSlide(2)
})


document
  .querySelectorAll(".project__insight-mask")
  .forEach((project) => projectObserver.observe(project));
