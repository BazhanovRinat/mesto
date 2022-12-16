// Валидация 

const object = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_type_active'
};

const popupForm = document.querySelector(object.formSelector);
const popupInput = popupForm.querySelector(object.inputSelector);
const popupError = popupForm.querySelector(`.${popupInput.id}-error`)

const showInputError = (object, popupForm, popupInput, errorMessage) => {
    const popupError = popupForm.querySelector(`.${popupInput.id}-error`)
    popupInput.classList.add(object.inputErrorClass);
    popupError.textContent = errorMessage;
    popupError.classList.add(object.errorClass);
};
const hideInputError = (object, popupForm, popupInput) => {
    const popupError = popupForm.querySelector(`.${popupInput.id}-error`)
    popupInput.classList.remove(object.inputErrorClass);
    popupError.classList.remove(object.errorClass);
    popupError.textContent = "";
};

const isValid = (popupForm, popupInput) => {
    if (popupInput.validity.valid) {
        hideInputError(object, popupForm, popupInput);
    } else {
        showInputError(object, popupForm, popupInput, popupInput.validationMessage);
    }
};
//
const setEventListeners = (object, popupForm) => {
    const popupInputList = Array.from(popupForm.querySelectorAll(object.inputSelector));
    const buttonPopupSubmit = popupForm.querySelector(object.submitButtonSelector);
    popupInputList.forEach((popupInput) => {
        popupInput.addEventListener("input", () => {
            isValid(popupForm, popupInput)
            toggleButtonState(object, popupInputList, buttonPopupSubmit);
             });
  });
}


const enableValidation = (object) => {
    const popupFormList = Array.from(document.querySelectorAll(object.formSelector));
    popupFormList.forEach((popupForm) => {
        setEventListeners(object, popupForm);
    });
};



const hasInvalidInput = (popupInputList) => {
    return popupInputList.some((inputElement) => {
        return !inputElement.validity.valid;
    })
}; 

const toggleButtonState = (object, popupInputList, buttonPopupSubmit) => {
    if (hasInvalidInput(popupInputList)) {
        buttonPopupSubmit.classList.add(object.inactiveButtonClass);
        buttonPopupSubmit.disabled = true;
    } else {
        buttonPopupSubmit.classList.remove(object.inactiveButtonClass);
        buttonPopupSubmit.disabled = false;
    }
};

enableValidation(object);
