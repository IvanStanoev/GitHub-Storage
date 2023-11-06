function solveFirstNum(arr) {

    let first = Number(arr.shift());
    let last = Number(arr.pop());
    result = first + last;

    console.log(result);
}
solveFirstNum(['20', '30', '40']);