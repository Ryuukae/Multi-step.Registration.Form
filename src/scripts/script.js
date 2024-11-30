/**
 * Get references to HTML elements.
 */
const stepper = document.getElementById('current-step'); // Reference to the current step indicator element
const stageIndicators = document.getElementById('stage-indicators'); // Reference to the stage indicators container element
let currentStep = 1; // Initialize the current step variable
const nameInputField = document.getElementById('name-input');
const emailInputField = document.getElementById('email-input');

// Add event listeners to input fields for placeholder text changes when in focus versus blur
nameInputField.addEventListener('focus', () => {
    nameInputField.placeholder = '';
    });

emailInputField.addEventListener('focus', () => {
    emailInputField.placeholder = '';
});

nameInputField.addEventListener('blur', () => {
    nameInputField.placeholder = 'enter your name';
    });

emailInputField.addEventListener('blur', () => {
    emailInputField.placeholder = 'example@gmail.com';
});

/**
 * Get an array of continue button elements.
 */
const continueButtons = Array.from(document.querySelectorAll('#form-1-next-btn, #form-2-next-btn, #form-3-submit-btn'));


// Loop through each continue button and attach a click event listener
continueButtons.forEach((button) => {
    /**
     * Add an event listener to each button that will be triggered when it's clicked.
     */
    button.addEventListener('click', (event) => {
        // Check if the parent form is valid before proceeding
        if (!event.target.parentNode.checkValidity()) {
            alert('Please fill out the form correctly!');
            return false; // Prevent default form submission behavior
        }

        // Capture user input and update Form 3, depending on the current step
        if (currentStep === 1) {
            const name = document.getElementById('name-input').value;
            const email = document.getElementById('email-input').value;
            document.getElementById('form-3-name-output').textContent = name;
            document.getElementById('form-3-email-output').textContent = email;
        } else if (currentStep === 2) {
            // Get an array of selected topic input elements
            const topics = Array.from(document.querySelectorAll('input[name="topic"]:checked'));

            // Check if at least one topic is selected before proceeding
            if (topics.length === 0) {
                alert('Please select at least one topic!');
                event.preventDefault(); // Prevent default form submission behavior
                return false;
            }

            // Create an HTML list of selected topics and update Form 3
            let html = "<ul>";
            topics.forEach(topic => {
                html += `<li>${topic.value}</li>`;
            });
            html += "</ul>";
            document.getElementById('form-3-topic-output').innerHTML = html;
        } else if (currentStep === 3) {
            // Display a success message and refresh the page
            alert('✅ Success');
            return;
        }

        // Hide the current form, update stage indicators, show next form, and update stepper text
        cycleForm(event)
    });
});

/**
 * Function to hide the current form.
 *
 * @param {Event} event - The click event triggered by a continue button.
 */
function hideCurrentForm(event) {
    // Prevent default form submission behavior
    event.preventDefault();

    // Get a reference to the current form element and remove its active class
    const currentFormDivElement = document.getElementById(`form-${currentStep}-div`);
    currentFormDivElement.classList.remove('active-form-step');

    // Add a hidden class to the current form element
    currentFormDivElement.classList.add('hidden-form-step');
}

/**
 * Function to show the next form.
 */
function showNextForm() {
    // Increment the current step variable and get a reference to the next form element
    const nextFormNumber = ++currentStep;
    const nextFormDivElement = document.getElementById(`form-${nextFormNumber}-div`);

    // Remove the hidden class from the next form element and add an active class
    nextFormDivElement.classList.remove('hidden-form-step');
    nextFormDivElement.classList.add('active-form-step');
}

/**
 * Function to update the stepper text.
 */
function updateStepperText() {
    // Update the text content of the stepper element with the current step number
    stepper.textContent = `Step ${currentStep} of 3`;
}

/**
 * Function to update stage indicators.
 */
function updateStageIndicators() {
    // Get a reference to the stage indicators container element and its child elements
    const dots = stageIndicators.children;

    // Loop through each dot element and remove its active class
    for (const dot of dots) {
        dot.classList.remove('active');
    }

    // Get a reference to the current step dot element and add an active class
    const dot = dots[currentStep];
    dot.classList.add('active');
}

/**
 * Final function used to cycle through forms.
 *
 * @param {Event} event - The click event triggered by a continue button.
 */
function cycleForm(event) {
    hideCurrentForm(event);
    updateStageIndicators();
    showNextForm();
    updateStepperText();
}

