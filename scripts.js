//main function
function playGame(){

    let humanChoice = null;
    let computerChoice = null;
    let humanScore = 0;
    let computerScore = 0;
    let curRound = 0;
    let rounds = 5;

    while(i<rounds){

        humanChoice = getHumanChoice();

        if(humanChoice === null){
            alert("You have pressed cancel, game quitting...");
            return;
        }        

        computerChoice = getComputerChoice().toLowerCase();
        
        let win = playRound(humanChoice.toLowerCase(), computerChoice);

        if(win===0){
            humanScore++;
        }else if(win===1){
            computerScore++;
        }
        curRound++;
    }    
}


//Function to check round winner 
function playRound(humanChoice, computerChoice){

    if(humanChoice==="rock" && computerChoice==="scissors"){
        return 0;
    }else if(humanChoice==="paper" && computerChoice==="rock"){
        return 0;
    }else if(humanChoice==="scissors" && computerChoice==="paper"){
        return 0;
    }else if(humanChoice===computerChoice){
        return 2;
    }
    return 1; 
}

//Function to return human choice (rock, paper or scissors).
function getHumanChoice(curRound, rounds){ 

    let humanChoice = null;

    while(true){

        humanChoice =  prompt(`Round: ${curRound+1}/${rounds}
Rock, Paper, Scissors, Shoot!`,"");

        if(humanChoice === null){
            return null;
        }
        else if(humanChoice === ""){
            alert(`Round: ${curRound+1}/${rounds}
You haven't made a choice!`);
            continue;
        }else if(humanChoice.toLowerCase() !=="rock" && humanChoice.toLowerCase()!=="paper" && humanChoice.toLowerCase()!=="scissors"){   
            alert(`Round: ${curRound+1}/${rounds}
Wrong choice! acceptable choices are : \"rock\" or \"paper\" or \"scissors\"`);
            continue;
        }
        return humanChoice;  
    } 
}

//Function to return computer choice (rock, paper or scissors).
function getComputerChoice(){

    let random = Math.floor(Math.random()*3);

    if(random===0){
        return "rock";
    }else if(random===1){
        return "paper";
    }else{
        return "scissors";
    } 
}
