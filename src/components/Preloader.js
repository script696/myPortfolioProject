class Preloader {
  constructor(preloaderElem) {
    this._preloaderElem = preloaderElem;
  }

  setEventListeners (){
    window.addEventListener('load', () => {
      this._preloaderElem.classList.add('preloader_loaded')
    });
  }

}

export default Preloader
