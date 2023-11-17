// #todo

'use strict';

let adjective = null;
while (adjective === null) {
  adjective = prompt('enter an adjective');
}

let noun = null;
while (noun === null) {
  noun = prompt('enter a noun');
}

let verb = null;
while (verb === null) {
  verb = prompt('enter a verb');
}

let phrase = 'the ';
phrase = phrase + adjective + ' ';
phrase = phrase + noun + ' likes to ';
phrase = phrase + verb;

alert(phrase);
