function getComputerChoice() {
  let randomDigit = Math.floor(Math.random() * 3);
  return digitToString(randomDigit);
}

function getHumanChoice() {
  return prompt("Choose between \"rock\", \"paper\", and \"scissors\": ").toLowerCase();
}

function digitToString(choice) {
  switch (choice) {
    case 0: return "rock";
    case 1: return "paper";
    case 2: return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  if (humanScore === 5) {
    div.innerText = `Congrats You Win`;
    humanScore = 0;
    computerScore = 0;
    return;
  } else if (computerScore === 5) {
    div.innerText = `Congrats You Lose`;
    humanScore = 0;
    computerScore = 0;
    return;
  }

  if (humanChoice === "rock" && computerChoice === "paper" 
  || humanChoice === "scissors" && computerChoice === "rock"
  || humanChoice === "paper" && computerChoice === "scissors") {
    div.innerText = `You Lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoice === computerChoice) {
    div.innerText = `You Tie! ${computerChoice} Ties With ${humanChoice}`;
  } else {
    div.innerText = `You Win! ${computerChoice} loses to ${humanChoice}`;
    humanScore++;
  }
  div.innerText += `\n ${humanScore} vs. ${computerScore}`;
}

let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

let div = document.createElement("div");

document.body.appendChild(div);






