/* ***********************
 * COMPUTER FUNCTIONS 
 ************************ */

/**
 * Function to calculate a random int for the computer
 * 
 * @param {int} x 
 * 
 * returns string
 */
let getComputer = (x = Math.floor(Math.random() * 3)) => {
     if (x === 0) {
          return `rock`;
     } else if (x === 1) {
          return `paper`;
     } else {
          return `scissor`;
     }
};

/**
 * Helper function to return the computerValue
 * 
 * returns int
 */
function computerPlay() {
     computerValue = getComputer();
     return computerValue;
}

/* ***********************
 * GAME FUNCTIONS 
 ************************ */
/**
 * 
 * function to interpret winner of round
 * 
 * @param {string} player 
 * @param {string} computer 
 * 
 * returns int
 */
function playRound(player, computer) {
     let statement;
     switch (player) {
          case 'rock':
               if (computer === `rock`) {
                    statement = 0;
               } else if (computer === `paper`) {
                    statement = 1;
               } else {
                    statement = -1;
               }
               break;
          case 'paper':
               if (computer === `rock`) {
                    statement = 1;
               } else if (computer === `paper`) {
                    statement = 0;
               } else {
                    statement = -1;
               }
               break;
          case `scissor`:
               if (computer === `rock`) {
                    statement = -1;
               } else if (computer === `paper`) {
                    statement = 1;
               } else {
                    statement = 0;
               }
               break;
          default:
               alert(`Something Went wrong`);
               console.error(`Something went wrong`);
     }
     return statement;
}

/**
 * Helper Function to call playRound()
 * Gets called by button click event
 * 
 * @param {buttonEvent} user 
 */
function playGame(user) {
     let userInput = user.target.value.toString();
     let computerInput = computerPlay().toString();
     let gameResult = playRound(userInput, computerInput);
     if (gameResult == 1) {
          userScore++;
     } else if (gameResult == -1) {
          computerScore++;
     }
     drawScore(userScore, computerScore);
}

/* ***************************
 * DISPLAY FUNCTIONS
 *************************** */

/**
 * Function to draw the result on the screen
 *  
 * @param {int} userScore 
 * @param {int} computerScore 
 */
function drawScore(userScore, computerScore) {
     const result = document.querySelector('.results');
     const drawCanvas = document.createElement(`div`);
     //Check if someone has one else keep playing
     if (userScore === 5) {
          alert('User has won');
     } else if (computerScore === 5) {
          alert('Computer has won');
     } else {
          drawCanvas.textContent = `User Score: ${userScore} Computer Score: ${computerScore}`;
          if(result.hasChildNodes()){
               let elem = result.firstElementChild;
               elem.remove();
          }
          result.appendChild(drawCanvas);
     }
}

//Variables
const btnList = document.querySelectorAll('button');
let userScore = 0;
let computerScore = 0;

/* ***********************
 * GAME  START 
 ************************ */
btnList.forEach(btnItem => btnItem.addEventListener('click', playGame));

//@To-Do Function to reset all