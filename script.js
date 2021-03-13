function computerPlay() {
    let randVal = Math.random() % 3;
    if (randVal === 0) {
        return "Rock"
    } else if (randVal === 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

