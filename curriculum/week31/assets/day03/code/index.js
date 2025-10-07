// @ts-check 
// ✅  

// Number is a native/built-in JS Function Constructor
// All Primitives have their own built-in Function Constructor
// - null
// - undefined
// - Symbol

// For these subgroup of the Primitives:
// - String
// - Number
// - BigInt
// - Boolean
primitive_conversion: {

  // When we call their constructor without new, we are converting any value
  // to that particular type:
  const n = Number("5"); // => (try to) Convert "5" to a Number
  const s = String(5);   // => Convert the value 5 to a String
  const b = Boolean(1);  // => Convert the value 1 to a Boolean (true/false)
  const bi = BigInt("100999333"); //=> Convert "100999333" into a BigInt
  n;
  s;
  b;
  bi;
  console.log(Number("2a")); // NaN => typeof NaN === 'number'
  console.log( Number.MAX_SAFE_INTEGER );
  console.log( Number.MIN_SAFE_INTEGER );
  console.log(Boolean(-0)); // 0/-0 is the only falsy* number value
  console.log(Boolean(0));  // 0/-0 is the only falsy* number value
  console.log(Boolean(-10));
  console.log(Boolean(10000));
  console.log(Boolean("")); // "" is the only falsy String value
  console.log(Boolean(" ")); 
  console.log(Boolean("0")); 
  console.log(Boolean("1")); 
  console.log(Boolean("-1")); 

}

// The Primitive Functions can also be called with the new keyword
primitive_objects:{

  const n = new Number("5");
  const s = new String(5);
  const b = new Boolean('0');
  // With the new keyword, you get the same conversion results (check 'primitive_conversion' section)
  console.log(n.valueOf());
  console.log(s.valueOf());
  console.log(b.valueOf());

}

sets:{
  const f = function whatever(){}
  // const f2 = new Function();
  console.log( typeof f );
  console.log( f instanceof Function );
  console.log( f.constructor.name );

  const a = [];
  // const a2 = new Array();
  console.log( typeof a );
  console.log( a instanceof Array );
  console.log( Array.isArray(a) );
  console.log( a.constructor.name );

  const set = new Set([23,1,23,"32",false,23]);
  console.log(typeof set);
  console.log(set instanceof Set);
  console.log(set.constructor.name);
  console.log(set);
  // key/value where key is a 0-based index and value is the actual

  const placedShips = new Set();
  console.log(placedShips);
  placedShips.add("Battleship");
  placedShips.add("Cruiser");
  placedShips.add("Submarine");
  placedShips.add("Destroyer");
  placedShips.add("Submarine");
  placedShips.add("Cruiser");
  console.log(placedShips.size);
  placedShips.add("Destroyer");
  placedShips.add("Carrier");
  placedShips.add("Carrier");
  placedShips.add("Carrier");
  placedShips.add("Carrier");
  console.log(placedShips.size);
  console.log(placedShips.has("Carrier"));
  console.log(placedShips.has(42));
  console.log(placedShips.delete("Carrier"));
  console.log(placedShips.size);
  console.log(placedShips);
  // console.log(placedShips.clear());
  // console.log(placedShips);

  // @@iterator => for...of is available, along with the ...spread
  for ( const ship of placedShips ){
    console.log(ship);
  }

  // Remove duplicate elements from an array
  const ships = ["Carrier","Cruiser","Cruiser","Carrier"];
  console.log(ships.length);
  console.log(ships);
  const shipsSet = new Set(ships);
  console.log(shipsSet, shipsSet.size);
  const uniqueShips = [...shipsSet]; // ...shipsSet is available due to @@iterator
  console.log(uniqueShips);

  const friendA = new Set(["songA", "songB"]);
  const friendB = new Set(["songA", "songC", "songD", "songF"]);
  const friendC = new Set(["songF", "songE", "songB"]);

  // Quokka does not support .union(), .difference()
  // friendA.union(friendB).union(friendC);
  
  // Set(); // ❌ Value of type 'SetConstructor' is not callable. Did you mean to include 'new'?ts(2348)
}

