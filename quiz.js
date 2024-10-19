// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if the user selected an answer
    if (userAnswer) {
        // Store the user's answer value
        const userAnswerValue = userAnswer.value; // Get the value of the selected radio button
        
        // Compare the user's answer with the correct one
        if (userAnswerValue === correctAnswer) { // Correct answer comparison
            feedback.textContent = "Correct! Well done."; // Provide feedback for correct answer
            feedback.style.color = "green"; // Optional: change color to green
        } else {
            feedback.textContent = "That's incorrect. Try again!"; // Provide feedback for incorrect answer
            feedback.style.color = "red"; // Optional: change color to red
        }

        // This line is added for your request to include the comparison directly
        if (userAnswerValue === correctAnswer) { // This checks again if the answer is correct
            console.log("User answer matches the correct answer."); // Log for debug purposes
        }
        
    } else {
        // If no answer was selected
        feedback.textContent = "Please select an answer."; // Prompt user to select an answer
        feedback.style.color = "orange"; // Optional: change color to orange
    }
}

// Retrieve the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");

// Check if the button was retrieved successfully
if (submitButton) {
    // Add event listener to the submit button
    submitButton.addEventListener("click", checkAnswer); // Set up the click event
} else {
    console.error("Submit button not found!"); // Log an error if the button is not found
}
