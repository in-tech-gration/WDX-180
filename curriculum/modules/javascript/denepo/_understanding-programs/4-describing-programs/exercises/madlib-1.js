// #todo

'use strict';

let noun = null;
while (noun === null) {
  noun = prompt('enter a noun');
}

let verb = null;
while (verb === null) {
  verb = prompt('enter a verb');
}

let adjective = null;
while (adjective === null) {
  adjective = prompt('enter an adjective');
}

const madlib = 'the ' + adjective + ' ' + noun + ' likes to ' + verb;

alert(madlib);
