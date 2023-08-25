function wasm(...files) {
  function normalize(exp) {
    for (let e in exp) {
      if (e.startsWith('_')) {
        exp[e.substr(1)] = exp[e];
      }
    }
    return exp;
  }

  function loadOne(file) {
    let fetched;
    if (file.path) {
      fetched = fetch(file.path, file.fetchOpts);
    } else {
      fetched = fetch(file);
    }
    if (file.imports) {
      // prefix all function imports with `_` so we 
      for (let mod in file.imports) {
        for (let i in file.imports[mod]) {
          if (typeof file.imports[mod][i] !== 'function') continue;
          file.imports[mod]['_' + i] = file.imports[mod][i];
        }
      }
    }
    return fetched.then(r =>
      r.arrayBuffer()
    ).then(bytes =>
      WebAssembly.instantiate(bytes, file.imports)
    ).then(r => r.instance.exports);
  }

  return Promise.all(files.map(loadOne)).then(fs =>
    normalize(Object.assign({}, ...fs))
  );
}

WebAssembly.Memory.prototype.cstr = function(start, encoding = 'utf-8') {
  let uint8s = new Uint8Array(this.buffer);
  let end = start;
  while (uint8s[end] != 0) {
    if (end >= uint8s.length) {
      throw new RangeError("String starting at " + start + " has no end");
    }
    ++end;
  }
  return this.str(start, end - start);
}
WebAssembly.Memory.prototype.str = function(start, length, encoding = 'utf-8') {
  return new TextDecoder(encoding).decode(new Uint8Array(this.buffer, start, length));
}

wasm.malloc = function(pages, maxPages) {
  return new WebAssembly.Memory({ initial: pages, maximum: maxPages });
}

console.log("WASMload v0.0.1 loaded");