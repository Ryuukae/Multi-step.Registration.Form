// eventListeners.js
import {handleFormSubmission} from "./stepHandler.js";
import {removeErrorClassFromParent} from "./errorManager.js";

/*----------*/
/*---EVENT LISTENERS---*/
/*------------*/

/**
 * Adds focus and change event listeners to all text and email input fields.
 * - Focus: Clears the placeholder text when the input receives focus.
 * - Change: Removes the error class from the parent element when the input value changes.
 */
function addFocusAndChangeEventListenersToInputFields() {
    const inputFields = Array.from(document.querySelectorAll('input[type="text"], input[type="email"]'));

    // Iterate over each input field and attach event listeners
    inputFields.forEach((inputField) => {
        // Clear placeholder on focus
        inputField.addEventListener('focus', () => {
            inputField.placeholder = '';
        });

        // Remove error class on value change
        inputField.addEventListener('change', () => {
            removeErrorClassFromParent(inputField);
        });
    });
}

/**
 * Adds blur event listeners to the name and email input fields.
 * - Restores default placeholder text when the input loses focus.
 */
function addBlurEventListenersToInputFields() {
    const nameInputField = document.getElementById('name-input');

    if (nameInputField) {
        // Restore name placeholder on blur
        nameInputField.addEventListener('blur', () => {
            nameInputField.placeholder = 'enter your name';
        });
    }

    const emailInputField = document.getElementById('email-input');
    if (emailInputField) {
        // Restore email placeholder on blur
        emailInputField.addEventListener('blur', () => {
            emailInputField.placeholder = 'example@gmail.com';
        });
    }
}

/**
 * Adds click event listeners to all buttons (e.g., "Continue" or "Submit").
 * - Handles form submission logic for the respective form step.
 */
function addContinueButtonEventListener() {
    // Select all continue buttons
    const continueButtons = Array.from(document.querySelectorAll('#form-1-next-btn, #form-2-next-btn, #form-3-submit-btn'));

    // Attach click event listener to each button
    continueButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            handleFormSubmission(event);
        });
    });
}

/**
 * Wrapper function that attaches all necessary event listeners for form controls and buttons.
 */
function attachAllEventListeners() {
    addFocusAndChangeEventListenersToInputFields();
    addBlurEventListenersToInputFields();
    addContinueButtonEventListener();
}

export {attachAllEventListeners};
