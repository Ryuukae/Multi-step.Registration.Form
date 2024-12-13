// formManagement.js
import { sharedState } from './sharedState.js';

/*----------*/
/*---FORM MANAGEMENT---*/
/*--------------*/

/**
 * Hides the currently active form.
 * Removes the 'active-form-step' class and adds the 'hidden-form-step' class to the current form.
 *
 * @param {Event} event - The event object triggered by the form action.
 */
function hideCurrentForm(event) {
    event.preventDefault(); // Prevent default form submission behavior
    const currentFormDivElement = document.getElementById(`form-${sharedState.currentStep}-div`); // Get the current form element
    currentFormDivElement.classList.remove('active-form-step'); // Remove the active class
    currentFormDivElement.classList.add('hidden-form-step'); // Add the hidden class
}

/**
 * Shows the next form in the sequence.
 * Increments the current step in sharedState and updates the form to the next step.
 */
function showNextForm() {
    const nextFormNumber = ++sharedState.currentStep; // Increment the current step number
    const nextFormDivElement = document.getElementById(`form-${nextFormNumber}-div`); // Get the next form element
    nextFormDivElement.classList.remove('hidden-form-step'); // Remove the hidden class
    nextFormDivElement.classList.add('active-form-step'); // Add the active class
}

/**
 * Updates the text of the stepper to reflect the current step.
 * Displays the current step out of the total number of steps (e.g., "Step 2 of 3").
 */
function updateStepperText() {
    const stepper = document.getElementById('current-step'); // Reference to the current step indicator element
    // Update the text content of the stepper with the current step number and total steps
    stepper.textContent = `Step ${sharedState.currentStep} of 3`;
}

/**
 * Updates the stage indicators to reflect the current step.
 * Ensures the currently active step indicator (dot) is highlighted while others are reset.
 */
function updateStageIndicators() {
    const stageIndicators = document.getElementById('stage-indicators'); // Reference to the stage indicators container element
    const dots = stageIndicators.children; // Get the collection of all indicator dots
    for (const dot of dots) {
        dot.classList.remove('active'); // Remove the active class from all dots
    }
    const dot = dots[sharedState.currentStep]; // Select the dot corresponding to the current step
    dot.classList.add('active'); // Highlight the current step dot
}

/**
 * Cycles the forms to move to the next step.
 * Combines form hiding, stage indicator updates, showing the next form, and stepper updates.
 *
 * @param {Event} event - The event object triggered by the form action.
 */
function cycleForm(event) {
    hideCurrentForm(event); // Hide the current form
    updateStageIndicators(); // Update stage indicators
    showNextForm(); // Show the next form
    updateStepperText(); // Update the stepper text
}

export{cycleForm}
