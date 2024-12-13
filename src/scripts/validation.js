// validation.js
import {
    capitalizeFirstLetterOfEachWord,
    containsSpecialCharactersAfterAtSign,
    hasAtSign,
    hasCharsBeforeAt,
    hasDotAfterAt,
    hasMinCharsAfterPeriod,
    hasSpaces,
    hasTextBeforeFirstPeriod
} from "./validationUtils.js";
import {removeErrorClassFromParent, setErrorFor} from "./errorManager.js";

/*--------*/
/*--VALIDATION---*/
/*-----------*/

/**
 * Validates the input for the name field in the form.
 * Ensures the name is not empty, contains three words or fewer, and only includes valid characters (letters and spaces).
 * @param {Event} event - The event object triggered by the name input field.
 * @returns {boolean} - Returns `true` if the name input is valid, otherwise `false`.
 */
function validateNameInputField(event) {
    event.preventDefault();
    const nameRegExPattern = /^[a-zA-Z\s]{1,}$/; // Allow only letters and spaces
    const nameInputField = document.getElementById('name-input');
    const name = capitalizeFirstLetterOfEachWord(nameInputField.value.trim()); // Capitalize the name input
    console.log('Name input value:', name); // Debugging line

    // Check if the name field is empty
    if (name === '' || name === null) {
        setErrorFor(nameInputField, 'Please enter your name. This field cannot be left blank.');
        return false;
    }
    // Check if the name contains more than three words
    else if (name.trim().split(/\s+/).length > 3) {
        setErrorFor(nameInputField, 'Name must contain three words or less.');
        return false;
    }
    // Check if the name matches the valid pattern
    else if (!nameRegExPattern.test(name)) {
        setErrorFor(nameInputField, 'Names can only contain letters and spaces.');
        return false;
    }

    // If all conditions are met, remove error class and return true
    removeErrorClassFromParent(nameInputField);
    return true;
}

/**
 * Validates the input for the email field in the form.
 * Ensures the email is not empty, contains valid structural elements (e.g., "@", ".", etc.), and does not have any invalid special characters or spaces.
 * @param {Event} event - The event object triggered by the email input field.
 * @returns {boolean} - Returns `true` if the email input is valid, otherwise `false`.
 */
function validateEmailInputField(event) {
    event.preventDefault();
    const emailInputField = document.getElementById('email-input');
    const email = emailInputField.value;
    console.log('Email input value:', email); // Debugging line

    // Validate different conditions for email input
    if (email.length === 0) {
        setErrorFor(emailInputField, 'Please enter your email. This field cannot be left blank.');
        return false;
    } else if (hasSpaces(email)) {
        setErrorFor(emailInputField, 'Email address should not contain any spaces.');
        return false;
    } else if (!hasAtSign(email)) {
        setErrorFor(emailInputField, 'Email address must contain the "@" symbol.');
        return false;
    } else if (!hasCharsBeforeAt(email)) {
        setErrorFor(emailInputField, 'Email address must contain text before the "@" symbol.');
        return false;
    } else if (!hasDotAfterAt(email) || !hasMinCharsAfterPeriod(email)) {
        setErrorFor(emailInputField, 'Email address must contain a valid Top Level Directory (e.g., ".com", ".net", ".org", ".gg").');
        return false;
    } else if (!hasTextBeforeFirstPeriod(email)) {
        setErrorFor(emailInputField, 'Email address must have a subdomain (e.g., "john@<\\subdomain>.com").');
        return false;
    } else if (containsSpecialCharactersAfterAtSign(email)) {
        setErrorFor(emailInputField, 'Email address must not contain special characters after the "@" symbol.');
        return false;
    }

    // If all conditions are met, remove error class and return true
    removeErrorClassFromParent(emailInputField)
    return true;
}

/**
 * Validates the user's topic selection from a form.
 * Ensures at least one topic is selected.
 * @param {Event} event - The event object triggered by the topic selection process.
 * @param {Array} topics - An array of topics selected by the user.
 * @returns {boolean} - Returns `true` if at least one topic is selected, otherwise `false`.
 */
function validateTopicSelection(event, topics) {
    if (topics.length === 0) {
        event.preventDefault();
        alert('Please select at least one topic!');
        return false;
    }
    return true;
}

/**
 * Validates all fields in the first form.
 * This includes the name and email fields.
 * @param {Event} event - The event object triggered by the form submission.
 * @returns {boolean} - Returns `true` if all fields in the first form are valid, otherwise `false`.
 */
function validateFirstForm(event) {
    const nameValid = validateNameInputField(event);
    const emailValid = validateEmailInputField(event);
    return nameValid && emailValid;
}

/**
 * Validates all fields in the second form.
 * This includes the topic selection.
 * @param {Event} event - The event object triggered by the form submission.
 * @param {Array} topics - An array containing the topics selected by the user.
 * @returns {boolean} - Returns `true` if the topic selection is valid, otherwise `false`.
 */
function validateSecondForm(event, topics) {
    return validateTopicSelection(event, topics);
}

export {validateFirstForm, validateSecondForm};

