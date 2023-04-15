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


const cardsList = new Section({
    renderer: (item) => {
        const card = new Card({
            data: item, templateSelector: "#new-cards",
            handleCardClick: () => {
                const imageClick = new PopupWithImage(".popup-zoom")
                imageClick.open(item.name, item.link)
                imageClick.setEventListeners()
            }, userId: userId,
            handleDeleteCard: (cardId) => {
                deletePopup.open()
                deletePopup.SetDeleteData(() => {
                    deletePopup.close()
                    card._removeCard()
                    api.deleteCard(cardId)
                })
            },
            handleCardLike: (cardId) => {
                api.cardLike(cardId)
                    .then((data) => {
                        card.likeCard(data)
                    })
            },
            handelCardLikeRemove: (cardId) => {
                api.cardLikeRemove(cardId)
                    .then((data) => {
                        card.likeCard(data)
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

//Создание карточек
// function createCard(data) {
//     const card = new Card({
//         data: data, templateSelector: "#new-cards",
//         handleCardClick: () => {
//             const imageClick = new PopupWithImage(".popup-zoom")
//             imageClick.open(data.name, data.link)
//             imageClick.setEventListeners()
//         }, userId: userId,
//         handleDeleteCard: (cardId) => {
//             const popupDelete = new Popup(".popup-delete")
//             popupDelete.open()
//             popupDelete.setEventListeners()
//             deleteSubmit.addEventListener("click", () => {
//                 card._removeCard()
//                 popupDelete.close()
//                 api.deleteCard(cardId)
//             })
//         },
//         handleCardLike: (cardId) => {
//             api.cardLike(cardId)
//                 .then((data) => {
//                     card.likeCard(data)
//                 })
//         },
//         handelCardLikeRemove: (cardId) => {
//             api.cardLikeRemove(cardId)
//                 .then((data) => {
//                     card.likeCard(data)
//                 })
//         }
//     })
//     const cardElement = card.createCard(data);

//     return cardElement
// }

//Попап добавления карточек
const formAddCards = new PopupWithForm(".popup-add", {
    submitForm: (item) => {
        formAddCards.renderLoading(true)
        api.postCard(item)
            .then(res => {
                cardsList.addItem(res)
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
        profileInfo.setUserInfo(item.name, item.about)
        profilePopupSubmit.renderLoading(true)
        api.setProfileInfo(item)
            .finally(() => {
                profilePopupSubmit.renderLoading(false)
            })
    }
})
profilePopupSubmit.setEventListeners()

//Попап аватара
const avatarPopupSubmit = new PopupWithForm(".popup-avatar", {
    submitForm: (item) => {
        profileInfo.setAvatarProfile(item.avatar)
        avatarPopupSubmit.renderLoading(true)
        api.setProfileAvatar(item)
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
    popupEditForm.disableButtonSubmit();
    //hideInputError(object, object.formSelector, popupInput)
});

buttonOpenAddCardForm.addEventListener("click", () => {
    formAddCards.open();
    popapAddForm.disableButtonSubmit()
});

buttonOpenAvatarForm.addEventListener("click", () => {
    avatarPopupSubmit.open()
})

//Данные о профиле с сервера
// api.profileDataInstall()
//     .then((result) => {
//         const profileInfo = new UserInfo({
//             profileNameSelector: ".profile__name",
//             profileAboutSelector: ".profile__about",
//             profileAvatarSelector: ".profile__avatar",
//         })
//         profileInfo.setUserInfo(result.name, result.about)
//         profileInfo.setAvatarProfile(result.avatar)
//     })

// //Рендер карточек с сервера
// api.getInitialCards()
//     .then((res) => {
//         const cardsList = new Section({
//             items: res, renderer: (item) => {
//                 cardsList.addItem(createCard(item))
//             }
//         },
//             ".elements"
//         );
//         cardsList.renderItems()
//     });

//Валидация
const popupEditForm = new FormValidator(object, ".popup-edit__form")
popupEditForm.enableValidation();

const popapAddForm = new FormValidator(object, ".popup-add__form")
popapAddForm.enableValidation();

const popupAvatarForm = new FormValidator(object, ".popup-avatar__form")
popupAvatarForm.enableValidation();
