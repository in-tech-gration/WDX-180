// #todo

'use strict';

/* -- 1. show the instructions --

  - are there any variables used in this goal?
*/

alert(`Guess 3 phrases in 3 tries

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    you will get one point for each correct guess
`);

/* -- 2. gather player 1's phrases --

  - what types can be assigned to the `phrase` variables?
  - is it possible that all 3 `phrase` variables have the same value?
*/

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

/* -- 3. player 2 tries to remember the phrases --

  - can you know what values will assigned to the `guess` variables without running the program?
  - what happens if a user cancels all of their guesses?
  - how is this goal of the program different from goal 2?
*/

alert(
  'Player 2, remember these:' +
    '\n1. "' +
    phrase1 +
    '"' +
    '\n2. "' +
    phrase2 +
    '"' +
    '\n3. "' +
    phrase3 +
    '"',
);

const guess1 = prompt('Player 2, guess the first phrase:');
const guess2 = prompt('Player 2, guess the second phrase:');
const guess3 = prompt('Player 2, guess the third phrase:');

/* -- 4. player 2's score is calculated --

  - which operator is used in the conditional checks?
  - what are the possible scores a user can earn?
  - what is the scope of the `points` variable?
  - is the `points` variable used in any other parts of the program?
*/

let points = 3;

if (guess1 !== phrase1) {
  points = points - 1;
}

if (guess2 !== phrase2) {
  points = points - 1;
}

if (guess3 !== phrase3) {
  points = points - 1;
}

/* -- 5. show player 2's final score -- */

alert("player 2's score: " + points);
