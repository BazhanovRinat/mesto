import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, {submitForm}) {
        super(popupSelector)
        this._submitForm = submitForm;
        this._popupForm = document.querySelector(popupSelector).querySelector(".popup__form")
    }
    _getInputValues() {
        this._inputList = this._popupForm.querySelectorAll(".popup__input");
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
          });
          return this._formValues;
    }

    close() {
        super.close();
        this._popupForm.reset();
    }

    setEventListeners() {
        super.setEventListeners()
        this._submitButtom = this._popupForm.querySelector(".popup__submit")
        this._submitButtom.addEventListener("click", (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues())
            this.close();
        })
    }
}
