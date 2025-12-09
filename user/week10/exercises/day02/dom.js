/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// INSERT YOUR CODE HERE

// 1. Get the first paragraph by using document.querySelector(tagname)
const firstParagraph = document.querySelector("body>p");
console.log(firstParagraph);

// 2. Get each of the the paragraph using document.querySelector('#id')
const paragraph1 = document.querySelector("#paragraph1");
const paragraph2 = document.querySelector("#paragraph2");
const paragraph3 = document.querySelector("#paragraph3");
const paragraph4 = document.querySelector("#paragraph4");
console.log(paragraph1);
console.log(paragraph2);
console.log(paragraph3);
console.log(paragraph4);

// 3. Get all the p as nodeList using document.querySelectorAll(tagname)
const allParagraphs = document.querySelectorAll("p");
console.log(allParagraphs);

// 4. Set id and class attribute for all the paragraphs using different attribute setting methods
const paras = document.querySelectorAll("p");

for (let i = 0; i < paras.length; i++) {
	paras[i].id = `para${i + 1}`;
	paras[i].setAttribute("class", `class${i + 1}`);
}

paras.forEach((para, index) => {
	para.setAttribute("id", `para${index + 1}`);
	para.className = `class${index + 1}`;
});

console.log(paras);