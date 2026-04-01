// INSTALLATION: npm i fuse.js
const fs = require("node:fs"); // Built-in Node (no npm i required)
const Fuse = require('fuse.js') // type="commonjs"

// import Fuse from 'fuse.js' // type="module"

// Command line arguments:
// console.log(process.argv[0]);
// console.log(process.argv[1]);
// console.log(process.argv[2]);

const query = process.argv.slice(2).join(" ")
// console.log(query);

// Quickstart:
// const list = [
//   // 0
//   {
//     "title": "Old Man's War",
//     "author": "John Scalzi",
//     "tags": ["fiction"]
//   },
//   // 1
//   {
//     "title": "The Lock Artist",
//     "author": "Steve",
//     "tags": ["thriller"]
//   }
// ]

const text = fs.readFileSync("./data.json", "utf-8");
// console.log(text); // <- JSON String

const list = JSON.parse(text);
const options = {
  threshold: 0.5,
  includeScore: true,
  // Search in `author` and in `tags` array
  // keys: ['author', 'tags']
  // keys: ['title', 'tags', 'content']
  keys: [
    { name: 'title', weight: 0.9 }, 
    { name: 'tags', weight: 0.05 }, 
    { name: 'description', weight: 0.05 }
  ]
}
const fuse = new Fuse(list, options)
const results = fuse.search(query)

// Display first result:
// console.log("Score:", Math.floor(results[0].score * 100) + "%");
// console.log("Answer: ", results[0].item.content);
for ( const result of results ){
  // CHALLENGE: Sort results by score: ASC/DESC
  console.log("Score:", Math.floor(result.score * 100) + "%");
  console.log("Answer: ", result.item.content);
}
if ( results.length === 0 ){
  console.log("No results found");
}