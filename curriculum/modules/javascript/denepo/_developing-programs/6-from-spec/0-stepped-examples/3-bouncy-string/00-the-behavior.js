'use strict';

/* Bouncy String

  a user can input string of letters to be converted into a bouncy string
    (a bouncy string is one with every other letter uppercase)
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their bouncy string will be displayed


  test cases:
    uppercase strings:
      'ABCDEF' -> 'aBcDeF'
      'JELLO' -> 'jElLo'
    lowercase strings:
      'abcdef' -> 'aBcDeF'
      'jello' -> 'jElLo'
    mixed strings:
      'AbCdEf' -> 'aBcDeF'
      'jElLo' -> 'jElLo'
*/
