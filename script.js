let moveList = ["rock", "paper", "scissors", "rock"];

let score = 0;
let playAgain = true;
function userNameCap (str){
    return /^[A-Z]/.test(str)
};
let username = prompt("Enter your username:");
while (username.length > 10 || userNameCap(username) == false) {
    username = prompt("Enter your username:");
    console.log("Username must start with a capital and must be 10 or fewwer characters.")
};

while (playAgain === true) {


function getResult(playerMove, computerMove){
    if(playerMove == computerMove) {
        return 0 ;
        
    } 
    else if (moveList.indexOf(computerMove) == (moveList.indexOf(playerMove) + 1 ) % (moveList.length - 1)) {
        score--;
        return -1 ;
    }
    else {
        score++;
        return 1 ;
    }
}
function generateComputerMove(){
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber)
    return moveList[randomNumber];
}



let playerMove = prompt( `${username}: Type your move: rock, paper, or scissors`); // would be good to prevent invalid input

let result = getResult(playerMove, generateComputerMove() );

alert( `${username}: Your score changes by ${result}.` + ` This is your current score: ${score}.`);




playAgain = confirm("Do you want to play again?");

  if (!playAgain) {
    alert(`Game over. Your final score is ${score}.`);
  }

}
