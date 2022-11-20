let editButtom = document.querySelector(".profile__edit-button");
let popupColse = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");

let form = document.querySelector(".popup__form");

let nameInput = document.querySelector(".popup__input_name"); 
let aboutInput = document.querySelector(".popup__input_about");

let profileName = document.querySelector(".profile__name"); 
let profileAbout = document.querySelector(".profile__about");


function popupOpen() {
    popup.classList.add("popup_opend");
}

function popupExit() {
    popup.classList.remove("popup_opend");
}

editButtom.addEventListener("click", popupOpen);
popupColse.addEventListener("click", popupExit);



function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value
    profileAbout.textContent = aboutInput.value
    popup.classList.remove("popup_opend");
}
form.addEventListener('submit', formSubmitHandler);

