console.clear();
function chicken(){
  console.log("lay eggs");
  console.log("...");
  // return undefined;
  return "(egg)";
}
chicken(); // => lays an egg and then vanishes
"(egg)"; // <= This is the egg that the function will lay



function chicken1(){
  return 5 + 5;
}
// console.log( chicken1() ); // egg? 10

function chicken2(a /* = 5 */ ,b /* = 3 */){
  return a + b;
}
// console.log( chicken2(5,3) );

// (p)arameter => placeholder / (a)rgument => actual value
function chicken3( placeholder ){
  console.log(placeholder); // Unexpected value, undefined, function code
  return placeholder;
}

// chicken3(5); // => egg? => 5
function cool(){ console.log("cool()"); }

const chick = chicken3( cool ); //=> egg? => 1) "cool()" on the console, 2) undefined, 3)
// egg => cool()
// =>
chick();
let name = "Intechgration";
name;









// const value = (function(){}());