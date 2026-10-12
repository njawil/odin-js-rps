const choices = ['rock', 'paper', 'scissors'];
const beats = {"rock": "scissors", "scissors": "paper", "paper": "rock"}



function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function getHumanChoice() {
    let answer = prompt("Enter a choice: ").toLowerCase();
    return answer;
}



function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie! both get 0 points.");
    } else if (beats[humanChoice] === computerChoice) {
        console.log("You win!");
        humanScore+=1;
    } else {
        console.log("You lose!");
        computerScore+=1;
    }
}

    for (let i = 0; i <=4; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();