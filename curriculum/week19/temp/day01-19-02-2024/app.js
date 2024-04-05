// => Importing/Input: addMethod
const { 
  add:addNumbers,
  sub 
} = require("./libs/math.js");
const { version } = require("./libs/math");
console.log("version", version);
const wholeExportsObject = require("./libs/math.js");
console.log("whole", wholeExportsObject);
console.log(wholeExportsObject.add, wholeExportsObject.sub);

function add(strA,strB){}
// console.log(add, sub);
// console.log(add.toString());
// console.log(addNumbers.toString());
// console.log(sub.toString());
console.log(addNumbers(4,4));
console.log(sub(4,4));

console.log("App running....");
const a = 42;
const b = 24;
// console.log( typeof module, module );
// console.log(module.filename);

// console.log( __filename );
// console.log( __dirname );

// module.path;
// module.exports;
// module.filename;

// if ( typeof window === "undefined" ){
//   console.log("Should be run in the Browser");
// }

// Only runs in Node:
// try {
//   global;
//   console.log("Hello World!", 5 * 2 );
// } catch(error){
//   console.log( "Sorry, only runs in Node");
// }


// console.log( window ); // ReferenceError: window is not defined
// console.log( document );
// console.log( global.setTimeout ); // ~== window.setTimeout (Browser)
// console.log( globalThis === global );
