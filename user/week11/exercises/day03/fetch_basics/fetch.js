/**
 * 30 Days of JavaScript: Promises and Fetch API exercise
 * 
 * Complete the challenges found below!
 *  
 * */

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/**
 * Challenges
 * 1. Read the countries API using fetch & promises and: 
 *  - print the name of country, capital, languages, population and area.
 *  - find out the 10 largest countries
 *  - count total number of languages in the world used as officials.
 * 2. Read the cats API using fetch & promises and: 
 *  - print out all the cat names in to catNames variable.
 *  - find the average weight of cat in metric unit.
 */

// INSERT YOUR CODE BELOW

fetch(catsAPI)
	.then(response => response.json())
	.then(data => {
		const catNames = [];
		for (const cat of data) {
			catNames.push(cat.name);
		}
		console.log(catNames);
		for (const cat of data) {
			const weight = cat.weight.metric.split(' - ');
			const avgWeight = (parseFloat(weight[0]) + parseFloat(weight[1])) / 2;
			console.log(`The average weight of ${cat.name} is ${avgWeight} kg`);
		}
	});