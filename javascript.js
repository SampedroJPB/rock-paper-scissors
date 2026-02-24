function getHumanChoice () {
    let humanChoice = prompt("rock, paper or scissors?\nChoice: ").toLowerCase();
    return humanChoice;
}

function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
        return console.log("draw");
    }
}

playRound(getHumanChoice(), getComputerChoice());