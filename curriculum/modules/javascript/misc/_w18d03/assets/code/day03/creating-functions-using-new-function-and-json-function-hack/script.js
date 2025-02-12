console.clear();
const sum = new Function("a","b","return a+b");
// console.log(sum, typeof sum);

// Arabic => English => Arabic
// JS Values => JSON String => JS Values
// value => JSON.stringify(value) => json => JSON.parse(json)

// Create a plain object (POJO: Plain Old JS Object)
const objWithFunction = {
  fn: [ "a", "b", "alert( a * b)" ]
}
const json = JSON.stringify(objWithFunction);
console.log("json",json);
//=> "{'fn':['a','b','alert( a * b)']}"
const data = JSON.parse(json);
console.log("data",data);
const myFn = new Function(data.fn[0], data.fn[1], data.fn[2]);
console.log( myFn, typeof myFn );
// myFn(2,10)