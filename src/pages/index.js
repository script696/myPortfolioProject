import "./index.scss";

import {
  swiper1,
  navigationConfig,
  projectsConfig,
  sectionsConfig,
  projectTemplateSelector,
  projectsListSelector,
  projectSlideTemplateSelector,
} from "../utils/constants.js";

import allProjects from "../utils/projectsData.js";
import Navigation from "../components/Navigation.js";
import Projects from "../components/Projects.js";
import SectionInfo from "../components/SectionInfo.js";
import Project from "../components/Project";
import ProjectSlide from "../components/ProjectSlide.js";

const dayNight = document.querySelector(".menu-theme__dayNight");
const menuToggle = document.querySelector(".menu-theme__menuToggle");
const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");

const projectObserver = new IntersectionObserver(handleProjectMasc, {
  threshold: [0.9],
});

const sectionsList = new SectionInfo(sectionsConfig);
sectionsList.setSectionInfo();

function renderPage() {
  const projectsContainer = document.querySelector(projectsListSelector);

  const projectsListElements = allProjects.map((projectData, index) => {

    const newProjectSlide = new ProjectSlide({ projectData, projectSlideTemplateSelector });
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

document
  .querySelectorAll(".project__insight-mask")
  .forEach((project) => projectObserver.observe(project));
