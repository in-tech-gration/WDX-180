console.clear();

/*

Setup:

- Download the code
- Open it in your local environment (e.g. VSCode with Live Server)
- Follow the instructions below:

Instructions:

A junior developer has created 9 event handlers for each of the Tic-Tac-Toe cells. We think
you can do better than this and follow the DRY principle. Here's what you have to do:

1) Try limiting the event handlers to a minimum.
2) Turn the board green when X wins (there's a special CSS class for that called .win)
3) Turn the board red when O wins (there's also a .lose class)
4) Stop any moves from happening when either X or O wins or loses.
5) Add a Reset or Restart button that starts the game again and clears the board

When finished, copy your code in a folder named "tic-tac-toe" inside the 
user/week16/exercises/day04/ folder, commit with the message "w16d04-tic-tac-toe" and push.

*/

let move = "player1";

const cell1 = document.querySelector(".cell:nth-child(1)");
const cell2 = document.querySelector(".cell:nth-child(2)");
const cell3 = document.querySelector(".cell:nth-child(3)");
const cell4 = document.querySelector(".cell:nth-child(4)");
const cell5 = document.querySelector(".cell:nth-child(5)");
const cell6 = document.querySelector(".cell:nth-child(6)");
const cell7 = document.querySelector(".cell:nth-child(7)");
const cell8 = document.querySelector(".cell:nth-child(8)");
const cell9 = document.querySelector(".cell:nth-child(9)");

clicks: {

  // break clicks; // <= You can uncomment this line to temporarily disable the event listeners:
  
  cell1.addEventListener("click", event =>{
    if ( cell1.innerText.trim().length !== 0 ){
      return false;
    }
    cell1.innerText = move === "player1" ? "X" : "O";
    move = move === "player1" ? "player2" : "player1";
  });

  cell2.addEventListener("click", event =>{
    if ( cell2.innerText.trim().length !== 0 ){
      return false;
    }
    cell2.innerText = move === "player1" ? "X" : "O";
    move = move === "player1" ? "player2" : "player1";
  });  

  cell3.addEventListener("click", event =>{
    if ( cell3.innerText.trim().length !== 0 ){
      return false;
    }
    cell3.innerText = move === "player1" ? "X" : "O";
    move = move === "player1" ? "player2" : "player1";
  }); 
  
  cell4.addEventListener("click", event =>{
    if ( cell4.innerText.trim().length !== 0 ){
      return false;
    }
    cell4.innerText = move === "player1" ? "X" : "O";
    move = move === "player1" ? "player2" : "player1";
  });

  cell5.addEventListener("click", event =>{
    if ( cell5.innerText.trim().length !== 0 ){
      return false;
    }
    cell5.innerText = move === "player1" ? "X" : "O";
    move = move === "player1" ? "player2" : "player1";
  });  

  cell6.addEventListener("click", event =>{
    if ( cell6.innerText.trim().length !== 0 ){
      return false;
    }
    cell6.innerText = move === "player1" ? "X" : "O";
    move = move === "player1" ? "player2" : "player1";
  }); 

  cell7.addEventListener("click", event =>{
    if ( cell7.innerText.trim().length !== 0 ){
      return false;
    }
    cell7.innerText = move === "player1" ? "X" : "O";
    move = move === "player1" ? "player2" : "player1";
  });

  cell8.addEventListener("click", event =>{
    if ( cell8.innerText.trim().length !== 0 ){
      return false;
    }
    cell8.innerText = move === "player1" ? "X" : "O";
    move = move === "player1" ? "player2" : "player1";
  });  

  cell9.addEventListener("click", event =>{
    if ( cell9.innerText.trim().length !== 0 ){
      return false;
    }
    cell9.innerText = move === "player1" ? "X" : "O";
    move = move === "player1" ? "player2" : "player1";
  }); 
}