export default class FormValidator {
    constructor(data, formElement) {
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._formSelector = formElement;
        this._inputList = Array.from(document.querySelector(this._formSelector).querySelectorAll(this._inputSelector));
        this._buttomSubmit = document.querySelector(this._formSelector).querySelector(this._submitButtonSelector);
    }

    _showInputError(input, validationMessage) {
        const errorElement = document.querySelector(this._formSelector).querySelector(`.${input.id}-error`);
        errorElement.textContent = input.validationMessage;
        errorElement.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideInputError(input) {
        const errorElement = document.querySelector(this._formSelector).querySelector(`.${input.id}-error`);
        errorElement.textContent = "";
        errorElement.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    }

    _isValid(input) {
        if (input.validity.valid) {
            this._hideInputError(input);
        } else {
            this._showInputError(input, input.validationMessage);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((input) => {
            return !input.validity.valid;
        })
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this.disableButtonSubmit()
        } else {
            this._buttomSubmit.classList.remove(this._inactiveButtonClass);
            this._buttomSubmit.disabled = false;
        }
    }

    disableButtonSubmit() {
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