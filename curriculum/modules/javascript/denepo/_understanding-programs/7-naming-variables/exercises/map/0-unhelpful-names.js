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

let _a = null;
while (_a === null) {
  _a = prompt('enter some text, can you guess what the program does?');
}

let _b = '';
for (let _c of _a) {
  if ('aeiou'.includes(_c)) {
    _b = _b + _c.toUpperCase();
  } else if ('AEIOU'.includes(_c)) {
    _b = _b + _c.toLowerCase();
  } else {
    _b = _b + _c;
  }
}

alert(_b);
