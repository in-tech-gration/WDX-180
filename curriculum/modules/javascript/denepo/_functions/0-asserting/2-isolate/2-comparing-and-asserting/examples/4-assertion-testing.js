// #todo

'use strict';

console.log('-- begin --');

// console.assert is a good way to test your understanding of code
//  the idea is to write what you expect the value to be
//  then check your guess with console.assert

// inline

console.assert('hello' === 'hello', 'Inline 1');

console.assert('4' === 'four', 'Inline 2');

console.assert('good bye.' === 'good bye', 'Inline 3');

// with a variable (looks good in the debugger)

const test1 = 'hello' === 'hello';
console.assert(test1, 'With a Variable 1');

const test2 = '4' === 'four';
console.assert(test2, 'With a Variable 2');

const test3 = 'good bye.' === 'good bye';
console.assert(test3, 'With a Variable 3');

console.log('-- end --');
