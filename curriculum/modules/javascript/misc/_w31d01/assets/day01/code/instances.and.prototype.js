class Cat {
  breed = "siamese";
  name;
  constructor(name){
    this.name = name;
  }
}
class Dog {}

const bob = new Cat("Bob");
const alice = new Cat("Alice");
alice;
bob;
console.log(alice instanceof Cat);
console.log(bob instanceof Cat);
console.log(alice instanceof Dog);
console.log(alice instanceof Promise);
console.log(alice instanceof Array);

// null => Object => Cat => instance (alice)
console.log(alice instanceof Object);
console.log(bob instanceof Object);

const obj = new Object();
console.log( obj instanceof Object );

