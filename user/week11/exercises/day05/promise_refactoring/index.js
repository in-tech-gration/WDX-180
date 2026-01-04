const users = "https://jsonplaceholder.typicode.com/users";
    
  function init(){

    return fetch( users )               // <= Fetch URL
    .then( ( result )=> result.json() ) // <= Convert result to JSON object
    .then( ( result )=>{                // <= Work with JSON object

      console.log( "1) Result using Promises:", result[0].name, result[0].email );
      
    }).catch(console.log);

  }

  init();

  /* EXERCISE: REFACTOR THE init FUNCTION TO USE async/await: */
  async function asyncInit(){

	  try {
		  //>> 1) The `result` variable should `await` for the fetch()
		  let result = await fetch( users );  
	
		  //>> 2) The `result` variable should now `await` for the result of the json() 
		  //>> method of previously executed `result`
		  result = await result.json();
	
		  //>> 3) You should see the same result as the first console.log from `init()`
		  console.log( "2) Result using async/await:", result[0].name, result[0].email );

	  } catch (e) {
		  console.log(e);
	  }
    
      //>> 4) EXTRA: Enclose the `await` commands in a try { } catch(e) { }
      //>> for additional error handling. To check whether you are handling the error
      //>> correctly, change the URL to: "https://jsonplaceholder.typicooode.com/users"
      //>> or "https://jsonplaceholder.typicode.com" and see what types of errors you get.

  }

  asyncInit();