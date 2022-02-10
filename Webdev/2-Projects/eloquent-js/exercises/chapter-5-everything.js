function everythingLoop(array, func) {
  for (let val of array) {
    if (!func(val))
      return false;
  }
  return true;
}

function everythingSome(array, func) {
  return !array.some(n => !func(n));
}

// const comparison = val => val >= 0;
const comparison = val => {
  console.log(val);
  return val >= 0;
}

let arr = [1, 2, 3, 4, 5];

// let everythingVal = everythingLoop(arr, comparison);
let everythingVal = everythingSome(arr, comparison);

console.log(everythingVal);
