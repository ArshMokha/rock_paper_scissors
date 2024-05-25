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

function playGame(rounds) {

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanChoiceAlt = stringToDigit(humanChoice);
    const computerChoiceAlt = stringToDigit(humanChoice);

    if (humanChoiceAlt < computerChoiceAlt) {
      console.log(`You Lose! ${computerChoice} beats ${humanChoice}`)
      computerScore++;
    } else if (humanChoiceAlt > computerChoiceAlt) {
      console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
      humanScore++;
    } else if (humanChoiceAlt === computerChoiceAlt) {
      console.log(`You Tie! ${computerChoice} Ties With ${humanChoice}`)
    }
  }

  for (i = 0; i < rounds; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
}

playGame(5);



