

// Computer choice: returns a random value of the possible choices of the game
let winner;
let roundNumber;
let playerNumberOfWins = 0;
let computerNumberOfWins = 0;
let numberOfDraws = 0;
let playerSelection;
const choices = [
    "rock",
    "paper",
    "scissors"
]; 
let playerName = "";


//validate player's name is not empty
while(playerName === ""){
    playerName = prompt("The game is going to be 5 Rounds! Enter your name!");
}

//validate user entry
function validateUserEntry(roundNumber){
    let playerEntry = prompt('Round ' + roundNumber + ' => ' + " What's your sign?").toLowerCase();
        // check user first entry
        if (choices.includes(playerEntry)) {
            playerSelection = playerEntry;
        }
        // keep asking for a valid entry
        else {
            while(!(choices.includes(playerEntry))){
                playerEntry = prompt('Round '+roundNumber+ ' => ' + ' Enter a valid Sign! Valid Signs are "Paper", "Rock and "Scissors"').toLowerCase();
            }
            playerSelection = playerEntry;
        }
}

// get the computer choice randomly
function computerPlay(choices){
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

// play a single round
function singleRound(playerSelection,computerSelection){
    console.log("Round. " + roundNumber)
    console.log("Computer choice: " + computerSelection);
    console.log("Your choice: " + playerSelection);
    
    if (playerSelection === computerSelection){
        winner = "Draw"
    }

    else if (playerSelection === "paper"){
        if (computerSelection === "scissors") {
            winner = "Computer" 
        }
        else {winner = "Player"}
    }

    else if (playerSelection === "scissors"){
        if (computerSelection === "rock") {
            winner = "Computer" 
        }
        else {winner = "Player"}
    }

    else if (playerSelection === "rock"){
        if(computerSelection === "paper"){
            winner = "Computer"
        }
        else {
            winner = "Player"
        }
    }
    
    return winner
}

//check the winner
function checkTheWinner(winner){
    switch(winner){
        case "Draw":
            console.log(winner)
            numberOfDraws ++;
            break;
        case "Player":
            console.log(playerName + " wins!")
            playerNumberOfWins++
            break;
        case "Computer":
            console.log(winner + " wins!")
            computerNumberOfWins++
            break;
    }
    console.log('-------------------------------------------------')
}

// print the final report
function printReport(){
    console.log(
      'Final Results: ' + playerName + ' won ' + playerNumberOfWins + ' games ' + '\n'
    + 'Computer ' + 'won ' + computerNumberOfWins + ' games' + '\n'
    + 'Draws ' + numberOfDraws + ' games'
    )
}

// the main function to play the 5 rounds game
function game(){
    for (i = 0 ; i < 5 ; i++){
        roundNumber = i+1
        validateUserEntry(roundNumber);
        singleRound(playerSelection, computerPlay(choices));
        checkTheWinner(winner); 
    }
    printReport();
}


game();