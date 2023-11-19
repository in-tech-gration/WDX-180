import md from "./test.md";
import "./app";

console.log(1234);

console.log(md);
document.body.innerHTML = md;

const list = [1,2,3,4];
list.map( n => console.log(n) );

