const choices = ["Rock", "Paper", "Scissors"]


let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let fDecision = choices[choice];
    return fDecision
}

function playRound(playerChoice, computerChoice) {
    let uniPlayerChoice = playerChoice.toLowerCase();
    let uniComputerChoice = computerChoice.toLowerCase();
    

    if (uniPlayerChoice === uniComputerChoice){
        alert("It's a Draw!");
    }

    if (uniPlayerChoice === "paper" && uniComputerChoice === "rock") {
        playerScore++
        alert(`You Lose! Paper beats Rock`);
        console.log("Player Scored!");
    } else if (uniPlayerChoice === "rock" && uniComputerChoice === "scissors") {
        playerScore++
        alert("You Lose! Rock beats Scissors");
        console.log("Player Scored!");
    } else if (uniPlayerChoice === "scissors" && uniComputerChoice === "paper") {
        playerScore++
        alert("You Lose! Scissors beats Paper");
        console.log("Player Scored!");
    } else if (uniPlayerChoice === "rock" && uniComputerChoice === "paper"){
        computerScore++
        alert(`You Win! ${computerChoice} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()}`);
        console.log("Computer Scored!");
    } else if (uniPlayerChoice === "scissors" && uniComputerChoice === "rock"){
        computerScore++
        alert(`You Win! ${computerChoice} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()}`);
        console.log("Computer Scored!");
    } else if (uniPlayerChoice === "paper" && uniComputerChoice === "scissors"){
        computerScore++
        alert(`You Win! ${computerChoice} beats ${playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase()}`);
        console.log("Computer Scored!");
    }

}



function playGame() {
let i = 0
    while (i < 5) {
        let playerInput = prompt("Pick your weapon!");

        playRound(playerInput, getComputerChoice());

        console.log(`Current score player:${playerScore} computer:${computerScore}`)

        i++
    }


    if (playerScore === computerScore) {
        alert("No one wins!")
        console.log("It's a Draw")
    } else if (playerScore > computerScore) {
        playerScore = 0;
        computerScore = 0;
        alert("Player Wins!");
        console.log("Player Wins!")
    } else {
        playerScore = 0;
        computerScore = 0;
        alert("Computer Wins!");
        console.log("Computer Wins!")
    }
}