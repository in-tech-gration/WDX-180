// #todo

'use strict';

let a = 'y';
let b = 'x';
let temp;

temp = b;
b = a;
a = temp;

console.log(a === 'x'); // true
console.log(b === 'y'); // true
console.log(temp === 'x'); // true
