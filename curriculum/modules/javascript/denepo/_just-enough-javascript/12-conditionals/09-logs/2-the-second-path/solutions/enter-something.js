'use strict';

let input = prompt('enter something');

let path = 0;
if (input === null) {
  path = 1;
} else if (input === '') {
  path = 2;
} else {
  path = 3;
}

console.log(path);
