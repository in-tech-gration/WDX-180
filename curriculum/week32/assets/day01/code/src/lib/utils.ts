// Check for TS custom types for NaN
const calcTotalPrice = (price:number) =>{

  if ( typeof price !== "number" ){
    throw new Error(`calcTotalPrice() expects a number`);
  }

  // Be careful: DON'T DO: price === NaN
  if ( Number.isNaN(price) ){
    throw new Error(`calcTotalPrice() expects a number and not NaN. Check the argument passed to calcTotalPrice(price)`);
  }

  const tax = price * 0.25; // 1.25 price+tax in one go
  const total = price + tax;
  return total;

}

export default calcTotalPrice; 