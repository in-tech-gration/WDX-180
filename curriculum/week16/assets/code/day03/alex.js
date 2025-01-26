// //console.log ("Alex");
// //console.log ("======================");
// const str = "Hello World";
// const str2 = str;
// const num  = 99;
// const num2  = num;

// //console.log(str,str2);
// //console.log(num,num2);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = arr.unshift(0);

// //console.log(arr, arr2);

// const obj = {
//   valuex: 1,
//   valuey: 2,
//   valuez: 3,
// }

// const obj2 = obj;
// obj2.valuex = 0;

// const test = function (obj, obj2) {
//   //console.log(obj.valuex, obj2.valuex);
// }

// const test2 = test;

// test(obj, obj2);
// test2(obj, obj2);

//console.log ("======================");

const howOldHelper = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.releaseDate;
  }

export const film = Object.freeze( {
  name: "The Matrix",
  director: "Wachowski",
  releaseDate: 1999,
  genre: ["Sci-Fi"],
  howOld: howOldhelper,
})

const film2 = Object.freeze( {
  name: "",
  director: "Wachowski 2",
  releaseDate: 2003,
  genre: ["Action", "Sci-Fi"],
})

consol.log(film.howOld());
consol.log(film2.howOld());