const test = require("node:test");
const { equal } = require("node:assert");
const { parseYariDynamicContent, parseMDNLinks, parseImages } = require("./yari.parser");

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