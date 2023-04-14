import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, { submitForm }) {
        super(popupSelector)
        this._submitForm = submitForm;
        this._popupForm = this._popup.querySelector(".popup__form");
        this._inputList = this._popupForm.querySelectorAll(".popup__input");
        this._submitButton = this._popupForm.querySelector(".popup__submit")
    }
    _getInputValues() {
        const formValues = {};
        this._inputList.forEach(input => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = "Сохранение..."
        } else {
            this._submitButton.textContent = "Сохранить"
        }
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues())
            this.close();
        })
    }
}
