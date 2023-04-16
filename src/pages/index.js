import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "../pages/index.css";
import Api from "../components/Api.js"
import PopupWithConfirmation from "../components/PopupWithConfirmation.js"
import {
    buttonOpenEditProfileForm, buttonOpenAddCardForm, nameInput, aboutInput,
    initialCards, object, buttonOpenAvatarForm, deleteSubmit,
} from "../utils/constants.js";
let userId

const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-63/',
    headers: {
        authorization: '52af015b-cc8d-4640-80fa-207f5ac44ed7',
        'Content-Type': 'application/json'
    }
})

const profileInfo = new UserInfo({
    profileNameSelector: ".profile__name",
    profileAboutSelector: ".profile__about",
    profileAvatarSelector: ".profile__avatar",
})

const deletePopup = new PopupWithConfirmation({ poupSelector: ".popup-delete" })
deletePopup.setEventListeners()

const imageClick = new PopupWithImage(".popup-zoom")
imageClick.setEventListeners()

const cardsList = new Section({
    renderer: (item) => {
        const card = new Card({
            data: item, templateSelector: "#new-cards",
            handleCardClick: () => {
                imageClick.open(item.name, item.link)

            }, userId: userId,
            handleDeleteCard: (cardId) => {
                deletePopup.open()
                deletePopup.setDeleteHandler(() => {
                    api.deleteCard(cardId)
                        .then(() => {
                            deletePopup.close()
                            card.removeCard()
                        })
                        .catch((error) => {
                            console.log(`${error}`);
                        })
                })
            },
            handleCardLike: (cardId) => {
                api.cardLike(cardId)
                    .then((data) => {
                        card.setLikes(data)
                    })
            },
            handelCardLikeRemove: (cardId) => {
                api.cardLikeRemove(cardId)
                    .then((data) => {
                        card.setLikes(data)
                    })
            }
        })
        const cardElement = card.createCard();

        return cardElement

    }
},
    ".elements"
);

Promise.all([api.profileDataInstall(), api.getInitialCards()])

    .then(([data, getCards]) => {
        profileInfo.setUserInfo(data.name, data.about);
        profileInfo.setAvatarProfile(data.avatar);
        userId = data._id

        cardsList.renderItems(getCards)

    });

//Попап добавления карточек
const formAddCards = new PopupWithForm(".popup-add", {
    submitForm: (item) => {
        formAddCards.renderLoading(true)
        api.postCard(item)
            .then(res => {
                cardsList.addItem(res)
                formAddCards.close()
            })
            .catch((error) => {
                console.log(`${error}`);
            })
            .finally(() => {
                formAddCards.renderLoading(false)
            })
    }
})
formAddCards.setEventListeners()

//Профиль
const profilePopupSubmit = new PopupWithForm(".popup-edit", {
    submitForm: (item) => {
        profilePopupSubmit.renderLoading(true)
        api.setProfileInfo(item)
            .then(() => {
                profileInfo.setUserInfo(item.name, item.about)
                profilePopupSubmit.close()
            })
            .catch((error) => {
                console.log(`${error}`);
            })
            .finally(() => {
                profilePopupSubmit.renderLoading(false)
            })
    }
})
profilePopupSubmit.setEventListeners()

//Попап аватара
const avatarPopupSubmit = new PopupWithForm(".popup-avatar", {
    submitForm: (item) => {
        avatarPopupSubmit.renderLoading(true)
        api.setProfileAvatar(item)
            .then(() => {
                profileInfo.setAvatarProfile(item.avatar)
                avatarPopupSubmit.close()
            })
            .catch((error) => {
                console.log(`${error}`);
            })
            .finally(() => {
                avatarPopupSubmit.renderLoading(false)
            })
    }
})
avatarPopupSubmit.setEventListeners()

//Открытие попапов
buttonOpenEditProfileForm.addEventListener("click", () => {
    profilePopupSubmit.open();
    const infoGetting = profileInfo.getUserInfo()
    nameInput.value = infoGetting.name
    aboutInput.value = infoGetting.about
    popupEditFormValidator.disableButtonSubmit();
    //hideInputError(object, object.formSelector, popupInput)
});

buttonOpenAddCardForm.addEventListener("click", () => {
    formAddCards.open();
    popapAddFormValidator.disableButtonSubmit()
});

buttonOpenAvatarForm.addEventListener("click", () => {
    popupAvatarFormValidator.disableButtonSubmit()
    avatarPopupSubmit.open()
})

//Валидация
const popupEditFormValidator = new FormValidator(object, ".popup-edit__form")
popupEditFormValidator.enableValidation();

const popapAddFormValidator = new FormValidator(object, ".popup-add__form")
popapAddFormValidator.enableValidation();

const popupAvatarFormValidator = new FormValidator(object, ".popup-avatar__form")
popupAvatarFormValidator.enableValidation();
