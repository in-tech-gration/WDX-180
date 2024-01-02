//==============================//
// DO NOT ALTER THIS CODE BELOW
// MOVE TO THE EXERCISES DIRECTLY
let exercises = {
  a: false,
  b: false,
  c: false,
};

Object.keys(exercises).map((num) => {
  let p = document.createElement("p");
  p.classList.add("exercise", "exercise_" + num);
  p.textContent = "Exercise " + num.toUpperCase();
  document.querySelector(".exercises").appendChild(p);
});

function check(expression, exercise) {
  if (expression) {
    document.querySelector(`.exercise_${exercise}`).classList.add("success");
    exercises[exercise] = true;
  }

  let total = Object.values(exercises).some((v) => !v);

  if (!total) {
    confettis();
    document.body.style.backgroundColor = "#46ac46";
  }
}

// Compare 2 Arrays
function isIdentical(arr1, arr2) {
  // Is at least one element not the same as the
  // element of the other Array?
  let result = arr1.some((el, idx) => {
    return el !== arr2[idx];
  });
  return !result;
}
//==============================//
// EXERCISE A: We want to 'spread' the `middle` Array elements
// in the middle of `arr` Array:
let final = [1, 2, 3, 4, 5, 6]; // <= This is what we want
let middle = [3, 4];
let arr = [1, 2, middle, 5, 6]; // <= We get: [1, 2, [3, 4], 5, 6] :(

// We want: [1, 2, 3, 4, 5, 6]
// arr = CODE HERE...
check(isIdentical(arr, final), "a");

//==============================//
// EXERCISE B: Clone Array `abc` using the spread operator
// and reverse the order of the elements making sure that the elements
// of Array `abc` remain intact:
let finalB = ["c", "b", "a"]; // <= This is what we want `clone` to be.

let abc = ["a", "b", "c"];
let clone = abc; // <= REPLACE THIS LINE
clone.reverse(); // Now `abc` is [ 'c', 'b', 'a' ]. Not what we want!

check(isIdentical(clone, finalB) && !isIdentical(clone, abc), "b");

//==============================//
// EXERCISE C: Math.max takes a number of comma separated arguments
// and returns the biggest number. Use the spread syntax to get the
// biggest number found in the values Array:
let values = [2, 4, 8, 6, 0];
// CHANGE THE FOLLOWING LINE:
let max = Math.max(1, 2, 3, 4); // <= max is 4. It should be 8.

check(max === 8, "c");
