console.clear();
// Question: Promise declaration?
// How to declare a Promise? Resolving but not rejecting...
// Array => Loop => Resolve entries (?)

// LABELLED STATEMENTS
// label:statement
promises_if_else_analogy:{
  break promises_if_else_analogy; // Stop execution of this block;
  // Promises (if/else analogy):
  if ( "condition_success_or_resolved" ){
    // Handle success (resolved)
  } else {
    // Handle error (rejection)
  }
  // Promises:
  fetch()
  .then( /**/ )  // if/resolved
  .catch( /**/ ) // else/rejected
  console.log("End of block");

}

simple_fetch_promise_example:{
  // fetch( URL ) (Promise-based function)
  const URL = "https://jsonplaceholder.typicode.com/post?_delay=3000&q=" + Math.random();
  // console.log( response ); // response === Promise
  function handleSuccess( data ){
    console.log("handleSuccess()", data );
    // let egg = "(egg)";
    // return undefined;
    // return egg;
  }
  function handleError( error ){
    console.log("handleError()", error );
    
  }
  function handleFinal(){
    console.log("handleFinal() after then or catch")
    document.body.innerHTML = "Got our response back";
  }
  // handleSuccess(); // egg => ? undefined
  // response.then( handleSuccess() ) // => response.then( undefined )
  const response = fetch( URL );
  document.body.innerHTML = "Loading...";

  response
    .then( handleSuccess )   // => pass a chicken! handleSuccess
    .catch( handleError )   // => pass a chicken for handling errors!
    .finally( handleFinal );
  
  
  // Handle Success: then( Function )
  // Handle Failure:

  
  // console.log("End of block");
}