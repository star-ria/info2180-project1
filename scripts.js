/* Add your JavaScript to this file */

/* Newsletter Subscription */

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector(".newsletter form");
    var emailInput = document.getElementById("email");
    var message = document.querySelector(".message");

    form.noValidate = true;
 
    form.addEventListener("submit", function (event) {
        event.preventDefault();
 
        var email = emailInput.value.trim();
        var looksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
 
        if (email === "" || !looksValid) {
            message.textContent = "Please enter a valid email address.";
        } else {
            message.textContent =
                "Thank you! Your email address " + email +
                " has been added to our mailing list!";
            form.reset();
        }
    });
});