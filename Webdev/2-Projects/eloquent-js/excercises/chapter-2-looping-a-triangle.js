/*
  Write a loop that makes seven calls to
  console.log to output the following triangle:
*/

// Basic solution
for (let i = 1; i <= 7; i++) {
    let triangle = "";
    for (let j = 1; j <= i; j++) {
        triangle += "#";
    }
    console.log(triangle);
}

console.log("---OTHER METHOD---");

// Using String.repeat()
const triangleString = "#";
for (let i = 1; i <= 7; i++) {
    console.log(triangleString.repeat(i));
}
