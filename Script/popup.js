/*
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");

    // Show the popup
    popup.classList.add("show");

    // Hide the popup after 3 seconds
    setTimeout(function() {
        popup.classList.remove("show");
    }, 3000);
});

*/


// Get the input element and search icon element by their IDs
const search_inp = document.getElementById("search_inp");
const search_icon = document.getElementById("search_icon");

// Add an event listener to the input element for focus event
search_inp.addEventListener("focus", function() {
    // Hide the search icon when input is in focus
    search_icon.style.display = "none";
});

// Add an event listener to the input element for blur event
search_inp.addEventListener("blur", function() {
    // Show the search icon when input is not in focus
    search_icon.style.display = "inline-block"; // or "block", depending on your layout
});