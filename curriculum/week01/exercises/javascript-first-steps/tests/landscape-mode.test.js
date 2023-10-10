const test = require('node:test');
const assert = require('assert')

const solutionPath = "user/week01/exercises/day05/javascript-first-steps/landscape-mode"

try {

  require("../../../../../" + solutionPath);

} catch(e){

  console.log(e);
  throw new Error(`
    Could not find exercise solution at the user/ folder. Please check if you have used the correct folder path (${solutionPath}) and commit message
  `);

}

test('should check if landscape mode', () => {

  const checkWidthHeight1 = isLandscape(800, 600);
  const checkWidthHeight2 = isLandscape(600, 800);
  const checkWidthHeight3 = isLandscape(600, 600);
  const checkWidthHeight4 = isLandscape(1024, 600);

  assert.equal(checkWidthHeight1, true);
  assert.equal(checkWidthHeight2, false);
  assert.equal(checkWidthHeight3, false);
  assert.equal(checkWidthHeight4, true);
  
});
