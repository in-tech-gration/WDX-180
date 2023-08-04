const test = require("node:test");
const { equal } = require("node:assert");
const parseYariDynamicContent = require("./yari.parser");

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
