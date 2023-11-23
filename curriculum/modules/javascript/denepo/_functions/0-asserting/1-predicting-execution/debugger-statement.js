'use strict';

/* the debugger statement

  placing the word `debugger;` in your code will pause the code right there

  this is helpful when stepping through code in the devtools
  using `debugger;` you can skip ahead and pause on a specific line

  here's a nice intro: https://www.youtube.com/watch?v=fs8PwQAx_Tw

  there are no exercises, just practice in the coming chapters!

  Hint: try using the `run` and `debug` buttons, what's the difference?

*/

const firstName = 'Brobes';

const lastName = 'Pierre';

// the debugger statement will pause your code like a breakpoint, but ...
//  they are saved in your source code so it's always there for later
//  you can't turn them on an off while the program is running
debugger;
const fullName = firstName + ' ' + lastName;

console.assert(fullName === 'Brobes Pierre');
