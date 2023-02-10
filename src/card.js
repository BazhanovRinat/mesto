export default class Card {
    constructor(name, link, templateSelector) {
        this._name = name
        this._link = link
        this._templateSelector = templateSelector
    }

    _getTemplate() {
        const cardsElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

        return cardsElement;
    }

    _likeCard() {
        this._element.querySelector(".element__button").classList.toggle("element__button_active");
    }

    _removeCard() {
        this._element.remove()
        this._element = null;
    }

    _zoomCard() {
        this._popupZoom = document.querySelector(".popup-zoom");
        this._popupZoomImage = document.querySelector('.popup-zoom__image');
        this._popupZoomText = document.querySelector(".popup-zoom__title");
        
        this._popupZoom.classList.add("popup_opened");
        this._popupZoomImage.src = this._link;
        this._popupZoomImage.alt = "Карточка"
        this._popupZoomText.textContent = this._name;
    }

    _setEventListeners() {
        this._element.querySelector(".element__button").addEventListener("click", () => {
            this._likeCard();
        });

        this._element.querySelector(".element__delete").addEventListener("click", () => {
            this._removeCard();
        });

        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._zoomCard();
        });
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        this._element.querySelector(".element__name").textContent = this._name;
        this._element.querySelector(".element__image").src = this._link;
        this._element.querySelector(".element__image").alt = "Карточка";

        return this._element;
    }
}












