class Project {
  constructor({
    projectData,
    projectTemplateSelector,
    index,
    projectSlideElem,
    addExtraSlide,
  }) {
    this._projectData = projectData;
    this._projectTemplateSelector = projectTemplateSelector;
    this._projectIndex = `0${index + 1}`;
    this._projectSlideElem = projectSlideElem;
    this._addExtraSlide = addExtraSlide;
  }

  _getTemplate() {
    const projectElement = document
      .querySelector(this._projectTemplateSelector)
      .content.querySelector(".project")
      .cloneNode(true);

    return projectElement;
  }

  generateProject() {
    this._projectElement = this._getTemplate();

    this._projectImg = this._projectElement.querySelector(
      ".project__main-mask"
    );
    this._projectTitle = this._projectElement.querySelector(".project__title");
    this._projectSubTitle = this._projectElement.querySelector(
      ".project__title-description"
    );
    this._projectIndexElem =
      this._projectElement.querySelector(".mask-number__back");

    this._projectButtonElem =
      this._projectElement.querySelector(".project__button");

    this._projectImg.src = this._projectData.images.mainImg.link;
    this._projectImg.alt = this._projectData.images.mainImg.alt;
    this._projectTitle.textContent = this._projectData.texts.templateProjectTitle;
    this._projectSubTitle.textContent = this._projectData.texts.templateProjectSubtitle;
    this._projectIndexElem.textContent = this._projectIndex;

    this._setEventListeners();

    return this._projectElement;
  }

  _setEventListeners() {
    this._projectButtonElem.addEventListener("click", () => {
      this._addExtraSlide(this._projectSlideElem);
    });
  }
}

export default Project;
