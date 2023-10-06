const test = require('node:test');
const assert = require('assert')

const solutionPath = "user/week01/exercises/day05/javascript-first-steps/simple-quiz"
global.prompt = () => {};
global.alert = () => {};

try {

  require("../../../../../" + solutionPath);

} catch(e){

  console.log(e);
  throw new Error(`
    Could not find exercise solution at the user/ folder. Please check if you have used the correct folder path (${solutionPath}) and commit message
  `);

}

test('simple quiz', () => {

  assert.equal(10, 10);

});