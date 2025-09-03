//main function
function playGame(){
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
function getHumanChoice(){ 
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
