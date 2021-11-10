const calculator = require("./calculator");

test("add working correctly", () =>{
  expect(calculator.add(1, 2)).toBe(3)
});

test("subtract working correctly", () =>{
  expect(calculator.minus(3, 2)).toBe(1)
});

test("multiply working correctly", () =>{
  expect(calculator.multiply(2, 2)).toBe(4)
});

test("can do simple dividing", () =>{
  expect(calculator.divide(1, 2)).toBe(0.5)
});