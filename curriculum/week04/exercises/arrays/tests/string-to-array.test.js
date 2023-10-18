const test = require('node:test');
const assert = require('assert')

const solutionPath = "user/week04/exercises/day01/arrays/string-to-array"

try {

  require("../../../../../" + solutionPath);

} catch(e){

  console.log(e);

}

test('Array Length', () => {

  assert.equal(arrayLength, 8);

});

test('Array Last Item', () => {

  assert.equal(lastItem, 'Juri');

});