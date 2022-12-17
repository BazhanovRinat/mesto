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

const popupElements = document.querySelectorAll(".popup");

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

// Стартовые карточки
initialCards.forEach(function (element) {
    elements.prepend(createCard(element.link, element.name))
});

//Новые Карточки
function createCard(imageValue, nameValue) {
    const cardsElement = cardsTemplate.querySelector(".element").cloneNode(true);
    cardsElement.querySelector(".element__image").src = imageValue;
    cardsElement.querySelector(".element__image").alt = "Карточка";
    cardsElement.querySelector(".element__name").textContent = nameValue;
    cardsElement.querySelector(".element__button").addEventListener("click", function (like) {
        like.target.classList.toggle("element__button_active");
    });
    cardsElement.querySelector(".element__delete").addEventListener("click", function () {
        cardsElement.remove();
    });
    cardsElement.querySelector(".element__image").addEventListener("click", function () {
        openPopup(popupZoom);
        popupZoomImage.src = imageValue;
        popupZoomText.textContent = nameValue;
    });
    return cardsElement;
}
//функции сабмита
function submitformAddCard(evt) {
    evt.preventDefault();
    const image = imageInputLink;
    const name = nameInputPlace;

    elements.prepend(createCard(image.value, name.value))
    closePopupSubmit(popupAdd);
    formAddCard.reset();
}
formAddCard.addEventListener('submit', submitformAddCard);

function submitEditProfileForm(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    closePopupEsc(popupEdit);

}
formEditProfile.addEventListener('submit', submitEditProfileForm);

//Закрытие попап нажатием на попап
const popup = document.querySelectorAll(".popup");

function closePopup(popup) {
    popup.target.classList.remove("popup_opened")
}

popup.forEach(closeElement => {
    closeElement.addEventListener("click", closePopup);
})

// Открытие попап
function openPopup(popup) {
    popup.classList.add("popup_opened")
}

buttonOpenEditProfileForm.addEventListener("click", () => {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
    disableButtonSubmit()
    hideInputError(object, popupForm, popupInput);
});
buttonOpenAddCardForm.addEventListener("click", () => {
    openPopup(popupAdd);
    disableButtonSubmit()
});

function disableButtonSubmit() {
    const submitButton = document.querySelectorAll(".popup__submit")
    submitButton.forEach(disabledElement => {
        disabledElement.classList.add("popup__submit_disabled");
        disabledElement.disabled = true;
    })
}




//Закрытие попап на крестик
function closeButton() {
    popupElements.forEach(closePopup => {
        closePopup.addEventListener("click", (evt) => {
            if (evt.target.classList.contains("popup__close")) {
                closePopup.classList.remove("popup_opened")
            }
        })
    })
}
closeButton()

//Закрытие попап на Esc
const closePopupEsc = (popup) => {
    popup.classList.remove('popup_opened')
}

function keyHandler(evt) {
    popupElements.forEach(closePopup => {
        if (evt.key === 'Escape') {
            closePopup.classList.remove('popup_opened')
        }
    })
}

document.addEventListener('keydown', keyHandler)

//Закрытие попап на сабмит
function closePopupSubmit(popup) {
    popup.classList.remove("popup_opened")
}


// Общая функция закрытия попап










