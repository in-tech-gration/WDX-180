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
  _a = prompt('enter some text, the program will remove all vowels');
}

let _b = '';
for (let _c of _a) {
  let _d = 'aeiou'.includes(_c.toLowerCase());
  if (!_d) {
    _b = _b + _c;
  }
}

alert(_b);
