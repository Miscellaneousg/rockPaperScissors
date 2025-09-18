const play = document.querySelector("#play");
const exit = document.querySelector("#exit");
const buttons = [play,exit];
const container = document.querySelector(".home");
const circle = document.querySelector("#circle");

const updateCircleGeometry = (button)=>{

    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const relativeX = buttonRect.left - containerRect.left;
    const relativeY = buttonRect.top - containerRect.top;

    // Position the circle
    circle.style.left = relativeX + 'px';
    circle.style.top = relativeY + 'px';
};

window.addEventListener('load', ()=>updateCircleGeometry(buttons[0]));
window.addEventListener('resize',()=>updateCircleGeometry(buttons[0]));

buttons[0].addEventListener("click",()=>{
    updateCircleGeometry(buttons[0]);
    circle.classList.toggle("ripple");
    circle.classList.toggle("expanding");
    setTimeout(() => {
        container.style.display="none";
        container.nextElementSibling.style.display="flex";
    },700);
});

buttons[1].addEventListener("click",()=>{
    container.style.display="flex";
    container.nextElementSibling.style.display="none";
    updateCircleGeometry(buttons[0]);
    circle.classList.toggle("expanding");
    setTimeout(() => {
        circle.classList.toggle("ripple");
    },900);
});

    // container.style.display="none";
    // container.nextElementSibling.style.display="flex";


//-----------------------------------------------------------------------//

const round = document.querySelector("input#round");

round.addEventListener("input", ()=>document.querySelector("label.round").textContent=`Total Rounds : ${round.value}`);

//Game variables
let humanChoice;
let computerChoice;
let humanScore;
let computerScore;
let curRound;
let rounds;
document.querySelector("#buttons").style.display="none";
//Initialize 
function start(round){
    document.querySelector("#buttons").style.display="flex";
    humanChoice=null;
    computerChoice=null;
    humanScore=0;
    computerScore=0;
    curRound=0;
    rounds=round;
}


    // while(curRound<rounds){
    //     //Get human choice
    //     humanChoice = getHumanChoice(curRound,rounds);      
    //     if(humanChoice===undefined)return;
    //     //Get computer choice
    //     computerChoice = getComputerChoice().toLowerCase();
    //     //Call function playRound to check who win the round
    //     let win = playRound(humanChoice.toLowerCase(), computerChoice);
    //     //Update scores based on win, O is win for human and 1 for computer
    //     if(win===0){
    //         humanScore++;
    //     }else if(win===1){
    //         computerScore++;
    //     }
    //     //Dispaly live score
    //     liveScoreBoard(curRound,rounds,humanChoice,computerChoice,humanScore,computerScore);
    //     //Go to next round
    //     curRound++;
    // }
    // //End Display result
    // Result(humanScore,computerScore);    

//Display current round results
function liveScoreBoard(curRound,rounds,humanChoice,computerChoice,humanScore,computerScore){

        alert(`Round ${curRound+1}/${rounds}
You: ${humanChoice}
Computer: ${computerChoice}
Score → Human: ${humanScore} | Computer: ${computerScore}`);
}

//Display the winner
function Result(humanScore,computerScore){

    if(humanScore<computerScore){

    }else if(humanScore==computerScore){

    }
    else{
        
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


