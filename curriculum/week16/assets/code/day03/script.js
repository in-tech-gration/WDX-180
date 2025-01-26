// console.log("App!");

// Object Reference vs Primitive Copy
// Primitive values: Number, Boolean, String, null, undefined
// are "passed by copy"
const str = "String";
const num = 42;
const strCopy = str + "!";
const numCopy = num + "!"
// console.log(str, strCopy);
// console.log(num, numCopy);
// Object values: Arrays, Functions, Objects, Promise, HTMLElement
// are "passed by reference". This means, we have just ONE value and 
// we are passing a reference to that ONE value.
const list = [1,2,3];
const listRef = list;

const fn = function(){}
const fnRef = fn;

// Why ref vs copy is important to know?
const data = { version: 2.2, secret: true }
Object.freeze(data);

function display( info ){
  console.log( "26", info );
  document.body.innerHTML = info.version;
  // Beware!
  // delete info.secret;
  // info.version = 2.3;
  // info.whatever = 42;
  // info.version++ 
  // return info.version + "!";
}

display( data );
console.log( "37", data );

const frozenYoghurt = Object.freeze({ tastes: "yummy!" })

//>> FILMS
console.clear();
// const kostasFilm from "./kostas.js"
import { film as kostasFilm } from "./kostas.js";
import { film as alexFilm } from "./alex.js";
import { film as annaFilm } from "./Anna.js";
import { film as maryFilm } from "./mary.js";
import { film as ozgurFilm } from "./ozgur.js";
import { film as leonFilm } from "./leon.js";

// delete leonFilm.name;
// alexFilm.releaseDate = -999;
// console.log(leonFilm);
// console.log(alexFilm);
console.log({ 
  kostasFilm,
  alexFilm,
  annaFilm,
  maryFilm,
  ozgurFilm,
  leonFilm
});