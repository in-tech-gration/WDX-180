#!/bin/bash
# We need Bash specifically so that emsdk_env.sh works, but once
# https://github.com/emscripten-core/emsdk/issues/219 is closed that won't be
# true anymore!

if [ "$(head -n 1 README.md)" != "# git-gud" ]; then
  echo "ERROR! Run build script from the git-gud project root!"
fi

refresh_emcc() {
  echo "Adding emcc to PATH"
  if [ -f ./emsdk/emsdk_env.sh ]; then
    . ./emsdk/emsdk_env.sh >/dev/null 2>&1
  else
    return 1
  fi
}

install_emcc() {
  refresh_emcc && return 0
  echo "Failed to reload emsdk, so we need to reinstall"
  echo "Downloading..."
  git clone https://github.com/emscripten-core/emsdk.git >/dev/null 2>&1
  cd emsdk
  echo "Installing [1/3]..."
  git pull >/dev/null 2>&1
  echo "Installing [2/3]... (may take a while)"
  ./emsdk install latest >/dev/null 2>&1
  echo "Installing [3/3]..."
  ./emsdk activate latest >/dev/null 2>&1
  cd ..
  refresh_emcc
}

refresh_wabt() {
  echo "Adding wasm2wat to PATH"
  if [ -d ./wabt ]; then
    export PATH="$(pwd)/wabt/build:$PATH"
    return 0
  else
    return 1
  fi
}

install_wabt() {
  refresh_wabt && return 0
  cmake --version || (echo "You need CMake to install wabt! Talk to Nic." && exit 1)
  echo "Failed to reload wabt, so we need to reinstall"
  echo "Downloading..."
  git clone --recursive https://github.com/WebAssembly/wabt >/dev/null 2>&1
  cd wabt
  mkdir build
  cd build
  echo "Building [1/2]..."
  cmake .. >/dev/null 2>&1
  echo "Building [2/2]... (may take a while)"
  make wasm2wat >/dev/null 2>&1
  cd ..
  refresh_wabt
}

clean() {
  echo "Cleaning out to just sources"
  echo "Deleting compiled things..."
  rm -r docs/
  echo "Deleting emcc..."
  rm -rf emsdk/
  rm -rf ~/.emscripten*
  echo "Deleting wabt..."
  rm -rf wabt/
}

build() {
  echo Copying non-compiled resources to docs/
  mkdir -p docs
  cp src/* docs/
  # but not you, lib.js. You're just to get Emscripten not to warn.
  rm docs/lib.js
  # and not the C++ sources, since they're just compiled into the .wasm file
  rm docs/*.[ch]pp

  # Install EMSDK if necessary
  emcc --version >/dev/null 2>&1 || install_emcc

  echo Compiling src/*.cpp to docs/git-gud.wasm
  emcc src/*.cpp -O3 -o docs/git-gud.js -std=c++11 -s DISABLE_EXCEPTION_CATCHING=0 -s WASM=1 --js-library src/lib.js --pre-js src/lib-pre.js >/dev/null

  # Install WABT if necessary
  wasm2wat --help >/dev/null 2>&1 || install_wabt

  echo Generating WASM text representation
  wasm2wat docs/git-gud.wasm >docs/git-gud.wat

  echo "Compilation done!"
}

if [ -z "$1" ]; then
  echo "Normal rebuild"
  build
elif [ "$1" = "reset" ]; then
  echo "Resetting to just sources without rebuild"
  clean
  echo "Reset complete. Rebuild with $0"
elif [ "$1" = "full" ]; then
  echo "Resetting to just sources and rebuilding"
  clean
  build
fi
