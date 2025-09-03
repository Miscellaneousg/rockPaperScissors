//Take use confirmation if they wanna play
let answer = confirm("Hey! wanna rockPaperScissors?");
//If user cancels, close the game don't call main function
if(!answer){
    //exit game
    alert("You have Quit the game, reload to play");
}else{
    //Keep playing game loop until cancel
    while(true){
    //call main function to play game one time
    playGame();
    //ask if user wants to play again
    if(confirm("Wanna play again?")){
        continue;
    }
    //exit game
    alert("Thank you for trying rockPaperScissors!");
        break;
    }
}

//main function
function playGame(){
    //Declare variables
    let humanChoice = null;
    let computerChoice = null;
    let humanScore = 0;
    let computerScore = 0;
    let curRound = 0;
    let rounds = 5;
    //Round loop until all finish
    while(curRound<rounds){
        //Get human choice
        humanChoice = getHumanChoice(curRound,rounds);
        //return the main function if user cancel
        if(humanChoice === null){
            alert("You have pressed cancel, game quitting...");
            return;
        }        
        //Get computer choice
        computerChoice = getComputerChoice().toLowerCase();
        //Call function playRound to check who win the round
        let win = playRound(humanChoice.toLowerCase(), computerChoice);
        //Update scores based on win, O is win for human and 1 for computer
        if(win===0){
            humanScore++;
        }else if(win===1){
            computerScore++;
        }
        //Dispaly live score
        liveScoreBoard(curRound,rounds,humanChoice,computerChoice,humanScore,computerScore);
        //Go to next round
        curRound++;
    }
    //End Display result
    displayResult(humanScore,computerScore);    
}

//Display current round results
function liveScoreBoard(curRound,rounds,humanChoice,computerChoice,humanScore,computerScore){

        alert(`Round ${curRound+1}/${rounds}
You: ${humanChoice}
Computer: ${computerChoice}
Score → Human: ${humanScore} | Computer: ${computerScore}`);
}

//Display the winner
function displayResult(humanScore,computerScore){

    if(humanScore<computerScore){
        alert(`The computer won
score: human = ${humanScore}, computer = ${computerScore}`);
    }else if(humanScore==computerScore){
        alert(`Match Draw
score: human = ${humanScore}, computer = ${computerScore}`);
    }
    else{
        alert(`Congratulations! 🎉 you won the match
score: human = ${humanScore}, computer = ${computerScore}`);
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
