// Dark mode toggle functionality
const toggleSwitch = document.getElementById("dark-mode-toggle");
const body = document.body;
const navbar = document.querySelector("nav");
const navbarLinks = document.querySelectorAll(".navbar a");
const frontPage = document.getElementById("front-page"); // This element is only on index.html, so it may be null on other pages

// Function to apply dark mode or light mode
function applyDarkMode(isDarkMode) {
  if (isDarkMode) {
    body.classList.add("dark-mode");
    navbar.classList.add("dark-mode");
    navbarLinks.forEach((link) => link.classList.add("dark-mode"));
    if (frontPage) {
      frontPage.classList.add("dark-mode");
    }
    toggleSwitch.checked = true;
  } else {
    body.classList.remove("dark-mode");
    navbar.classList.remove("dark-mode");
    navbarLinks.forEach((link) => link.classList.remove("dark-mode"));
    if (frontPage) {
      frontPage.classList.remove("dark-mode");
    }
    toggleSwitch.checked = false;
  }
}

// Check for saved mode preference in localStorage
const savedMode = localStorage.getItem("darkMode");
const isDarkMode = savedMode === "enabled";
applyDarkMode(isDarkMode);

// Toggle switch event listener
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    localStorage.setItem("darkMode", "enabled");
    applyDarkMode(true);
  } else {
    localStorage.setItem("darkMode", "disabled");
    applyDarkMode(false);
  }
});

// Scrolling effect for navbar color change
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Typing effect code (for index.html)
const welcomeText = document.getElementById("welcome-text");
if (welcomeText) {
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
}

// Lottie animation setup (for index.html)
const lottieContainer = document.getElementById("lottie-container");
if (lottieContainer) {
  lottie.loadAnimation({
    container: lottieContainer, // the DOM element that will contain the animation
    renderer: "svg", // render as SVG
    loop: true, // repeat the animation
    autoplay: true, // start automatically
    path: "animations/front-page-animation.json", // path to the animation JSON file
  });
}

// Smooth scrolling for navbar links (except 'RL' and external links)
navbarLinks.forEach((link) => {
  const sectionId = link.getAttribute("href");

  // Handle 'Home' link scroll to top
  if (sectionId === "#home") {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
  // Handle internal section links with smooth scroll
  else if (sectionId.startsWith("#")) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(sectionId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
