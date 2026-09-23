// Welcome message
window.onload = function () {
    alert("Welcome to Senior Citizen Help Desk");
};

// Registration Form
const registerForm = document.querySelector("form");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Registration Successful!");

        registerForm.reset();
    });
}

// Emergency Button
function emergencyCall() {
    alert("Calling Support Number...");
    window.location.href = "tel:+919952215218";
}