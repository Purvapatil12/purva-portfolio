
/* Welcome message in the browser console */
console.log("Welcome to Purva's Portfolio!");

// Highlight the active navigation link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.forEach(function (item) {
            item.style.color = "#ccccdd";
        });

        link.style.color = "#c084fc";
    });
});

// Show a message when the email button is clicked
const emailButton = document.querySelector(".contact .btn");

emailButton.addEventListener("click", function () {
    console.log("Thanks for visiting my portfolio!");
});


const typingText = document.querySelector(".home-content h2 span");

const words = [
    "Frontend Developer",
    "Web Developer",
    "Creative Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeAnimation() {
    const currentWord = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    let speed = deleting ? 60 : 100;

    if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        speed = 1200;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeAnimation, speed);
}

if (typingText) {
    typeAnimation();
}
