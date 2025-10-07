/* 
------------------------------------------------------------------------------------
Tutorial: JavaScript Numbers
------------------------------------------------------------------------------------
*/

// JavaScript has only one type of number. Numbers can be written with or without decimals. Negative numbers are declared by placing a minus (-) character before the number.

// DECLARATION:-
let x = 3.14; // A number with decimals
let y = 3; // A number without decimals
let z = -4; //A negative number


// Extra large or extra small numbers can be written with scientific (exponent) notation

// JavaScript Numbers are Always 64-bit Floating Point.
//JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.

//PRECISION:-
//Integers are accurate up to 15 digits.Example:
let n = 999999999999999; // n will be 999999999999999
let m = 9999999999999999; // m will be 10000000000000000

//The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate.Example:
let p = 0.2 + 0.1; // p will be 0.30000000000000004

//NaN - Not a Number:-
// NaN is a JavaScript reserved word indicating that a number is not a legal number.
//Trying to do arithmetic with a non-numeric string will result in NaN.Example:
let d = 100 - "Apple"; // d will be NaN (Not a Number)

//However, if the string contains a numeric value , the result will be a number:
let c = 100 / "10"; // c will be 10

//Number() Function:-
//The Number() function is used to convert various data types to numbers. For example,
const a = '23'; // string
const b = true; // boolean

//converting to number
const result1 = Number(a);
const result2 = Number(b);

console.log(result1); // 23
console.log(result2); // 1

/*
------------------------------------------------------------------------------------
Challenge:-
// 1. Check the value of "x = 2/0" using the 'typeof' operator and logging the value to the console.
------------------------------------------------------------------------------------
*/