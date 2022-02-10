const reverseArray = arr => {
  let reversedArray = [];

  while(arr.length)
    reversedArray.push(arr.pop());

  return reversedArray;
};

// This is an inefficient O(n^2) solution
const reverseArrayInPlace = arr => {
  let tempArray = [];
 
  while(arr.length)
    tempArray.push(arr.pop());

  while(tempArray.length)
    arr.push(tempArray.shift());
};

// This solution is a simple O(n)
const reverseArrayInPlaceFast = arr => {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

var numbers = [1, 2, 3, 4];

var output = reverseArray(numbers);

console.log(output);

var numbersAgain = [2, 3, 4, 5, 6];
reverseArrayInPlaceFast(numbersAgain);
console.log(numbersAgain);


