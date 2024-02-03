let userScore = 0;
let computerScore = 0;

const options = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
};
const colors = {
    danger: '#4caf50',
    success: '#E51F1F',
    dark: '#757575',
}
const userScoreElement = document.getElementById('user_score');
const computerScoreElement = document.getElementById('computer_score');
const userChoiceElement = document.getElementById('user_choice');
const compChoiceElement = document.getElementById('comp_choice');
const resultDisplay = document.getElementById('result');

function getComputerChoice() {
    const choices = Object.keys(options);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) return "draw";
    const winningCombinations = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    };
    return winningCombinations[userChoice] === computerChoice ? "user" : "computer";
}

function updateScore(winner) {
    if (winner === "user") {
        userScore++;
        userScoreElement.textContent = userScore;
    } else if (winner === "computer") {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function displayChoices(userChoice, computerChoice) {
    userChoiceElement.textContent = options[userChoice];
    compChoiceElement.textContent = options[computerChoice];
}

function displayResult(winner) {
    if (winner === 'user') {
        resultDisplay.textContent = 'You Win!';
        resultDisplay.style.backgroundColor = colors.danger; // Green for win
    } else if (winner === 'computer') {
        resultDisplay.textContent = 'You Lose!';
        resultDisplay.style.backgroundColor = colors.success; // Red for lose
    } else {
        resultDisplay.textContent = 'It\'s a Draw!';
        resultDisplay.style.backgroundColor = colors.dark; // Grey for draw
    }
}

function checker(userChoice) {
    const compChoice = getComputerChoice();
    const winner = determineWinner(userChoice, compChoice);
    displayChoices(userChoice, compChoice);
    displayResult(winner);
    updateScore(winner);
}
