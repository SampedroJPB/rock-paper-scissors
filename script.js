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

function playGame (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        return console.log("YOU LOSE.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return console.log("You win.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return console.log("You lose.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return console.log("You win.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return console.log("You lose.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return console.log("You win.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
    } else {
        return console.log("Draw.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
    }
}

playGame(getHumanChoice(), getComputerChoice());