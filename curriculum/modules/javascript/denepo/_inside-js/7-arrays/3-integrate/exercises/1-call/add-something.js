// #todo

/* ===== import functions ===== */

import { __ } from '../utils/add-to-numbers.js';

/* ===== main program (use functions) ===== */

alert(
  `enter as many numbers as you want

then enter another number
-> your new number will be added to each entry`,
);

// -- gather numbers --
const originalNumbers = [];

while (true) {
  const input = prompt('enter the next number or cancel to finish');

  if (input === null) {
    break;
  }

  if (input === '') {
    alert('nothing is not allowed');
    continue;
  }

  const nextNumber = Number(input);
  if (Number.isNaN(nextNumber)) {
    alert(`"${input}" is not a number`);
  } else {
    originalNumbers.push(nextNumber);
  }
}
console.log(originalNumbers);

// -- get the length to filter --
let numberToAdd = NaN;
while (true) {
  const input = prompt('what number should be added to each entry?');

  numberToAdd = Number(input);

  if (input === '' || input === null) {
    alert('enter something');
  } else if (Number.isNaN(numberToAdd)) {
    alert(`"${input}" is not a number`);
  } else {
    break;
  }
}
console.log(numberToAdd);

// -- add the new value to each number --
// declare a new variable named `addedNumbers`
//  assign it the return value from calling `addToNumbers`
_;
console.log(addedNumbers);

// -- generate a message for the user --
let before = 'before: ';
let after = 'after: ';
for (let i = 0; i < originalNumbers.length; i++) {
  before += `${originalNumbers[i]}, `;
  after += `${addedNumbers[i]}, `;
}

const message = `${before}\n${after}`;

// -- alert the final message --

alert(message);
