// test.js

const { generateLogo } = require("../index");

test("generates a logo", () => {
  const svg = generateLogo("red", "circle", "Test");
  expect(svg).toBeDefined();
});
