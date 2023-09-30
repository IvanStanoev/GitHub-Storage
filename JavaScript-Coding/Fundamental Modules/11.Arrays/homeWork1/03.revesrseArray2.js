function solve (n, nums) {

    //create new array
    //reverse
    let reversed = [];
    for (let i = n; i >= 0; i--) {
        reversed.push(nums[i]);
    }

    //print in single line
    console.log(reversed.join(" "));
}
solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);