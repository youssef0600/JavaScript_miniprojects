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
// console.log(getComputerChoice()) ;
// getComputerChoice()


function getHumanChoice() {
    // methode 1 :
    // return prompt("Enter rock, scisor or paper :").toLowerCase() ;

    // methode 2 :
    let choice = prompt("Enter rock ,scissor or paper :") ;
    choice = choice.toLowerCase() ;
    if( choice==="rock" || choice==="paper" || choice==="scissor" ){
        return choice ;
    }else {
        return "Invalid choice" ;
    }   
}
// console.log(getHumanChoice()) ;
// getHumanChoice()


let humanScore = 0 ;
let computerScore = 0 ;


// declare a play reound function 
function playRound(humainChoice ,computerChoice ){
    if ( humainChoice===computerChoice ) {
        console.log("Its' draw!")
    }else if ((humainChoice==="rock" && computerChoice==="scissor") ||
        (humainChoice==="paper" && computerChoice==="rock")   ||
        (humainChoice==="scissor" && computerChoice==="paper") ){
            humanScore++ ;
            console.log(`You Win! ,${humainChoice} beats ${computerChoice}`) ;

    }else if ( humainChoice === "Invalid choice" ){
        console.log("Your input incorrect!") ;
        return 
    }else{
            computerScore++ ; 
            console.log(`You Lose! ,${computerChoice} beats ${humainChoice}`) ;
    }
}
// playRound(humanSelection ,computerSelection ) ;


function playGame() {

    for(let i=0 ;i<5 ;i++ ){
        const humanSelection = getHumanChoice() ;
        const computerSelection = getComputerChoice() ;
        playRound(humanSelection ,computerSelection ) ;
        console.log(`Score -> You ${humanScore} |computer ${computerScore} `)
    }

    if ( humanScore === computerScore ){
        console.log("It's a draw!")
    }else if ( humanScore > computerScore ){
        console.log("You win the game!")
    }else {
        console.log("Computer wins the game!")
    }

    console.log("\n\nFinal score:");
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
}


playGame() ;

