//  function fetchBookByAuthor(author){
    
//     const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent( author ); 
//     // READ MORE ABOUT "encodeURIComponent": https://www.w3schools.com/jsref/jsref_encodeURIComponent.asp
    
//     return fetch(URL)
//     .then(function(res){ return res.json(); });
    
//   };

  fetchBookByAuthor("Herman Melville")
  .then( data =>{
    // TODO: Display data in the page...
	console.log(data);
	document.querySelector("body").appendChild(document.createElement("p")).innerText = data.query.pages[Object.keys(data.query.pages)[0]].extract;
  })
  .catch( error =>{
    console.log(error);
  })

  // EXERCISE 1: Display the results in the page
  // EXERCISE 2: Refactor the fetchBookByAuthor function using async/await
  // EXERCISE 3: Create a fetchBookByTitle function using async/await and test it with fetchBookByTitle("Moby Dick");
  // EXERCISE 4: Display the Book contents in the page
async function fetchBookByAuthor(author) {
    const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent( author );
	let res = await fetch(URL);
	let data = await res.json();
	return data;
}

async function fetchBookByTitle(titles) {
    const URL = "https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=" + encodeURIComponent( titles );
	let res = await fetch(URL);
	let data = await res.json();
	return data;
}

fetchBookByTitle("Moby Dick")
  .then( data =>{
	console.log(data);
	document.querySelector("body").appendChild(document.createElement("p")).innerText = data.query.pages[Object.keys(data.query.pages)[0]].extract;
  })
  .catch( error =>{
	console.log(error);
  })

