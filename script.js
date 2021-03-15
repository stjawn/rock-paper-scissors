let playerHand = prompt("Rock, paper, scissors. Shoot!", "").toLowerCase();
let computerHand = computerPlay();

function computerPlay() {
    let randVal = ((Math.random() * 10000).toFixed(0)) % 3;
    if (randVal === 0) {
        return "rock"
    } else if (randVal === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    // *if playerSelection invalid, log message and repeat
    if (playerSelection === computerSelection) {
        // *repeat playRound with refreshed variables
        return console.log("tie")
    }
        else if (playerSelection === "rock") {
            if (computerSelection === "paper") {
                return console.log("Paper covers rock. You lose!")
            }
            else {
                return console.log("Rock crushes scissors. You win!")
            }
        }
        else if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                return console.log("Scissors cut paper. You lose!")
            }
            else {
                return console.log("Paper covers rock. You win!")
            }
        }
        else {
            if (computerSelection === "rock") {
                return console.log("Rock crushes scissors. You lose!")
            }
            else {
                return console.log("Scissors cut paper. You win!")
            }
        }
    }