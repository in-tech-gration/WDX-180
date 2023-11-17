// #todo

'use strict';

/* -- declare program variables -- */

let madlib = '';

let noun = null;
let adjective = null;
let verb = null;

/* -- fill in the adjective -- */

while (adjective === null) {
  adjective = prompt('enter an adjective');
}

madlib = 'the ' + adjective;

/* -- fill in the noun -- */

while (noun === null) {
  noun = prompt('enter a noun');
}

madlib = madlib + ' ' + noun;

/* -- fill in the verb -- */

while (verb === null) {
  verb = prompt('enter a verb');
}

madlib = madlib + ' likes to ' + verb;

/* -- make the user laugh -- */

alert(madlib);
