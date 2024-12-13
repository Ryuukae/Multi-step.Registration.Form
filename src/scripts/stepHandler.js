// stepHandler.js
import {cycleForm} from "./formManagement.js";
import {validateFirstForm, validateSecondForm} from "./validation.js";
import {captureAndDisplayUserInput, displaySelectedTopics} from "./dataManagement.js";
import {sharedState} from "./sharedState.js";

/*--------*/
/*---STEP HANDLER---*/
/*-----------*/

/**
 * Handles the submission and validation of the first form.
 *
 * @param {Event} event - The event triggered by the form submission.
 */
function handleFirstFormSubmission(event) {
    // Validate the first form's inputs
    if (!validateFirstForm(event)) {
        return; // Exit if validation fails
    }
    // Capture the user's input and update the third form with the values
    captureAndDisplayUserInput();

    // Proceed to the next form
    cycleForm(event);
}

/**
 * Handles the submission and validation of the second form.
 *
 * @param {Event} event - The event triggered by the form submission.
 */
function handleSecondFormSubmission(event) {
    // Get the selected topic checkboxes as an array
    const topics = Array.from(document.querySelectorAll('input[name="topic"]:checked'));

    // Validate that at least one topic is selected
    if (!validateSecondForm(event, topics)) {
        return; // Exit if validation fails
    }

    // Display the selected topics on the third form
    displaySelectedTopics(topics);

    // Proceed to the next form
    cycleForm(event);
}

/**
 * Handles the submission of the third form by displaying success feedback and refreshing the page.
 */
function handleThirdFormSubmission() {
    // Display success feedback and refresh the page
    alert('✅ Success');
}

/**
 * Wrapper function that bundles the submission logic for each form into one method call.
 */
function handleFormSubmission(event) {
        // handle form 1 submission
    if (sharedState.currentStep === 1) {
        handleFirstFormSubmission(event);
        // handle form 2 submission
    } else if (sharedState.currentStep === 2) {
        handleSecondFormSubmission(event);
        // handle form 3 submission
    } else if (sharedState.currentStep === 3) {
        handleThirdFormSubmission();
    }
}

export {handleFormSubmission};


