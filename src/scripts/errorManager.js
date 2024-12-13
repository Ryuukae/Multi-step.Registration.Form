// errorManager.js

/*-----------*/
/*---ERROR MANAGER---*/
/*-------------*/

/**
 * Sets error UI for an input field by applying an error message and error CSS class.
 * @param {HTMLElement} input - The input field element to apply the error for.
 * @param {string} message - An error message describing the issue.
 */
export function setErrorFor(input, message) {
    const formControl = input.parentElement; // Target the parent element wrapping the input field
    const small = formControl.querySelector('small'); // Select the small tag for error message

    small.innerText = message; // Add error message inside the small tag
    formControl.className = 'form-control error'; // Apply 'error' CSS class
}

/**
 * Removes the error state class from the parent of the input field.
 * @param {HTMLElement} element - The input element for which the error state should be removed.
 */
function removeErrorClassFromParent(element) {
    element.parentElement.classList.remove('error'); // Remove 'error' CSS class from the parent element
}

export {removeErrorClassFromParent};
