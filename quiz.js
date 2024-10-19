// Function to check the user's answer
function checkAnswer() {
    // Declare the correct answer
    const correctAnswer = "4"; // Correct answer for the question "What is 2 + 2?"

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Select checked radio button

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct one
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done."; // Provide feedback for correct answer
            feedback.style.color = "green"; // Optional: change color to green
        } else {
            feedback.textContent = "That's incorrect. Try again!"; // Provide feedback for incorrect answer
            feedback.style.color = "red"; // Optional: change color to red
        }
    } else {
        // If no answer was selected
        feedback.textContent = "Please select an answer."; // Prompt user to select an answer
        feedback.style.color = "orange"; // Optional: change color to orange
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
