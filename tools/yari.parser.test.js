const test = require("node:test");
const { equal } = require("node:assert");

const { parseEmbedGHLiveSample, parseHTTPHeader, parseHTTPStatus, parseYariDynamicContent, parseMDNLinks, parseImages, parseElementTerm, parseCSSTerm, replaceHTMLGlossaryLinks, replaceDOMXrefLinks, parseExternalLinks } = require("./yari.parser");

test('Parsing {{glossary("XML")}}', () => {
  const input = `{{glossary("XML")}}`;
  const output = parseYariDynamicContent(input);
  equal(output, "[XML](https://developer.mozilla.org/en-US/docs/Glossary/XML){:target=\"_blank\"}");
});

test('Parsing {{glossary("term")}}', () => {
  
  const input = `{{glossary("HTML")}}`;
  const output = parseYariDynamicContent(input);
  equal(output, "[HTML](https://developer.mozilla.org/en-US/docs/Glossary/HTML){:target=\"_blank\"}");

  const input2 = `{{Glossary("browser")}}`;
  const output2 = parseYariDynamicContent(input2);
  equal(output2, "[browser](https://developer.mozilla.org/en-US/docs/Glossary/Browser){:target=\"_blank\"}");

});

test('Parsing {{glossary("1", "2")}}', () => {
  const input = `{{glossary("attribute", "attributes")}}`;
  const output = parseYariDynamicContent(input);
  equal(output, "[attributes](https://developer.mozilla.org/en-US/docs/Glossary/Attribute){:target=\"_blank\"}");

  const input2 = `{{glossary("void element", "void elements")}}`;
  const output2 = parseYariDynamicContent(input2);
  equal(output2, "[void elements](https://developer.mozilla.org/en-US/docs/Glossary/Void_element){:target=\"_blank\"}");

  const input3 = `{{Glossary("tag", "tags")}}`;
  const output3 = parseYariDynamicContent(input3);
  equal(output3, "[tags](https://developer.mozilla.org/en-US/docs/Glossary/Tag){:target=\"_blank\"}");

});

test("Parsing <tag>{{Glossary()}}</tag>", ()=>{

  const input = `<tr><th scope="row">{{Glossary("String")}}</th></tr>`;
  const output = `<tr><th scope="row"><a href="https://developer.mozilla.org/en-US/docs/Glossary/String" target="_blank">String</a></th></tr>`;
  equal( output, replaceHTMLGlossaryLinks(input) );

});

test("Replacing MDN relative links with absolute URLs", () => {

  const input = `lorem ipsum [What will your website look like?](/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font) lorem ipsum`;
  const output = parseMDNLinks(input);
  equal(output, "lorem ipsum [What will your website look like?](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like#font){:target=\"_blank\"} lorem ipsum");
  
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

  const output1 = "[`<h1>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements){:target=\"_blank\"}"
  const output2 = "[`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body){:target=\"_blank\"}"
  const output3 = "[`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head){:target=\"_blank\"}"
  const output4 = "[`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p){:target=\"_blank\"}"
  const output5 = "[`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p){:target=\"_blank\"}"

  equal(parseElementTerm(input1), output1);
  equal(parseElementTerm(input2), output2);
  equal(parseElementTerm(input3), output3);
  equal(parseElementTerm(input4), output4);
  equal(parseElementTerm(input5), output5);

  const input6  = `lorem ipsum {{HTMLElement('i')}} lorem ipsum`
  const output6 = `lorem ipsum [\`<i>\`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i){:target=\"_blank\"} lorem ipsum`

  equal( parseElementTerm(input6), output6 );

})

test("Replacing {{cssxref}} with links", ()=>{

  const input = `lorem ipsum {{cssxref("width")}} lorem ipsum`;
  const output = "lorem ipsum [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/width){:target=\"_blank\"} lorem ipsum";
  equal(parseCSSTerm(input), output);

})

test("Replacing {{HTTPStatus}} with links", ()=>{

  const input = `lorem ipsum {{HTTPStatus("404", "404 Not Found")}} lorem ipsum`;
  const output = "lorem ipsum [404 Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404){:target=\"_blank\"} lorem ipsum";
  equal(parseHTTPStatus(input), output);

})

test("Replacing {{domxref}}", ()=>{

  const input1 = `lorem ipsum {{domxref("Document.querySelector", "querySelector()")}} lorem ipsum`;
  const output1 = `lorem ipsum [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector){:target=\"_blank\"} lorem ipsum`;
  equal( output1, replaceDOMXrefLinks(input1) );
  
  const input2 = `lorem ipsum {{domxref("Node.textContent", "textContent")}} lorem ipsum`; 
  const output2 = `lorem ipsum [textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent){:target=\"_blank\"} lorem ipsum`; 

  equal( output2, replaceDOMXrefLinks(input2) );

  const input3 = `lorem ipsum {{domxref("Element/click_event", "click")}} lorem ipsum`;
  const output3 = `lorem ipsum [click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event){:target=\"_blank\"} lorem ipsum`; 

  equal( output3, replaceDOMXrefLinks(input3) );

  const input4 = `lorem ipsum {{domxref("WebRTC API", "WebRTC")}} lorem ipsum`
  const output4 = `lorem ipsum [WebRTC](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API){:target=\"_blank\"} lorem ipsum`

  equal( output4, replaceDOMXrefLinks(input4) );

})

test("Replacing {{HTTPHeader}} with links", ()=>{

  const input = `lorem ipsum {{HTTPHeader("Content-Security-Policy")}} lorem ipsum`;
  const output = "lorem ipsum [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy){:target=\"_blank\"} lorem ipsum";
  equal(parseHTTPHeader(input), output);

})

test("Parse external links", () => {

  const input = "You can read more about the different types of gradients and things you can do with them on the MDN page for the [`<gradient>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient) data type. You can read more about the different types of gradients and things you can do with them on the MDN page for the [`<gradient>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient){:target=\"_blank\"} data type. A fun way to play with gradients is to use one of the many CSS Gradient Generators available on the web, such as [this one](https://cssgradient.io/). You can create a gradient then copy and paste out the source code that generates it."
  const output = "You can read more about the different types of gradients and things you can do with them on the MDN page for the [`<gradient>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient) data type. You can read more about the different types of gradients and things you can do with them on the MDN page for the [`<gradient>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient){:target=\"_blank\"} data type. A fun way to play with gradients is to use one of the many CSS Gradient Generators available on the web, such as [this one](https://cssgradient.io/){:target=\"_blank\"}. You can create a gradient then copy and paste out the source code that generates it."
  equal(parseExternalLinks(input), output);

  const input2 = "Lorem ipsum [`<gradient>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient) dolor amit."
  const output2 = "Lorem ipsum [`<gradient>`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient){:target=\"_blank\"} dolor amit."
  equal(parseExternalLinks(input2), output2);
})

// TODO: Test: parseEmbedGHLiveSample()
// Input:  {{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}
// Output:

// TODO: Test: parseEmbedYouTube()