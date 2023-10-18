const test = require('node:test');
const assert = require('assert')

const solutionPath = "user/week04/exercises/day01/arrays/array-to-string"

try {

  require("../../../../../" + solutionPath);

} catch(e){

  console.log(e);

}

test('Array Length', () => {

  assert.equal(myArray.length, 9);

});

test('My String', () => {

  assert.equal(myString, 'Ryu (0)+Ken (1)+Chun-Li (2)+Cammy (3)+Guile (4)+Sakura (5)+Sagat (6)+Kostas (7)+Asteris (8)');

});