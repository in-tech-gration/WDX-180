'use strict';

let toggle = true;

while (true) {
  if (toggle) {
    console.log('<');
  } else {
    console.log('>');
  }
  toggle = !toggle;
}

// unreachable code:
console.log('all done');
