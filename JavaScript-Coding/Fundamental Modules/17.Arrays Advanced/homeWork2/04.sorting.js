function solveSorting(arr) {

    let sortedNums = arr.sort((a, b) => a - b);
    let finalArr = [];

    while (sortedNums.length > 0) {
        let maxNum = sortedNums.pop();
        let minNum = sortedNums.shift();

        finalArr.push(maxNum);
        finalArr.push(minNum);
    }

    console.log(finalArr.join(' '));

}
solveSorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);