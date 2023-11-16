// #todo

'use strict';

let greeting = 'hello';

{
  let newGreeting = 'bye';
  greeting = newGreeting;
}

console.log(greeting === 'bye');
