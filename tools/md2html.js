const fs                 = require("node:fs");
const { warn, ok, info } = require("./utils");
const showdown           = require('showdown');
const marked             = require("marked");
const matter             = require('gray-matter');

/* Running showdown with extensions: */
// const classMap = {
//   h1: 'ui large header',
//   h2: 'ui medium header',
//   ul: 'ui list',
//   li: 'ui item'
// }
// const bindings = Object.keys(classMap)
//   .map(key => ({
//     type: 'output',
//     regex: new RegExp(`<${key}(.*)>`, 'g'),
//     replace: `<${key} class="${classMap[key]}" $1>`
//   }));
const converter          = new showdown.Converter();
// const converter = new showdown.Converter({ extensions: [...bindings] });


if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

function init(){

  const fileName = process.argv[2];
  const htmlBoilerplate = ({ html, title })=> `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
        <title>${title}</title>
        <style>
        iframe.EmbedGHLiveSample {
          border: 1px solid lightgray;
          box-shadow: 0px 16px 16px rgba(0,0,0,0.2);
        }
        </style>
      </head>
      <body>${html}</body>
  </html>
  `

  if ( !fileName ){
    warn("No input filename. Run with: node md2html.js README.md");
    process.exit();
  }

  try {
  
    info(`Processing ${fileName}`);
    
    const fileContents = fs.readFileSync(fileName, "utf-8");
    const { content, data: fm } = matter( fileContents );
    let title = fm.title;

    // marked.use({ gfm: true });
    // const html = marked.parse(content);
    const tokens = marked.lexer(content);

    if ( !title ){
      tokens.some( token =>{
        if ( token.type === "heading" && token.depth === 1 ){
          title = token.text;
          return true;
        }
      })
    }

    const html         = converter.makeHtml(content);
    const output       = process.argv[3] ?? fileName.replace(/\.md$/, ".html");
    fs.writeFileSync( output, htmlBoilerplate({
      html,
      title
    }), "utf8" );
  
  } catch(e){
  
    warn(e.message);
  
  }

}
