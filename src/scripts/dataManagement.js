// dataManagement.js
import {capitalizeFirstLetterOfEachWord} from "./validationUtils.js";

/*-----------*/
/*---DATA MANAGEMENT---*/
/*------------*/

/**
 * Captures user input from the first form's input fields and displays it on the third form.
 */
function captureAndDisplayUserInput() {
    // Get and capitalize the first letter of each word in the name input
    const name = capitalizeFirstLetterOfEachWord(document.getElementById('name-input').value);
    // Get the email input value
    const email = document.getElementById('email-input').value;
    // Update the name field in Form 3 with the captured value
    document.getElementById('form-3-name-output').textContent = name;
    // Update the email field in Form 3 with the captured value
    document.getElementById('form-3-email-output').textContent = email;
}

/**
 * Displays the list of topics on the third form that were chosen from the second form.
 *
 * @param {Array} topics - An array of the selected topic input elements.
 */
function displaySelectedTopics(topics) {
    // Initialize an HTML list
    let html = "<ul>";
    // Loop through the topics and add each to the HTML list
    topics.forEach(topic => {
        html += `<li>${topic.value}</li>`;
    });
    html += "</ul>";
    // Update the topic output field in Form 3 with the generated list
    document.getElementById('form-3-topic-output').innerHTML = html;
}


export { captureAndDisplayUserInput, displaySelectedTopics };
