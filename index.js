let userScore = 0;
let computerScore = 0;

const options = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
}

function getComputerChoice() {
    const choices = Object.keys(options); // Use the keys from the options object
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "draw";
    }

    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        return "user";
    } else {
        return "computer";
    }
}

function updateScore(winner) {
    if (winner === "user") {
        userScore++;
        document.getElementById('user_score').textContent = userScore;
    } else if (winner === "computer") {
        computerScore++;
        document.getElementById('computer_score').textContent = computerScore;
    }
}

function displayChoices(userChoice, computerChoice) {
    document.getElementById('user_choice').innerHTML =
        `${options[userChoice] ? options[userChoice] : " "}`;
    document.getElementById('comp_choice').innerHTML = `${options[computerChoice] ? options[computerChoice] : " "}`;
}

function checker(userChoice) {
    const compChoice = getComputerChoice();
    const winner = determineWinner(userChoice, compChoice);
    displayChoices(userChoice, compChoice);
    displayResult(winner);
    updateScore(winner);
}

function displayResult(winner) {
    const resultDisplay = document.getElementById('result');
    if (winner === 'user') {
        resultDisplay.textContent = 'You Win!';
        resultDisplay.style.backgroundColor = '#4caf50'; // Green for win
    } else if (winner === 'computer') {
        resultDisplay.textContent = 'You Lose!';
        resultDisplay.style.backgroundColor = '#E51F1F'; // Red for lose
    } else {
        resultDisplay.textContent = 'It\'s a Draw!';
        resultDisplay.style.backgroundColor = '#757575'; // Grey for draw
    }
}
