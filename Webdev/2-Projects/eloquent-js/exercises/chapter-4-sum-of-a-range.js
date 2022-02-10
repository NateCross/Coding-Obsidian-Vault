/*
  Write a range function that takes two arguments, start and end, and returns
  an array containing all the numbers from start up to (and including) end.
  Next, write a sum function that takes an array of numbers and returns the
  sum of these numbers. Run the example program and see whether it does
  indeed return 55.
*/

const range = (start, end, step = 1) => {
  const finalRange = [];
  if (step > 0) {
    for (; start <= end; start += step)
      finalRange.push(start);
  } else if (step < 0) {
    for (; start >= end; start += step) {
      finalRange.push(start);
    }
  }

  return finalRange;
};

const sum = numArray => {
  let finalSum = 0;
  for (let num of numArray)
    finalSum += num;

  return finalSum;
};

console.log(range(1, 10, 2));
console.log(sum(range(1, 10)));

// Negative step
console.log(range(5, 2, -1));
