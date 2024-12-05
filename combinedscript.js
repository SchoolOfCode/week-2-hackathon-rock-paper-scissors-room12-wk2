let moveList = ["rock", "paper", "scissors", "rock"];


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

let computerMove = "scissors";
let playerMove = prompt("Type your move: rock, paper, or scissors"); // would be good to prevent invalid input
let result = getResult(playerMove, computerMove);

alert(result);

