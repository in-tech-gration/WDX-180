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
  _a = prompt('enter something with no duplicate characters');
}

let _b = '';
for (let _c of _a) {
  let _d = _b.includes(_c);
  if (_d) {
    break;
  }
  _b = _b + _c;
}

if (_b.length === _a.length) {
  alert('well done!');
} else {
  alert('too bad, try again');
}
