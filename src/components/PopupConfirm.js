import Popup from "./Popup.js";

export default class PopuoConfirm extends Popup {
    constructor({ poupSelector }) {
        super(poupSelector)
        this._submitButton = this._popup.querySelector(".popup-delete__submit");
    }
    SetDeleteData(callback) {
        this._deleteData = callback
    }
    setEventListeners() {
        super.setEventListeners();
        this._submitButton.addEventListener("click", (evt) => {
            evt.preventDefault()
            this._deleteData()
        })
    }
}