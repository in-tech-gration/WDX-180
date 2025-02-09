console.clear();
// Primitives
const str = "String";
const num = 42;
const bool = false;
const undef = undefined;
const nill = null;
const big = BigInt(42);
// "All primitive types, except null and undefined, have their corresponding object wrapper types, which provide useful methods for working with the primitive values." ~ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#primitive_values
const strWrapped = new String("String");
console.log( typeof strWrapped, strWrapped );
const numWrapped = new Number(42);
console.log( typeof numWrapped, numWrapped );
const boolWrapped = new Boolean(false);
console.log( typeof boolWrapped, boolWrapped );
// Wrapper => Primitive? *Wrapped.valueOf();
console.log( strWrapped.valueOf(), numWrapped.valueOf(), boolWrapped.valueOf() );
// String vs new String, Boolean vs new Boolean, Number vs new Number

// Objects
const arr = new Array(10,20,30);
const arrLit = [10,20,30];
const obj = new Object("String"); // false, 42, "String" // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/Object
console.log(obj, typeof obj, obj instanceof String );
const o = new Object({ a: 1 });
const objLit = { a: 1 }
const fn = new Function();
const fnLit = function(){}
// console.log(typeof fn, typeof fnLit);
const p = new Promise(function(){});

function MyConstructor(){}
const myObj = new MyConstructor();

// Prototype:
console.log(Array.prototype);
console.log(Object.prototype);
console.dir(Function.prototype); // name, length, call, bind, apply, arguments
console.log(Promise.prototype);

// Contructor, Instance, __proto__ => .constructor.prototype
console.log(o.constructor);
console.log(fn.constructor);
console.log(arr.constructor);
console.log(p.constructor);
console.log(myObj.constructor);

console.log(o instanceof Object);
console.log(fn instanceof Function);
console.log(arr instanceof Array);
console.log(p instanceof Promise);
console.log(myObj instanceof MyConstructor);

console.log(o.__proto__ === Object.prototype);
console.log(o.__proto__ === o.constructor.prototype);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__ === arr.constructor.prototype);
console.log(fn.__proto__ === Function.prototype);
console.log(fn.__proto__ === fn.constructor.prototype);

Function.ownProp = 42;
Array.ownProp = 42;
MyConstructor.ownProp = 42;

console.log( fn.ownProp );
console.log( arr.ownProp );
console.log( myObj.ownProp );

function inGlobal(){
  console.log(this);
}
const notInGlobal = inGlobal.bind({ lucky: 42 });

inGlobal();
notInGlobal();
inGlobal.call({ omg: true });

o.method = function(){
  console.log(this);
}.bind({ lucky: 42 });

o.method();
o.method.call({ omg: false });

document.body.addEventListener("click", function(){
  console.log(this)
}.bind({ lucky: 42 }))

// Classes
function Car(){
  this.wheels = 4;
}
Car.prototype.vroom = function(){
  console.log( this.wheels + ' wheels go vroom!');
}
Car.model = "Ford";

const car = new Car();
console.log( car );
car.vroom();
console.log( car.model );
console.log( Car.model );

class Car_ {
  static model = "Ford";
  constructor(){
    this.wheels = 4;
  }
  vroom(){
    console.log( this.wheels + ' wheels go vroom!');
  }
}
// Car_.model = "Ford";
console.log( typeof Car_ );
const c = new Car_();
console.log(c);
c.vroom();
console.log(c.model);
console.log(Car_.model);