let moveList = ["rock", "paper", "scissors", "rock"];
//let playerMove = moveList[0];
//let randomNumber = 1;

//let computerMove = moveList[1];
function getResult(playerMove, computerMove){
    if(playerMove == computerMove) {
        return 0 ;
    } 
    else if (moveList.indexOf(computerMove) == moveList.indexOf(playerMove) + 1 ){
        return -1 ;
    }
    else {
        return 1 ;

    }

    }
    let result = getResult("scissors", "scissors");
    console.log(result);


