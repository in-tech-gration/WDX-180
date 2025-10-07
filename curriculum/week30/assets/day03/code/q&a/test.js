// @ts-check
const x = 10 / "2";
// const x = 10 / 2;
console.log(1, typeof x);         // "number"
console.log(2, typeof 10 / "2");  // "NaN"

/**
 * @type {number[]}
 */
const numericArr = [
  NaN, 
  +"654", 
  +new Date(), 
  5 - -"2", 
  10 / 0, 
  Number("5"), 
  new Number("5").valueOf()
]

