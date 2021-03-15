function computerPlay() {
    let randVal = ((Math.random() * 10000).toFixed(0)) % 3;
    if (randVal === 0) {
        return "rock";
    } else if (randVal === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        // *repeat playRound with refreshed variables
        return "Tie";
    }
        else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return "Paper covers rock. You lose!";
            }
            else {
                return "Rock crushes scissors. You win!";
            }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                return "Scissors cut paper. You lose!";
            }
            else {
                return "Paper covers rock. You win!";
            }
        }
        else if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                return "Rock crushes scissors. You lose!";
            }
            else {
                return "Scissors cut paper. You win!";
            }
        }
        else {
            return "You must choose rock, paper, or scissors.";
        }
}


let playerHand = prompt("Rock, paper, scissors. Shoot!", "");
let computerHand = computerPlay();

console.log(playerHand);
console.log(computerHand);
console.log(playRound(playerHand,computerHand));