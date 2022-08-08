const navigation = document.querySelector(".navigation");
const mainSection = document.querySelector(".main");
const aboutSection = document.querySelector(".about");
const portfolioSection = document.querySelector(".portfolio");
const resumeSection = document.querySelector(".resume");
const contactsSection = document.querySelector(".contacts");
const navigationMobile = document.querySelector('.navigation__mobile')
const homeNavigationElement = document.querySelector('.navigation_home')
const mainNavigationElement = document.querySelector('.navigation_with-scroll')


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



const navigationConfig = {
  // homeNavigatorSelector: ".navigation",
  home: {
    slideNum: 0,
    sectionToScroll: null,
  },
  about: {
    slideNum: 1,
    sectionToScroll: mainSection,
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
  mainSection,
};

const sectionsConfig = {
  sectionsSelector: ".section",
};
const projectsConfig = {
  projectSelector: ".project",
};

export {
  swiper1,
  navigationConfig,
  projectsConfig,
  sectionsConfig,
  projectTemplateSelector,
  projectsListSelector,
  projectSlideTemplateSelector,
  contactsFormSelector,
  navigation,
  phpScriptLink,
  formOptions,
  homeNavigationElement,
  mainNavigationElement,
};
