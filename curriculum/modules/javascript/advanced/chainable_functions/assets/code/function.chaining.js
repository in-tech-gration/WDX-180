const text = "  in|tech  "; 

// Our String X-ray machine!
function debug(){
  console.log(this);
  return this;
}
// Just for educational purposes only/strictly!!!
String.prototype.debug = debug;
// NEVER mess with native object .prototype! Array.prototype, String.prototype, Number.prototype

const output = text
  .toUpperCase()
  .debug() // Should show me the output of the transformation:
  .trimStart()
  .debug()
  .trimEnd()
  .debug()
  .replace("|",":");

console.log(output);