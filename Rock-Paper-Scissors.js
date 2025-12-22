console.log("Hello World");

function getComputerChoice(){
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    }
    else if (randomNumber < 0.66) {
        return "scissors";
    }
    else {
        return "paper";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock Paper Scissors")
    return choice
}

console.log(getHumanChoice())
console.log(getComputerChoice())
