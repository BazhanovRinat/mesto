let editButtom = document.querySelector(".profile__edit-button");
let popupColse = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");

let form = document.querySelector(".popup__form");

let nameInput = document.querySelector(".popup__input_name_name"); 
let aboutInput = document.querySelector(".popup__input_name_about");

let profileName = document.querySelector(".profile__name"); 
let profileAbout = document.querySelector(".profile__about");



function popupOpen() {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

function popupExit() {
    popup.classList.remove("popup_opened");
}





function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;
    popupExit();
}
form.addEventListener('submit', formSubmitHandler);

editButtom.addEventListener("click", popupOpen);
popupColse.addEventListener("click", popupExit);


