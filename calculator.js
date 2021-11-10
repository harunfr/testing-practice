const calculator = (() => {
  const add = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;
  return { add, minus, divide, multiply };
})();

module.exports = calculator;