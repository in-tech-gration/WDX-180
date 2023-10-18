const test = require('node:test');
const assert = require('assert')

const solutionPath = "user/week04/exercises/day01/arrays/basic-array-practice"

try {

  require("../../../../../" + solutionPath);

} catch(e){

  console.log(e);

}

test('Array Length', () => {

  assert.equal(myArray.length, 4);

});

test('Array First Item', () => {

  assert.equal(myArray[0], 'WDX-180');

});