const test = require("node:test");
const { equal } = require("node:assert");
const { parseYariDynamicContent, parseMDNLinks, parseImages, parseElementTerm, parseCSSTerm } = require("./yari.parser");

test("Test #1", () => {
  const input = `{{glossary("XML")}}`;
  const output = parseYariDynamicContent(input);
  equal(output, "[XML](https://developer.mozilla.org/en-US/docs/Glossary/XML)");
});

test("Test #2", () => {
  const input = `{{glossary("HTML")}}`;
  const output = parseYariDynamicContent(input);
  equal(output, "[HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML)");
});

test("Test #3", () => {
  const input = `{{glossary("attribute", "attributes")}}`;
  const output = parseYariDynamicContent(input);
  equal(output, "[attributes](https://developer.mozilla.org/en-US/docs/Glossary/Attribute)");
});

test("Test #4", () => {
  const input = `{{glossary("void element", "void elements")}}`;
  const output = parseYariDynamicContent(input);
  equal(output, "[void elements](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)");
});

test("Test #5", () => {
  const input = `{{Glossary("tag", "tags")}}`;
  const output = parseYariDynamicContent(input);
  equal(output, "[tags](https://developer.mozilla.org/en-US/docs/Glossary/Tag)");
});

test("Test #6", () => {
  const input = `{{Glossary("browser")}}`;
  const output = parseYariDynamicContent(input);
  equal(output, "[browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser)");
});

test("Replacing MDN relative links with absolute URLs", () => {

  const input = `lorem ipsum [What will your website look like?](/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font) lorem ipsum`;
  const output = parseMDNLinks(input);
  equal(output, "lorem ipsum [What will your website look like?](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font) lorem ipsum");
  
});

test("Replacing MDN image links with local assets/ folder", ()=>{
  // parseImages()
  const input = `lorem ipsum ![Three boxes sat inside one another. From outside to in they are labelled margin, border and padding](box-model.png) lorem ipsum`;
  const output = parseImages(input);
  equal(output, "lorem ipsum ![Three boxes sat inside one another. From outside to in they are labelled margin, border and padding](assets/box-model.png) lorem ipsum");
})

test("Replacing {{htmlelement}} with links", ()=>{

  // INPUT
  const input1 = `{{htmlelement("Heading_Elements", "h1")}}`
  const input2 = `{{htmlelement("body")}}`
  const input3 = `{{HTMLElement("head")}}`
  const input4 = `{{HTMLElement("p")}}`
  const input5 = `{{htmlelement("p")}}`

  const output1 = "[`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements)"
  const output2 = "[`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body)"
  const output3 = "[`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)"
  const output4 = "[`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)"
  const output5 = "[`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)"

  equal(parseElementTerm(input1), output1);
  equal(parseElementTerm(input2), output2);
  equal(parseElementTerm(input3), output3);
  equal(parseElementTerm(input4), output4);
  equal(parseElementTerm(input5), output5);

})

test("Replacing {{cssxref}} with links", ()=>{
  const input = `lorem ipsum {{cssxref("width")}} lorem ipsum`;
  const output = "lorem ipsum [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width) lorem ipsum";
  equal(parseCSSTerm(input), output);
})