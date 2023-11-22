// #todo

/* ===== import functions ===== */

import { filterByLength } from '__';

/* ===== main program (use functions) ===== */

alert(
  `enter as many strings as you want

then enter a desired length
-> only strings of this length will be kept`,
);

// -- gather numbers --
const allInputs = [];
let notDone = true;
while (notDone) {
  const input = prompt('enter the next string or cancel to finish');

  if (input === null) {
    notDone = false;
  } else {
    allInputs.push(input);
  }
}
console.log(allInputs);

// -- get the length to filter --
let lengthToKeep = NaN;
while (true) {
  const input = prompt('what length string do you want to keep?');
  lengthToKeep = Number(input);

  if (input === '' || input === null) {
    alert('enter something');
  } else if (Number.isNaN(lengthToKeep)) {
    alert(`"${input}" is not a number`);
  } else {
    break;
  }
}
console.log(lengthToKeep);

// -- add the new value to each number --
// declare a new variable named `filtered`
//  assign it the return value from calling `filterByLength`
_;
console.log(filtered);

// -- generate a message for the user --
let message = '';
for (let i = 0; i < filtered.length; i++) {
  message += `- "${filtered[i]}"\n`;
}

// -- alert the final message --
alert(message);
