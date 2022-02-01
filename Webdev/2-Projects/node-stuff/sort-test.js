function sortNumericArray(numArray)  {
    const sortedArray = numArray.sort(
        function(a, b) { return a - b }
    );
    return sortedArray;
}


const points = [40, 100, 1, 5, 25, 10];

var sorted = sortNumericArray(points);

console.log(sorted);
