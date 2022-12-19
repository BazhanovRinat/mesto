// Валидация 

const object = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_type_active'
};

const showInputError = (object, formSelector, inputSelector, errorMessage) => {
    const popupError = document.querySelector(`.${inputSelector.id}-error`)
    inputSelector.classList.add(object.inputErrorClass);
    popupError.textContent = errorMessage;
    popupError.classList.add(object.errorClass);
};
const hideInputError = (object, formSelector, inputSelector) => {
    const popupError = document.querySelector(`.${inputSelector.id}-error`)
    inputSelector.classList.remove(object.inputErrorClass);
    popupError.classList.remove(object.errorClass);
    popupError.textContent = "";
};

const isValid = (formSelector, inputSelector) => {
    if (inputSelector.validity.valid) {
        hideInputError(object, formSelector, inputSelector);
    } else {
        showInputError(object, formSelector, inputSelector, inputSelector.validationMessage);
    }
};
//
const setEventListeners = (object, formSelector) => {
    const popupInputList = Array.from(formSelector.querySelectorAll(object.inputSelector));
    const buttonPopupSubmit = formSelector.querySelector(object.submitButtonSelector);
    popupInputList.forEach((popupInput) => {
        popupInput.addEventListener("input", () => {
            isValid(formSelector, popupInput)
            toggleButtonState(object, popupInputList, buttonPopupSubmit);
             });
  });
}


const enableValidation = (object) => {
    const popupFormList = Array.from(document.querySelectorAll(object.formSelector));
    popupFormList.forEach((formSelector) => {
        setEventListeners(object, formSelector);
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
