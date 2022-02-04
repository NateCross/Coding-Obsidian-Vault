/*
  Define a recursive function isEven corresponding to this description. The
  function should accept a single parameter (a positive, whole number) and return
  a Boolean.
  Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
  way to fix this?
*/

const isEvenRecursive = num => {
  if (num == 0)
    return true;
  else if (num == 1)
    return false;
  else {
    return num >= 0 ?
      isEvenRecursive(num - 2) : isEvenRecursive(num + 2);
  }
}

console.log(isEvenRecursive(50));
console.log(isEvenRecursive(75));
console.log(isEvenRecursive(-1));

console.log(1 + 2);
