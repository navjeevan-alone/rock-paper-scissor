# Rock Paper Scissors Game Website

## Overview

This website allows users to play a simple Rock Paper Scissors game against the computer. The player chooses one of three options (rock, paper, or scissors), and the computer randomly selects an option. The game then determines the winner based on the rules of Rock Paper Scissors.

## Website Structure

### HTML

The website consists of a single HTML page with the following main elements:

- **Header**: Displays the game title.
- **Scores Section**: Shows the current scores for both the player and the computer.
- **Game Options**: Provides buttons for the player to choose rock, paper, or scissors.
- **Game Details**: Displays the player's choice, the computer's choice, and the result of the round.

### CSS

The styling for the website is defined in `style.css`, which includes styles for:

- Layout and positioning of elements.
- Button styles, including hover and focus effects.
- Dynamic styles for game results based on the outcome (win, lose, draw).

### JavaScript

The game logic and interactions are handled by `script.js`, which includes functions for:

- Getting the computer's choice randomly.
- Determining the winner of a round.
- Updating the scores based on the round's outcome.
- Displaying the player's choice, computer's choice, and the result.

## Game Play

1. The player clicks one of the three buttons (`Rock`, `Paper`, `Scissors`) to make their choice.
2. The computer randomly selects its choice.
3. The choices are compared, and the winner is determined:
    - Rock beats Scissors
    - Scissors beats Paper
    - Paper beats Rock
4. The scores are updated based on the outcome of the round.
5. The player's choice, computer's choice, and the result of the round are displayed on the screen.

## Code Snippets

### JavaScript Function: `checker`

```javascript
function checker(userChoice) {
    const userChoiceDisplay = document.getElementById('user_choice');
    const compChoiceDisplay = document.getElementById('comp_choice');
    const resultDisplay = document.getElementById('result');
    const compChoice = getComputerChoice();

    userChoiceDisplay.textContent = `Your Choice: ${options[userChoice]}`;
    compChoiceDisplay.textContent = `Computer's Choice: ${options[compChoice]}`;

    const winner = determineWinner(userChoice, compChoice);
    displayResult(winner, resultDisplay);
    updateScore(winner);
}
```

This function handles the player's choice, computes the computer's choice, determines the winner, updates the scores, and displays the results.

## Contributions

To contribute to this project, please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.