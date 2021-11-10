const capitalize = require('./capitalize');

test('capitalizes simple words', () => {
  expect(capitalize("harun")).toBe("Harun");
});