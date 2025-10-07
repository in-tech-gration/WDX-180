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
  _a = prompt('enter some text, the program will check if it is only vowels');
}

let _b = 'aeiou';

let _c = true;
for (let _d of _a) {
  let _e = _b.includes(_d.toLowerCase());
  if (!_e) {
    _c = false;
    break;
  }
}

alert(_c);
