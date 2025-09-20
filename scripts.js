//Scaffold / frame

const play = document.querySelector("#play");
const exit = document.querySelector("#exit");
const buttons1 = [play,exit];
const container = document.querySelector(".home");
const circle = document.querySelector("#circle");

//update ripple effect origin geometry 
const updateCircleGeometry = (button)=>{

    //calculate ripple effect origin
    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const relativeX = buttonRect.left - containerRect.left;
    const relativeY = buttonRect.top - containerRect.top;

    // Position the ripple div
    circle.style.left = relativeX + 'px';
    circle.style.top = relativeY + 'px';
};

//update position on window load and resize
window.addEventListener('load', ()=>updateCircleGeometry(buttons1[0]));
window.addEventListener('resize',()=>updateCircleGeometry(buttons1[0]));

//start ripple effect on play and load game div
buttons1[0].addEventListener("click",()=>{
    updateCircleGeometry(buttons1[0]);
    circle.classList.toggle("ripple");
    circle.classList.toggle("expanding");
    setTimeout(() => {
        container.style.display="none";
        container.nextElementSibling.style.display="flex";
    },700);
});

//button to exit game
buttons1[1].addEventListener("click",()=>{
    container.style.display="flex";
    container.nextElementSibling.style.display="none";
    updateCircleGeometry(buttons1[0]);
    circle.classList.toggle("expanding");
    setTimeout(() => {
        circle.classList.toggle("ripple");
    },700);
    end();
});

// debug
// container.style.display="none";
// container.nextElementSibling.style.display="flex";
// ====

//-----------------------------------------------------------------------//

//game

//Game variables
let humanChoice;
let computerChoice;
let humanScore;
let computerScore;
let curRound;
let rounds;

//Initialize 
function init(round){
    humanChoice=null;
    computerChoice=null;
    humanScore=0;
    computerScore=0;
    curRound=0;
    rounds=round;
    document.querySelector("#buttons").style.display="flex";
    updateScore();
    document.querySelector("#digits").style.display="inline";
}

function updateScore(){
    document.querySelector("#digits").firstElementChild.textContent=`round ${curRound}/${rounds}`;
    document.querySelector("#digits .computer").textContent=`Computer:\nLast Choice = ${computerChoice}\nTotal Score  = ${computerScore}`;
    document.querySelector("#digits .player").textContent=`Player:\nLast Choice = ${humanChoice}\nTotal Score  = ${humanScore}`;
}

const setting = document.querySelector("#setting");
const round = document.querySelector("input#round");

const computer = document.querySelector("#computer img");
const player = document.querySelector("#player img")

const buttons2 = document.querySelectorAll("#buttons button");

//getting required rounds amount information.
round.addEventListener("input", ()=>document.querySelector("label.round").textContent=`Total Rounds : ${round.value}`);
document.querySelector("#setting button").addEventListener("click",()=>{
    setting.style.display="none";
    init(round.value);
});

// debug
// setting.style.display="none";
// init(round.value);
// ====

//getting human choice
Array.from(buttons2).forEach(button => {
    button.addEventListener("click",()=>{
        humanChoice = button.textContent;
        computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    })
});

//call to end the game
function end(){
    //resetting...
    player.parentElement.style.display="flex";
    computer.parentElement.style.display="flex";

    //reset default player and computer images
    player.setAttribute("src",`./images/phoenixWright.png`);
    computer.setAttribute("src",`./images/milesEdgeworth.png`);
    computer.nextElementSibling.textContent="computer";
    player.nextElementSibling.textContent="player";

    //reset score/buttons display
    document.querySelector("#digits").style.display="none";
    document.querySelector("#buttons").style.display="none";

    //reset settings/label
    setting.style.display="flex";
    round.value=1;
    document.querySelector("label.round").textContent=`Total Rounds : ${round.value}`

    //reset game variables
    humanChoice=null;
    computerChoice=null;
    humanScore=0;
    computerScore=0;
    curRound=0;
    rounds=round.value;
}

//debug
// document.querySelector("#buttons").style.display="none";
//====

//Function to check round winner 
function playRound(humanChoice, computerChoice){
    if((humanChoice==="rock" && computerChoice==="scissor") || (humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="scissor" && computerChoice==="paper")){
        player.setAttribute("src",`./images/${humanChoice}/win.png`);
        computer.setAttribute("src",`./images/${computerChoice}/lose.png`);
        humanScore++;
        player.classList.toggle("grow");
        setTimeout(() => {
            player.classList.toggle("grow");
        },500);
        curRound++;
    }else if(humanChoice===computerChoice){
        player.setAttribute("src",`./images/${humanChoice}/lose.png`);
        computer.setAttribute("src",`./images/${computerChoice}/lose.png`);
        player.classList.toggle("grow");
        computer.classList.toggle("grow");
        setTimeout(() => {
            player.classList.toggle("grow");
            computer.classList.toggle("grow");
        },500);        
    }else{
        player.setAttribute("src",`./images/${humanChoice}/lose.png`);
        computer.setAttribute("src",`./images/${computerChoice}/win.png`);
        computerScore++;
        computer.classList.toggle("grow");
        setTimeout(() => {
            computer.classList.toggle("grow");
        },500);
        curRound++;
    }
    updateScore();
    if(curRound===parseInt(rounds)){
        document.querySelector("#buttons").style.display="none";
        setTimeout(() => {
            manageResult();
            return;      
        }, 1500);
    }
};

function manageResult(){
        if(computerScore>humanScore){
            document.querySelector("#digits").firstElementChild.textContent=`COMPUTER WIN! [${curRound}/${rounds}]`;
            player.parentElement.style.display="none";
            computer.setAttribute("src",`./images/milesEdgeworth.png`);
            computer.nextElementSibling.textContent="Winner!";
        }else if(computerScore<humanScore){
            document.querySelector("#digits").firstElementChild.textContent=`PLAYER WIN! [${curRound}/${rounds}]`;
            computer.parentElement.style.display="none";
            player.setAttribute("src",`./images/phoenixWright.png`);
            player.nextElementSibling.textContent="Winner!";
        }else{
            document.querySelector("#digits").firstElementChild.textContent=`MATCH DRAW! [${curRound}/${rounds}]`;
            player.parentElement.style.display="none";
            computer.parentElement.style.display="none";
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
        return "scissor";
    } 
}


