const words = ["apple", "grape", "peach", "berry", "melon"];
const targetWord = words[Math.floor(Math.random() * words.length)];
let attempts = 0;
const maxAttempts = 6;

function checkGuess(guess) {
  if (attempts >= maxAttempts) {
    return "No attempts left.";
  } else {
    if (guess.length !== targetWord.length) {
      return "Invalid guess length.";
    }
    attempts++;
    let feedback = [];
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === targetWord[i]) {
        feedback.push("🟩"); // Correct letter and position
      } else if (targetWord.includes(guess[i])) {
        feedback.push("🟨"); // Correct letter, wrong position
      } else {
        feedback.push("⬜"); // Incorrect letter
      }
    }
    return feedback.join("");
  }
}

// Example usage
// console.log(checkGuess("grape")); // Output feedback based on the guess
