// function Samsung(model, ram, price){
//   this.model = model;
//   this.ram = ram;
//   this.price = price;
// }

// Samsung.prototype.newModel = function(){
//   console.log ("New model of Samsung");
// }

// const SamsungGalaxy = new Samsung("A34", "6GB", "274");
// console.log ("Samsung Galaxy:", SamsungGalaxy.model, SamsungGalaxy.ram, SamsungGalaxy.price);

class SamsungPhone{
  constructor(model, ram, price){ // 
    this.model = model; 
    this.ram = ram;
    this.price = price;
  }
  newModelofSamsung(){
    console.log("New model of Samsung");
  }
}

class NewSamsungPhone extends SamsungPhone {
  constructor(model,ram,price){
    super(model,ram,price); 
  }
  sale(discount){
   const discountedPrice = this.newPrice(discount);
    console.log (`Discounted price: ${discountedPrice}`)
  }
  newPrice(discount) {
  const discountCalculation = (discount / 100) * this.price;
  return this.price - discountCalculation;
}
}
  const newSamsung = new NewSamsungPhone("Galaxy Z", "12GB", 2197);
console.log("New Samsung:", newSamsung.model, newSamsung.ram, newSamsung.price);

newSamsung.newModelofSamsung();
newSamsung.sale(30);


// const SamsungGalaxy1 = new SamsungPhone("S23", "12GB", "1187");
// console.log ("Samsung Galaxy1:", SamsungGalaxy1.model, SamsungGalaxy1.ram, SamsungGalaxy1.price)

// SamsungGalaxy.newModel()
// SamsungGalaxy1.newModelofSamsung();


