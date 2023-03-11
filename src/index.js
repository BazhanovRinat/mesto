import Card from "./components/card.js";
import FormValidator from "./components/validate.js";
import Section from "./components/section.js";
import Popup from "./components/popup.js";
import PopupWithImage from "./components/popupWithImage.js";
import PopupWithForm from "./components/popupWithForm.js";
import UserInfo from "./components/userInfo.js";
import "../src/pages/index.css";


//Создание карточек
function renderCard(name, link) {
    const card = new Card(name, link, "#new-cards", {
        handleCardClick: () => {
            const imageClick = new PopupWithImage(".popup-zoom")
            const popupZoom = imageClick.open(name, link)
            imageClick.setEventListeners()
            return popupZoom
        }
    })
    const cardElement = card.createCard();

    return cardElement
}

//Загрузка карточек из объекта
const cardsList = new Section({
    items: initialCards, renderer: (item) => {
        cardsList.addItem(renderCard(item.name, item.link))
    }
},
    ".elements"
);
cardsList.renderItems()


//Попап добавления карточек
const formAddCards = new PopupWithForm(".popup-add", {
    submitForm: (item) => {
        cardsList.addItem(renderCard(item.place, item.link))
    }
})
formAddCards.setEventListeners()

//Профиль
const profilePopupSubmit = new PopupWithForm(".popup-edit", {
    submitForm: (item) => {
        const profileInfo = new UserInfo({
            profileName: ".profile__name",
            profileAbout: ".profile__about",
        })
        profileInfo.setUserInfo(item.name, item.about)
    }
})
profilePopupSubmit.setEventListeners()

//Открытие попапов
buttonOpenEditProfileForm.addEventListener("click", () => {
    profilePopupSubmit.open();
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    popupEditForm.disableButtonSubmit()
    //hideInputError(object, object.formSelector, popupInput)
});

buttonOpenAddCardForm.addEventListener("click", () => {
    formAddCards.open();
    popapAddForm.disableButtonSubmit()
});

//Валидация
const popupEditForm = new FormValidator(object, ".popup-edit__form")
popupEditForm.enableValidation()

const popapAddForm = new FormValidator(object, ".popup-add__form")
popapAddForm.enableValidation()

import {
    buttonOpenEditProfileForm, buttonOpenAddCardForm, nameInput, aboutInput, profileName, profileAbout,
    initialCards, object
} from "../src/utils/constants.js";










