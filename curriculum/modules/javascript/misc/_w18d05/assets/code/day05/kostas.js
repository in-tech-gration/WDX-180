// Function Constructor:
function Laptop(RAM){
  this.memory = RAM;
  this.screen = "LED";
}
Laptop.prototype.shutDown = function(){
  console.log("Laptop shutting down");
}

// Function Constructor using the class syntax:
class LaptopC {
  constructor(RAM){
    this.memory = RAM;
    this.screen = "LED";
  }
  shutdown(){
    console.log("Shutting down...");
  }
}

const laptop1 = new Laptop(4);
const laptop2 = new Laptop(16);
laptop1.shutDown();
laptop2.shutDown();