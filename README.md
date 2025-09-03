# Rock Paper Scissors  

This project is part of **The Odin Project's Foundations Course**, where the goal is to implement the classic Rock–Paper–Scissors game using **JavaScript**. The challenge focuses on control flow, loops, and functions — while also practicing clean code organization and user interaction through the browser.  

For more information, check out [The Odin Project.](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors)  

You can play the latest version on GitHub Pages [here.](https://miscellaneousg.github.io/rockPaperScissors/) 

## My Approach  

- **Game Flow**:  
  - Start with a `confirm()` prompt to ask if the user wants to play.  
  - Game runs in a loop of **5 rounds**, with scores tracked each round.  
  - At the end, display the overall winner and ask if the user wants to play again.  

- **Input Validation**:  
  - Ensures user can only choose `"rock"`, `"paper"`, or `"scissors"`.  
  - Handles **cancel**, empty input, and invalid entries gracefully.  

- **Code Organization**:  
  - `playGame()` → main function managing rounds and score tracking.  
  - `getHumanChoice()` → validates and returns user input.  
  - `getComputerChoice()` → random choice generator.  
  - `playRound()` → encapsulates game logic (who wins the round).  
  - `liveScoreBoard()` and `displayResult()` → handle user feedback.  

- **Replay System**:  
  - After finishing, players can instantly replay without reloading the page.  

> [!IMPORTANT]  
> **Technical Highlights:** 
> - Modular, single-responsibility functions for readability.  
> - Input sanitization and error handling (`null`, invalid input, empty strings).  
> - Structured loops to manage game flow.  

> [!NOTE]  
> If you’re following [**The Odin Project**](https://www.theodinproject.com/),  
> feel free to adapt this version, improve it with UI buttons, or extend it for extra features. 
> Soon this repo will be updated with UI instead of using prompts (otherwise the prompts experience is actually nice)