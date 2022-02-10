function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
console.log(greaterThan10.toString());

let objTest = {
  one: "two",
};

objTest.three = 4;

let arrayTest = [1, 3, "test", 5];

let filtered = arrayTest.filter(n => typeof n === "number");

console.log(objTest);
console.log(arrayTest);
console.log(filtered);
// → true
