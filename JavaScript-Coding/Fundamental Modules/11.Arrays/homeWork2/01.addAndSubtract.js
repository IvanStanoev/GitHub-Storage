function solve(arr) {

    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i <arr.length; i++) {
        let number = arr[i];
        oldSum += number;

        if (number % 2 == 0) {
            number += i;
        } else {
            number -= i;
        }

        newSum += number;
        arr[i] = number;
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}
solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);
