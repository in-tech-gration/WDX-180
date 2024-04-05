const fs = require("node:fs");
/* 
  "The module must export" (module.exports =) a "single function" (function(){}) that takes "three arguments" (): the  
  directory name, the filename extension string and your callback function,  
  "in that order".
*/
/*
 The callback function must be called using the idiomatic node(err, data)  
  convention. This convention stipulates that unless there's an error, the  
  first argument passed to the callback will be null, and the second will be  
  your data. In this exercise, the data will be your filtered list of files,  
  as an Array. If you receive an error, e.g. from your call to  
  fs.readdir(), the callback must be called with the error as the first and  
  only argument.
*/

// This module should contain: "directory reading" and "filtering function"

// Create a program that prints a list of files in a given directory,  
//   filtered by the extension of the files. The first argument is the  
//   directory name and the second argument is the extension filter. Print the  
//   list of files (one file per line) to the console. You must use  
//   asynchronous I/O.  
   
//   You must write a module file (mymodule.js) to do most of the work.

function dirFilter(directoryName, extension, callback){

  // 2. Call the callback exactly once with an error or some data as described.
  fs.readdir(directoryName, (err, files) => { 
    if (err) {
      console.log("Error:",err); 
    } else { 
      console.log("\nCurrent directory filenames:"); 
      files.forEach(file => { 
        console.log(file); 
      }) 
    } 
  });

  // if ( /* Check for some error */ Math.random() > 0.5 ){
  //   callback( true, null );
  // } else {
  //   callback( null, "Some things...");
  // }
  // console.log(
  //   "dirFilter()", 
  //   directoryName, 
  //   extension, 
  //   callback,
  //   typeof callback
  // );
  // console.log("README.md");
}

// 1. Export a single function that takes exactly the arguments described (OK)
module.exports = dirFilter;

// PRACTICE: Try to export an Array and unpack that Array on the other side (require)
// module.exports = [ dirFilter, second ]

// - module === a file ending in .js
// INPUT/IMPORT => require("./mymodule.js");
// OUTPUT/EXPORT => module.exports = { ...exported_data }