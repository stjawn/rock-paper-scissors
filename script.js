// Constants and Variables
let wins = 0
let losses = 0
let ties = 0 
let total = wins + losses + ties


// User Interface

const mainContainer = document.createElement("div");
mainContainer.id = "main";
document.body.appendChild(mainContainer);

const rockButton = document.createElement("button");
rockButton.id = "rock";

const paperButton = document.createElement("button");
paperButton.id = "paper";

const scissorsButton = document.createElement("button");
scissorsButton.id = "scissors";

const buttonContainer = document.createElement("div");
buttonContainer.id = "buttons"
buttonContainer.append(rockButton, paperButton, scissorsButton);
mainContainer.appendChild(buttonContainer);

const scoreContainer = document.createElement("div");
scoreContainer.id = "scoreboard";
scoreContainer.textContent = "wins: " + wins + " losses: " + losses + " ties: " + ties
mainContainer.appendChild(scoreContainer);


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.textContent = button.id
})
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let roundResult = (playRound(button.id));
        console.log(roundResult)
        if (roundResult === "tie") {
          ties += 1;
        } else if (roundResult === 1) {
          wins += 1;
        } else {
          losses += 1;
        }
        scoreContainer.textContent = "wins: " + wins + " losses: " + losses + " ties: " + ties
    });
});


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
    if (playerHand === computerHand) {
        return "tie"
    } else if (playerHand === "rock") {
        if (computerHand === "paper") {
            return 0
        } else {
            return 1
        }
    } else if (playerHand === "paper") {
        if (computerHand === "scissors") {
            return 0
        } else {
            return 1
        }
    } else if (playerHand === "scissors") {
        if (computerHand === "rock") {
            return 0
        } else {
            return 1
        }
    }
}

 
/*


*/