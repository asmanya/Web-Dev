const playerScoreDiv = document.getElementById("player-score");
const choiceTextDiv = document.getElementById("choice-text");
const resultDiv = document.getElementById("result");

const totalScore = { playerScore: 0, computerScore: 0 };

function getComputerChoice() {
  const rpsChoices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return rpsChoices[randomNumber];
}

function getResult(playerChoice, computerChoice) {
  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "paper") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  if (score == -1) {
    resultDiv.innerText = "You lose!";
  } else if (score == 0) {
    resultDiv.innerText = "It's a tie!";
  } else {
    resultDiv.innerText = "You win!";
  }

  choiceTextDiv.innerText = `You chose ${playerChoice} and computer chose ${computerChoice}`;
  playerScoreDiv.innerText = totalScore["playerScore"];
}

function onClickRPS(playerChoice) {
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => {
    onClickRPS(rpsButton.value);
    }
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

function endGame() {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  playerScoreDiv.innerText = "";
  choiceTextDiv.innerText = "";
  resultDiv.innerText = "";
}

playGame()
