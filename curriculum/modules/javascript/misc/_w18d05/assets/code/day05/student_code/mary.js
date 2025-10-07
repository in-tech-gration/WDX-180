"use strict"
 // Constructor 
function Rectangle(width,height,color){
  this.width = width;
  this.height = height;
  this.color = color;
}
Rectangle.prototype.getArea = function (){
  const area = this.width * this.height
  console.log(`area of the rectangle ${area} and color is ${this.color}`)
}


// class
class RectAngleWidthClass {
  constructor(width,height /*, color */){
    console.log("RectAngleWidthClass, constructor", width, height )
   this.color = "aqua";
   this.width= width;
   this.height= height;
  }
  getArea(){
   console.log( `area of the rectangle ${this.width * this.height} and color is ${this.color}`)
  }
}

class innerRectAngle extends RectAngleWidthClass {
  constructor(width,height){ 
    console.log("innerRectAngle, constructor", width,height);
    // RectAngleWidthClass constructor(width,height)
    super(width,height) 
    this.doubleWidth = width ** 2;
    this.doubleHeight = length ** 2
  }
  getDiameter(length){
    const diameter = length + this.doubleWidth + this.doubleHeight
    console.log(diameter)
  }
  
}

const rectangleBlue = new Rectangle(15,100,"blue")
const RectAngleRed = new RectAngleWidthClass(80,40,"red")
rectangleBlue.getArea()
RectAngleRed.getArea()

const AnInnerRectAngle = new  innerRectAngle(50,20)
 AnInnerRectAngle.getDiameter(5)