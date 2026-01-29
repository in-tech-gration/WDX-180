const gameEl = document.querySelector(".game");
// "X", "OK"
const output1 = { el1: "X", el2: "OK" };
//                  0     1
const elMemory = [ "X", "OK", "?", ""]; // push, pop
let index = 0;
const output = document.querySelectorAll(".cell");
// +localStorage
function clickHandler(event){
  const eventTriggeringEl = event.target;  
  // console.log(eventTriggeringEl.getAttribute("class"));
  if ( eventTriggeringEl.classList.contains("game")){
    return;    
  }
  output.forEach((cell) => {
    if (index < elMemory.length){
      cell.textContent = elMemory[index];
       index = (index + 1) % elMemory.length;
    }
  } )
  // eventTriggeringEl.innerHTML = "X"; // Have some memory...
  // index++;  
  // console.log(index);
gameEl.addEventListener("click", clickHandler);

// Counter logic?
