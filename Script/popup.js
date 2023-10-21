document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup");

    // Show the popup
    popup.classList.add("show");

    // Hide the popup after 3 seconds
    setTimeout(function() {
        popup.classList.remove("show");
    }, 3000);
});