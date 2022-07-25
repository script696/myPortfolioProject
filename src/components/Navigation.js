class Navigation {
  constructor({ navigationConfig, navigateSlider }) {
    this._navigationConfig = navigationConfig;
    this._navigatorSelector = this._navigationConfig.navigatorSelector;
    this._navigateSlider = navigateSlider;
    this._element = document.querySelector(this._navigatorSelector);
    this._navigationButtons =
      this._element.querySelectorAll(".navigation__link");
    this._burgerButton = this._element.querySelector(".navigation__burger");
    this._navigationMobile = this._navigationConfig.navigationMobile;
  }

  setEventListeners() {
    this._navigationButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const sectionToScroll =
          this._navigationConfig[button.name]["sectionToScroll"];
        const slideNumber = this._navigationConfig[button.name]["slideNum"];
        this._navigateSlider({ slideNumber, sectionToScroll });
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
