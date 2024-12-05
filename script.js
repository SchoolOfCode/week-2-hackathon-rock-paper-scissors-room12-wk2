let moveList = ["rock", "paper", "scissors", "rock"];

let score = 0;
let playAgain = true;

while (playAgain === true) {

function getResult(playerMove, computerMove){
    if(playerMove == computerMove) {
        return 0 ;
    } 
    else if (moveList.indexOf(computerMove) == (moveList.indexOf(playerMove) + 1 ) % (moveList.length - 1)) {
        return -1 ;
    }
    else {
        return 1 ;
    }
}
function generateComputerMove(){
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber)
    return moveList[randomNumber];
}


let playerMove = prompt("Type your move: rock, paper, or scissors"); // would be good to prevent invalid input

let result = getResult(playerMove, generateComputerMove() );

alert(result);


playAgain = confirm("Do you want to play again?");

  if (!playAgain) {
    alert(`Game over. Your final score is ${score}.`);
  }

}
