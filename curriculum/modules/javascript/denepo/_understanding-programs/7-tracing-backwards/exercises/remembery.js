// #todo

'use strict';

alert(`Guess 3 phrases in 3 tries

  Player 1:
    enter three phrases

  Player 2:
    see the three phrases in order
    then enter them back in order
    you will get one point for each correct guess
`);

alert('Player 2: go hide');

const phrase1 = prompt('Player 1, enter your first phrase:');
const phrase2 = prompt('Player 1, enter your second phrase:');
const phrase3 = prompt('Player 1, enter your third phrase:');

alert('Player 2, get back here');

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

alert("player 2's score: " + points);
