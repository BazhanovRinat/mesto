export default class FormValidator {
    constructor(data, formSelector) {
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._formSelector = formSelector;
        this._inputList = Array.from(document.querySelector(this._formSelector).querySelectorAll(this._inputSelector));
    }

    _showInputError() {
        this._errorElement.textContent = this._input.validationMessage;
        this._errorElement.classList.add(this._errorClass);
        this._input.classList.add(this._inputErrorClass);
    }

    _hideInputError() {
        this._errorElement.textContent = "";
        this._errorElement.classList.remove(this._errorClass);
        this._input.classList.remove(this._inputErrorClass);
    }

    _isValid(input) {
        this._input = input;
        this._errorElement = document.querySelector(this._formSelector).querySelector(`.${this._input.id}-error`);
        if (this._input.validity.valid) {
            this._hideInputError();
        } else {
            this._showInputError();
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        })
    }

    _toggleButtonState() {
        this._buttomSubmit = document.querySelector(this._formSelector).querySelector(this._submitButtonSelector);
        if (this._hasInvalidInput()) {
            this._buttomSubmit.classList.add(this._inactiveButtonClass);
            this._buttomSubmit.disabled = true;
        } else {
            this._buttomSubmit.classList.remove(this._inactiveButtonClass);
            this._buttomSubmit.disabled = false;
        }
    }

    disableButtonSubmit() {
        this._buttomSubmit = document.querySelector(this._formSelector).querySelector(this._submitButtonSelector);
        this._buttomSubmit.classList.add(this._inactiveButtonClass);
        this._buttomSubmit.disabled = true;
}

_setEventListeners() {
    this._inputList.forEach((input) => {
        input.addEventListener("input", () => {
            this._isValid(input);
            this._toggleButtonState();
        });
    })
}

enableValidation() {
    this._setEventListeners();
}
}