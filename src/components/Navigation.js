class Navigation {
  constructor({navigatorSelector}, swiperHandler){
    this._navigationElem = document.querySelector(navigatorSelector)
    this._swiperHandler = swiperHandler;
    this._navigationButtons = this._navigationElem.querySelectorAll('button')
  }

  setEventListeners(){
    this._navigationButtons.forEach(button => {
      button.addEventListener('click', () => this._swiperHandler(button.id))
    });
  }
}

export default Navigation