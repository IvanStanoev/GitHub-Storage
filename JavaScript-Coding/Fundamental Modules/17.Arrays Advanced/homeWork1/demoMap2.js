let arr = [10, 20, 30, 40, 50];
console.log(arr.map(x => x + 1));



console.log(map(arr, x => x + 1));

function map(inputArr, func) {
    let result = [];
    
    for (let item of inputArr) {
        let newItem = func(item);
        result.push(newItem);
    }
    
    console.log(result);
    return result;
}