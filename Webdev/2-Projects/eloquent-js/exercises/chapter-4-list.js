/*
  Write a function arrayToList that builds up a list structure like the one
  shown when given [1, 2, 3] as argument. Also write a listToArray function
  that produces an array from a list. Then add a helper function prepend, which
  takes an element and a list and creates a new list that adds the element to the
  front of the input list, and nth, which takes a list and a number and returns
  the element at the given position in the list (with zero referring to the first
  element) or undefined when there is no such element.
  If you haven’t already, also write a recursive version of nth.
*/
let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

let node = {
  value: 0,
  rest: list,
};

let otherNode = {
  value: -1,
  rest: list,
};

const arrayToList = ([num1, num2, num3]) => {
  let list = {
    value: num1,
    rest: {
      value: num2,
      rest: {
        value: num3,
        rest: null,
      },
    },
  };
  return list;
};

const listToArray = list => {
  let array = [];
  while (list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

const prependToList = (list, input) => {
  let newList = {
    value: input,
    rest: list,
  };
  return newList;
}

// This function doesn't really work.
// Maybe we have to use classes for linked list stuff?
const prependToListInPlace = (list, input) => {
  // let newList = {
  //   value: input,
  //   rest: list,
  // };
  // list = newList;
  let newlist = list;
  list.value = input;
  list.rest = newlist;
}

const printList = list => {
  while (list) {
    console.log(list.value);
    list = list.rest;
  }
}

const nth = (list, index) => {
  for (; index; index--) {
    list = list.rest;
  }

  return list;
}

const nthRecursive = (list, index) => {
  if (index === 0)
    return list;
  return nthRecursive(list.rest, --index);
}

let sampleList = arrayToList([420, 69, 100]);

let sampleArray = listToArray(sampleList);

console.log(sampleList.value);

console.log(sampleArray);



console.log("\nPrepending to list...");
sampleList = prependToList(sampleList, 2);

console.log("Printing full list");
printList(sampleList);

console.log(`3rd element: ${nthRecursive(sampleList, 3).value}`);

console.log("Printing full list");
printList(sampleList);
