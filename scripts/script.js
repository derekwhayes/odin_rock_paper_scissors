const weapons = ["rock", "paper", "scissors"];
let roundsPlayed = 0;
let computerScore = 0;
let humanScore = 0;
const roundResult = document.querySelector("#round-result");
const finalScore = document.querySelector("#final-score");
const outcomeText = document.querySelector("#outcome-text");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const btns = document.querySelector("#btns");
const newGameBtn = document.querySelector("#new-game");
const currentScore = document.querySelector("#current-score");

// ***GET COMPUTER CHOICE***

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * 3)];
}

// ***RESET GAME***

function resetUIforNewGame() {
    currentScore.textContent = "";
    roundResult.textContent = "";
    finalScore.textContent = "";
    outcomeText.textContent = "";

    rock.toggleAttribute("hidden");
    paper.toggleAttribute("hidden");
    scissors.toggleAttribute("hidden");
    newGameBtn.toggleAttribute("hidden");

    playGame();
}

// ***PLAY GAME***

function playGame() {
    humanScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    currentScore.textContent = `Round: ${roundsPlayed} => Computer: ${computerScore} / You: ${humanScore}`;

    btns.addEventListener("click", selectWeapon);
}

// ***WEAPON SELECTOR***

function selectWeapon(e) {
    switch (e.target.id) {
        case 'rock':
            console.log("rock selected");
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            console.log("paper selected");
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            console.log("scissors selected");
            playRound('scissors', getComputerChoice());

    }
    currentScore.textContent = `Round: ${roundsPlayed} => Computer: ${computerScore} / You: ${humanScore}`;
}

// ***PLAY ROUND***

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    roundResult.textContent = "Rock v Rock: TIE";
                    break;
                case "paper":
                    roundResult.textContent = "Rock v Paper: YOU LOSE...";
                    computerScore++;
                    break;
                case "scissors":
                    roundResult.textContent = "Rock v Scissors: YOU WIN!";
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    roundResult.textContent = "Paper v Rock: YOU WIN!!!";
                    humanScore++;
                    break;
                case "paper":
                    roundResult.textContent = "Paper v Paper: TIE";
                    break;
                case "scissors":
                    roundResult.textContent = "Paper v Scissors: YOU LOSE...";
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    roundResult.textContent = "Scissors v Rock: YOU LOSE...";
                    computerScore++;
                    break;
                case "paper":
                    roundResult.textContent = "Scissors v Paper: YOU WIN!";
                    humanScore++;
                    break;
                case "scissors":
                    roundResult.textContent = "Scissors v Scissors: TIE";
                    break;
            }
            break;
    }

    roundsPlayed++;
    console.log("roundsPlayed end of round: ", roundsPlayed);
    if (roundsPlayed === 5) gameOver();
}

// ***GAME OVER***

function gameOver() {
    if (computerScore > humanScore) {
        finalScore.textContent = `Final Score => Computer: ${computerScore} / You: ${humanScore}`;
        outcomeText.textContent = "Sorry! AI is coming for you!";
    }
    else if (humanScore > computerScore) {
        finalScore.textContent = `Final Score => Computer: ${computerScore} / You: ${humanScore}`;
        outcomeText.textContent = "Yay! The human race shall overcome!";
    }
    else {
        finalScore.textContent = `Final Score => Computer: ${computerScore} / You: ${humanScore}`;
        outcomeText.textContent = "The fight continues!";
    }

    rock.toggleAttribute("hidden");
    paper.toggleAttribute("hidden");
    scissors.toggleAttribute("hidden");
    newGameBtn.toggleAttribute("hidden");

    newGameBtn.addEventListener("click", resetUIforNewGame);
}

playGame();