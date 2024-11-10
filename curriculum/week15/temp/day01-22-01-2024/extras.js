// A convention .mjs for distinguishing between normal and module JS
// tools is NOT in the global scope but in the MODULE scope:
const tools = {
  toolA: "Tool A!",
  toolB: function(){
    console.log("Tool B");
  }
}
const something = function something(){
  const canIBeExported = "???";
  // export default canIBeExported; // Error
  return canIBeExported;
}
// something();
// export default tools;
// export default canIBeExported;
export default something;

// export default {
//   a: 1,
//   b: 2
// }