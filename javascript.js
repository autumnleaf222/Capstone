document.addEventListener("DOMContentLoaded", function () {
    const inputFields = document.querySelectorAll(".inputbox input"); // Select all input fields
    const imageSection = document.querySelector(".image-section"); // Select the image section

    inputFields.forEach(input => {
        input.addEventListener("focus", function () {
            imageSection.classList.add("animate"); // Add animation class when input is focused
        });
    });
});
