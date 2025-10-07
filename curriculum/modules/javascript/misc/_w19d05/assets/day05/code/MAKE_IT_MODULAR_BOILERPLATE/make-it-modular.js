const dirFilter = require('./mymodule.js');

function named(error,data){
  if ( error ){ // data === null
    // Handle error case
  } else {
    // error === null
    // Handle data
  }
}

dirFilter(
  "./", // <= first argument, will end up in directoryName
  ".js", // 2nd argument will end up in extension
  named // 3rd arg will end up in callback
);


// The "idiomatic" node function convention:
// node(err, data)

// Pass 1st: ERROR OBJECT, Some valid data 2nd:
// const stockPrices = getStockPrices();
// if ( !stockPricess ){
//   // Handle the "error" (unsuccessful) case
//   processPrices( "Some error", null );
// } else {
//   // Handle the "good" response
//   processPrices( null, stockPrices );
// }

// function processPrices( error, data ){
//   if ( error ){
//     // Handle the error
//     console.log("Error!", error);
//   } else {
//     // Process data and output filtered data
//     console.log("OK", data);
//   }
// }
