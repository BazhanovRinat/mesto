export default class Card {
    constructor({ data, templateSelector, handleCardClick, userId, handleDeleteCard, handleCardLike, handelCardLikeRemove }) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._likes = data.likes;
        this.owner = data.owner._id;
        this.userId = userId;
        this._cardId = data._id;
        this._handleDeleteCard = handleDeleteCard
        this._handleCardLike = handleCardLike
        this._handelCardLikeRemove = handelCardLikeRemove
    }

    _getTemplate() {
        const cardsElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);

        return cardsElement;
    }

    likeCard(data) {
        this._likes = data.likes
        this._elementLikes.textContent = this._likes.length
        this._element.querySelector(".element__button").classList.toggle("element__button_active");// исправить обратно на toggle
    }

    _removeCard() {
        this._element.remove()
    }

    _setEventListeners() {
        this._element.querySelector(".element__button").addEventListener("click", () => {
            if (this._likeButton.classList.contains("element__button_active")) {
                this._handelCardLikeRemove(this._cardId)
            } else {
                this._handleCardLike(this._cardId)
            }
        });

        this._element.querySelector(".element__delete").addEventListener("click", () => {
            this._handleDeleteCard(this._cardId)
        });

        this._element.querySelector(".element__image").addEventListener("click", () => {
            this._handleCardClick(this._name, this._link)
        });
    }

    _deleteTrashBtn() {
        if (this.owner !== this.userId) {
            this._deleteTrashBty.remove()
        }
    }

    _likeCardCheak() {
        if (this._likes.some((user) => {
            return this.userId === user._id
        })) {
            this._likeButton.classList.add("element__button_active")
        }
    }

    createCard() {
        this._element = this._getTemplate();
        this._elementImage = this._element.querySelector(".element__image")
        this._deleteTrashBty = this._element.querySelector(".element__delete")
        this._element.querySelector(".element__name").textContent = this._name;
        this._elementImage.src = this._link;
        this._elementImage.alt = this._name;
        this._elementLikes = this._element.querySelector(".element__like-count");
        this._elementLikes.textContent = this._likes.length
        this._likeButton = this._element.querySelector(".element__button")
        this._setEventListeners();
        this._deleteTrashBtn()
        this._likeCardCheak()

        return this._element;
    }
}



