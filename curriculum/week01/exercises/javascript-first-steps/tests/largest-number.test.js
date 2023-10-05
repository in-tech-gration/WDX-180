const test = require('node:test');
const assert = require('assert')

const solutionPath = "user/week01/exercises/day05/javascript-first-steps/largest-number"

try {

  require("../../../../../" + solutionPath);

} catch(e){

  throw new Error(`
    Could not find exercise solution at the user/ folder. Please check if you have used the correct folder path (${solutionPath}) and commit message
  `);

}

test('should find the max number', () => {

  const checkMax1 = findMaxNumber(10, 5);
  const checkMax2 = findMaxNumber(10, 15);
  const checkMax3 = findMaxNumber(100, 100);

  assert.equal(checkMax1, 10)
  assert.equal(checkMax2, 15)
  assert.equal(checkMax3, 100)

});

