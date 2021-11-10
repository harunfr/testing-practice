function analyze(numbers) {
  const average = numbers.reduce((total, current)=>{
    return total + current;
  }) / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const length = numbers.length;
  return {
    average, min, max, length
  }
}
module.exports = analyze;

/**
 *
const object = analyze([1,8,3,4,2,6]);

object == {
  average: 4,
  min: 1,
  max: 8,
  length: 6
};

 */