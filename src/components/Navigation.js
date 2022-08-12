class Navigation {
  constructor({ navigationConfig, navigateSlider, element, mainSection, scrollToSec }) {
    this._navigationConfig = navigationConfig;
    this._navigateSlider = navigateSlider;
    this._element = element;
    this._mainSection = mainSection;
    this._sectionToScroll = scrollToSec;
    this._isMainNav = element.matches(".main__nav");
    this._navigationButtons =
      this._element.querySelectorAll(".navigation__link");
    this._burgerButton = this._element.querySelector(".navigation__burger");
    this._navigationMobile = this._navigationConfig.navigationMobile;
    this._scrollPos = 0;


  }

  setEventListeners() {

    this._navigationButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const sectionToScroll =
          this._navigationConfig[button.name]["sectionToScroll"];
        const slideNumber = this._navigationConfig[button.name]["slideNum"];
        const isMain = this._isMainNav;

        this._navigateSlider({ slideNumber, sectionToScroll, isMain });
        this._burgerButton.classList.remove("open");
        this._navigationMobile.classList.remove("navigation__mobile_open");
      });
    });

    this._burgerButton.addEventListener("click", () => {
      this._burgerButton.classList.toggle("open");
      this._navigationMobile.classList.toggle("navigation__mobile_open");
    });
  }

 
}

export default Navigation;
