// Get all "Read More" buttons
var readMoreButtons = document.querySelectorAll(".read-more");

// Add event listener to each "Read More" button
readMoreButtons.forEach((button) => {
    button.addEventListener("click", function () {
        // Get the parent element of the button (the "more" paragraph)
        var moreParagraph = button.parentNode;

        // Toggle the "show" class on the parent element
        moreParagraph.classList.toggle("show");

        // Change the text of the "Read More" button
        if (button.innerHTML === "Read More") {
            button.innerHTML = "Read Less";
        } else {
            button.innerHTML = "Read More";
        }
    });
});
