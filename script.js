function getComputerChoice () {
    let ComputerChoice;
    let number = Math.random();
    if (number >= 0 && number <= 0.33)
        ComputerChoice = "rock";
    else if (number >= 0.33 && number <= 0.66)
        ComputerChoice = "paper";
    else if (number >= 0.66 && number < 1)
        ComputerChoice = "scissors";
    return ComputerChoice;
}

function getHumanChoice () {
    let humanChoice = prompt(alert("What is you choice?"));
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! rock beats scissors");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! scissors beats paper")
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors")
        console.log("Nobody wins!");
    else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! paper beats rock");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        console.log("Nobody wins!")
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! scissors beat paper");
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "rock") {
        console.log("Nobody wins!");
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! paoer beats rock");
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You win! scissors beat paper");
        humanScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

alert(humanScore);
alert(computerScore);
