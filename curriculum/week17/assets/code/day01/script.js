"use strict";
console.clear();
console.log("App");

questions: {

  break questions;
  const student1 = {
    name: "Leon",
    age: 44
  }

  const student = {
    // How does 'this' work?
    getName: function() {
      // console.log("getName:", this);
      return this.name;
    },
    getAge: function() {
      // console.log("getAge:", this);
      return this.age;
    }
  }
  const name = student.getName();
  // console.log({name: name})
  const age = student.getAge();
  // console.log({age})

  // How does the constructor works?
  function studentConstructor(_name, _age) {
    // console.log("this",this, window);
    // In this context, forget about this
    function helper() {
      console.log("helper()", this);
    }
    // helper(); // Avoid this double usage 
    return {
      helperFn: helper,
      name: _name,
      age: _age,
      // What is spreading doing here?
      ...student
    };
  }
  const student2 = studentConstructor("Leon", 44);
  // student2.helperFn();
  const student2name = student2.getName();
  const student2age = student2.getAge();
  console.log(
    "name: " + student2name, "age: " + student2age
  );
  const s3 = studentConstructor("Joe", 55);
  s3.getName();
  s3.getAge();
}

objConstructorExample: {

  // Madball1966
  // CaptainHenry2
  // CptAugusta
  const PlayerStaff = {
    addThingToBag: function(thing) {
      // Check the length of the bag and display something
      this.bagOfThings.push(thing);
    },
    removeLife: function() {
      this.lives = this.lives - 1;
    },
  }
  function CreatePlayer(name) {
    return {
      name,
      bagOfThings: [],
      lives: 5,
      ...PlayerStaff,
      // Yes, we can do this:
      // ...p4,
      // ...p5,
      // ...{a:2, b:1}
    }
  }
  // Practice: find out what this will do and how
  // it will behave!
  const p4 = {
    name: "Some Character",
    lives: 5,
    bagOfThings: [],
    ...PlayerStaff
  }

  const p1 = CreatePlayer("Madball1966");
  const p2 = CreatePlayer("CaptainHenry2");
  const p3 = CreatePlayer("CptAugusta");

  p2.removeLife();
  p2.removeLife();

  console.log(p1.lives); // 5 Why? Because of the Constructor
  console.log(p2.lives); // 3 Why? Because of removeLife() x 2
  console.log(p1.bagOfThings);
  p1.addThingToBag("potion");
  console.log(p1.bagOfThings);
  console.log(p2.bagOfThings);
  p1.removeLife();
  console.log(p1.lives);
  console.log(p2.lives);

  console.log( p1 === p2 ); // false?
  console.log( p1.removeLife === p2.removeLife );
  console.log( p1.bagOfThings === p2.bagOfThings );

}