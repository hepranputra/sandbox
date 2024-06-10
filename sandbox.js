console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

function every(array, test) {
    // Solution 1
    for (let e of array) {
        if (!test(e)) {
            return false;
        }
    }
    return true;
    
    // Solution 2
    // return !array.some(current => !test(current));
}
