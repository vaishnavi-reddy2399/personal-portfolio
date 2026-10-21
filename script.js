// 1. Welcome message
window.addEventListener("load", function () {
    console.log("Welcome to Vaishnavi's Portfolio!");
});

// 2. Interactive Contact Me button
const contactButton = document.querySelector(".btn");

if (contactButton) {
    contactButton.addEventListener("click", function () {
        alert("Thank you for visiting my portfolio!");
    });
}

// 3. Display the current year in the footer
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        "© " + new Date().getFullYear() +
        " Vaishnavi Reddy | Personal Portfolio";
}
