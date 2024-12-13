// validationUtils.js

/*-------------------*/
/*---VALIDATION UTILS---*/
/*-----------------------*/

/**
 * Checks if the given email contains an '@' symbol.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if the email contains an '@', false otherwise.
 */
function hasAtSign(email) {
    return email.includes('@');
}

/**
 * Checks if there are characters before the '@' symbol in the email.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if there are characters before the '@', false otherwise.
 */
function hasCharsBeforeAt(email) {
    const atIndex = email.indexOf('@');
    if (atIndex === -1 || atIndex === 0) return false; // No '@' or it's the first character
    return email.substring(0, atIndex).length > 0;
}

/**
 * Checks if there is at least one dot (.) after the '@' symbol in the email.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if there's a dot after the '@', false otherwise.
 */
function hasDotAfterAt(email) {
    const atIndex = email.indexOf('@');
    if (atIndex === -1 || atIndex + 1 >= email.length) return false; // No '@' or no characters after '@'
    const dotIndex = email.indexOf('.', atIndex); // Find first '.' after '@'
    return dotIndex !== -1 && dotIndex > atIndex;
}

/**
 * Checks if there is text before the first period (.) after the '@' symbol in the email.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if there's text before the first '.', false otherwise.
 */
function hasTextBeforeFirstPeriod(email) {
    const atIndex = email.indexOf('@');
    if (atIndex === -1 || atIndex + 1 >= email.length) return false; // No '@' or no characters after '@'
    const periodIndex = email.indexOf('.', atIndex);
    if (periodIndex === -1) return false; // No '.' after '@'
    return email.substring(atIndex + 1, periodIndex).length > 0; // Check text length before '.'
}

/**
 * Checks if there are at least two characters after the last period (.) in the email.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if there are at least two characters after the last '.', false otherwise.
 */
function hasMinCharsAfterPeriod(email) {
    const lastIndex = email.lastIndexOf('.'); // Find the last '.'
    if (lastIndex === -1 || lastIndex + 2 >= email.length) return false; // No '.' or less than two characters after
    return email.substring(lastIndex + 1).length >= 2;
}

/**
 * Checks if the email contains spaces.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if the email contains spaces, false otherwise.
 */
function hasSpaces(email) {
    return !!email.includes(' '); // Return true if a space is found
}

/**
 * Checks if there are special characters immediately after the '@' symbol in the email.
 *
 * @param {string} email - The email address to check.
 * @returns {boolean} True if there's a special character after the '@', false otherwise.
 */
function containsSpecialCharactersAfterAtSign(email) {
    const atIndex = email.indexOf('@');
    if (atIndex === -1 || atIndex + 1 >= email.length) return false; // No '@' or no characters after '@'

    const specialCharacters = ['.', '_', '-', '+', '%', '@']; // Define allowed special characters
    for (let i = 0; i < specialCharacters.length; i++) {
        if (email.charAt(atIndex + 1) === specialCharacters[i]) {
            return true; // Return true if a special character is found
        }
    }
    return false; // Otherwise, return false
}

/**
 * Capitalizes the first letter of each word in the given string.
 *
 * @param {string} str - The string to capitalize.
 * @returns {string} The string with each word's first letter capitalized.
 */
function capitalizeFirstLetterOfEachWord(str) {
    let words = str.split(' '); // Split the string into an array of words
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // Capitalize first letter of each word
    }
    return words.join(' '); // Join the words back into a single string
}

export {
    capitalizeFirstLetterOfEachWord,
    containsSpecialCharactersAfterAtSign,
    hasAtSign,
    hasSpaces,
    hasCharsBeforeAt,
    hasDotAfterAt,
    hasTextBeforeFirstPeriod,
    hasMinCharsAfterPeriod
};
