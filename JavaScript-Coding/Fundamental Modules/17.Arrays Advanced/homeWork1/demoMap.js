let myArr = ["one", "two", "three", "four"];
let length = myArr.map(x => x.length);
console.log(length);  // [3, 3, 5, 4];


let numsAsString = ["5", "3", "14", "-2", "8"];
let nums = numsAsString.map(Number);
console.log(nums); // [5, 3, 14, -2, 8];

let incr = nums.map(x => x + 1);
console.log(incr); // [6, 4, 15, -1, 9];

let arr = [10, 20, 30, 40, 50];
console.log(arr.map(x => x *2));  // * 2;