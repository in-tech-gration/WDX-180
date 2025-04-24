function calcBoard(numOfColsAndRows,cellWidthHeight){
  return numOfColsAndRows * cellWidthHeight;
}
const numOfColsAndRows = 2;
const cellWidthHeight = 50; 
const canvasWH = calcBoard( numOfColsAndRows, cellWidthHeight );
const playerCanvas = document.querySelector("canvas#player");
const opponentCanvas = document.querySelector("canvas#opponent");

playerCanvas.width = canvasWH;
playerCanvas.height = canvasWH;
opponentCanvas.width = canvasWH;
opponentCanvas.height = canvasWH;

const ctxPlayer = playerCanvas.getContext("2d");
