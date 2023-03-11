export const buttonOpenEditProfileForm = document.querySelector(".profile__edit-button");
// const popupEdit = document.querySelector(".popup-edit");

export const buttonOpenAddCardForm = document.querySelector(".profile__add-button");
// const popupAdd = document.querySelector(".popup-add");

// const formEditProfile = document.querySelector(".popup-edit__form");
// const formAddCard = document.querySelector(".popup-add__form");

export const nameInput = document.querySelector(".popup__input_name_name");
export const aboutInput = document.querySelector(".popup__input_name_about");
// const imageInputLink = document.querySelector(".popup__input_name_link");
// const nameInputPlace = document.querySelector(".popup__input_name_place-name");

export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");

// const elements = document.querySelector(".elements");

// const cardsTemplate = document.querySelector("#new-cards").content;

// const popupList = document.querySelectorAll(".popup");
// const buttonCloseList = document.querySelectorAll(".popup__close")
// const buttomAddSubmit = document.querySelector(".popup-add__submit")
// const buttomEditSubmit = document.querySelector(".popup-edit__submit")

export const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const object = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_type_active'
};