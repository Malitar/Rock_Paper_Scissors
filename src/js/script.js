/* ***********************
* COMPUTER Functions 
************************ */

/**
 * Function to calculate a random int for the computer
 * 
 * @param {int} x 
 * 
 * returns string
 */
let getComputer = (x = Math.floor(Math.random()*3)) => {
     if(x === 0){
          return `rock`;
     } else if(x === 1){ 
          return `paper`;
     } else {
          return `scissor`;
     }
};

/**
 * function to return the computerValue
 */
function computerPlay() {
     computerValue = getComputer();
     return computerValue;
}



/* ***********************
* USER Functions 
************************ */
/**
 * function to get the input from user
 */
function getUserinput(){
     let userIn;
     let correctInput = false;
     do {
          let userInput = prompt(`Input rock, paper or scissor.`, ``);
          if(userInput !== null){
              userInput = correctUserInput(userInput); 
               if(userInput === `rock` || userInput === `paper` || userInput === `scissor`){
                    correctInput = true;
                    userIn = userInput;
               }
               //if user pushes "cancel-Button"
          }else {
               alert(`Thanks for Playing`);
               correctInput = true;
          }
     } while (correctInput !== true);
     return userIn;
}

/**
 * function to correct user input toLowerCase
 * 
 * @param {string} userString 
 * 
 * returns string
 */
function correctUserInput(userString) {
     return userString.toLowerCase();
}



/* ***********************
* GAME Functions 
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
     switch(player) {
          case 'rock':
               if(computer === `rock`) {
                    statement = 0;
               }else if(computer === `paper`) {
                    statement = 1;
               } else {
                    statement = -1;
               }
               break;
          case 'paper':
               if(computer === `rock`) {
                    statement = 1;
               }else if(computer === `paper`) {
                    statement = 0;
               } else {
                    statement = -1;
               }
               break;
          case `scissor`:
               if(computer === `rock`) {
                    statement = -1;
               }else if(computer === `paper`) {
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
 * Game logic for playing 5 rounds
 */
function game() {
     let comWinStreak = 0;
     let userWinStreak = 0;
     for(let i = 0; i < 5; i++){
          let computerSelection = computerPlay();
          let playerSelection = getUserinput();

          let playStatement = playRound(playerSelection, computerSelection);

          //Detect winner & print it
          switch(playStatement){
               case 0:
                    console.log(`Both have the same hand: ${playerSelection}`);
                    break;
               case -1:
                    console.log(`You lost: ${computerSelection} beats ${playerSelection}`);
                    comWinStreak++;
                    break;
               case 1:
                    console.log(`You won: ${playerSelection} beats ${computerSelection}`);
                    userWinStreak++;
                    break;
               default:
                    console.error(`Something went wrong`);
          }
     }
     if(comWinStreak > userWinStreak) {
          alert(`Computer has won`);
     }else {
          alert(`User has won`);
     }
}



/* ***********************
*
* GAME  START 
*
************************ */
game();


