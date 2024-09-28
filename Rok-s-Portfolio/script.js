const welcomeText = document.getElementById("welcome-text");
const greetings = [
  "Dobrodošli!",
  "Welcome!",
  "Bienvenido!",
  "Willkommen!",
  "Bienvenida!",
  "Benvenuto!",
  "환영합니다!", // Korean
];

let currentGreetingIndex = 0;
let currentCharacterIndex = 0;
let typingSpeed = 125; // Increased speed of typing
let deletingSpeed = 75; // Increased speed of deleting
let pauseBetweenGreetings = 1000; // Reduced pause between greetings

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
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length; // Move to the next greeting
    // Ensure that the welcomeText starts empty without a space
    welcomeText.textContent = "";
    currentCharacterIndex = 0; // Reset character index for the next greeting
    setTimeout(type, typingSpeed); // Start typing the next greeting immediately
  }
}

// Initialize with an empty string
welcomeText.textContent = "";
type();
