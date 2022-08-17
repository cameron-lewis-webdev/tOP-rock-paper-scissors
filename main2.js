// Creating scoreboard
let playerScore = 0;
let computerScore = 0;
let ties = 0;

// Creating rock, paper, and scissors as choices.
const rpsChoices = ['rock', 'paper', 'scissors'];

// Creating variable to have computer select a choice at random.
const computerSelection = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

// User's selection is dictated by the button they click.
let playerSelection = document.querySelector('.player-button');

// User's selections.
let playerRock = document.querySelector('#player-rock');
let playerPaper = document.querySelector('#player-paper');
let playerScissors = document.querySelector('#player-scissors');

// Computer's selections.
let computerRock = document.querySelector('#computer-rock');
let computerPaper = document.querySelector('#computer-paper');
let computerScissors = document.querySelector('#computer-scissors');

// Results display.
let results = document.querySelector('#results');
let pScore = document.querySelector('#pScore');
let cScore = document.querySelector('#cScore');
let tScore = document.querySelector('#ties');

// Function to disable the user's buttons once the max score has been reached.
let disableButtons = () => {
    playerRock.disabled = true;
    playerPaper.disabled = true;
    playerScissors.disabled = true;
}

// Function to enable the user's buttons once the reset button has been clicked.
let enableButtons = () => {
    playerRock.disabled = false;
    playerPaper.disabled = false;
    playerScissors.disabled = false;
}

// Function to check if there is a winner.
let checkScore = () => {
    if (playerScore === 5) {
        results.textContent = (`Result: Congratulations! You beat the computer with a score of ${playerScore} to ${computerScore}! Click the reset button to play again.`);
        disableButtons ();
    }  else if (computerScore === 5) {
        results.textContent = (`Result: Oof! The computer wins with a score of ${computerScore} to ${playerScore}.  Click the reset button to try again!`);
        disableButtons ();
    }
}

// Reset button.
let reset = document.querySelector('#reset-btn');

reset.addEventListener('click', () => {
    playerScore = 0;
    pScore.textContent = ('Your score: 0');
    computerScore = 0;
    cScore.textContent = ('Computer score: 0');
    ties = 0;
    tScore.textContent = ('Ties: 0');

    results.textContent = ('Result: ');

    playerRock.style.backgroundColor = 'transparent';
    playerPaper.style.backgroundColor = 'transparent';
    playerScissors.style.backgroundColor = 'transparent';

    computerRock.style.backgroundColor = 'transparent';
    computerPaper.style.backgroundColor = 'transparent';
    computerScissors.style.backgroundColor = 'transparent';

    enableButtons();
});

// Game function that gathers the user's input, receives the computer's random
// selection, compares the selections made and prints the results of the round.
playGame = (playerSelection, computerSelection) => {

    // If user selects rock.
    playerRock.addEventListener('click', () => {

        const computerSelection = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

        if (computerSelection === 'rock') {
            ties++;
            playerRock.style.backgroundColor = 'yellow';
            computerRock.style.backgroundColor = 'yellow';
            results.textContent = 'Result: It\'s a tie! Try again!';
            tScore.textContent = `Ties: ${ties}`;

            playerPaper.style.backgroundColor = 'transparent';
            computerPaper.style.backgroundColor = 'transparent';
            playerPaper.style.backgroundColor = 'transparent';
            computerScissors.style.backgroundColor = 'transparent';
        }

        else if (computerSelection === 'scissors') {
            playerScore++;
            playerRock.style.backgroundColor = 'green';
            computerScissors.style.backgroundColor = 'red';
            results.textContent = 'Result: You win! The computer chose scissors.';
            pScore.textContent = `Your score: ${playerScore}`;

            playerPaper.style.backgroundColor = 'transparent';
            playerScissors.style.backgroundColor = 'transparent';
            computerRock.style.backgroundColor = 'transparent';
            computerPaper.style.backgroundColor = 'transparent';

            checkScore();
        }

        else {
            computerScore++;
            playerRock.style.backgroundColor = 'red';
            computerPaper.style.backgroundColor = 'green';
            results.textContent = 'Result: Lost! The computer chose paper.';
            cScore.textContent = `Computer score: ${computerScore}`;

            playerPaper.style.backgroundColor = 'transparent';
            playerScissors.style.backgroundColor = 'transparent';
            computerRock.style.backgroundColor = 'transparent';
            computerScissors.style.backgroundColor = 'transparent';

            checkScore();
        }
    });

    // If user selects paper.
    playerPaper.addEventListener('click', () => {
        const computerSelection = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

        if (computerSelection === 'paper') {
            ties++;
            playerPaper.style.backgroundColor = 'yellow';
            computerPaper.style.backgroundColor = 'yellow';
            results.textContent = 'Result: It\'s a tie! Try again!';
            tScore.textContent = `Ties: ${ties}`;

            playerRock.style.backgroundColor = 'transparent';
            playerScissors.style.backgroundColor = 'transparent';
            computerRock.style.backgroundColor = 'transparent';
            computerScissors.style.backgroundColor = 'transparent';
        }

        else if (computerSelection === 'rock') {
            playerScore++;
            playerPaper.style.backgroundColor = 'green';
            computerRock.style.backgroundColor = 'red';
            results.textContent = 'Result: You win! The computer chose rock.';
            pScore.textContent = `Your score: ${playerScore}`

            playerRock.style.backgroundColor = 'transparent';
            playerScissors.style.backgroundColor = 'transparent';
            computerPaper.style.backgroundColor = 'transparent';
            computerScissors.style.backgroundColor = 'transparent';

            checkScore();
        }

        else {
            computerScore++;
            playerPaper.style.backgroundColor = 'red';
            computerScissors.style.backgroundColor = 'green';
            results.textContent = 'Result: Lost! The computer chose scissors.';
            cScore.textContent = `Computer score: ${computerScore}`;

            playerRock.style.backgroundColor = 'transparent';
            playerScissors.style.backgroundColor = 'transparent';
            computerRock.style.backgroundColor = 'transparent';
            computerPaper.style.backgroundColor = 'transparent';
            
            checkScore();
        }
    });

    // If user selects scissors.
    playerScissors.addEventListener('click', () => {
        const computerSelection = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

        if (computerSelection === 'scissors') {
            ties++;
            playerScissors.style.backgroundColor = 'yellow';
            computerScissors.style.backgroundColor = 'yellow';
            results.textContent = 'Result: It\'s a tie! Try again!';
            tScore.textContent = `Ties: ${ties}`;

            playerRock.style.backgroundColor = 'transparent';
            playerPaper.style.backgroundColor = 'transparent';
            computerRock.style.backgroundColor = 'transparent';
            computerPaper.style.backgroundColor = 'transparent';
        }

        else if (computerSelection === 'paper') {
            playerScore++;
            playerScissors.style.backgroundColor = 'green';
            computerPaper.style.backgroundColor = 'red';
            results.textContent = 'Result: You win! The computer chose paper.';
            pScore.textContent = `Your score: ${playerScore}`;

            playerRock.style.backgroundColor = 'transparent';
            playerPaper.style.backgroundColor = 'transparent';
            computerRock.style.backgroundColor = 'transparent';
            computerScissors.style.backgroundColor = 'transparent';

            checkScore();
        }

        else {
            computerScore++;
            playerScissors.style.backgroundColor = 'red';
            computerRock.style.backgroundColor = 'green';
            results.textContent = 'Result: Lost! The computer chose rock.';
            cScore.textContent = `Computer score: ${computerScore}`;

            playerRock.style.backgroundColor = 'transparent';
            playerPaper.style.backgroundColor = 'transparent';
            computerPaper.style.backgroundColor = 'transparent';
            computerScissors.style.backgroundColor = 'transparent';

            checkScore();
        }
    });
}

playGame(playerSelection, computerSelection);