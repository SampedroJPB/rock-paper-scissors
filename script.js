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

function playRound (round) {

    let humanScore = 0;
    let computerScore = 0;

    function playGame (humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("YOU LOSE.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
            computerScore++;
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
            computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
            humanScore++;
        } else {
            console.log("Draw.\nYou picked " + humanChoice + " and computer picked " + computerChoice);
        }
    }

    for (let i = 0; i < round; i++) {
        playGame(getHumanChoice(), getComputerChoice());
        // Another method:
        // const humanSelection = getHumanChoice();
        // const computerSelection = getComputerChoice();
        // playGame(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win.\nYour score is: " + humanScore + "\nComputer score is: " + computerScore);
    } else if (humanScore < computerScore) {
        console.log("You lose.\nYour score is: " + humanScore + "\nComputer score is: " + computerScore);
    } else {
        console.log("Draw.\nBoth you and computer had the same score.");
    }  
}

playRound(5);
