const test = require('node:test');
const assert = require('assert')

const solutionPath = "user/week04/exercises/day01/objects/object-basics-1"

try {

  require("../../../../../" + solutionPath);

} catch(e){

  console.log(e);

}

test('Cat Name', () => {

  assert.equal(catName, 'Bertie');

});

test('Cat Color', () => {

  assert.equal(cat,color, 'black');

});