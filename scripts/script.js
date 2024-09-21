const weapons = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return weapons[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    const choice = window.prompt("Choose your weapon!");
    return choice.toLowerCase().trim();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        console.log("Rock v Rock: TIE");
                        break;
                    case "paper":
                        console.log("Rock v Paper: YOU LOSE...");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("Rock v Scissors: YOU WIN!");
                        humanScore++;
                        break;
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        console.log("Paper v Rock: YOU WIN!!!");
                        humanScore++;
                        break;
                    case "paper":
                        console.log("Paper v Paper: TIE");
                        break;
                    case "scissors":
                        console.log("Paper v Scissors: YOU LOSE...");
                        computerScore++;
                        break;
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        console.log("Scissors v Rock: YOU LOSE...");
                        computerScore++;
                        break;
                    case "paper":
                        console.log("Scissors v Paper: YOU WIN!");
                        humanScore++;
                        break;
                    case "scissors":
                        console.log("Scissors v Scissors: TIE");
                        break;
                }
                break;

        }
    }

    // for (let i = 0; i < 5; i++) {
        console.log(`\nCurrent Score => Computer: ${computerScore} / You: ${humanScore}\n`);

        playRound(getHumanChoice(), getComputerChoice());
    // }

    console.log(`Final Score => Computer: ${computerScore} / You: ${humanScore}`);

    if (computerScore > humanScore) {
        console.log("\nSorry! AI is coming for you!");
    }
    else if (humanScore > computerScore) {
        console.log("\nYay! The human race shall overcome!");
    }
    else {
        console.log("\nThe fight continues!");
    }
}

playGame();