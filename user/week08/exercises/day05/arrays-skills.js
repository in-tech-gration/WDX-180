/*

  Test your skills: JS Arrays

  Challenge:

  -> create an array to hold your 6 most favorite foods
  -> iterate through the array using a for-each loop. For each food, log to the console a string like: "My #1 favorite food is pizza."
  -> get the second element of the array and log it to the console.
  -> assign a new value at the third element of the array.
  -> log the total number of the elements of the array to the console.
  -> change it to log "My 1st favorite food is ..., "My 2nd favorite food is ...", "My 3rd favorite food is ...", picking the right suffix for the number based on what it is.
  -> BONUS: assign a new value to the last element of the array. The value must be an Object. 
     The object should have a property foodName with the name of the food and a property basicIngredient 
     with the name of its basic ingredient (e.g. { name: 'pizza', basicIngredient: 'cheese' }). 
     Log the following string into the console using the Object
     you created as the last element of your array: 'One of my favorite foods is X and its basic ingredient is Y'.

 */
let favoriteFoods = ['Pizza', 'Gyros', 'Candy', 'Pasta', 'Ice Cream', 'Apple pie'];

favoriteFoods.forEach((food, index) => {
	console.log(`My #${index + 1} favorite food is ${food}.`);
});
console.log(favoriteFoods[1]);

favoriteFoods[2] = 'Burgers';

console.log(favoriteFoods.length);

favoriteFoods.forEach((food, index) => {
	let suffix;
	if (index + 1 === 1) {
		suffix = 'st';
	} else if (index + 1 === 2) {
		suffix = 'nd';
	} else if (index + 1 === 3) {
		suffix = 'rd';
	} else {
		suffix = 'th';
	}
	console.log(`My ${index + 1}${suffix} favorite food is ${food}.`);
});

favoriteFoods[favoriteFoods.length - 1] = {
	foodName: 'Sushi',
	basicIngredient: 'Rice',
};

let lastFood = favoriteFoods[favoriteFoods.length - 1];
console.log(`One of my favorite foods is ${lastFood.foodName} and its basic ingredient is ${lastFood.basicIngredient}.`);