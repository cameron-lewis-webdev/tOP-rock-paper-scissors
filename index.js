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
        console.log(`It\'s a tie! You both selected ${playerSelection}.`);
        console.log('Your score: ' + playerScore);
        console.log('Computer score: ' + computerScore);

    } else if   ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') || 
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
        console.log('Your score: ' + playerScore);
        console.log('Computer score: ' + computerScore);

    } else {
        computerScore++;
        console.log(`Round lost. ${computerSelection} beats ${playerSelection}.`);
        console.log('Your score: ' + playerScore);
        console.log('Computer score: ' + computerScore);
        
    }
}  

/* In English: I created a function called 'playRound'.  This function takes 2 arguments, playerSelection and computerSelection.  playerSelection was defined
above as getPlayerChoice() which gives the user three option (RPS) to choose from.  computerSelection was also defined above as getComputerChoice() which has
the computer choose RPS at random.  The rules to RPS are written as an if/else statement.*/

function game() {
    while (computerScore < 5 && playerScore < 5) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        console.log(playRound(playerSelection, computerSelection))
        
    if (playerScore === 5) {
        console.log('Congratulations! You win!')
    }

    else if(computerScore === 5) {
        console.log('Computer wins.  Better luck next time!')
    }
    }
}

/* In English: I created a function called 'game'. Within the function, I created a loop where the condition states that while the player and computer's
score is less than 5, continue to loop the following code.  Inside of the loop, I have the computer and player make new selections each iteration and
then the console.log logs the playRound function.  There is also an if/else statment which declares the winner to whoever reaches a scores of 5 first.*/

game();

/* I learned that when calling a function by itself, you do not need to use console.log();. */ 
