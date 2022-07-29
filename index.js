/* Goal: Create a program that allows the user to play rock-paper-scissors against
the computer.  The user will input case-insensitive their choice between rock, 
paper, and scissors, and in return the computer will choose rock, paper, or scissors 
at random.  After the user inputs their choice and the computer randomly makes its
choice, a pop-up will appear to declare the winner.*/

// Step one: Create a function that has the computer choose between three options
// at random.

let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let cChoices = choices[Math.floor(Math.random() * choices.length)];
    return cChoices;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ('Draw! Go again!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return ('Lost!  Computer chose paper.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return ('Winner! Computer chose scissors.');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return ('Winner! Computer chose rock.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return ('Lost! Computer chose scissors.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return ('Lost! Computer chose rock.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return ('Winner! Computer chose paper.')
    } else {
        return ('Input invalid.  Please choose rock, paper, or scissors.');
    }
}

function game() {
    playRound(playerSelection, computerSelection); {
        if (playerSelection === computerSelection) {
            return ('Draw! Go again!');
    } 
        else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return ('Lost!  Computer chose paper.');
    }
        else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log('Your Score: ' + playerScore);
        console.log('Computer Score: ' + computerScore);
        return ('Winner! Computer chose scissors.');
    }
        else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log('Your Score: ' + playerScore);
        console.log('Computer Score: ' + computerScore);
        return ('Winner! Computer chose rock.');
    }
        else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return ('Lost! Computer chose scissors.');
    }
        else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
        return ('Lost! Computer chose rock.');
    }
        else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log('Your Score: ' + playerScore);
        console.log('Computer Score: ' + computerScore);
        return ('Winner! Computer chose paper.')
    }
        else {
        return ('Input invalid.  Please choose rock, paper, or scissors.');
    }
}
}

const playerSelection = prompt('Choose your weapon: Rock, Paper, or Scissors?', '');
const computerSelection = getComputerChoice();
console.log(game(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase())));