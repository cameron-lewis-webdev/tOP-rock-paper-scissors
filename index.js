/* Goal: Create a program that allows the user to play rock-paper-scissors against
the computer.  The user will input case-insensitive their choice between rock, 
paper, and scissors, and in return the computer will choose rock, paper, or scissors 
at random.  After the user inputs their choice and the computer randomly makes its
choice, a pop-up will appear to declare the winner.  The game should be first to 5 wins.*/

let playerScore = 0;        
let computerScore = 0;  

// defining user and computer score

const choices = ['rock', 'paper', 'scissors'];      

// global choices array

function getComputerChoice() {                                              
    let cChoices = choices[Math.floor(Math.random() * choices.length)];
    return cChoices;
} 

// random choice is selected for the computer

function getPlayerChoice() {
    const ask = prompt('Choose your weapon: Rock, Paper, or Scissors?').toLowerCase();
    return ask;
} 

// prompt asking for the player's choice - choice is automatically converted to lowercase to allow for mis-match capitalization.

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

// Assigning player/computer choice functions to variables

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';

    } else if   ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') || 
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'player';
    } else {
        return ('computer');
    }
}  

// returns result from a Best of 1.

function game() {

    let result = playRound(playerSelection, computerSelection);
    
    if (result === 'player') {
        playerScore++;
        console.log(`You won! ${playerSelection} beats ${computerSelection}`);
        console.log('Your score: ' + playerScore);
        console.log('Computer score: ' + computerScore);
    }

    else if (result === 'tie') {
        console.log('It\'s a tie!  Try again!');
    }

    else {
        computerScore++;
        console.log(`Round lost. ${computerSelection} beats ${playerSelection}`);
        console.log('Your score: ' + playerScore);
        console.log('Computer score: ' + computerScore);
    }

    if (computerScore === 5) {
        console.log('The computer won.  Better luck next time!')
    }

    else if (playerScore === 5) {
        console.log('You win! Well done!')
    }
}

console.log(game(playRound(playerSelection, computerSelection)));
