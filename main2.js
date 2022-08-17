// Creating scoreboard
let playerScore = 0;
let computerScore = 0;

// Creating rock, paper, and scissors as choices.
const rpsChoices = ['rock', 'paper', 'scissors'];

// Creating variable to have computer select a choice at random.
const computerSelection = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

// User's selection is dictated by the button they click.
let playerSelection = document.querySelector('.player-button');

// One round function that gathers the user's input, receieves the computer's random
// selection, compares the selections made and prints the results of the round.
playGame = (playerSelection, computerSelection) => {
    
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

    // If user selects rock.
    playerRock.addEventListener('click', () => {

        const computerSelection = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

        if (computerSelection === 'rock') {
            playerRock.style.backgroundColor = 'yellow';
            computerRock.style.backgroundColor = 'yellow';
            results.append('It\'s a tie! Try again!');

            playerPaper.style.backgroundColor = 'transparent';
            computerPaper.style.backgroundColor = 'transparent';
            playerPaper.style.backgroundColor = 'transparent';
            computerScissors.style.backgroundColor = 'transparent';
            
        }

        else if (computerSelection === 'scissors') {
            playerScore++;
            playerRock.style.backgroundColor = 'green';
            computerScissors.style.backgroundColor = 'red';
            results.append('You win! The computer chose scissors.');
            pScore.textContent = `Your score: ${playerScore}`;

            playerPaper.style.backgroundColor = 'transparent';
            playerScissors.style.backgroundColor = 'transparent';
            computerRock.style.backgroundColor = 'transparent';
            computerPaper.style.backgroundColor = 'transparent';
        }

        else {
            computerScore++;
            playerRock.style.backgroundColor = 'red';
            computerPaper.style.backgroundColor = 'green';
            results.append('Lost! The computer chose paper.');
            cScore.textContent = `Computer score: ${computerScore}`;

            playerPaper.style.backgroundColor = 'transparent';
            playerScissors.style.backgroundColor = 'transparent';
            computerRock.style.backgroundColor = 'transparent';
            computerScissors.style.backgroundColor = 'transparent';
        }
    });

    // If user selects paper.
    playerPaper.addEventListener('click', () => {
        const computerSelection = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

        if (computerSelection === 'paper') {
            playerPaper.style.backgroundColor = 'yellow';
            computerPaper.style.backgroundColor = 'yellow';
            results.append('It\'s a tie! Try again!');
        }

        else if (computerSelection === 'rock') {
            playerScore++;
            playerPaper.style.backgroundColor = 'green';
            computerRock.style.backgroundColor = 'red';
            results.append('You win! The computer chose rock.');
            pScore.textContent = `Your score: ${playerScore}`
        }

        else {
            computerScore++;
            playerPaper.style.backgroundColor = 'red';
            computerScissors.style.backgroundColor = 'green';
            results.append('Lost! The computer chose scissors.');
            cScore.textContent = `Computer score: ${computerScore}`;
        }
    });

    // If user selects scissors.
    playerScissors.addEventListener('click', () => {
        const computerSelection = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];

        if (computerSelection === 'scissors') {
            playerScissors.style.backgroundColor = 'yellow';
            computerScissors.style.backgroundColor = 'yellow';
            results.append('It\'s a tie! Try again!');
        }

        else if (computerSelection === 'paper') {
            playerScore++;
            playerScissors.style.backgroundColor = 'green';
            computerPaper.style.backgroundColor = 'red';
            results.append('You win! The computer chose paper.');
            pScore.textContent = `Your score: ${playerScore}`
        }

        else {
            computerScore++;
            playerScissors.style.backgroundColor = 'red';
            computerRock.style.backgroundColor = 'green';
            results.append('Lost! The computer chose rock.');
            cScore.textContent = `Computer score: ${computerScore}`;
        }
    });
}


playGame(playerSelection, computerSelection);