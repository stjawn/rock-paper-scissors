// Constants and Variables
let wins = 0
let losses = 0
let ties = 0 

// User Interface

const mainContainer = document.createElement("div");
mainContainer.id = "main";
document.body.appendChild(mainContainer);

const scoreContainer = document.createElement("div");
scoreContainer.id = "scorecontainer";
scoreContainer.textContent = "wins: " + wins + " losses: " + losses + " ties: " + ties
mainContainer.appendChild(scoreContainer);

const rockButton = document.createElement("button");
rockButton.id = "rock";

const paperButton = document.createElement("button");
paperButton.id = "paper";

const scissorsButton = document.createElement("button");
scissorsButton.id = "scissors";

const buttonContainer = document.createElement("div");
buttonContainer.id = "buttons";
buttonContainer.append(rockButton, paperButton, scissorsButton);
mainContainer.appendChild(buttonContainer);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.textContent = button.id
})
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
    })
})

const messageContainer = document.createElement("div");
messageContainer.textContent = "Shoot!";
mainContainer.appendChild(messageContainer);

// Functions

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

function playRound(playerHand, computerHand = computerPlay()) {
    let roundResult
    if (playerHand === computerHand) {
        roundResult = "tie";
    } else if (playerHand === "rock") {
        if (computerHand === "paper") {
            roundResult = 0;
        } else {
            roundResult = 1;
        }
    } else if (playerHand === "paper") {
        if (computerHand === "scissors") {
            roundResult = 0;
        } else {
            roundResult = 1;
        }
    } else if (playerHand === "scissors") {
        if (computerHand === "rock") {
            roundResult = 0;
        } else {
            roundResult = 1;
        }
    }
    if (roundResult === "tie") {
        ties += 1;
        messageContainer.textContent = "Tie!";
    } else if (roundResult === 1) {
        wins += 1;
        messageContainer.textContent = "Wooo, " + playerHand + " beats " + computerHand + ". You win!";
    } else {
        losses += 1;
        messageContainer.textContent = "Damn, " + computerHand + " beats " + playerHand + ". You lose!";
    }
    scoreContainer.textContent = "Wins: " + wins + " Losses: " + losses + " Ties: " + ties;
}




/*

function test(n) {
    while (n > 0) {
        playRound("rock");
        if (n % 100 === 0) {
            console.log(n);
        }
        n -= 1;
    }
    console.log("Wins: " + wins + " Losses: " + losses + " Ties: " + ties);
}

*/