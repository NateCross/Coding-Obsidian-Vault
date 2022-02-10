function flattenArray(array) {
  return array.reduce(concatMethod);
}

function concatMethod(prev, current) {
  if (!Array.isArray(prev))
    prev = [prev];
  if (!Array.isArray(current))
    current = [current];

  return prev.concat(current);
}

let testArr = [1, 2, [3, 4, 5,], 6, [7, 8, 9]];

let finalArr = flattenArray(testArr);

console.log(finalArr);
