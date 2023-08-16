// Rock, Paper, Scissors: Refactored with Functions

const initGame = () => {

const startGame = confirm("Shall we play rock, paper, or scissors?" startGame? playGame(): alert("Ok, maybe next time.");
};

// Game flow function

const playGame = () => { while (true) {

    let playerChoice = getPlayerChoice(); playerChoice = formatPlayerChoice(playerChoice);
    
    if (playerChoice === "") {
    
    invalidChoice();
    
    continue;
    
    if (IplayerChoice) decidedNotToPlay();
    
    break;
    
    playerChoice = evaluate PlayerChoice (playerChoice); if (IplayerChoice) {
    
    invalidChoice(); continue;

    const computerChoice = getComputerChoice();