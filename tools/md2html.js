const fs                 = require("node:fs");
const { warn, ok, info } = require("./utils");
const showdown           = require('showdown');

const classMap = {
  h1: 'ui large header',
  h2: 'ui medium header',
  ul: 'ui list',
  li: 'ui item'
}

const bindings = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${classMap[key]}" $1>`
  }));

// const converter          = new showdown.Converter();
const converter = new showdown.Converter({
  // extensions: [...bindings]
});


if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

function init(){

  const fileName = process.argv[2];
  const htmlBoilerplate = (html)=> `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
        <title>Document</title>
      </head>
      <body>${html}</body>
  </html>
  `

  if ( !fileName ){
    warn("No filename.")
    process.exit();
  }

  try {
  
    console.log(`Processing ${fileName}`);
    
    const fileContents = fs.readFileSync(fileName, "utf-8");

    const html         = converter.makeHtml(fileContents);
    const output       = process.argv[3] ?? fileName.replace(/\.md$/, ".html");
    fs.writeFileSync( output, htmlBoilerplate(html), "utf8" );
  
  } catch(e){
  
    warn(e.message);
  
  }

}
