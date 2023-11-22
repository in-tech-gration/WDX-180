'use strict';

/* Running Tests

  For the first time, you will be using code that relies on LIBRARIES
  libraries are code that other people wrote, and you use
    you are not expected to read the source code for these libraries
    or to understand how they are implemented

  libraries will make certain parts of your life much easier
  but other parts will become more complicated

  all exercises that have tests (file.test.js) in this repository have 3 global dependencies:
  - describe
  - it
  - expect
  these files WILL NOT RUN IN JS TUTOR

  to run tested files you will need to either:
  - use `study-lenses` + your browser's debugger
  - use terminal with the command `npm run test -- ./path/to/file.test.js`


*/

// go ahead and try running these lines of code with and without tests enabled:

describe('boolean values', () => {
  it('true is true', () => {
    expect(true).toEqual(true);
  });
  it('false is false', () => {
    expect(false).toEqual(false);
  });
});
