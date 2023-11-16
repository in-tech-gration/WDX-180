// #todo

'use strict';

let number = -5;
// let number = -4;
// let number = -3;
// let number = -2;
// let number = -1;
// let number = 0;
// let number = 1;
// let number = 2;
// let number = 3;
// let number = 4;
// let number = 5;

let i = 0;
while (i < number) {
  i = i + 1;
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}
