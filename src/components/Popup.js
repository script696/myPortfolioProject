class Popup {
  constructor({
    popupElem,
    loaderSucessClass,
    loaderRejectClass,
    loaderClass,
  }) {
    this._popupElem = popupElem;
    this._loaderSucessElem = this._popupElem.querySelector(loaderSucessClass);
    this._loaderRejectElem = this._popupElem.querySelector(loaderRejectClass);
    this._loaderElem = this._popupElem.querySelector(loaderClass);
  }

  openPopup() {
    this._popupElem.classList.add("loading-popup_active");
    this._loaderElem.classList.add("loading-popup__loader_active");
  }
  _closePopup(){
    this._popupElem.classList.remove("loading-popup_active");
    this._loaderSucessElem.classList.remove("loading-popup__loader-sucess_active");
    this._loaderRejectElem.classList.remove("loading-popup__loader-reject_active");
  }

  // getSucessPopupMsg() {
  //   setTimeout(()=>{
  //     this._loaderElem.classList.remove("loading-popup__loader_active");
  //     this._loaderSucessElem.classList.add("loading-popup__loader-sucess_active");
  //     setTimeout(() => {
  //       this._closePopup()
  //     }, 2000);
  //   }, 1100)
  // }


  handlePopup(isSucces) {
    setTimeout(()=>{
      this._loaderElem.classList.remove("loading-popup__loader_active");
      isSucces
      ? this._loaderSucessElem.classList.add("loading-popup__loader-sucess_active")
      : this._loaderRejectElem.classList.add("loading-popup__loader-reject_active");
      setTimeout(() => {
        this._closePopup()
      }, 1700);
    }, 1100)
   
  }
}

export default Popup;
