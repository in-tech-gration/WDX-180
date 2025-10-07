// TS (Before): Parameter 'obj' implicitly has an 'any' type.ts(7006)
// const calcTotalPrice = (price:number, obj) =>{

// TS (After): JS_ARGUMENT:TS_TYPE
//       = TYPE_A         or TYPE_B ... or TYPE_C (| => or in TS)
type Obj = { age: number } | null
const calcTotalPrice = (price:number, obj?:Obj) =>{
  // Consider handling NaN
  // const localObj = obj; // <= NOT A COPY of obj!!!
  // let age = localObj.age;
  if ( obj ){
    // @ts-expect-error Just learning...
    // eslint-disable-next-line
    const age = obj.age;
    // console.log(price * age);
  } else {
    // Deal with the case where the obj is null
    // - Provide a default value
    // - Bypass this value
  }
  const tax = price * 0.25; // 1.25 price+tax in one go
  const total = price + tax;
  return total;
}

// CAUTION: Sloppy code area below:
// Learning purposes only. Should be moved or removed from here:
const o = { age: 32 }
calcTotalPrice(40,o);
o.age === 42;
// 2nd argument will be undefined
// JS: No feedback. We just have to get lucky during runtime.
// TS (Before): Expected 2 arguments, but got 1.
// calcTotalPrice(40);
// TS (After):
calcTotalPrice(40, { age: 100 });

// 2nd argument will be null
const el = document.querySelector('#input');
if ( el ){ // Boolean(Element) => Boolean({Object type}) => truthy => true
  console.log(el);
  calcTotalPrice(40, { ...el, age: 99 }); // el === null
}

export default calcTotalPrice; 