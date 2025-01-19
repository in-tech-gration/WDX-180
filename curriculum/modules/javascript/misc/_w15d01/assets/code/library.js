const moduleA = "Module A";
const privateA = "Secret of A";
// export (without default) at called "named exports"
// One or more named exports
export const publicFn = function(){
  console.log("publicFn()");
}
export const add = function(a,b){
  return a + b;
}
export const sub = function(a,b){
  return a - b;
}
export const mul = function(a,b){
  return a * b;
}
const getVersion = 2.0;
const whatever = "whatever";
// Only one default export per module
export default [getVersion,whatever];
// export default 2.3; // Error
// console.log({ moduleA });