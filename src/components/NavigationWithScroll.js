import Navigation from "./Navigation.js"

class NavigationWithScroll extends Navigation {
  constructor( navigationConfig, navigateSlider, element, mainSection, scrollToSec ) {
    super(navigationConfig, navigateSlider, element, mainSection, scrollToSec)
    this._scrollTopBtn = this._mainSection.querySelector('#logo-scroll-main-top');
    
  }
  
  setEventListeners() {
    super.setEventListeners()

    
    this._mainSection.addEventListener("scroll", () => {this._handleMenu()});

    this._scrollTopBtn.addEventListener('click', ()=> {

      console.log(this._sectionToScroll);
      
      
      this._sectionToScroll?.scrollIntoView({block: 'start', behavior: 'smooth'})
    })
   
  }


  _handleMenu() {
    this._st = this._mainSection.scrollTop;
    
    if(this._st > this._scrollPos) this._element.classList.add("navigation_hide")
    if(this._st < this._scrollPos && this._st > 30) this._element.classList.remove("navigation_hide");
   
    this._scrollPos = this._st;
  }
}

export default NavigationWithScroll