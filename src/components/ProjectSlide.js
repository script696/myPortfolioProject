class ProjectSlide {
  constructor({ projectData, projectSlideTemplateSelector }) {
    this._projectData = projectData;
    this._projectSlideTemplateSelector = projectSlideTemplateSelector;
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
        const test = this._projectData["texts"][textElem.id]
        textElem.textContent = this._projectData["texts"][textElem.id]
      });
  }

  generateProject() {
    this._projectElement = this._getTemplate();

    this._setImgsProps();
    this._setTextsProps();

    return this._projectElement;
  }
}

export default ProjectSlide;
