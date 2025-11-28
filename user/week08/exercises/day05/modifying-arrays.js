/* 
------------------------------------------------------------------------------------
Tutorial: Modify an array using indexes
------------------------------------------------------------------------------------
*/

// The most basic way to modify an array is to use indexes. We replace the element at the 0th index by 5.
var numbers = [1, 2, 3, 4];
numbers[0] = 5;
console.log(numbers);

/*
------------------------------------------------------------------------------------
Challenge: Given an array of positive integers above, if a number in the array of numbers is even, then multiply it by 2
------------------------------------------------------------------------------------
*/
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) {
		numbers[i] = numbers[i] * 2;
	}
}
console.log(numbers);