// ===== import dependencies =====

import { reverse } from './utils/reverse.js';

// ===== main program =====

// --- display instructions ---

alert('enter a few things, each one will be reversed.');

// --- take user inputs and reverse them ---

let backwardsThings = '';

let done = false;
while (!done) {
  const nextInput = prompt('enter a thing, or click cancel to finish.');

  if (nextInput === null) {
    done = true;
  } else {
    // --- reverse the next input and add it to the list ---

    const reversedInput = reverse(nextInput);
    backwardsThings += `\n- ${reversedInput}`;
  }
}

// --- display the final list ---

alert(`here are your backwards things!
${backwardsThings}`);
