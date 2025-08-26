let userScore = 0;
let computerScore = 0;

function resetGame() {
  userScore = 0;
  computerScore = 0;
  updateScore();
  document.getElementById("result").textContent = "";
}

document
  .getElementById("rock")
  .addEventListener("click", () => playRound("Rock"));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound("Paper"));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound("Scissors"));

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (userChoice === computerChoice) {
    result = `It's a tie! Both chose ${userChoice}.`;
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    userScore++;
    result = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${userChoice}.`;
  }

  updateScore();
  document.getElementById("result").textContent = result;
}

function updateScore() {
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}
