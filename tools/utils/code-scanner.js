#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const counts = { var: 0, let: 0, const: 0 };

const EXT_JS = ['.js'];
const EXT_ALL = ['.js', '.ts', '.jsx', '.tsx'];

function walkFilePath(filePath, extensions) {

  const isDir = fs.lstatSync(filePath).isDirectory();

  if (!isDir && extensions.includes(path.extname(filePath))) {
    return countInFile(filePath);
  }

  if ( path.basename(filePath) === "node_modules" ){
    return;
  }

  fs.readdirSync(filePath).forEach((file) => {
    const _filepath = path.join(filePath, file);
    const stat = fs.statSync(_filepath);
    if (stat.isDirectory()) {
      walkFilePath(_filepath, extensions);
    } else if (stat.isFile() && extensions.includes(path.extname(_filepath))) {
      countInFile(_filepath);
    }
  });
}

function countInFile(filepath) {
  const code = fs.readFileSync(filepath, 'utf8');
  let ast;
  try {
    ast = parser.parse(code, {
      sourceType: 'unambiguous',
      plugins: ['typescript', 'jsx']
    });
  } catch (err) {
    // console.warn(`⚠️  Skipping invalid file: ${filepath}`);
    return;
  }

  traverse(ast, {
    VariableDeclaration(path) {
      const kind = path.node.kind;
      if (counts[kind] !== undefined) {
        counts[kind] += path.node.declarations.length;
      }
    }
  });
}

const args = process.argv.slice(2);
const filePath = args[0] && !args[0].startsWith('-') ? args[0] : args[1] && !args[1].startsWith('-') ? args[1] : process.cwd();
const includeAll = args.includes('--all') || args.includes('-a');
const extensions = includeAll ? EXT_ALL : EXT_JS;

walkFilePath(filePath, extensions);

const total = counts.const + counts.let + counts.var;

console.log(`\n📊 Variable Declaration Stats in: ${filePath}`);
console.log(`(Extensions: ${extensions.join(', ')})`);
console.log('-----------------------------------');
console.log(`var   → ${counts.var} (~${((counts.var/total*100).toFixed(2))}%)`);
console.log(`let   → ${counts.let} (~${((counts.let/total*100).toFixed(2))}%)`);
console.log(`const → ${counts.const} (~${((counts.const/total*100).toFixed(2))}%)`);
console.log('-----------------------------------\n');
