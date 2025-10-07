// Consider specific number categories, e.g. prohibit negative numbers?
// Cases: Handle floating points
// Cases: values larger than Number.MAX_SAFE_INTEGER
// Cases: Handle NaN 
// Cases: null, undefined

/**
 * @param {number} a 
 * @param {number} b
 * @returns {number}
 */
export function add(a,b){
  // Convert a and b to numbers
  const numA = Number(a);
  const numB = Number(b);
  if ( Number.isNaN(numA) || Number.isNaN(numB) ){
    throw new Error("Input results in NaN. Check your inputs.")
  }
  return numA + numB;
}
export function sub(a,b){
  return a - b;
}
// TASK: Implement mul/div/mathPow/etc.
