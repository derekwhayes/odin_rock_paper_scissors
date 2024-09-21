const weapons = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * 3)];
}

// function getHumanChoice() {
//     const choice = window.prompt("Choose your weapon!");
//     return choice.toLowerCase().trim();
// }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundsPlayed = 0;

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
        if (roundsPlayed == 5) gameOver();
    }

    // for (let i = 0; i < 5; i++) {


    // playRound(getHumanChoice(), getComputerChoice());
    // }

    const bodyElement = document.querySelector("body");
    const roundResult = document.querySelector("#round-result");
    bodyElement.addEventListener("click", (e) => {
        switch (e.target.id) {
            case 'rock':
                playRound('rock', getComputerChoice());
                break;
            case 'paper':
                playRound('paper', getComputerChoice());
                break;
            case 'scissors':
                playRound('scissors', getComputerChoice());

        }
        currentScore.textContent = `Current Score => Computer: ${computerScore} / You: ${humanScore}`;
    });

    const currentScore = document.querySelector("#current-score");
    

    currentScore.textContent = `Current Score => Computer: ${computerScore} / You: ${humanScore}`;

    function gameOver() {
        const finalScore = document.querySelector("#final-score");
        const outcomeText = document.querySelector("#outcome-text");

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
    }
}

playGame();