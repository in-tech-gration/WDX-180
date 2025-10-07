// #todo

import { addNumbers } from './utils/add-numbers.js';

alert(
  `enter as many numbers as you want.

When you're done entering numbers click cancel
-> your numbers will be added together`,
);

const userNumbers = [];

// -- gather user input --
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
    userNumbers.push(nextNumber);
  }
}
console.log(userNumbers);

// -- calculate the sum --
const sum = addNumbers(userNumbers);
console.log(sum);

// -- build the final message --
const message = `Your numbers:
- ${userNumbers.join('\n- ')}

Sum: ${sum}`;

// -- alert the final message --
alert(message);
