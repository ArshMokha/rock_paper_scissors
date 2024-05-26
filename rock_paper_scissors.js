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

function stringToDigit(choice) {
  switch (choice) {
    case "rock": return 0;
    case "paper": return 1;
    case "scissors": return 2;
  } 
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const humanChoiceAlt = stringToDigit(humanChoice);
  const computerChoiceAlt = stringToDigit(computerChoice);

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

  if (humanChoiceAlt < computerChoiceAlt) {
    div.innerText = `You Lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (humanChoiceAlt > computerChoiceAlt) {
    div.innerText = `You Win! ${computerChoice} loses to ${humanChoice}`;
    humanScore++;
  } else if (humanChoiceAlt === computerChoiceAlt) {
    div.innerText = `You Tie! ${computerChoice} Ties With ${humanChoice}`;
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






