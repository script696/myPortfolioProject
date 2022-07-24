


const projectTemplateSelector = '.project-template';
const projectSlideTemplateSelector = '.projecSlide-template';
const projectsListSelector = '.portfolio__projects'



const swiper1 = new Swiper(".mySwiper1", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});





const navigationConfig = {
  navigatorSelector: '.navigation',
  
}
const sectionsConfig = {
  sectionsSelector: '.section',
  
}
const projectsConfig = {
  projectSelector: '.project',
  
}

export {
  swiper1,
  navigationConfig,
  projectsConfig,
  sectionsConfig,
  projectTemplateSelector,
  projectsListSelector,
  projectSlideTemplateSelector,
 }
