'use strict';

/* Frogpedia

  A user can teach the program something about frogs.
    - given the input is null or an empty string
      the program informs the user and prompts them again
    - given the input is a string without 'frog' (case insensitive)
      the program informs the user and prompts them again
    - given the input contains 'frog' (case insensitive) anywhere in the string
      the user is thanked for the new information about frogs

  test cases:
    contains 'frog':
      'aFrogJumpsFast' -> 'thank you ...'
      'ASDFROGHJKL' -> 'thank you ...'
      'frogs frog froggily' -> 'thank you ...'
    does not contain 'frog':
      '' -> 'no frog :('
      'frrog' -> 'no frog :('
      'toad' -> 'no frog :('
*/

// store the animal name to search for in the user's input
let animalName = 'frog';

// assign an empty string to `userInput`
let userInput = '';

/* --- get a string about frogs from the user ---
  data in: string or null
  data out: a string containing 'frog' (case insensitive)
*/
let isValid = false;
while (isValid != true) {
  /* --- gather input from user ---
    data in: string or null
  */
  userInput = prompt('tell me something about frogs');

  /* --- continue if the user did not input something --- */
  if (userInput === '' || userInput === null) {
    alert('that is not something');
    continue;
  }

  /* --- check if the input contains frog ---
    data before: a string
    data after: boolean value stored in a flag variable
  */
  let lowerCaseInput = userInput.toLowerCase();
  let searchResult = lowerCaseInput.includes(animalName);
  let containsTheAnimal = searchResult === true;
  if (containsTheAnimal) {
    isValid = true;
  } else {
    alert('nope, not about frogs.  try again.');
  }
}

/* --- alert the final message --- */

alert('thank you for this info about frogs!\n\n- "' + userInput + '"');
