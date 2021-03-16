function computerPlay() {
    let randVal = ((Math.random() * 100000).toFixed(0)) % 3;
    if (randVal === 0) {
        return "rock"
    } else if (randVal === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function playRound() {
    let playerHand = prompt("Rock, paper, scissors. Shoot!","").toLowerCase();
    let computerHand = computerPlay();
    if (playerHand === computerHand) {
        console.log("Tie", playerHand, computerHand);
        return playRound()
    } else if (playerHand === "rock") {
        if (computerHand === "paper") {
            console.log("Paper covers rock. You lose!");
            return 0
        } else {
            console.log("Rock crushes scissors. You win!");
            return 1
        }
    } else if (playerHand === "paper") {
        if (computerHand === "scissors") {
            console.log("Scissors cut paper. You lose!");
            return 0
        } else {
            console.log("Paper covers rock. You win!");
            return 1
        }
    } else if (playerHand === "scissors") {
        if (computerHand === "rock") {
            console.log("Rock crushes scissors. You lose!");
            return 0
        } else {
            console.log("Scissors cut paper. You win!");
            return 1
        }
    } else {
        console.log("You must choose rock, paper, or scissors.");
        return playRound()
    }
}


function game(n = 1) {
    let playerWins = 0;
    let roundResult = 0;
    for (let i = 0; i < n; i++) {
        roundResult = playRound();
        playerWins += roundResult;
    }
    if (playerWins > (n/2)) {
        return ("Congratulations! You won " + playerWins + " of " + n + " games.")
    } else {
        return ("Damn! You lost " + (n - playerWins) + " of " + n + " games.")
    }
}