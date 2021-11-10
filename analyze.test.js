const analyze = require("./analyze");

test("analyze average of array", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).average).toBe(4);
});
test("analyze min of array", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).min).toBe(1);
});
test("analyze max of array", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).max).toBe(8);
});
test("analyze length of array", () => {
  expect(analyze([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("analyze whole function", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
