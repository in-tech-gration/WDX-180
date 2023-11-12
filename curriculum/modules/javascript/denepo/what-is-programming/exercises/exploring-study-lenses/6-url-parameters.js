'use strict';

/* URL Parameters

  most of the time you will be studying exercises in a separate tab
  to change lenses in a new tab you change the URL params and refresh

  try it out:
    find the URL bar at the top of this page
    find where it says "?--defaults"
    replace "?--defaults" with another lense like "?variables"
    press enter

  to combine lenses use "&":
    "?--defaults" -> "?pseudo&highlight"

  you can use your browser's navigation to go forwards and backwards
    just like a normal web page

*/

let backwards = null;
while (backwards === null) {
  backwards = prompt("enter something backwards, we'll reverse it");
  console.log(backwards);
}

let fixed = '';
for (let character of backwards) {
  fixed = character + fixed;
}
console.log(fixed);

let processed = '"' + backwards + '" -> "' + fixed + '"';
alert(processed);
