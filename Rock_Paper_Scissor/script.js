function getComputerChoice() {
    const rand = Math.random()
    if ( rand < 1/3 ) {
        return "rock" ;
    }else if ( rand<2/3 ) {
        return "scissor" ;
    }else {
        return "paper"
    }
}

let humanScore = 0 ;
let computerScore = 0 ;
const rockBtn = document.getElementById("rock-btn") ;
const paperBtn = document.getElementById("paper-btn") ;
const scissorBtn = document.getElementById("scissor-btn") ;
const humanScoreNum = document.getElementById("human-score")
const computerScoreNum = document.getElementById("computer-score")
const startBtn = document.getElementById("start-btn") ;

function checkWinner(){
    if (humanScore === 5){
        alert("You Win The Game 🥳");
        gameStarted = false;

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
        startBtn.disabled = false;
    }
    else if (computerScore === 5){
        alert("You Lose! Good Luck next time.");
        gameStarted = false;

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
        startBtn.disabled = false;
    }
}

const result = document.getElementById("result") ;

function playRound(humainChoice ,computerChoice ){
    if ( humainChoice===computerChoice ) {
        result.innerHTML = `<img src="./images/attention2.png" alt="attention-logo" width="10%"> GameDraw! both you chose ${humainChoice}` ;
    }else if ((humainChoice==="rock" && computerChoice==="scissor") ||
    (humainChoice==="paper" && computerChoice==="rock") ||
    (humainChoice==="scissor" && computerChoice==="paper") ){
        result.innerHTML = `You win 🎉! ${humainChoice} beats ${computerChoice}` ;
        humanScore++ ;
    }else{
        result.innerHTML = `Computer win 💻! ${computerChoice} beats ${humainChoice}` ;
        computerScore++ ;
    }
    humanScoreNum.textContent = humanScore ;
    computerScoreNum.textContent = computerScore ;
    checkWinner() ;
}

let gameStarted = false ;

startBtn.addEventListener("click" ,function(){
    gameStarted = true ;
    humanScore = 0;
    computerScore = 0;
    humanScoreNum.textContent = 0;
    computerScoreNum.textContent = 0;
    result.innerHTML = `<img src="./images/attention2.png" alt="attention-logo" width="10%"><p>Press Start Game</p>`;
    startBtn.disabled = true;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
});

rockBtn.addEventListener("click" ,function(){
    if (gameStarted===false){ return ; }
    const humanChoice = "rock" ;
    const computerChoice = getComputerChoice() ;
    playRound(humanChoice ,computerChoice) ;
});

paperBtn.addEventListener("click" ,function(){
    if (gameStarted===false){ return; }
    const humanChoice = "paper" ;
    const computerChoice = getComputerChoice() ;
    playRound(humanChoice ,computerChoice) ;
});

scissorBtn.addEventListener("click" ,function(){
    if (gameStarted===false){ return; }
    const humanChoice = "scissor" ;
    const computerChoice = getComputerChoice() ;
    playRound(humanChoice ,computerChoice) ;
});

const resetBtn = document.getElementById("reset-btn") ;

resetBtn.addEventListener("click" ,function(){
    humanScore = 0;
    computerScore = 0;
    humanScoreNum.textContent = 0;
    computerScoreNum.textContent = 0;
    result.innerHTML = `<img src="./images/attention2.png" alt="attention-logo" width="10%"><p>Press Start Game</p>`;
    gameStarted = false;
    startBtn.disabled = false;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
})