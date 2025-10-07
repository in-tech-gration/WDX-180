// 28 - Using in with Type Guards
// STEP:

// In the code editor, there are two types: Cat and Fish.Underneath the types are variables for each: siameseCat and bettaFish.Finally, there’s a move() function that takes a pet as its argument.Ultimately, we want the move() function to call the correct movement method on pet.Currently our code has a TypeScript error because we’re calling.run() on pet inside the move() function. Let’s fix it.Start by writing a type guard using in inside the move() function that checks if ‘run’ exists on pet.If it does, then return the value of pet.run().
// The previous checkpoint takes care of Cat types.Now let’s handle Fish types.Write another type guard using the in operator inside the body of the move() function. This type guard should check if the property ‘swim’ exists on pet.If it does, then return pet.swim().
// Run tsc in the terminal to compile your code.There should be no errors, even though methods we called on pet do not exist on both Cat and Fish types, since TypeScript was able to type narrow.
// Run your compiled code with node index.js.You should see pitter pat as the output if you called move() with siameseCat or bubble blub if you called move() with bettaFish.


type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: "Proxie",
  run: () => "pitter pat",
};

const bettaFish = {
  name: "Neptune",
  swim: () => "bubble blub",
};

type HorseType = {
  horseName: string
  ride: ()=> string
}
class CuteCat {
  name:string;
  run: ()=> "string"
  constructor(name:string){
    this.name = name;
  }
}
class Horse {
  constructor(name:string){
    this.horseName = name;
  }
  horseName:string;
  ride: ()=> "Yihoo!!";
}
const horse = new Horse("Jim");
const persianCat = new CuteCat("Jane");

// Strictly set the entry point types: Horse | CuteCat
function feed(animal: Horse | CuteCat){
  // animal can be Horse | CuteCat
  if ( animal instanceof Horse ){
    return animal.ride();
  }
  // animal can only be CuteCat
  if ( animal instanceof CuteCat ){
    return animal.run();
  } 
  // animal CANNOT be CuteCat | Horse (the only avaiable defined types) => never
  throw new Error("Uknown type. Function requires either a horse of a cat.");
}

function move(pet: Cat | Fish) {

  // Why is TS complaining about this one?
  // if ( pet.run ){
  //   return pet.run();
  // }

  // Or this one? (Remember: TS cannot evaluate -run- JS code. It's a static type checker!)
  // const hasRun = Object.keys(pet).some(key => key === 'run');
  // if ( hasRun ){
  //   return pet.run();
  // }

  if ("run" in pet) {
    return pet.run();
  }
  if ("swim" in pet) {
    return pet.swim();
  }

  // Let's try this:
  // const hasKeySwim = Object.keys(pet).some(key => key === 'swim');

  // Object.hasOwn( Object, Property );
  Object.hasOwn(pet,"run") //😰 
  // To solve the "Property 'hasOwn' does not exist on type 'ObjectConstructor'." TS error, you can either set the target language to ES2022, or find an alternative for hasOwn. [1]

  // Property 'hasOwnProperty' does not exist on type 'never'.ts(2339)
  pet.hasOwnProperty("run");
}

console.log(move(siameseCat));

// [1] To stop TS from complaining, update tsconfig.json:
/*
"compilerOptions": {
  "target": "ES2022", <==
  "lib": ["ES2022"], <==
  
  References:
  
  SO: Property 'assign' does not exist on type 'ObjectConstructor'
  https://stackoverflow.com/questions/35959372/property-assign-does-not-exist-on-type-objectconstructor
*/