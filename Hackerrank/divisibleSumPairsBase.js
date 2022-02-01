// n = array size
// k = stuff
function divisibleSumPairs(n, k, ar) {
    var pairs = 0;
    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            if ((ar[i] + ar[j]) % k == 0)
                ++pairs;
        }
    }
    return pairs;
}

const ar = [1, 2, 3, 4, 5, 6]
const k = 5
const arLength = ar.length;
console.log("arLen = " + arLength);
var numberOfPairs = divisibleSumPairs(arLength, k, ar);
console.log("pairs = ", numberOfPairs);
