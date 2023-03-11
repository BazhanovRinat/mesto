export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._keyEscHandler = this._handleEscClose.bind(this)
    }
    open() {
        this._popup.classList.add("popup_opened")
        document.addEventListener("keydown", this._keyEscHandler)
    }
    close() {
        this._popup.classList.remove("popup_opened")
        document.removeEventListener("keydown", this._keyEscHandler)
    }
    _handleEscClose(evt) {
        if (evt.key === `Escape`) {
            this.close()
        }
    }
    setEventListeners() {
        this._popup.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("popup_opened"))
                this.close()
        })
        this._popup.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("popup__close"))
                this.close()
        })
    }
}