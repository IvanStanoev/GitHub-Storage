function solve (n, nums) {

    //create new array
    let result = [];

    //copy array to new array
    for (let i = 0; i < n; i++) {
        //result[result.length] = nums[i];
        result[i] = nums[i];
    }
    //result[0] = nums[0];
    //result[1] = nums[1];
    //result[2] = nums[2];

    //reverse
    let reversed = [];
    for (let i = n; i >= 0; i--) {
        reversed[reversed.length] = result[i];
    }
    //print in single line
    console.log(reversed.join(" "));
}
solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);