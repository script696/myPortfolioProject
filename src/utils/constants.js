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


const swiper2 = new Swiper(".mySwiper2", {
  direction: "vertical",
  slidesPerView: "auto",
  freeMode: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});
const swiper3 = new Swiper(".mySwiper3", {
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
  swiper2,
  swiper3,
  navigationConfig,
  projectsConfig,
  sectionsConfig,
 }
