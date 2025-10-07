// #todo

'use strict';

let greeting = 'hello';

{
  let greeting = 'hello';
  greeting = 'bye';
  console.log(greeting);
}

console.log(greeting === 'hello'); // true
