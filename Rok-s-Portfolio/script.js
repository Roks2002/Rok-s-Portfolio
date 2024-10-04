// Dark mode toggle functionality
const toggleSwitch = document.getElementById("dark-mode-toggle");
const body = document.body;
const navbar = document.querySelector("nav");
const navbarLinks = document.querySelectorAll(".navbar a");
const frontPage = document.getElementById("front-page");

toggleSwitch.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
  navbar.classList.toggle("dark-mode");
  navbarLinks.forEach((link) => {
    link.classList.toggle("dark-mode");
  });
  frontPage.classList.toggle("dark-mode");
});

// Scrolling effect for navbar color change
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    // Check if scrolled down
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Typing effect code
const welcomeText = document.getElementById("welcome-text");
const greetings = [
  "Welcome!",
  "Dobrodošli!",
  "Bienvenido!",
  "Willkommen!",
  "Bienvenida!",
  "Benvenuto!",
  "환영합니다!", // Korean
];

let currentGreetingIndex = 0;
let currentCharacterIndex = 0;
let typingSpeed = 70;
let deletingSpeed = 100;
let pauseBetweenGreetings = 2500;

function type() {
  if (currentCharacterIndex < greetings[currentGreetingIndex].length) {
    welcomeText.textContent += greetings[currentGreetingIndex].charAt(
      currentCharacterIndex
    );
    currentCharacterIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(deleteText, pauseBetweenGreetings);
  }
}

function deleteText() {
  if (currentCharacterIndex > 0) {
    welcomeText.textContent = greetings[currentGreetingIndex].substring(
      0,
      currentCharacterIndex - 1
    );
    currentCharacterIndex--;
    setTimeout(deleteText, deletingSpeed);
  } else {
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
    welcomeText.textContent = "";
    currentCharacterIndex = 0;
    setTimeout(type, typingSpeed);
  }
}

welcomeText.textContent = "";
type();

// Lottie animation setup
lottie.loadAnimation({
  container: document.getElementById("lottie-container"), // the DOM element that will contain the animation
  renderer: "svg", // render as SVG
  loop: true, // repeat the animation
  autoplay: true, // start automatically
  path: "animations/front-page-animation.json", // path to the animation JSON file
});
