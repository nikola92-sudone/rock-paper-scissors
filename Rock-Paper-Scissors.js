console.log("Hello World");

function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return "rock";
  else if (randomNumber < 0.66) return "scissors";
  else return "paper";
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
    console.log(`It's a tie! Both chose ${humanChoice}`);
    return;
    }


    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  // Round 1
  playRound(getHumanChoice(), getComputerChoice());
  // Round 2
  playRound(getHumanChoice(), getComputerChoice());
  // Round 3
  playRound(getHumanChoice(), getComputerChoice());
  // Round 4
  playRound(getHumanChoice(), getComputerChoice());
  // Round 5
  playRound(getHumanChoice(), getComputerChoice());

  console.log("Final score:");
  console.log("Human:", humanScore);
  console.log("Computer:", computerScore);

  if (humanScore > computerScore) console.log("You win the game!");
  else if (computerScore > humanScore) console.log("Computer wins the game!");
  else console.log("The game is a tie!");
}

playGame();
