document.addEventListener('DOMContentLoaded', function() {
  const gameEl = document.querySelector(".game");
  const elMemory = ["X", "OK", "?", ""];
  let index = 0;

  document.querySelectorAll('.cell').forEach((cellEl, index) => {
    cellEl.setAttribute('data-row-index', index);
  });

  function clickHandler(event) {
    const eventTriggeringEl = event.target;

    if (eventTriggeringEl.classList.contains("game")) {
      return;
    }

    const rowIndex = eventTriggeringEl.getAttribute('data-row-index');

    
    if (rowIndex !== null) {
      const cellsInRow = document.querySelectorAll(`.cell[data-row-index="${rowIndex}"]`);

      cellsInRow.forEach((cellEl) => {
        if (index < elMemory.length) {
          cellEl.textContent = elMemory[index];
          index = (index + 1) % elMemory.length;
        }
      });
    }
  }

  gameEl.addEventListener("click", clickHandler);
});
