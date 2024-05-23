function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    return "rock";
  } else if (computerChoice === 1) {
    return "paper";
  } else if (computerChoice === 2) {
    return "scissors"
  } else {
    return "Something Went Wrong..."
  }

}

function getHumanChoice() {
  let humanChoice = prompt("Choose between rock, paper, and scissors: ").toLowerCase();
  if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
    return humanChoice;
  } else {
    return "Wrong Input..."
  }
}

function convertToString(choice) {
  switch (choice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3: 
      return "scissors";
  }
}

function convertToInteger(choice) {
  switch (choice) {
    case "rock":
      return 0;
    case "paper":
      return 1;
    case "scissors":
      return 2;
  } 
}

function playGame(rounds) {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let humanInt = convertToInteger(humanChoice);
    let computerInt = convertToInteger(computerChoice);
  
    if (humanInt < computerInt) {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
      computerScore++;
    } else if (humanInt > computerInt) {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
      humanScore++;
    } else if (humanInt === computerInt) {
      console.log(`You Tie! ${computerChoice} Ties With ${humanChoice}`)
    }
  }

  for (i = 0; i < rounds; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame(10);



