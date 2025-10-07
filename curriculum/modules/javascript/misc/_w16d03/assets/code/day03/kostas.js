"use strict";
// @ts-check
// console.log("kostas!");
const person = {
  name: "",
  age: 0
}

const john = person;
john.name = "john";
john.age = 42;

const defaultOptions = {
  color: "black",
  bg: "white"
}

const appOptions = { ...defaultOptions }
appOptions.color = "white";
appOptions.bg = "black";

function howOldHelper(){
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return currentYear - this.releaseDate;
}

export const film = {
  name: "Poor Things",
  director: "Yorgos Lanthimos",
  releaseDate: 2024,
  genre: ["Drama"],
  // Once we are inside a method (an object property that has a function as a value) AND the method is declared using the 'function' keyword, (rule #2) then 'this' refers to the object containing the method.
  howOld: howOldHelper
}
const th = {
  name: "The Holdovers",
  director: "Alexander Payne",
  releaseDate: 1985,
  genre: ["Comedy","Drama"],
  howOld: howOldHelper
}
console.log( film.howOld() )
console.log( th.howOld() )

// const films = [ pt, th ]
// Film Function Creator:
function Film(name,director,releaseData,genre){
  // Return a frozen version?
  return {
    name,
    director,
    releaseDate,
    genre,
    howOld: howOldHelper
  }
}
const tm = Film("The Matrix", "Wachowski", 1999, ["Sci-fi"]);
console.log(tm.name, tm.howOld());