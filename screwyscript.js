let moveList = ["rock", "paper", "scissors"];
//let playerMove = moveList[0];
//let randomNumber = 1;
//let computerMove = moveList[1];


function getResult(playerMove, computerMove){
    
    
    
    if(playerMove == computerMove) {
        return 0 ;
    } 

    // human player wins conditions
    if (computerMove == moveList.at(-1) && playerMove == moveList[0]) {
        console.log("computer guesses last, player guesses 1st");
        return 1;
    }

    else if (computerMove == moveList[0]) {
        console.log("computer move does equal moveList[0]");
    }

    


    else if (moveList.indexOf(computerMove) == moveList.indexOf(playerMove) + 1 ) {
        return -1 ;


    }
    else {
        return 1 ;

    }

}

let computerMove = "paper";
let playerMove = prompt("Type your move: rock, paper, or scissors"); // would be good to prevent invalid input

let result = getResult(playerMove, computerMove);

alert(result);







