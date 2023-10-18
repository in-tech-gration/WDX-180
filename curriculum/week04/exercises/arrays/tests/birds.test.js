const test = require('node:test');
const assert = require('assert')

const solutionPath = "user/week04/exercises/day01/arrays/birds"

try {

  require("../../../../../" + solutionPath);

} catch(e){

  console.log(e);

}

test('eBirds', () => {

  assert.equal(eBirds.toString(), 'Emus,Egrets');

});

test('eBirds Length', () => {

  assert.equal(eBirds.length, 2);

});