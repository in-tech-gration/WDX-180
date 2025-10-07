'use strict';

let input = prompt('enter something with a space');

let path = 0;
if (input === null) {
  path = 1;
} else if (__) {
  path = 2;
} else {
  path = 3;
}

console.log(path);
