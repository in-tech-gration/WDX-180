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

/* --- gather input from the user --- */
//  Data In:      null or a string
//  Data After:   a non-empty string with only letters

// input <- null
// WHILE: true
//   input <- prompt('enter some text with only letters')

/* --- repeat if the input is null (sub-goal!) --- */
//   IF: input === null
//     CONTINUE
//   :END IF
/* --- repeat if the input is empty (sub-goal!) --- */
//   IF: input === ''
//     CONTINUE
//   :END IF
/* --- repeat if the input is only letters (sub-goal!) --- */
//   onlyLetters <- true
//   FOR: char OF input
//     IF: !'abcdefghijklmnopqrstuvwxyz'.includes(char.toLowerCase())
//       onlyLetters <- false
//     :END IF
//   :END FOR
//   IF: !onlyLetters
//     CONTINUE
//   :END IF

/* --- exit if the input passed the previous checks (sub-goal!) --- */
//   BREAK
// :END WHILE

/* --- bouncify the string --- */
//  Data Before:  a string with only letters, upper or lower case
//  Data After:   the same letters with every other uppercase

// bouncy <- ''

// isBigLetter <- false
// FOR: letter OF input
//   IF: isBigLetter
//     bouncy <- bouncy + letter.toUpperCase()
//   ELSE:
//     bouncy <- bouncy + letter.toLowerCase()
//   :END IF
//   isBigLetter <- !isBigLetter
// :END FOR

/* --- display the bouncy string --- */
// Data Out:      a bouncy string

// alert(bouncy)
