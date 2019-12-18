const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const pScore = document.getElementById("player-score");
const cScore = document.getElementById("computer-score");
const pResult = document.getElementById("player-result");
const cResult = document.getElementById("computer-result");
const round = document.getElementById("round-number");

rockButton.addEventListener("click", function() {
  playRound(this.id, computerPlay());
});

paperButton.addEventListener("click", function() {
  playRound(this.id, computerPlay());
});

scissorsButton.addEventListener("click", function() {
  playRound(this.id, computerPlay());
});



let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let roundNumber = 1;


function computerPlay() {
  let random = choices[Math.floor(Math.random() * choices.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {

    switch(playerSelection.toLowerCase()) {
      case "rock":
        if (computerSelection == "paper") {
          return loss(playerSelection.toLowerCase(), computerSelection);
          break;
        } else if (computerSelection == "rock") {
          return draw(playerSelection.toLowerCase(), computerSelection);
          break;
        } else {
          return win(playerSelection.toLowerCase(), computerSelection);
          break;
        }

      case "paper":
        if (computerSelection == "scissors") {
          return loss(playerSelection.toLowerCase(), computerSelection);
          break;
        } else if (computerSelection == "paper") {
          return draw(playerSelection.toLowerCase(), computerSelection);
          break;
        } else {
          return win(playerSelection.toLowerCase(), computerSelection);
          break;
        }

      case "scissors":
        if (computerSelection == "rock") {
          return loss(playerSelection.toLowerCase(), computerSelection);
          break;
        } else if (computerSelection == "scissors") {
          return draw(playerSelection.toLowerCase(), computerSelection);
          break;
        } else {
          return win(playerSelection.toLowerCase(), computerSelection);
          break;
        }
    }

  }

function win(playerChoice, computerChoice){
  ++playerScore;
  if(playerScore == 3) {
    endGame();
  } else {
  pResult.innerHTML = "You chose: " + playerChoice + ". You score!";
  cResult.innerHTML = "Computer chose: " + computerChoice;
  pScore.innerHTML = playerScore;
  ++roundNumber;
  round.innerHTML = "round " + roundNumber;
}
}

function loss(playerChoice, computerChoice){
  ++computerScore;
  if(computerScore == 3) {
    endGame();
  } else {
  pResult.innerHTML = "You chose: " + playerChoice;
  cResult.innerHTML = "Computer chose: " + computerChoice + ". Computer Scores!";
  cScore.innerHTML = computerScore;
  ++roundNumber;
  round.innerHTML = "round " + roundNumber;
}
}

function draw(playerChoice, computerChoice){
  pResult.innerHTML = "You chose: " + playerChoice + ". It's a tie!";
  cResult.innerHTML = "Computer chose: " + computerChoice + ". It's a tie!";
  ++roundNumber;
  round.innerHTML = "round " + roundNumber;
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
  cScore.innerHTML = 0;
  pScore.innerHTML = 0;
  round.innerHTML = "round " + 1;
}

function endGame() {
  if(playerScore == 3){
    pResult.innerHTML = "You won the game!";
    cResult.innerHTML = "Computer lost the game!";
    reset();
  } else if(computerScore == 3) {
    pResult.innerHTML = "You lost the game!";
    cResult.innerHTML = "Computer won the game!";
    reset();
  }
}
