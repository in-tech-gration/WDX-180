const gameEl = document.querySelector(".game");
const elMemory = ["X", "OK", "?", ""];

function changeStateEl(eventTriggeringEl){
  let nextIndex = elMemory.indexOf(eventTriggeringEl.innerText) + 1;
  if (nextIndex >= elMemory.length) {
    nextIndex = 0;
  }
  eventTriggeringEl.innerText = elMemory[nextIndex];
}

function clickHandler(event) {
  const eventTriggeringEl = event.target;
  if (eventTriggeringEl.classList.contains("game")) {
    return;
  }
  changeStateEl(eventTriggeringEl);
}

gameEl.addEventListener("click", clickHandler);