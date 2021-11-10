const reverseString = require("./reverseString");
describe("what the hell", () => {
  test("reverses simple words", () => {
    expect(reverseString("reverse")).toBe("esrever");
  });
});
