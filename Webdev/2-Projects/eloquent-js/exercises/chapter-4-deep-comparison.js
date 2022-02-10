const deepEqual = (lhs, rhs) => {
  if (typeof lhs === "object" && typeof rhs === "object" &&
    lhs !== null && rhs !== null) {

    if (Object.keys(lhs).length !== Object.keys(rhs).length)
      return false;

    for (let key of Object.keys(lhs)) {
      if (!deepEqual(lhs[key], rhs[key]))
        return false;
    }

    return true;
  }

  return lhs === rhs;
};

let object1 = {
  value: 1,
  peepee: "poopoo",
  mic: `test`,
};

let object2 = {
  value: 1,
  peepee: "poopoo",
  mic: `test`,
};

// console.log(Object.keys(object1));
//
// console.log(deepEqual(object1, object2));

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
console.log(deepEqual(obj, {here: {is: "an"}, object: 0}));
// → false
console.log(deepEqual(obj, {here: {is: "another"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {isnt: "an"}, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
// → false
