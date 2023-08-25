const CIRCLE_RADIUS = 15;
const HORIZ_MARGIN = CIRCLE_RADIUS / 2;
const VERT_MARGIN = CIRCLE_RADIUS / 2;
const COL_WIDTH = CIRCLE_RADIUS * 2 + HORIZ_MARGIN * 2;
const ROW_HEIGHT = CIRCLE_RADIUS * 2 + VERT_MARGIN * 2;
const LINE_ARC_RADIUS = VERT_MARGIN/2;
const AMBER = "#FFB000";

let dragging = false;
let lastMouseX;
let lastMouseY;
canvas.onmousedown = e => {
  dragging = true;
  lastMouseX = e.x;
  lastMouseY = e.y;
}
canvas.onmouseup = () => { dragging = false; }
canvas.onmousemove = e => {
  if (!dragging) return;
  mx += e.x - lastMouseX;
  my += e.y - lastMouseY;
  lastMouseX = e.x;
  lastMouseY = e.y;
  Module._draw();
}

function centerX(x) { return x * COL_WIDTH + CIRCLE_RADIUS + HORIZ_MARGIN; }
function centerY(y) { return y * ROW_HEIGHT + CIRCLE_RADIUS + VERT_MARGIN; }

function init() {
  try {
    Module._init();
    Module._draw();
  } catch (e) {
    throw UTF8ToString(e);
  }
}

function commit() {
  try {
    Module._commit();
    Module._draw();
  } catch (e) {
    throw UTF8ToString(e);
  }
}

function branch() {
  try {
    Module._branch();
    Module._draw();
  } catch (e) {
    throw UTF8ToString(e);
  }
}

function merge(from) {
  if (from[0] === 'c') {
    throw "Can only merge branches";
  } else if (from[0] !== 'b') {
    throw "Specify a branch to merge";
  } else {

    try {
      Module._merge(parseInt(from.substr(1), 10));
    } catch (e) {
      throw UTF8ToString(e);
    }

  }
  Module._draw();
}

function checkout(branch) {
  try {
    if (branch[0] === 'b') {
      Module._checkout_branch(parseInt(branch.substr(1), 10));
    } else if (branch[0] == 'c') {
      Module._checkout_commit(parseInt(branch.substr(1), 10));
    } else {
      throw "Specify a branch or commit to check out";
    }
    Module._draw();
  } catch (e) {
    throw UTF8ToString(e);
  }
}
