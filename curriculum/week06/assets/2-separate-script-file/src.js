/* --- for the computer --- 'use strict';

/* --- for developers --- */

// log to the console for developers to read
console.log('hello developer (console)');

/* --- for users --- */

// alert hello for the user
//  not a great UX, but easy to program
//  you'll use this for now
alert('hello user (alert)');

// write hello in the main User Interface
//  this uses the Document Object Model (DOM)
//  you'll learn about this in later modules
// this line will throw an error if you run it on it's own
//  it only works if you open the HTML file to load the script
document.getElementById('greeting').innerHTML = 'hello user (DOM)';
