;(function runBattleship(){

  function initBattleshipGame(){

    // Game Configuration: (10x10 original)
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
    function createCellGrid(x,y){
      ctxPlayer.strokeStyle = "black";
      // ctxPlayer.fillStyle = "skyblue";
      // ctxPlayer.fillRect(x,y,cellWidthHeight,cellWidthHeight);
      ctxPlayer.strokeRect(x,y,cellWidthHeight,cellWidthHeight);
    }
    function paintCellGrid(x,y,color = "black"){
      ctxPlayer.fillStyle = color;
      ctxPlayer.fillRect(x,y,cellWidthHeight,cellWidthHeight);
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

    const { opponentCanvas, playerCanvas } = createHTMLElements();
    const canvasWH = calcBoard( numOfColsAndRows, cellWidthHeight );
    playerCanvas.width = canvasWH;
    playerCanvas.height = canvasWH;
    opponentCanvas.width = canvasWH;
    opponentCanvas.height = canvasWH;

    const ctxPlayer = playerCanvas.getContext("2d");
    // Test: paint pegs
    // paintRedPeg(25,25);
    // paintWhitePeg(75,75);
    // Paint the board cell grids:
    createCellGrid(0,0);
    createCellGrid(cellWidthHeight,0);
    createCellGrid(0,cellWidthHeight);
    createCellGrid(cellWidthHeight,cellWidthHeight);
    // paintCellGrid(cellWidthHeight,cellWidthHeight);

    // We have to think in terms of A1, B1 coordinates:

    // 0,9 -> 0,1 -> A,B
    function getColFromX( x ){
      // Get the x and divide by 50 (cellWidthHeight)
      const quotient = x / cellWidthHeight;
      // Get rid of the decimals (using Math.floor)
      const intQuotient = Math.floor(quotient);
      // We translate 0,1,2->A,B,C through an Array index
      const letters = ["A","B","C"];
      return letters[intQuotient];
    }
    // 0,9 -> 1,2
    function getRowFromY( y ){
      const quotient = y / cellWidthHeight;
      const intQuotient = Math.floor(quotient);
      return intQuotient + 1; 
    }
    function getColRowFromXY( x, y ){
      const col = getColFromX(x);
      const row = getRowFromY(y);
      return col + row;
    }

    // Given B2 -> 50,50
    function paintCellAtRowCol(rowCol,color){
      const letter = [ "A", "B", "C" ];
      const col = rowCol[0]; 
      const row = rowCol[1]; 
      const x = letter.indexOf(col) * cellWidthHeight; 
      const y = (row - 1) * cellWidthHeight; 
      paintCellGrid(x,y,color); 
    }
    function paintRedPegAtRowCol(rowCol){}
    function paintWhitePegAtRowCol(rowCol){}

    // SHIP PLACEMENT (Horizontal/Vertical, Left-to-right)
    // function paintCruiser("A1"){}

    // Use Class for Ship
    class Ship {}
    class Sumbarine extends Ship {}
    class Cruiser extends Ship {}

    // IMPLEMENT: function paintRedPegAtRowCol() => paintRedPegAtRowCol("A1");
    // IMPLEMENT: function paintWhitePegAtRowCol() => paintWhitePegAtRowCol("B2")

    // REMINDER: We will probably require the 0 indexing for our game dev logic

    // LOGIC REQUIREMENTS: Game State
    const shipColors = {
      submarine: "green",
      battleship: "blue"
    }
    // IMPLEMENT: The user should be able to create this structure
    const playerShips = {
      A1: "submarine",
      A2: "battleship",
      B2: "battleship"
    }
    // Paint the placed ships:
    function paintShips(playerShips){
      const playerShipsArray = Object.entries(playerShips);
      for ( const coord of playerShipsArray ){
        const colRow = coord[0];
        const shipType = coord[1];
        paintCellAtRowCol(colRow,shipColors[shipType]);
      }
    }
    paintShips(playerShips);
    
    const opponentShips = {
    }
    // What information do we need to store in order to play the game?
    // - List of ships (submarine, carrier, cruiser, ddestroyer, etc.)
    // - Placement coords for ships
    // - Hits (with coords?)
    // - Miss points (with coords?)
    // - Store our ships, our opponent's ships
    // Array of objects: ships = [["A2","B2"],["A1"]]
    // Object: { submarine: ["A1"], battleship: ["A2","B2"] }
    // Object: "A1", { A1: "submarine", B2: "battleship", A2: "battleship" }
    // Object: Single Object (both opponent and player)
    // { player: {}, opponent: {} }

    playerCanvas.addEventListener("click", e =>{
      // https://stackoverflow.com/questions/28826523/how-to-set-id-for-drawn-canvas-shape
      const rect = playerCanvas.getBoundingClientRect();
      const x = Math.floor(e.clientX - rect.left);
      const y = Math.floor(e.clientY - rect.top);
      // console.log({ x, y }); // -> "A1", "B2"
      const colRow = getColRowFromXY(x,y);
      // console.log({ colRow });
      paintCellAtRowCol(colRow);
    });

  }

  try {
    initBattleshipGame();
  } catch(error){
    // Show them the line that caused the error?
    console.log(error);
    console.log("Battleship Game has produced an error:", error.message);
  }

}());