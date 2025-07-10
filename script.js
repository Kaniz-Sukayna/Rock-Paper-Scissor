const choices = ["stone", "paper", "scissors"];
const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getResult(user, computer) {
  if (user === computer) return "draw";
  if (
    (user === "stone" && computer === "scissors") ||
    (user === "paper" && computer === "stone") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);

  if (result === "win") {
    userScore++;
    resultEl.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
  } else if (result === "lose") {
    computerScore++;
    resultEl.textContent = `You Lose! ${computerChoice} beats ${userChoice}`;
  } else {
    resultEl.textContent = "It's a Draw!";
  }

  userScoreEl.textContent = userScore;
  compScoreEl.textContent = computerScore;
}

// Add event listeners
document.getElementById("stone").addEventListener("click", () => playGame("stone"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
