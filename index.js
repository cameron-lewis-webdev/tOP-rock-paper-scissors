/* Goal: Create a program that allows the user to play rock-paper-scissors against
the computer.  The user will input case-insensitive their choice between rock, 
paper, and scissors, and in return the computer will choose rock, paper, or scissors 
at random.  After the user inputs their choice and the computer randomly makes its
choice, a pop-up will appear to declare the winner.  The game should be best of 5.*/

let playerScore = 0;        
let computerScore = 0;  // defining user and computer score

const choices = ['rock', 'paper', 'scissors'];      // global choices array

function getComputerChoice() {                                              
    let cChoices = choices[Math.floor(Math.random() * choices.length)];
    return cChoices;
} // random choice is selected for the computer

function getPlayerChoice() {
    const ask = prompt('Choose your weapon: Rock, Paper, or Scissors?').toLowerCase();
    return ask;
} // prompt asking for the player's choice - choice is automatically converted to lowercase to allow for mis-match capitalization.

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';

    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'computer';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'computer';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'computer';

    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'player';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'player';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'player';

    } else {
        return ('Input invalid.  Please choose rock, paper, or scissors.');
    }
}  // returns result from a Best of 1.

let result = playRound(playerSelection, computerSelection);

function game() {
    playRound(playerSelection, computerSelection);
    
    while (playerScore < 3 || computerScore < 3) {
        if (result === 'player') {
            playerScore++;
            alert('You win this round!');
            console.log(`Your score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
    }   else if (result === 'computer') {
            computerScore++;
            alert('Computer wins this round!');
            console.log(`Your score: ${playerScore}`);
            console.log(`Computer score: ${computerScore}`);
    }   else if (result === 'tie') {
            console.log('You both picked the same option.  Try again!');
    }

    return result;
}
}  // after returning result from playRound, it should continue to loop until playerScore or computerScore reaches 3.

console.log(game());