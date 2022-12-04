const editButtom = document.querySelector(".profile__edit-button"); //Конка корректировать
const popupEditCloseButtom = document.querySelector(".popup-edit__close"); //Кнопка закрыть попап
const popupEdit = document.querySelector(".popup-edit"); // сам попап

const addButtom = document.querySelector(".profile__add-button");
const popupAddCloseButtom = document.querySelector(".popup-add__close");
const popupAdd = document.querySelector(".popup-add");

const popupZoom = document.querySelector(".popup-zoom");
const popupZoomCloseButtom = document.querySelector(".popup-zoom__close");

const formEdit = document.querySelector(".popup-edit__form"); // форма в попапе
const formAdd = document.querySelector(".popup-add__form");

const nameInput = document.querySelector(".popup__input_name_name"); // Имя в инпуте
const aboutInput = document.querySelector(".popup__input_name_about");
const imageInputLink = document.querySelector(".popup__input_name_link");
const nameInputPlace = document.querySelector(".popup__input_name_place-name");

const profileName = document.querySelector(".profile__name"); //Имя в профиле
const profileAbout = document.querySelector(".profile__about");

const elements = document.querySelector(".elements");



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
    const cardsTemplate = document.querySelector("#new-cards").content;
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
        const popupZoomImage = document.querySelector('.popup-zoom__image')
        const popupZoomText = document.querySelector(".popup-zoom__title")
        popupZoomImage.src = element.link;
        popupZoomText.textContent = element.name;
    });
    elements.prepend(cardsElement);
});

//Каточки
function addCard(imageValue, nameValue) {
    const cardsTemplate = document.querySelector("#new-cards").content;
    const cardsElement = cardsTemplate.querySelector(".element").cloneNode(true);

    cardsElement.querySelector(".element__image").src = imageValue
    cardsElement.querySelector(".element__name").textContent = nameValue;
    cardsElement.querySelector(".element__button").addEventListener("click", function (like) {
        like.target.classList.toggle("element__button_active");
    });
    cardsElement.querySelector(".element__delete").addEventListener("click", function () {
        cardsElement.remove();
    });
    cardsElement.querySelector(".element__image").addEventListener("click", function () {
        popupZoom.classList.add("popup_opened");
        const popupZoomImage = document.querySelector('.popup-zoom__image')
        const popupZoomText = document.querySelector(".popup-zoom__title")
        popupZoomImage.src = imageValue;
        popupZoomText.textContent = nameValue;
    });
    elements.prepend(cardsElement);
}

function formSubmitAdd(evt) {
    evt.preventDefault();
    const image = imageInputLink;
    const name = nameInputPlace;

    addCard(image.value, name.value)
    popupAddExit();
    image.value = '';
    name.value = '';
}
formAdd.addEventListener('submit', formSubmitAdd);



//Функции добавлнеия и убирания классов попапу
function popupEditOpen() {
    popupEdit.classList.add("popup_opened"); //добовляем попапу класс
    nameInput.value = profileName.textContent; // текст профиля будет тоброжен в инпуте
    aboutInput.value = profileAbout.textContent;
}

function popupEditExit() {
    popupEdit.classList.remove("popup_opened"); //убираем класс попапу
}


function popupAddOpen() {
    popupAdd.classList.add("popup_opened"); //добовляем попапу класс
}

function popupAddExit() {
    popupAdd.classList.remove("popup_opened");
}

function popupZoomExit() {
    popupZoom.classList.remove("popup_opened");
}

//функция сабмита
function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value; // введенное значение импeтов задаем тексту в профиле
    profileAbout.textContent = aboutInput.value;
    popupEditExit();
}
formEdit.addEventListener('submit', formSubmitHandler);


// кнопки активации функции
editButtom.addEventListener("click", popupEditOpen);
popupEditCloseButtom.addEventListener("click", popupEditExit);

addButtom.addEventListener("click", popupAddOpen);
popupAddCloseButtom.addEventListener("click", popupAddExit);

popupZoomCloseButtom.addEventListener("click",popupZoomExit);






