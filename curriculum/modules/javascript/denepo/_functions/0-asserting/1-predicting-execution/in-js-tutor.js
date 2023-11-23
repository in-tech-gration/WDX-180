'use strict';

/* A suggested workflow for studying code in JS Tutor

  Getting Ready
    open this repo in your terminal and enter `$ study`
    a new tab should open in your browser
    select the file you want to study and get going!

  Studying
  1 - find the file you want to study and click the "open in jsTutor" (or jsTutorLive) button
    - be sure to click to "<< First" arrow so you start at the beginning
  2 - find the line of code with the red arrow pointing to it
    - read it out loud to yourself in meaningful human language
    - your personal vocabulary will take a while to appear, Programming with Mosh videos will help
  3 - for each step in the JS Tutor visualization:
    A - before pressing the "Next >>" button ask yourself (out loud if possible)
        - "which line will be executed next?"
        - "will this next line ...
            ... read from memory?"
            ... write to memory?" (careful, it's possible to do both!)
            ... log to the console?"
            ... create a new frame?" (ie. call a function)
            ... create a new block scope?"
            ... decide the flow of my program?" (ie. if, while, for)
        - "what will the diagram on the right look like after this step is finished?"
        - Pro Tip: write and draw your predictions on a piece of paper! (really, do this.  it helps)
    B - press "Next >>" and check if you were right or wrong
    C - repeat
  4 - go back to VSCode and make any changes to your .js file
  5 - repeat

*/

let hello = 'world';
console.assert(hello === 'world', 'hello should be "world"');

hello = 'good bye';
console.assert(hello === 'good bye', 'hello should be "good bye"');

if (hello === 'world') {
  console.log('path 1');
} else {
  console.log('path 2');
}
