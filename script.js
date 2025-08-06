function getComputerChoice () {
    let ComputerChoice;
    let number = Math.random();
    if (number >= 0 && number <= 0.33)
        ComputerChoice = "Rock";
    else if (number >= 0.33 && number <= 0.66)
        ComputerChoice = "Paper";
    else if (number >= 0.66 && number < 1)
        ComputerChoice = "Scissors";
    return ComputerChoice;
}

function getHumanChoice () {
    let humanChoice = prompt(alert("What is you choice?"));
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;


