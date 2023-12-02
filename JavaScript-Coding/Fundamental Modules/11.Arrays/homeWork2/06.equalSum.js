function solve(arr) {

    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < arr.length; i++) {


        // Calculating the sum of elements on the left of the current index
        for (let j = 0; j < i; j++) {
            leftSum += arr[j];
        }

        // Calculating the sum of elements on the right of the current index
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

    }
    
    // Checking if the sums are equal
    if (leftSum === rightSum) {
        console.log(i);
    } else {
        console.log("no");  
    }
    

}
solve([1, 2, 3, 3]);
solve([1, 2]);
//solve([1]);
//solve([1, 2, 3]);
//solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);