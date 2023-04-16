import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._popupName = this._popup.querySelector(".popup-zoom__title");
        this._popupImage = this._popup.querySelector(".popup-zoom__image");
    }
    open(zoomName, zoomLink) {
        super.open();
        this._popupName.textContent = zoomName;
        this._popupImage.src = zoomLink;
        this._popupImage.alt = zoomName;
    }
}


