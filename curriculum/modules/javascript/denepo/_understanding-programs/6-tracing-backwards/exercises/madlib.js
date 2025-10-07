// #todo

'use strict';

let madlib = '';

let noun = null;
let adjective = null;
let verb = null;

while (adjective === null) {
  adjective = prompt('enter an adjective');
}

madlib = 'the ' + adjective;

while (noun === null) {
  noun = prompt('enter a noun');
}

madlib = madlib + ' ' + noun;

while (verb === null) {
  verb = prompt('enter a verb');
}

madlib = madlib + ' likes to ' + verb;

alert(madlib);
