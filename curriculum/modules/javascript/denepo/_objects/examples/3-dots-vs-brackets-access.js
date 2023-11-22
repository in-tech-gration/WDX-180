'use strict';

console.log('-- begin --');

/*
  hint: use JS Tutor
*/

// bracket notation
//  another way to work with key/value pairs

// object literal declaration
const greetings = {
  first: 'hi',
  last: 'bye',
};

// direct access to a key/value pair by key name (dot notation)
console.log(greetings.first); // 'hi'
console.log(greetings.last); // 'bye'

// indirect access using the value of another variable (bracket notation)
const arrival = 'first';
const departure = 'last';

console.log(greetings[arrival]); // 'hi'
console.log(greetings[departure]); // 'bye'

// if a variable's value does not exist in the object ...
const notAGreeting = 'toast';
console.log(greetings[notAGreeting]); // undefined

// new key/value pairs can be added with bracket notation
const concernedGreeting = 'concerned';
greetings[concernedGreeting] = 'are you ok?';
console.log(greetings.concerned); // 'are you ok?'

// and can be deleted with bracket notation
delete greetings[concernedGreeting];
console.log(greetings.concerned); // undefined

// https://github.com/janke-learning/dots-vs-brackets

console.log('-- end --');
