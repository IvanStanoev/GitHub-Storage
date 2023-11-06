let arr = [10, 20, 30, 40, 50, 60, 70, 80];

console.log(arr.filter(x => x % 20 == 0));



console.log(filter(arr, x => x % 20 != 0));
function filter(inputArr, predicate) {
    let result = [];

    for (let item of inputArr) {
        if (predicate(item)) {
            result.push(item);
        }
    }

    return result;
}

// same as uper example
// 2 times faster runtime
console.log(filter(arr, x => x % 20 != 0));
function filter(inputArr, predicate) {
    let result = [];

    for (let x of inputArr) {
        if (x % 20 != 0) {
            result.push(x);
        }
    }

    return result;
}