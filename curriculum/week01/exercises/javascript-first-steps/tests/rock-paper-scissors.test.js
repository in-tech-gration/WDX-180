const test = require("node:test");
const assert = require("assert");

const solutionPath = "user/week01/exercises/day05/javascript-first-steps/rock-paper-scissors";
global.prompt = () => {};
global.alert = () => {};

try {

  require("../../../../../" + solutionPath);

} catch (e) {
  console.log(e);
  throw new Error(`
    Could not find exercise solution at the user/ folder. Please check if you have used the correct folder path (${solutionPath}) and commit message
  `);
  
}

test("should generate rock or paper or scissors", () => {
  const drawn = new Set();
  for (let i = 0; i < 100; i++) {
    const randomMove = getRandomMove();
    drawn.add(randomMove);
    const oneOfTheThreeMoves =
      randomMove === "rock" ||
      randomMove === "paper" ||
      randomMove === "scissors";
    if (!oneOfTheThreeMoves) {
      throw new Error(
        "Ops! Expected rock, paper or scissors, instead got " + randomMove
      );
    }
  }

  if (!drawn.has("rock") || !drawn.has("paper") || !drawn.has("scissors")) {
    throw new Error("Ops! Did not find all three moves in the results!");
  }

  const correctSet = new Set(["rock", "paper", "scissors"]);
  assert.deepStrictEqual(drawn, correctSet);
});

test("check move results", () => {
  
  const gameResult1 = checkMove("rock", "rock");
  const gameResult2 = checkMove("rock", "paper");
  const gameResult3 = checkMove("rock", "scissors");
  const gameResult4 = checkMove("paper", "paper");
  const gameResult5 = checkMove("paper", "scissors");
  const gameResult6 = checkMove("paper", "rock");
  const gameResult7 = checkMove("scissors", "scissors");
  const gameResult8 = checkMove("scissors", "rock");
  const gameResult9 = checkMove("scissors", "paper");
  const gameResult10 = checkMove("pencil", "rock");

  assert.equal(gameResult1, "draw");
  assert.equal(gameResult2, "lost");
  assert.equal(gameResult3, "won");  
  assert.equal(gameResult4, "draw");
  assert.equal(gameResult5, "lost");
  assert.equal(gameResult6, "won");
  assert.equal(gameResult7, "draw");
  assert.equal(gameResult8, "lost");
  assert.equal(gameResult9, "won");
  assert.equal(gameResult10, "invalid move");
});