const buttomEdit = document.querySelector(".profile__edit-button"); //Конка корректировать
const popupEditCloseButtom = document.querySelector(".popup-edit__close"); //Кнопка закрыть попап
const popupEdit = document.querySelector(".popup-edit"); // сам попап

const buttomAdd = document.querySelector(".profile__add-button");
const popupAddCloseButtom = document.querySelector(".popup-add__close");
const popupAdd = document.querySelector(".popup-add");

const popupZoom = document.querySelector(".popup-zoom");
const popupZoomCloseButtom = document.querySelector(".popup-zoom__close");

const formEdit = document.querySelector(".popup-edit__form"); // форма в попапе
const addForm = document.querySelector(".popup-add__form");

const nameInput = document.querySelector(".popup__input_name_name"); // Имя в инпуте
const aboutInput = document.querySelector(".popup__input_name_about");
const imageInputLink = document.querySelector(".popup__input_name_link");
const nameInputPlace = document.querySelector(".popup__input_name_place-name");

const profileName = document.querySelector(".profile__name"); //Имя в профиле
const profileAbout = document.querySelector(".profile__about");

const elements = document.querySelector(".elements");

const cardsTemplate = document.querySelector("#new-cards").content;

const popupZoomImage = document.querySelector('.popup-zoom__image');
const popupZoomText = document.querySelector(".popup-zoom__title");

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
    const cardsElement = cardsTemplate.querySelector(".element").cloneNode(true);
    cardsElement.querySelector(".element__image").src = element.link;
    cardsElement.querySelector(".element__name").textContent = element.name;
    cardsElement.querySelector(".element__button").addEventListener("click", function (like) {
        like.target.classList.toggle("element__button_active");
    });
    cardsElement.querySelector(".element__delete").addEventListener("click", function (trash) {
        cardsElement.remove();
    });
    cardsElement.querySelector(".element__image").addEventListener("click", function () {
        popupZoom.classList.add("popup_opened");
        popupZoomImage.src = element.link;
        popupZoomText.textContent = element.name;
    });
    elements.prepend(cardsElement);
});

//Новые Карточки
function createCard(imageValue, nameValue) {
    elements.insertAdjacentHTML("afterbegin", `<div class="element">
    <img class="element__delete" src="./images/trash.svg">
    <img class="element__image" src="${imageValue}" alt="Карточка">
    <div class="element__item">
        <h2 class="element__name">${nameValue}</h2>
        <button type="button" class="element__button"></button>
    </div>
</div>`)
    const buttomTrash = document.querySelector(".element__delete");
    const card = document.querySelector(".element") 
    buttomTrash.addEventListener("click", function () {
        card.remove();
    });
    const buttonLike = document.querySelector(".element__button")
    buttonLike.addEventListener("click", function (like) {
        like.target.classList.toggle("element__button_active");
    });
    const imageZoom = document.querySelector(".element__image");
    imageZoom.addEventListener("click", function () {
        popupZoom.classList.add("popup_opened");
        popupZoomImage.src = imageValue;
        popupZoomText.textContent = nameValue;
    });
}

function submitAddForm(evt) {
    evt.preventDefault();
    const image = imageInputLink;
    const name = nameInputPlace;

    createCard(image.value, name.value)
    closePopup(popupAdd);
    image.value = '';
    name.value = '';
}
addForm.addEventListener('submit', submitAddForm);

//функция сабмита
function submitFormHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value; // введенное значение импeтов задаем тексту в профиле
    profileAbout.textContent = aboutInput.value;
    closePopup(popupEdit);
}
formEdit.addEventListener('submit', submitFormHandler);

//Функции добавлнеия и убирания классов попапу
function openPopup(popup) {
    popup.classList.add("popup_opened")
}

function closePopup(popup) {
    popup.classList.remove("popup_opened")
}

// кнопки активации функции
buttomEdit.addEventListener("click", () => {
    openPopup(popupEdit);
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
});
buttomAdd.addEventListener("click", () => {
    openPopup(popupAdd);
});

popupEditCloseButtom.addEventListener("click", () => {
    closePopup(popupEdit);
});

popupAddCloseButtom.addEventListener("click", () => {
    closePopup(popupAdd);
});

popupZoomCloseButtom.addEventListener("click", () => {
    closePopup(popupZoom);
});







