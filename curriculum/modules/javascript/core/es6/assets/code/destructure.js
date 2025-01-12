// 1) Object Destructuring
const user = {
  address: "Main Street 42",
  name: "John Doe",
  email: "john@mail.com",
  hobbies: ["film","books"],
  getDetails: function(){
    console.log("Details");
  }
}
// const email   = user.email;
// const address = user.address;
// const name    = user.name;
// var/let/const {} => { Object } destructuring syntax
const { email } = user;
// ==== const email = user.email;
const { name } = user;
// === const name = user.name
document.write(name + " " + email);
let { address, hobbies, getDetails } = user;
document.write( " " + hobbies[0] );
// getDetails();
// let address = user.address;
// let hobbies = user.hobbies;
// let getDetails = user.getDetails;

// Assigning to new variable names:
// const { loggedInUserName, loggedInUserEmail } = user;
const { name:loggedInUserName, email:loggedInUserEmail } = user;
console.log("loggedInUserName",loggedInUserName);
// const loggedInUserName = user.loggedInUserName;
// const loggedInUserEmail = user.loggedInUserEmail;
// OBJECT RULE: When accessing a property that does not exist
// we get back undefined.



// 2) Array Destructuring
const userData = [ 
  "Jane doe", 
  "jane@mail.com", 
  function info(){ console.log("No name!") }, 
  { hobby: "skiing" }
]; // userData.length === 4
const uName = userData[0];
const uEmail = userData[1];
const uHobby = userData[3];
document.write("<br>" + uName);
//        0       1       2      3
const [ xName, xEmail, xInfo, xHobby ] = userData;
document.write("<br>" + xName + " " + xEmail );
// xInfo();

//              0         2
const list = [ "A", "B", "C" ];
//      0  1  2
const [ A , , C ] = list; 
document.write("<br>" + A + " " + C);

// Pseudo Code:

/* Experiment
const list2 = [ 1, "A", "d", 6 ];
// if value of array is an integer skip
// else destructure and set in destructured variable
for ( const val of list2 ){
  if ( Number.isInteger(val) ){ // => () => false/true
    continue;
  } else {
    // 2nd iteration
    var [ , A,, ] = list2;
    // 3rd iteration
    var [ ,,d, ] = list2;
  }
}
*/
/*
const list2 = [ 1, "A", "d", 6 ];
const nonIntegers = FILTERING list2
nonIntegers = [ "A", "d" ];
const [ A, d ] = nonIntegers;
*/
let X = "Y";
let Y = "X";
// X === "X", Y === "Y"
[ X, Y ] = [ Y, X ];
document.write("<br>X: " + X + " Y: " + Y );

/* PRACTICE TIME: 
let myArray = [1, 2];
myArray[first, second ] = myArray[second, first ];
let first = myArray[0];
let second = myArray[1];
[2,1] // === myArray
*/