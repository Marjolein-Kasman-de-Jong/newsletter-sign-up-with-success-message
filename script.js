// Get elements
const signUpCard = document.getElementById("sign-up-card");
const modal = document.getElementById("success-message-modal");
const openButton = document.getElementById("subscribe-button");
const closeButton = document.getElementById("dismiss-button");

// Hide sign up card and show modal 
openButton.onclick = function () {
    signUpCard.style.display = "none";
    modal.style.display = "flex";
}

// Hide modal and show sign up card
closeButton.onclick = function () {
    modal.style.display = "none";
    signUpCard.style.display = "flex";
}