import NavigationWithScroll from "../components/NavigationWithScroll.js";

class ProjectSlide {
  constructor({
    projectData,
    projectSlideTemplateSelector,
    navigationConfig,
    navigateSlider,
    mainSection,
  }) {
    this._projectData = projectData;
    this._projectSlideTemplateSelector = projectSlideTemplateSelector;

    this._navigationConfig = navigationConfig;
    this._navigateSlider = navigateSlider;

    this._mainSection = mainSection;
  }

  _getTemplate() {
    const projectSlideElement = document
      .querySelector(this._projectSlideTemplateSelector)
      .content.querySelector(".swiper-slide")
      .cloneNode(true);

    return projectSlideElement;
  }

  _setImgsProps() {
    this._projectElement.querySelectorAll("img").forEach((imgElem) => {
      imgElem.src = this._projectData["images"][imgElem.name]["link"];
      imgElem.alt = this._projectData["images"][imgElem.name]["alt"];
    });
  }

  _setTextsProps() {
    this._projectElement
      .querySelectorAll(".slideProject__text-sel")
      .forEach((textElem) => {
        const test = this._projectData["texts"][textElem.id];
        textElem.textContent = this._projectData["texts"][textElem.id];
      });
  }

  _setNavigation() {
    this._wrapElement = this._projectElement.querySelector(".hiddenSlide");
    this._secToScroll = this._wrapElement.querySelector(".slideProject__top");
    this._navigation = this._wrapElement.querySelector(".navigation");

    const extraNavigation = new NavigationWithScroll({
      navigationConfig: this._navigationConfig,
      navigateSlider: this._navigateSlider,
      element: this._navigation,
      mainSection: this._wrapElement,
      scrollToSec: this._secToScroll,
    });

    extraNavigation.setEventListeners();
  }

  generateProject() {
    this._projectElement = this._getTemplate();

    this._setNavigation();

    this._setImgsProps();
    this._setTextsProps();

    return this._projectElement;
  }
}

export default ProjectSlide;
