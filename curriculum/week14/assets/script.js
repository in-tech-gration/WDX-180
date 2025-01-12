// Spread Operator works on both [] and {}
const list = [ "A", "B", "C", "D" ];
// ...list === "A", "B", "C", "D"
// Primitive values get copied
const list2 = [ ...list ];
// console.log("list",list);
// console.log("list2",list2);
// console.log(list === list2, list == list2);
const list3 = [ "A" ];
const list4 = [ "B", "C", "D" ];
const list5 = [ "E" ];
const list6 = [];
const fullList = [...list3, ...list4, ...list5, ...list6]; 
// "A", "B", "C", "D", "E"
// const fullList = ["A", "B", "C", "D", "E"];
// console.log("fullList",fullList)
const anotherList = ["Z", "Y",...list5,"M", ...list4, "R", ...list3, "0"];
["Z", "Y", "E", "M", "B", "C", "D", "R", "A", "0"]
// console.log(anotherList);

// Concatenation:
const arrA = [1,2,3];
const arrB = [4,5,6];
// EXPECTED: const arr = [1,2,3,4,5,6];
// const arr = arrA.concat(arrB);
const arr = [ ...arrA, ...arrB ];
// console.log(arr);

// Use ...spread as a way to copy an Array
const initial = [ 20, 10, 30 ];
// const copyOfInitial = initial.slice();
const copyOfInitial = [ ...initial ];
copyOfInitial.push(40,50);
// console.log("copyOfInitial", copyOfInitial);
// console.log("initial", initial);
const sortedInitial = [...initial].sort();
// console.log(sortedInitial, initial);
// const x = ...initial; // SyntaxError
// console.log(...initial); === console.log(20,10,30);


const listA = ["A" , "B" , "C"];
const listB = [];
for ( const item of listA ){
  listB.push(item);
}
listA.push("This is A");
listB.unshift("This is B");
// console.log(listA)
// console.log(listB)


// Spread Operator: Objects
const { log, clear } = console;
const obj = { a: 1, b: 2, c: 3 }
const copyOfObj = { ...obj }
log(copyOfObj === obj);
clear();
// Merged Objects:
// const log = console.log;
// const clear = console.clear;
const objA = { a: 1, a2: 11 }
const objB = { b: 2 }
const objAandB = { ...objB, ...objA }
log(objAandB);
// Overriding properties:
clear();
const user1 = {
 name: 'leon',
 surename: 'Kountouras',
 email: 'koundouras@gmail.com'
}

const user2 = {
 name: 'George',
 surename: 'Kountouras',
 email: 'georgekoundouras@gmail.com'
}
const users = { user1: {...user2}, user2:{...user1} }
console.log(users);

// Overriding Properties (on purpose);
clear();
const template = { color: "red", height: "100px" }
const box1 = { ...template }
const box2 = { ...template, color: "black" }
const box3 = { ...template, height: "200px" }
const box4 = { color: "black", ...template }
const box5 = { color: "yellow", color: "blue" }
// log( box1, box2, box3 );
log( box4, box5 );