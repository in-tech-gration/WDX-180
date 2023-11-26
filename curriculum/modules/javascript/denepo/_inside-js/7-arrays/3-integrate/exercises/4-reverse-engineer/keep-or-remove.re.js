// #todo

alert(
  `enter as many inputs as you want.

When you're done entering strings press "cancel"`,
);

// -- gather user input --

// you can use `const` because the variable is not reassigned
//  the contents of the array will change
//  but the variable will still reference the same array
const strings = [];

let notDone = true;
while (notDone) {
  const input = prompt('enter the next phrase or press "cancel"');

  // -- validate the input --
  if (input === null) {
    // -- check if the user is done --
    notDone = false;
  } else if (input === '') {
    // -- check if the user input nothing --
    alert('nothing is not allowed');
  } else {
    // -- push the input --
    strings.push(input);
  }
}

// -- allow the user to filter their inputs --
const filtered = [];
for (const text of strings) {
  const keepIt = confirm(`do you want to keep "${text}"?`);
  if (keepIt) {
    filtered.push(text);
  }
}

// -- build the final message --
let message = '';
for (const text of filtered) {
  message += `- "${text}"\n`;
}

// -- alert the final message --
alert(message);

// -- log for the developer --
console.log(strings, filtered);
