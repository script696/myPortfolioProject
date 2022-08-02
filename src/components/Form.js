class Form {
  constructor(formSelector, apiTelegramHandler, formOptions) {
    this._formSelector = formSelector;
    this._apiTelegramHandler = apiTelegramHandler;
    this._inputSelector = formOptions.inputSelector;
    this._submitButtonSelector = formOptions.submitButtonSelector;
    this._inputErrorClass = formOptions.inputErrorClass;
    this._errorClass = formOptions.errorClass;
    this._inactiveButtonClass = formOptions.inactiveButtonClass;
    this._formElement = document.querySelector(this._formSelector);
    this._inputList = [...this._formElement.querySelectorAll(this._inputSelector)];
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);

  }

  setEventListeners() {
    this.toggleButtonState();

    this._formElement.addEventListener("submit", (e) => {
      this._createFormBody(e);
    });

    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  }

  _createFormBody(e) {
    e.preventDefault()

    const data = new URLSearchParams();
    for (const pair of new FormData(this._formElement)) {
      data.append(pair[0], pair[1]);
    }

    this._apiTelegramHandler(data)
  }

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass)
      this._buttonElement.setAttribute('disabled', true);

    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass)
      this._buttonElement.removeAttribute('disabled');

    }
  }

  _hasInvalidInput() {
    return this._inputList.some(inputElement => !inputElement.validity.valid)
  }

}

export default Form
