// Modules
import validateEmail from "/validateEmail.js";

// Get elements
const signUpCard = document.getElementById("sign-up-card");
const modal = document.getElementById("success-message-modal");
const openButton = document.getElementById("subscribe-button");
const closeButton = document.getElementById("dismiss-button");
const input = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const target = document.getElementById("user-email");

// Handle subscribe button click
openButton.onclick = function (e) {
    // Prevent input being cleared
    e.preventDefault();
    // Get user input
    const email = input.value;
    // Validate user input
    if (validateEmail(email)) {
        // Hide error message
        errorMessage.style.display = "none";
        input.classList.remove("error");
        // Hide sign up card
        signUpCard.style.display = "none";
        // Insert user input in HTML
        target.textContent = email;
        // Show modal
        modal.style.display = "flex";
    } else {
        // Show error message
        errorMessage.style.display = "flex";
        input.classList.add("error");
    }
}

// Handle dismiss button click
closeButton.onclick = function () {
    // Hide modal
    modal.style.display = "none";
    // Show sign up card
    signUpCard.style.display = "flex";
    // Clear input
    input.value = '';
}