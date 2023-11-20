// #todo

'use strict';

/*
  _a:
    declaration:
      init:
      types:
      scopes:
    reads:
      scopes:
      checks:
    assignments:
      types:
      scopes:


*/

alert(
  'this is a two-player game:\n\n' +
    '- player 1: enters an animal\n' +
    '- player 2: says something cool about it',
);

let _a = null;
while (_a === null) {
  _a = prompt('enter an animal');
}

let _b = '';

let _c = false;
while (!_c) {
  _b = prompt('tell me something about ' + _a);

  if (_b === '' || _b === null) {
    alert('that is not something');
  } else if (_b.toLowerCase().includes(_a.toLowerCase())) {
    _c = true;
  } else {
    alert('nope, not about ' + _a + '.  try again.');
  }
}

alert('i just learned something cool about ' + _a + '!\n\n- "' + _b + '"');
