// #todo

'use strict';

console.log('-- begin --');

// ===, this operator will always evaluate to a boolean
//  true: if the values are the same
//  false: if the values are different

console.log('-- true comparisons --');

const isTrue1 = 'hello' === 'hello';
console.log(typeof isTrue1, isTrue1);

const isTrue2 = '' === '';
console.log(typeof isTrue2, isTrue2);

const isTrue3 = '404' === '404';
console.log(typeof isTrue3, isTrue3);

console.log('-- false comparisons --');

const isFalse1 = 'Hello' === 'hello';
console.log(typeof isFalse1, isFalse1);

const isFalse2 = '4' === 'four';
console.log(typeof isFalse2, isFalse2);

const isFalse3 = 'good bye' === 'good bye.';
console.log(typeof isFalse3, isFalse3);

console.log('-- end --');
