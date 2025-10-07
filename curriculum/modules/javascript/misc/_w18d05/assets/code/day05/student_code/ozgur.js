// function Phone(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Phone.prototype.updatep = function(newpricep) {
//   this.price = newpricep;
//   console.log(newpricep)
// }

// const iphone15 = new Phone("Apple", "iphone12", "1200")
// console.log(Phone.price)
// iphone15.updatep("1500")
// console.log("iphone15", iphone15.brand, iphone15.model, iphone15.price)


class PhoneA {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  update(newprice) {
    this.price = newprice;
    console.log(newprice)
  }
}

// const iphone15A = new PhoneA("Apple", "iphone12", "1200")
// console.log(">>", iphone15A.price)
// iphone15A.update("1400")
// console.log(">>", iphone15A.price)
// // console.log(iphone15A.update())
// // iphone15A.update(45)
// // iphone15A.price === 45


class Xioami extends PhoneA {
  constructor({ brand, model, price, ram }) {
    super(brand, model, price)
    this.ram = ram
  }
  color(color) {
    this.color = color
    console.log(color)
  }
}
const newphone = { brand: "xioami", model: "note12", price: "1000$", ram: "32gb" }

const xiaomi12 = new Xioami(newphone)
// new Xioami({ ram: "", model: ""})
xiaomi12.color("orange")
console.log("firstPrice:", xiaomi12.price)
xiaomi12.update("1200$")
console.log("currentPrice:", xiaomi12.price)
console.log(xiaomi12)
