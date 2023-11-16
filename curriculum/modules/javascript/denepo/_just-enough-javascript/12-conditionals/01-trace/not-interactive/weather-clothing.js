'use strict';

/*

  Trace the following code by commenting and uncommenting the different values for the 'weather' variable.
  See what happens every time and different value is used
  and identify the exact line that is being executed

*/

let weather = 'spring';
// let weather = "summer";
// let weather = "winter";
// let weather = "fall";
// let weather = "holidays";

let clothingChoice = '';

if (weather === 'spring') {
  clothingChoice = 'Put on rain boots.';
} else if (weather === 'summer') {
  clothingChoice = 'Make sure to take your sunscreen.';
} else if (weather === 'fall') {
  clothingChoice = 'Wear a light jacket.';
} else if (weather === 'winter') {
  clothingChoice = 'Wear a heavy coat.';
} else {
  clothingChoice = 'Invalid weather type.';
}

console.log(clothingChoice);

// Taken from: https://www.codecademy.com/courses/introduction-to-javascript/quizzes/learn-javascript-control-flow-control-flow-quiz
