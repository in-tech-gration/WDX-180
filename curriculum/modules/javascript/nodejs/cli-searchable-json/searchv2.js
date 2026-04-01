import fs from 'node:fs'; // <= type="module"
// npm install @xenova/transformers
import { pipeline } from '@xenova/transformers'; // <= type="module"
// const fs = require('node:fs'); // <= type="commonjs"
// const { pipeline } = require('@xenova/transformers'); // <= type="commonjs"

// load your data
const data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

// load a small embedding model
const embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
const texts = data.map(d => d.title);

// Black Box Magic
// encode all at startup
const vectors = await Promise.all(texts.map(t => embedder(t)));

// search term
const query = process.argv.slice(2).join(" ");
function cosine(a, b) {
  // console.log({ a, b });
  const dot = a.reduce((s, v, i) => s + v * b[i], 0);
  const magA = Math.sqrt(a.reduce((s, v) => s + v * v, 0));
  const magB = Math.sqrt(b.reduce((s, v) => s + v * v, 0));
  return dot / (magA * magB);
}
async function search(query) {
  const qVec = (await embedder(query))[0];
  return data
    .map((d, i) => {
      return ({ item: d, score: cosine(qVec.data, vectors[i][0].data) });
    })
    .sort((a, b) => b.score - a.score);
}

// usage
// console.log((await search(query)));
// const results = (await search(query));
const results = (await search(query)).filter(s => s.score > 0.51);
for ( const result of results ){
  // console.log(result);
  console.log(result.item.title);
  // console.log(result.item.content);
  console.log(result.score);
}

// [submi]t -> [submi]ssion
// [program] -> [program]ming

// Vector: semantic/meaning
// coding -> programming