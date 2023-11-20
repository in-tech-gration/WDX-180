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
  _a = prompt(
    'enter some text, the program will check if it contains any vowels',
  );
}

let _b = 'aeiou';

let _c = false;
for (let _d of _a) {
  let _e = _d.toLowerCase();
  if (_b.includes(_e)) {
    _c = true;
    break;
  }
}

alert(_c);
