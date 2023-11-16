// #todo

'use strict';

let input = prompt('enter something');

let response = ':(';
if (input !== null) {
  let didConfirm = confirm('is this what you meant to input?\n-> ' + input);
  if (didConfirm === true) {
    response = 'great!';
  } else {
    response = 'try again';
  }
}

alert(response);

/* distractors:


    True

    Null


*/
