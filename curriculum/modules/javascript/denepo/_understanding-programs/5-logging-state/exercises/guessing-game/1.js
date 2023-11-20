// #todo

'use strict';

/*
  log the secret
  log each guess the 2nd user makes
  log the winner
*/

const userInput = prompt(
  'Welcome!\n\n' +
    '"play": begin the game\n' +
    '"-h": read the instructions\n' +
    'escape: exit the game',
);

if (userInput === '-h') {
  alert(
    'This is a two player game.\n\n' +
      'Player 1: enters a secret phrase, and then a clue.\n' +
      'Player 2: is shown the clue and must guess the phrase.\n\n' +
      'you can end the game at any point by canceling',
  );
} else if (userInput === 'play') {
  let winner = 'no one';

  alert('Player 2: look away! hide your eyes!');

  let secretPhrase = '';
  while (secretPhrase === '') {
    secretPhrase = prompt('Player 1: enter a secret phrase');
  }

  if (secretPhrase === null) {
    alert('good bye');
  } else {
    let clue = '';
    while (clue === '') {
      clue = prompt('Player 1: enter a clue to help guess your phrase');
    }

    if (clue === null) {
      alert('good bye');
    } else {
      alert(
        'Player 1: you entered ...\n\n' +
          '- phrase: "' +
          secretPhrase +
          '"' +
          '\n' +
          '- clue: "' +
          clue +
          '"',
      );

      alert('now go get Player 2');

      let guess = '';
      while (guess === '') {
        guess = prompt(
          'Player 2, Here is your clue:\n\n' +
            '- "' +
            clue +
            '"\n\n' +
            'what do you think the secret phrase is?',
        );
      }

      if (guess === null) {
        alert('good bye');
      } else if (guess === secretPhrase) {
        winner = 'Player 2';
        alert('Congrats, you were right!\n\n');
      } else {
        winner = 'Player 1';

        const revealTheSecret = confirm(
          'Nope, not correct. \n\ndo you want to know the secret?',
        );

        if (revealTheSecret) {
          alert(
            'The secret was:\n\n' +
              '- ' +
              '"' +
              secretPhrase +
              '"' +
              '\n\n' +
              'thanks for playing, see ya',
          );
        } else {
          alert('better luck next time');
        }
      }
    }
  }
  alert('game over. the winner is: ' + winner);
} else if (userInput === null) {
  alert('good bye');
} else {
  alert('unknown command: "' + userInput + '"');
}
