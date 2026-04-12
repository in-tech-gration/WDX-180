// @ts-check

// import { add, sub } from "./UTILS"; // <= This will not work with node!?
import { add, sub } from "./UTILS.js";

//      If [1:this assertion] fails, we should see [2:this part]
const output = add(40,2);
const expected = 42;
console.assert( output === expected, `40 + 2 should equal ${expected}. Instead saw ${output}` );

// Test non-numbers
// @ts-expect-error Testing
const output3 = add("40", 2);
const expected3 = 42;
console.assert( output3 === expected3, `40 + 2 should equal ${expected3}. Instead saw ${output3}` );

// Test input that results in NaN should throw
try {
  // @ts-expect-error Testing
  add("40", "A");
  // Incorrect behaviour:
  console.log("Test failed. add('40','A') should throw.");
} catch(e){
  // Correct behaviour:
  // console.log(`add("40","A") throws an error`)
}

// Test sub()
const output2 = sub(40,2);
const expected2 = 38;
console.assert( output2 === expected2, `40 - 2 should equal ${expected2}. Instead saw ${output2}` );


// console.log("✅ Success! All tests pass!");
// Full testing coverage: 100%
// All my functions are being tested
