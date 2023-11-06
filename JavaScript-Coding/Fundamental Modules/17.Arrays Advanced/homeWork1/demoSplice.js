let arr = [10, 20, 30, 40, 50];

console.log(arr.splice(2, -1));
console.log("-----------");
console.log(arr.splice(2, 0));
console.log("-----------");
//console.log(arr.splice(2, 2));
console.log("-----------");
console.log(arr.splice(1, 30));
console.log("-----------");
console.log(arr);

console.log("-----000--");

let nums = [5, 10, 15, 20, 25, 30];
let mid = nums.splice(2,3); // start, delete-count;

console.log(mid.join('|')); // 15|20|25
console.log(nums.join('|'));// 5|10|30

console.log("-----------");
nums.splice(3,2, "twenty", "twenty-five");
console.log(nums.join('|'));// 5|10|15|twenty|twenty-five|30