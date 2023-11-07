/* 
------------------------------------------------------------------------------------
Tutorial: Indexing Arrays
------------------------------------------------------------------------------------
*/

// Arrays are indexed with integer values beginning with 0.
// Lets use the example below

let pringles = ['classic', 'pizza', 'ranch'];

// The index value of each element inside the array is the following:

// 'classic'  |  'pizza'  |  'ranch'
//     0            1           2

// And we can verify this by printing on console the elements of the array 
// by it's position or index value

console.log(0); // 'classic'
console.log(1); // 'pizza'
console.log(2); // 'ranch'

// We can find out how many items are in an array with the length property.

console.log(pringles.length);

// output
// 3

// Although the indices of pringles consists of 0 to 2, the length property will output the actual amount of items in the array, starting with 1.

// Counting starts with 0 in indices, which goes against our natural intuition to start counting at 1, 
// so special care must be taken to remember this until it becomes natural. 

//If we want to find out the index number of a specific item in an array, such as pizza, we can use the indexOf() method.

console.log(pringles.indexOf('pizza'));

// output
// 1

// If an index number is not found, such as for a value that does not exist, the console will return -1.

console.log(pringles.indexOf('blue cheese'));

// output
// -1
            
/*
------------------------------------------------------------------------------------
Challenge: 1. Consider the following array: myColor = ['Red', 'Green', 'White', 'Black'];
              What is the length of the array?
            2. With the previous array, what is the index value/position of the 'Yellow' color.
------------------------------------------------------------------------------------
*/