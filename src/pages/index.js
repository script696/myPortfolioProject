import "./index.scss";

import {
  swiper1,
  swiper2,
  swiper3,
  navigationConfig,
  projectsConfig,
  sectionsConfig,
} from "../utils/constants.js";

import Navigation from "../components/Navigation.js";
import Projects from "../components/Projects.js";
import SectionInfo from "../components/SectionInfo.js";

const dayNight = document.querySelector(".menu-theme__dayNight");
const menuToggle = document.querySelector(".menu-theme__menuToggle");
const body = document.querySelector("body");
const navigation = document.querySelector(".navigation");

dayNight.onclick = function () {
  body.classList.toggle("dark");
  dayNight.classList.toggle("active");
};
menuToggle.onclick = function () {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
};

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




function swiperHandler(buttonId) {
  const mainContainerHeight = swiper2.slides[0].clientHeight
  const targetSectionOffsetY = sectionsList.getSectionOffsetY(
    `${buttonId}-section`
  );
  const currentOffset = targetSectionOffsetY / mainContainerHeight
  
  swiper1.slideNext(1000);
  
  if (targetSectionOffsetY) {
    setTimeout(() => swiper2.setProgress(currentOffset, 1000), 1200);
  } 
}

