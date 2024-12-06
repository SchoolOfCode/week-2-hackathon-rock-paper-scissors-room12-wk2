let moveList = ["rock", "paper", "scissors", "spock", "lizard", "rock",];

let score = 0;
let playAgain = true;
function userNameCap (str){
    return /^[A-Z]/.test(str)
};
let username = prompt("Enter your username:");
while (username.length > 10 || userNameCap(username) == false) {
    username = prompt("Username must start with a capital and must be 10 or fewwer characters. Enter your username:");
    // console.log("Username must start with a capital and must be 10 or fewwer characters.")
};

while (playAgain === true) {
function getResult(playerMove, computerMove){
    if(playerMove == computerMove) {
        return 0 ;
        
    } // logic for losing basic rock paper scissors
    else if (moveList.indexOf(computerMove) == (moveList.indexOf(playerMove) + 1 ) % (moveList.length - 1)) {
        score--;
        return -1 ;
    } // logic for losing advanced rock paper scissors lizard spock
    else if (moveList.indexOf(computerMove) == (moveList.indexOf(playerMove) + 3 ) % (moveList.length - 1)) {
        score--;
        return -1 ;
    }
    else {
        score++;
        return 1 ;
    }
}
function generateComputerMove(){
    let randomNumber = Math.floor(Math.random() * (moveList.length - 1));
    // console.log(moveList[randomNumber]);
    return moveList[randomNumber];
}


let playerMove = prompt( `${username}: Type your move: ${moveList.slice(0, -2)} or ${moveList.at(-2)}`); // would be good to prevent invalid input

computerMove = generateComputerMove();

let result = getResult(playerMove, computerMove);

alert( `${username}, I guessed ${computerMove}! Your score changes by ${result}.` + ` This is your current score: ${score}.`);


playAgain = confirm("Do you want to play again?");

  if (!playAgain) {
    alert(`Game over. Your final score is ${score}.`);
  }
}
