const navigation = document.querySelector(".navigation");
const mainSection = document.querySelector(".main");
const aboutSection = document.querySelector(".about");
const portfolioSection = document.querySelector(".portfolio");
const resumeSection = document.querySelector(".resume");
const contactsSection = document.querySelector(".contacts");
const navigationMobile = document.querySelector('.navigation__mobile')
const homeNavigationElement = document.querySelector('.navigation_home')
const mainNavigationElement = document.querySelector('.navigation_with-scroll')
const loadingPopupElem = document.querySelector('.loading-popup')


const projectTemplateSelector = ".project-template";
const projectSlideTemplateSelector = ".projecSlide-template";
const projectsListSelector = ".portfolio__projects";
const contactsFormSelector = '.contacts__form'

const phpScriptLink = 'telegram.php'

const formOptions = {
  inputSelector: '.form__text',
  submitButtonSelector: '.button-contact',
  inactiveButtonClass: 'button_inactive',
  inputErrorClass: 'form__text_type_error',
  errorClass: 'form__text-error_active'
}



// const swiper1 = new Swiper(".mySwiper1", {
//   effect: "cube",
//   grabCursor: true,
//   cubeEffect: {
//     shadow: false,
//     slideShadows: true,
//     shadowOffset: 20,
//     shadowScale: 0.94,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });


var swiper1 = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 700,
    modifier: 1,
    slideShadows: false,
  },
 
});


const apiCofig = {
  phpScriptLink: 'telegram.php',
  codewarsLink: 'https://www.codewars.com/api/v1/users/scr1pt696'
}

const codewarsConfig = {
  skillsList: '.codewars__items',
}

const navigationConfig = {
  // homeNavigatorSelector: ".navigation",
  home: {
    slideNum: 0,
    sectionToScroll: null,
  },
  about: {
    slideNum: 1,
    sectionToScroll: aboutSection,
  },
  portfolio: {
    slideNum: 1,
    sectionToScroll: portfolioSection,

  },
  resume: {
    slideNum: 1,
    sectionToScroll: resumeSection

  },
  contacts: {
    slideNum: 1,
    sectionToScroll: contactsSection,

  },

  navigationMobile,
  mainSection: mainSection,
};

const popupConfig = {
  popupElem: loadingPopupElem,
  loaderSucessClass: '.loading-popup__loader-sucess',
  loaderRejectClass: '.loading-popup__loader-reject',
  loaderClass: '.loading-popup__loader',
}
const sectionsConfig = {
  sectionsSelector: ".section",
};

export {
  swiper1,
  navigationConfig,
  sectionsConfig,
  projectTemplateSelector,
  projectsListSelector,
  projectSlideTemplateSelector,
  contactsFormSelector,
  phpScriptLink,
  formOptions,
  homeNavigationElement,
  mainNavigationElement,
  aboutSection,
  popupConfig,
  apiCofig,
  codewarsConfig,
};
