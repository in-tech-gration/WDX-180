// #todo

'use strict';

/* Strict Mode Errors (extra)

  some mistakes only throw errors in strict mode
  this is so that programs written before strict mode will still work
  it's important to be aware of this, even though you will almost always be in strict mode
    - JS Tutor will always run your code in strict mode
    - study-lenses will always run your code in strict mode
    - you should always 'use strict' in your own projects
  the extra errors that strict mode enforce are also things you should avoid doing anyway
  but every now and then you'll need to work with code that isn't in strict mode, so it's good to know

  here are two ways to figure out if something is a strict-mode-only error:
    1. ask JavaScript, run it twice! once in strict mode, and once without
    2. ask google

  if you want to use the first option and run the code in your console
  you will need to do something special: https://javascript.info/strict-mode#browser-console
  no need to understand exactly how it works, you can just use this pattern:

*/

// the code to investigate
undefined = 4;

// to see how the code behaves in normal mode, paste it in here & run in console
(() => {
  undefined = 4;
})();

// to see how the code behaves in strict mode, paste it in here & run in console
(() => {
  'use strict';

  undefined = 4;
})();
