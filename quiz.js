function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";
    
    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedback = document.getElementById("feedback");
    
    // Check if the user selected an answer
    if (userAnswer) {
        // Compare the user's answer with the correct one
        if (userAnswer.value === correctAnswer) { // This line checks if the selected answer is correct
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Optional: change color to green
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Optional: change color to red
        }
    } else {
        // If no answer was selected
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange"; // Optional: change color to orange
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

