matchingStrings = (strings, queries) => {
    var results = [];
    var resultCounter = 0;
    for (let query in queries) {
        resultCounter = 0;
        for (let string in strings) {
            if (strings[string] === queries[query])
                ++resultCounter;
        }
        results.push(resultCounter);
    }
    return results;
}

const strings = ['ab', 'ab', 'abc'];
const queries = ['ab', 'abc', 'bc'];

var results = matchingStrings(strings, queries);

console.log(results);
