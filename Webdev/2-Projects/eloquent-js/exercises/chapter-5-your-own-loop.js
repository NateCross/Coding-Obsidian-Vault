function customFor(value, testFunc, updateFunc, bodyFunc) {
  let final = null;
  while(testFunc(value)) {
    final = bodyFunc(value, final);
    value = updateFunc(value);
  }
  return final;
}

const testFunction = value => value <= 10;

const updateFunction = value => ++value;

const bodyFunction = (value, final) => value + final;

console.log(customFor(0, testFunction, updateFunction, bodyFunction));
