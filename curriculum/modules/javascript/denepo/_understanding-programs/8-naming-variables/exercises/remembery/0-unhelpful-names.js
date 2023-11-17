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
  'Remembery, the game of remembering.\n\n' +
    'You will be prompted to enter 3 phrases.\n' +
    'next you will be prompted to remember one of them\n\n' +
    'if you enter it exactly, you win!',
);

let _a = prompt('enter your first secret phrase:');
let _b = prompt('enter your second secret phrase:');
let _c = prompt('enter your third secret phrase:');

alert('all saved! get ready to remember');

let _d = Math.round(Math.random() * 2) + 1;

let _e = '';
if (_d === 1) {
  _e = _a;
} else if (_d === 2) {
  _e = _b;
} else if (_d === 3) {
  _e = _c;
}

let _f = prompt('enter phrase number ' + _d);

if (_f === _e) {
  alert('correct! phrase ' + _d + ' was "' + _e + '"');
} else {
  alert('nope :(');
}
