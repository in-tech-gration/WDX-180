// #todo

/**
 *
 *
 */

// // before
// export const addNumber = (nums = [], addThis = 0) => {
//   return nums.map((num) => {
//     return num + addThis;
//   });
// };

// // step 1: refactor callback
// export const addNumber = (nums = [], addThis = 0) => {
//   return nums.map((num) => num + addThis);
// };

// step 2: refactor main function (if possible)
export const addNumber = (nums = [], addThis = 0) =>
  nums.map((num) => num + addThis);
