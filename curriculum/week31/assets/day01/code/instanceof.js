// Creating object literals
const obj = {
  a: 1,
  b: 1
}
// Creating (multiple) instances of objects (of the same structure)
class Factory {}
function BreadFactory(){}

const cookie = new Factory(); // <= Object instantiation. Always returns an instance of a Factory objectl
const bread = new BreadFactory(); // <= Object instantiation. Always returns an instance of a FFunction object
const baguette = new BreadFactory();

cookie; // => An instance object of Factory
bread; // => An instance object of BreadFactory
baguettes; // => An instance object of BreadFactory

( cookie instanceof Factory ); // true
( cookie instanceof BreadFactory ); // false
( bread instanceof BreadFactory ); // true

const list = [12,34]; // => innstantiated by the Array constructor (implicitly)
( list instanceof Array ); // true
// You can also do new Array();

/*
According to Wikipedia: Concrete manifestation of an object (class*) in software development. When a computer system creates a new context based on a pre-existing model or scheme, the model is said to have been instantiated. The encapsulated context that results from this instantiation process is referred to as an instance of the model or scheme. This general concept applies specifically across computer science in several ways.
*/