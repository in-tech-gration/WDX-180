'use strict';

/* Boolean Flag Variable

  Declare a variable with a boolean value and check it's value in the loop head
  You can update the flag variable inside your while loop based on the user's input

*/



let flag = false;

while (!flag) {
  flag = confirm('you can only leave this loop if you confirm');
}

alert('you confirmed');

// begin distractors

while (flag) { // distractor
flag = prompt('you can only leave this loop if you confirm'); // distractor
flag = alert('you can only leave this loop if you confirm'); // distractor


// #todo
