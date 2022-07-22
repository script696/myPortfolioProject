import "./index.scss";

import {
  swiper1,
  navigationConfig,
  projectsConfig,
  sectionsConfig,
  projectTemplateSelector,
  projectsListSelector,
} from "../utils/constants.js";

import allProjects from "../utils/projectsData.js";

import Navigation from "../components/Navigation.js";
import Projects from "../components/Projects.js";
import SectionInfo from "../components/SectionInfo.js";
import Project from "../components/Project";
import Renderer from "../components/Renderer";

const dayNight = document.querySelector(".menu-theme__dayNight");
const menuToggle = document.querySelector(".menu-theme__menuToggle");
const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");

const handleProjectMasc = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("project__insight-mask_deactivate");
    }
  });
};

const projectObserver = new IntersectionObserver(handleProjectMasc, {
  threshold: [0.9],
});

document
  .querySelectorAll(".project__insight-mask")
  .forEach((project) => projectObserver.observe(project));

const navigationList = new Navigation(navigationConfig, swiperHandler);
navigationList.setEventListeners();

const sectionsList = new SectionInfo(sectionsConfig);
sectionsList.setSectionInfo();

const projectsListRenderer = new Renderer({
  renderer: (item, index) => {
    const projectElement = createProject(item, index);
    projectsListRenderer.addItem(projectElement);
  },
  projectsListSelector,
});

projectsListRenderer.rendererItems(allProjects);

function createProject(projectData, index) {
  const project = new Project({ projectData, projectTemplateSelector, index });

  return project.generateProject();
}

function swiperHandler(buttonId) {
  const mainContainerHeight = swiper2.slides[0].clientHeight;
  const targetSectionOffsetY = sectionsList.getSectionOffsetY(
    `${buttonId}-section`
  );
  const currentOffset = targetSectionOffsetY / mainContainerHeight;

  swiper1.slideNext(1000);

  if (targetSectionOffsetY) {
    setTimeout(() => swiper2.setProgress(currentOffset, 1000), 1200);
  }
}
