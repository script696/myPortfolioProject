class SectionInfo {
  constructor({ sectionsSelector }) {
    this._sectionsSelector = sectionsSelector;
    this._sectionsElemList = [...document.querySelectorAll(this._sectionsSelector)];
    this.sectionsOffsetInfo = {};
  }

  setSectionInfo() {
    this._sectionsElemList.forEach((section) => {
      this.sectionsOffsetInfo[section.id] = {}
      this._setSectionOffsetY(section);
    });
  }
  _setSectionOffsetY(section) {
    const sectionId = section.id
    const sectionOffsetY = section.offsetTop;
    this.sectionsOffsetInfo[sectionId]['offsetY'] = sectionOffsetY
  }

  getSectionOffsetY(sectionId) {
    return this.sectionsOffsetInfo[sectionId].offsetY;
  }
}

export default SectionInfo;
