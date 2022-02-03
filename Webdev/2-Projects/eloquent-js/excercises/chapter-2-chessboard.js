/*
    Write a program that creates a string that represents an 8×8 grid, using newline
    characters to separate lines. At each position of the grid there is either a space
    or a "#" character. The characters should form a chessboard.
*/

// const size = 8;

const height = 10;
const width = 8;

for (let i = 1; i <= height; i++) {
    let lineOutput = "";
    for (let j = 1; j <= width; j++) {
        if ((i + j) % 2 === 0) {
            lineOutput += " ";
        }
        else {
            lineOutput += "#";
        }
    }
    console.log(lineOutput);
}
