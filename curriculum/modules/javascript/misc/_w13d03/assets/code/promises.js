console.clear();

// Promise-based function: a function that returns a Promise object
function lucky(yesOrNo){
  function creator(resolve,reject){
    if ( yesOrNo === "yes" ){
      return resolve("You are lucky!");
    }
    return reject("Better luck next time!");
  }
  return new Promise(creator);
}

// 1) Call this function and supply an argument:
// "yes" or "no"
// 2.1) Take care of the success and... then()
// 2.2) ...failed response, catch()

const newValue = lucky("no") // <= async: out of time
  .catch(error=>{  
    console.log("no ", error);
  });

const newValue1 = lucky("yes") // <= async: forget clock/time order
  .then(success=>{
    console.log("yes ", success);
  });
console.log('newvalue:fromLine19 ' ,newValue);

lucky("yes")
.then( s => console.log("s", s) )
.catch( e => console.log("e", e))
.finally(() => console.log("finish"));
