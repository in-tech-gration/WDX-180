These requirements complement REQUIREMENTS.md

- We need the 0-indexing for our game dev logic
- Ship placement: (consider out-of-bounds, etc.)
- Implement speech-recognition controls
- Implement Drag-and-Drop
- Remember: touch-screens do not have hover

## TESTS

Testing `getColRowFromXY()`

```js  
console.log(`Give x: ${20} and y ${20} I expect to see A1`, getColRowFromXY(20,20));
console.log(`Give x: ${20} and y ${99} I expect to see A2`, getColRowFromXY(20,99));
console.log(`Give x: ${51} and y ${20} I expect to see B1`, getColRowFromXY(51,20));
console.log(`Give x: ${51} and y ${78} I expect to see B2`, getColRowFromXY(51,78));
```

Testing `getRowFromY()`

```js  
console.log("Given y 24 we expect to get to see 1", getRowFromY(24));
console.log("Given y 37 we expect to get to see 1", getRowFromY(37));
console.log("Given y 78 we expect to get to see 2", getRowFromY(78));
console.log("Given y 92 we expect to get to see 2", getRowFromY(92));
```

Testing `getColFromX()`:

```js  
const col = getColFromX(21); // 21->0||A, 90->1||B, 16->0||A, 79->1||B
console.log("Given 21, I should get A: ", { col });
console.log("Given 90, I should get B: ", getColFromX(90));
console.log("Given 16, I should get A: ", getColFromX(16));
console.log("Given 79, I should get B: ", getColFromX(79));
console.log("Given 101, I should get C: ", getColFromX(101));
```