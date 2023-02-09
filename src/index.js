import Card from "./card.js"
import FormValidator from "./validate.js"

const buttonOpenEditProfileForm = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup-edit");

const buttonOpenAddCardForm = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup-add");

const popupZoom = document.querySelector(".popup-zoom");

const formEditProfile = document.querySelector(".popup-edit__form");
const formAddCard = document.querySelector(".popup-add__form");

const nameInput = document.querySelector(".popup__input_name_name");
const aboutInput = document.querySelector(".popup__input_name_about");
const imageInputLink = document.querySelector(".popup__input_name_link");
const nameInputPlace = document.querySelector(".popup__input_name_place-name");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const elements = document.querySelector(".elements");

const cardsTemplate = document.querySelector("#new-cards").content;

const popupZoomImage = document.querySelector('.popup-zoom__image');
const popupZoomText = document.querySelector(".popup-zoom__title");

const popupList = document.querySelectorAll(".popup");
const buttonCloseList = document.querySelectorAll(".popup__close")
const buttomAddSubmit = document.querySelector(".popup-add__submit")
const buttomEditSubmit = document.querySelector(".popup-edit__submit")
//const cardLike = document.querySelector(".element__button"); 

const initialCards = [
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

const object = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_type_active'
};

function renderCard(name, link) {
    const card = new Card(name, link, "#new-cards")
    const cardElement = card.createCard();

    return cardElement
}

initialCards.forEach((element) => {
    elements.prepend(renderCard(element.name, element.link))
})

//функции сабмита
function submitformAddCard(evt) {
    evt.preventDefault();
    const image = imageInputLink;
    const name = nameInputPlace;

    elements.prepend(renderCard(name.value, image.value))
    closePopup(popupAdd);
    formAddCard.reset();
}

formAddCard.addEventListener('submit', submitformAddCard);

function submitEditProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopup(popupEdit);

}

formEditProfile.addEventListener('submit', submitEditProfileForm);

// Открытие попап
function openPopup(popup) {
    popup.classList.add("popup_opened")
    document.addEventListener('keydown', keyHandler)
}

buttonOpenEditProfileForm.addEventListener("click", () => {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    disableButtonSubmit(buttomEditSubmit)
    //hideInputError(object, object.formSelector, popupInput)
});

buttonOpenAddCardForm.addEventListener("click", () => {
    openPopup(popupAdd);
    disableButtonSubmit(buttomAddSubmit)
});

// Закрытие попап
const closePopup = (popup) => {
    popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', keyHandler)
}

function disableButtonSubmit(buttom) {
    buttom.classList.add("popup__submit_disabled");
    buttom.disabled = true;
}

//Закрытие попап на крестик
buttonCloseList.forEach(btn => {
    const popup = btn.closest(".popup");
    btn.addEventListener("click", () => closePopup(popup));
})

//Закрытие попап на Esc
function keyHandler(evt) {
    if (evt.key === 'Escape') {
        popopOpend = document.querySelector(".popup_opened")
        closePopup(popopOpend)
    }
}


//Закрытие попап нажатием на попап
popupList.forEach(closeElement => {
    closeElement.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("popup_opened"))
            closePopup(closeElement)
    })
});

const popupEditForm = new FormValidator(object, ".popup-edit__form")
popupEditForm.enableValidation()

const popapAddForm = new FormValidator(object, ".popup-add__form")
popapAddForm.enableValidation()












