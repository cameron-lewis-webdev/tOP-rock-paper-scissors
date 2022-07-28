/* Goal: Create a program that allows the user to play rock-paper-scissors against
the computer.  The user will input case-insensitive their choice between rock, 
paper, and scissors, and in return the computer will choose rock, paper, or scissors 
at random.  After the user inputs their choice and the computer randomly makes its
choice, a pop-up will appear to declare the winner.*/

// Step one: Create a function that has the computer choose between three options
// at random.

function getComputerChoice(max) {
  max = 3
  return Math.floor(Math.random() * max);
}

console.log(getComputerChoice());