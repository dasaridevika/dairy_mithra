document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");
    const phoneInput = document.querySelector("input[name='phone']");
    const button = document.querySelector("button");

    form.addEventListener("submit", function (e) {

        const phone = phoneInput.value.trim();

        // Validate phone number
        if (!/^[0-9]{10}$/.test(phone)) {
            e.preventDefault();
            alert("Please enter a valid 10-digit phone number.");
            phoneInput.focus();
            return;
        }

        // Add loading effect
        button.innerText = "Please wait...";
        button.disabled = true;

    });

});
