function iterateTwoIndices(i, j) {
  console.log(`i = ${i}\nj = ${j}`);
}
["A", "B"].forEach(iterateTwoIndices);

let objTest = {
  one: `two`,
  three: 4,
  five: true,
};

// objTest.forEach(iterateTwoIndices);

let arr = [1, 2, 3, 4];
let reducedArray = arr.reduce((a, b) => {
  console.log(`a = ${a} b = ${b}`);
  return a + b;
});

console.log(reducedArray);
