;(function runBattleship(){
  
  function initBattleshipGame(){

    // Game Configuration:
    const numOfColsAndRows = 2;
    const cellWidthHeight = 50; 

    // Custom Game Errors:
    class BattleshipError extends Error {
      constructor(message){
        super(message); // Call the constructor() method of Error
        this.battleshipVersion = 0.1;
      }
    }

    // Define functions:
    function calcBoard(numOfColsAndRows,cellWidthHeight){
      return numOfColsAndRows * cellWidthHeight;
    }
    function createHTMLElements(){
      // <div id="scoreboard">Scoreboard</div>  
      const div = document.createElement("div");
      div.setAttribute("id", "scoreboard");
  
      // <canvas id="player"></canvas>
      const playerCanvas = document.createElement("canvas");
      playerCanvas.style.backgroundColor = "skyblue";
      playerCanvas.setAttribute("id", "player");
  
      // <canvas id="opponent"></canvas>
      const opponentCanvas = document.createElement("canvas");
      opponentCanvas.setAttribute("id", "opponent");
  
      // <div id="controls">
      //   <button>Start Game</button>
      //   <button>Reset Game</button>
      //   <button>Attack</button>
      // </div>  
      const controls = document.createElement("div");
      controls.setAttribute("id", "controls");
      const startBtn = document.createElement("button");
      startBtn.textContent = "Start Game";
      const resetBtn = document.createElement("button");
      resetBtn.textContent = "Reset Game";
      const attackBtn = document.createElement("button");
      attackBtn.textContent = "Attack";
      controls.appendChild(startBtn);
      controls.appendChild(resetBtn);
      controls.appendChild(attackBtn);
  
      // If no #battleship exists on HTML: check for null
      const gameContainer = document.querySelector("#battleship"); // HTMLElement || null
      if ( gameContainer === null ){
        throw new BattleshipError(
          `Battleship error: missing #battleship element.
  
           Have you included a <div id="battleship"></div> in your HTML?
          `);
      }
      gameContainer.appendChild(div);
      gameContainer.appendChild(playerCanvas);
      gameContainer.appendChild(opponentCanvas);
      gameContainer.appendChild(controls);
  
      // const playerCanvas = document.querySelector("canvas#player");
      // const opponentCanvas = document.querySelector("canvas#opponent");
      return {
        playerCanvas,
        opponentCanvas,
        gameContainer,
        startBtn,
        resetBtn,
        attackBtn
      };
    }
    function paintCellGrid(x,y,color = "black"){
      ctxPlayer.fillStyle = color;
      ctxPlayer.fillRect(x,y,cellWidthHeight,cellWidthHeight);
    }
    function createCellGrid(x,y){
      ctxPlayer.strokeStyle = "black";
      // ctxPlayer.fillStyle = "skyblue";
      // ctxPlayer.fillRect(x,y,cellWidthHeight,cellWidthHeight);
      ctxPlayer.strokeRect(x,y,cellWidthHeight,cellWidthHeight);
    }
    function paintPeg(x,y,color = "black"){
      ctxPlayer.fillStyle = color;
      ctxPlayer.beginPath();
      ctxPlayer.arc(x,y,15,0,Math.PI*2);
      ctxPlayer.fill();
    }
    function paintRedPeg(x,y){
      paintPeg(x,y,"red");
    }
    function paintWhitePeg(x,y){
      paintPeg(x,y,"white");
    }
  
    const canvasWH = calcBoard( numOfColsAndRows, cellWidthHeight );
    const { opponentCanvas, playerCanvas } = createHTMLElements();
    
    playerCanvas.width = canvasWH;
    playerCanvas.height = canvasWH;
    opponentCanvas.width = canvasWH;
    opponentCanvas.height = canvasWH;
    
    const ctxPlayer = playerCanvas.getContext("2d");
    paintRedPeg(25,25);
    paintWhitePeg(75,75);
    createCellGrid(0,0);
    createCellGrid(cellWidthHeight,0);
    createCellGrid(0,cellWidthHeight);
    createCellGrid(cellWidthHeight,cellWidthHeight);
    // paintCellGrid(cellWidthHeight,cellWidthHeight);
 
  }
  
  try {
    initBattleshipGame();
  } catch(error){
    // Show them the line that caused the error?
    console.log(error);
    console.log("Battleship Game has produced an error:", error.message);
  }

}());